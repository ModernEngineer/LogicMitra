import { Quote } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { StaggerGroup, StaggerItem } from '../motion/Stagger';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section className="border-y border-white/5 bg-ink-900/40 py-24">
      <Container>
        <SectionHeading eyebrow="Client feedback" title="What our clients say" />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <StaggerItem
              key={t.id}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-brand-400/20"
            >
              <Quote className="text-brand-500/40" size={28} />
              <p className="mt-4 text-base leading-relaxed text-ink-200">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/15 text-sm font-semibold text-brand-300">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-ink-400">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
