import { Rocket, Users, Lock, LineChart } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const points = [
  {
    icon: Rocket,
    title: 'Ship faster',
    description: 'A senior-heavy team and lean process means fewer meetings and more working software, sooner.',
  },
  {
    icon: Users,
    title: 'Embedded partnership',
    description: 'We work as an extension of your team — clear communication, shared tools, no black boxes.',
  },
  {
    icon: Lock,
    title: 'Built to last',
    description: 'Clean architecture and test coverage from day one, so the codebase stays maintainable as you grow.',
  },
  {
    icon: LineChart,
    title: 'Outcome-focused',
    description: 'We measure success by the metrics that matter to your business, not just tickets closed.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why LogicMitra"
              title="A team that treats your product like its own"
              align="left"
              description="We've helped startups launch their first product and helped enterprises modernise systems that run their business. Here's what that partnership looks like."
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                  <point.icon size={20} />
                </div>
                <h3 className="mt-4 font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
