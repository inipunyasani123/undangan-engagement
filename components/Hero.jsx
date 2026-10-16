'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import config from '@/lib/data';
import { bagianWIB } from '@/lib/utils';

// Hero editorial: split-screen — foto di kiri, teks di kanan (stack di mobile).
export default function Hero() {
  const { couple, mainDate } = config;
  const d = bagianWIB(mainDate);
  const day = d.hari;
  const dateNum = `${String(d.tgl).padStart(2, '0')} . ${String(d.bulan).padStart(2, '0')} . ${d.tahun}`;

  return (
    <section className="grid grid-cols-1 md:min-h-svh md:grid-cols-2">
      {/* Foto */}
      <div className="relative h-72 md:h-auto">
        <Image src={config.heroImage} alt="" fill priority sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
      </div>

      {/* Teks */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center px-8 py-16 text-center md:px-14"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-muted">We Are Engaged</p>
        <h1 className="mt-6 break-words font-display text-4xl font-medium leading-tight text-ink sm:text-5xl md:text-6xl">
          {couple.groom.name}
          <span className="mx-2 font-script text-3xl text-rose-deep sm:text-4xl">&amp;</span>
          {couple.bride.name}
        </h1>
        <div className="mt-8 h-px w-16 bg-rose-deep/40" />
        <p className="mt-6 text-sm uppercase tracking-[0.25em] text-muted">{day}</p>
        <p className="mt-2 font-display text-xl text-rose-deep">{dateNum}</p>
      </motion.div>
    </section>
  );
}
