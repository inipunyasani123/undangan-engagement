import { MapPin } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';
import config from '@/lib/data';

// Peta lokasi (editorial: bingkai tegas, tombol garis).
export default function MapEmbed() {
  const { location } = config;
  return (
    <section className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle num="v" kicker="Location" title="Lokasi Acara" align="left" />
        <Reveal className="mt-12">
          <div className="relative overflow-hidden border border-rose-deep/20 bg-blush/50">
            <p className="absolute inset-0 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-muted" aria-hidden="true">
              <MapPin size={14} /> Memuat peta…
            </p>
            <iframe
              src={location.mapEmbed}
              title="Peta lokasi acara"
              className="relative h-80 w-full border-0 grayscale-[0.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-ink">{location.label}</p>
              {location.note && <p className="mt-1 text-xs text-muted">{location.note}</p>}
            </div>
            <a
              href={location.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 border-b border-rose-deep text-xs uppercase tracking-widest text-rose-deep transition hover:opacity-60"
            >
              <MapPin size={14} aria-hidden="true" /> Buka di Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
