'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import config from '@/lib/data';
import { useGuestName } from '@/lib/hooks';
import { tanggalWIB } from '@/lib/utils';
import SakelarMusik from './SakelarMusik';

// Sampul gaya majalah editorial: masthead, nama sebagai judul sampul, foto potret, dan
// baris tanggal. Di ponsel foto tampil utuh berbingkai (3:4), tidak diperas jadi strip.
export default function Cover({ keluar, onOpen, onSelesai, musik, onMusik }) {
  const guest = useGuestName();
  const { couple, opening, events } = config;
  const acara = events[0];
  const tanggal = tanggalWIB(acara.start, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <section
      data-sampul
      aria-label="Sampul undangan"
      className={`fixed inset-0 z-50 overflow-y-auto bg-cream p-3 sm:p-5 ${keluar ? 'sampul-keluar' : ''}`}
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget && e.animationName === 'sampul-keluar') onSelesai();
      }}
    >
      <div className="relative flex min-h-full flex-col border border-rose-deep/30 bg-cream">
        {/* Masthead */}
        <header className="flex items-center justify-between gap-3 border-b border-rose-deep/20 py-2 pl-5 pr-2 sm:pr-3">
          <div className="flex flex-col gap-0.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
            <span>Issue No. 1</span>
            <span>{opening.greeting}</span>
          </div>
          <SakelarMusik
            nyala={musik}
            onUbah={onMusik}
            className="px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-rose-deep hover:bg-blush/60"
          />
        </header>

        {/* Isi: nama + baris tanggal, lalu foto */}
        <div className="relative flex flex-grow flex-col justify-center gap-7 px-5 py-8 sm:flex-row sm:items-stretch sm:gap-0 sm:p-0">
          <div className="z-20 flex flex-col justify-center sm:w-[56%] sm:px-8 sm:py-10">
            <h1 className="masuk-skala font-display uppercase leading-[0.9] tracking-tight text-ink">
              <span className="block break-words text-[3.4rem] sm:text-6xl lg:text-8xl">{couple.groom.name}</span>
              <span className="my-1 block font-script text-4xl normal-case text-rose-deep lg:text-5xl">&amp;</span>
              <span className="block break-words text-[3.4rem] sm:text-6xl lg:text-8xl">{couple.bride.name}</span>
            </h1>
            <p className="masuk mt-6 border-l-2 border-rose-deep/40 pl-3 text-xs leading-relaxed text-muted" style={{ '--tunda': '0.25s' }}>
              <span className="block font-semibold uppercase tracking-[0.18em] text-ink">{tanggal}</span>
              <span className="block italic">{acara.address}</span>
            </p>
          </div>

          <div className="masuk-skala relative ml-auto w-[64%] max-w-[260px] sm:ml-0 sm:w-[44%] sm:max-w-none sm:border-l sm:border-rose-deep/20">
            <span className="absolute -left-2.5 -top-2.5 h-full w-full border border-rose-deep/30 sm:hidden" aria-hidden="true" />
            <div className="relative aspect-[3/4] overflow-hidden sm:absolute sm:inset-0 sm:aspect-auto">
              <Image src={config.heroImage} alt="" fill priority fetchPriority="high" sizes="(max-width: 640px) 64vw, 44vw" className="object-cover" />
            </div>
          </div>
        </div>

        {/* Kaki: alamat tamu + tombol buka */}
        <footer className="masuk flex flex-wrap items-end justify-between gap-4 border-t border-rose-deep/20 p-5" style={{ '--tunda': '0.35s' }}>
          <div className="min-w-0 max-w-[60%]">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Kepada</p>
            <p className="mt-1 break-words font-display text-lg text-ink">{guest}</p>
          </div>
          <button
            type="button"
            onClick={onOpen}
            disabled={keluar}
            className="group inline-flex min-h-11 items-center gap-3 bg-ink px-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-rose-deep"
          >
            Buka Undangan
            <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </footer>
      </div>
    </section>
  );
}
