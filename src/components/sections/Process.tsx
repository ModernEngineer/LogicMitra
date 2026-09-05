import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { processSteps } from '../../data/process';

export default function Process() {
  return (
    <section className="border-y border-white/5 bg-ink-900/40 py-24">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="A process built for transparency"
          description="No surprises — you see progress every step of the way, from the first workshop to launch day."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <div key={step.step} className="relative">
              <span className="font-display text-5xl font-bold text-white/10">{step.step}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">{step.description}</p>
              {i < processSteps.length - 1 && (
                <div className="absolute right-[-16px] top-6 hidden h-px w-8 bg-gradient-to-r from-brand-500/50 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
