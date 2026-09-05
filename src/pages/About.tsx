import { Target, Eye, HeartHandshake } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/motion/Reveal';
import { StaggerGroup, StaggerItem } from '../components/motion/Stagger';
import Stats from '../components/sections/Stats';
import TeamGrid from '../components/sections/TeamGrid';
import CTASection from '../components/sections/CTASection';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To help ambitious teams turn ideas into reliable, well-engineered software — without the usual friction.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the software partner startups and enterprises trust for their most important product bets.',
  },
  {
    icon: HeartHandshake,
    title: 'Our Values',
    description: 'Craftsmanship, transparency and treating every client engagement like our own product.',
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="We build software the way we'd want it built for us"
        description="LogicMitra was founded to close the gap between ambitious product ideas and reliable engineering execution."
      />

      <section className="py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Our story" title="From a two-person team to a full-stack studio" align="left" />
          <Reveal delay={0.1} className="mt-6 space-y-4 text-base leading-relaxed text-ink-300">
            <p>
              LogicMitra started with a simple observation: most software studios were either too slow and process-heavy,
              or too informal to trust with a serious product. We set out to build something in between — a senior,
              accountable team that moves with startup speed.
            </p>
            <p>
              Today we work with founders building their first product and engineering leaders modernising systems
              that run their business — bringing the same discipline to a two-week prototype as we do to a
              year-long platform build.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-white/5 bg-ink-900/40 py-24">
        <Container>
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <StaggerItem
                key={value.title}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center transition-colors hover:border-brand-400/20"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                  <value.icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{value.description}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <Stats />
      <TeamGrid />
      <CTASection />
    </>
  );
}
