import Container from './Container';

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-grid border-b border-white/5 py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-brand-600/15 blur-[100px]" />
      <Container className="relative text-center">
        <span className="inline-block rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300">
          {eyebrow}
        </span>
        <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && <p className="mx-auto mt-4 max-w-xl text-ink-300">{description}</p>}
      </Container>
    </section>
  );
}
