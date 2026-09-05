import Container from '../ui/Container';

const stack = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'React Native',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Kubernetes',
  'GraphQL',
  'Tailwind CSS',
  'Python',
];

export default function TechStack() {
  const loop = [...stack, ...stack];

  return (
    <section className="py-20">
      <Container>
        <p className="text-center text-sm font-medium uppercase tracking-wider text-ink-500">
          Technologies we work with
        </p>
      </Container>

      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {loop.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex items-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 text-sm font-medium text-ink-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
