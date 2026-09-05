import Container from '../ui/Container';
import { stats } from '../../data/process';
import { useCountUp } from '../../hooks/useCountUp';

function StatCard({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const { ref, value: count } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-bold text-white sm:text-5xl">
        {count}
        <span className="text-brand-400">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-ink-400">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-ink-900/40 py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
