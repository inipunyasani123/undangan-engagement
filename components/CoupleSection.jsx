import Image from 'next/image';
import { Instagram } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';
import config from '@/lib/data';

function Row({ person, index, reverse }) {
  return (
    <Reveal className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 ${reverse ? 'md:[direction:rtl]' : ''}`}>
      <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4] md:[direction:ltr]">
        <Image src={person.photo} alt={person.photoAlt || person.fullName} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
        <span className="absolute left-4 top-4 font-display text-5xl italic text-cream mix-blend-difference" aria-hidden="true">
          0{index}
        </span>
      </div>
      <div className="md:[direction:ltr]">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">{person.as}</p>
        <h3 className="mt-2 font-display text-4xl font-medium text-ink">{person.fullName}</h3>
        <p className="mt-3 text-sm text-muted">{person.parents}</p>
        {person.instagram && (
          <a
            href={`https://instagram.com/${person.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-rose-deep transition hover:text-ink"
          >
            <Instagram size={15} /> @{person.instagram}
          </a>
        )}
      </div>
    </Reveal>
  );
}

// Profil pasangan: baris editorial berselang-seling.
export default function CoupleSection() {
  const { couple } = config;
  return (
    <section className="bg-blush/30 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle num="i" kicker="The Couple" title="Mereka yang Berbahagia" />
        <div className="mt-16 space-y-16">
          <Row person={couple.groom} index={1} reverse={false} />
          <Row person={couple.bride} index={2} reverse={true} />
        </div>
      </div>
    </section>
  );
}
