'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';
import config from '@/lib/data';
import { useDialog } from '@/lib/hooks';

// Galeri editorial: strip scroll horizontal dengan snap + lightbox.
export default function Gallery() {
  const { gallery } = config;
  const [active, setActive] = useState(null);
  const tombolTutup = useDialog(active !== null, () => setActive(null));

  return (
    <section className="bg-blush/30 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle num="iv" kicker="Moments" title="Galeri" align="left" />
      </div>

      <Reveal className="mt-12">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {gallery.map((foto, i) => (
            <button
              key={foto.src}
              type="button"
              onClick={() => setActive(i)}
              className="relative aspect-[3/4] w-60 shrink-0 snap-center overflow-hidden md:w-72"
              aria-label={`Perbesar foto ${String(i + 1).padStart(2, '0')}: ${foto.alt}`}
            >
              <Image src={foto.src} alt={foto.alt} fill sizes="288px" className="object-cover transition duration-500 hover:scale-105" />
              <span className="absolute bottom-2 left-3 font-display text-sm italic text-cream mix-blend-difference" aria-hidden="true">
                0{i + 1}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-label={`Galeri ${active + 1} dari ${gallery.length}, diperbesar`}
          >
            <button ref={tombolTutup} type="button" className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center text-cream/80 hover:text-cream" onClick={() => setActive(null)} aria-label="Tutup foto">
              <X size={28} aria-hidden="true" />
            </button>
            <motion.div
              className="relative h-[70vh] w-full max-w-2xl"
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={gallery[active].src} alt={gallery[active].alt} fill sizes="(max-width: 768px) 100vw, 672px" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
