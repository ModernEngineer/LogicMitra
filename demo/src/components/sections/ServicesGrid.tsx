import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { StaggerGroup, StaggerItem } from '../motion/Stagger';
import { services } from '../../data/services';
import { iconMap } from '../../lib/icons';

export default function ServicesGrid() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Services built around your product goals"
          description="From first prototype to production scale, we cover the full lifecycle of building great software."
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <StaggerItem key={service.slug} whileHover={{ y: -6 }}>
                <Link
                  to="/services"
                  className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-brand-400/30 hover:bg-white/[0.05]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                    {Icon && <Icon size={22} />}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{service.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-400 opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowUpRight size={15} />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
