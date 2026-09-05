import clsx from 'clsx';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div className={clsx('max-w-2xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}>
      {eyebrow && (
        <span className="inline-block rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">{description}</p>}
    </div>
  );
}
