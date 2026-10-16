'use client';
import Link from 'next/link';
import { Share2 } from 'lucide-react';
import Reveal from './ui/Reveal';
import config from '@/lib/data';
import { invitationUrl, whatsappShareUrl } from '@/lib/utils';

// Penutup editorial: monokrom, garis tipis, tipografi besar.
export default function Footer() {
  const { footer, couple } = config;

  const share = () => {
    const text = `Undangan Tunangan ${couple.groom.name} & ${couple.bride.name}`;
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title: text, url: invitationUrl() }).catch(() => {});
    } else {
      window.open(whatsappShareUrl(text), '_blank', 'noopener');
    }
  };

  return (
    <footer className="bg-ink px-6 py-24 text-center text-cream">
      <Reveal className="mx-auto max-w-xl">
        <p className="text-sm leading-relaxed text-cream/70">{footer.closing}</p>
        <h2 className="mt-10 font-display text-5xl font-medium md:text-6xl">
          {couple.groom.name} &amp; {couple.bride.name}
        </h2>
        <p className="mt-3 text-xs uppercase tracking-[0.35em] text-rose">{footer.hashtag}</p>

        <button
          onClick={share}
          className="mt-10 inline-flex min-h-11 items-center gap-2 border-b border-cream/40 text-xs uppercase tracking-widest text-cream transition hover:opacity-60"
        >
          <Share2 size={14} aria-hidden="true" /> Bagikan
        </button>

        {config.music.enabled && (
          <p className="mt-12 text-xs text-cream/70">
            Musik: {config.music.title} · {config.music.credit}
          </p>
        )}
        <p className="mt-3 text-xs text-cream/70">
          <Link href="/kirim" className="inline-block py-2 underline underline-offset-4 hover:text-cream">Kirim undangan ke tamu</Link>
        </p>
      </Reveal>
    </footer>
  );
}
