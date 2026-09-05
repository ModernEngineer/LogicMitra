import { useState } from 'react';
import clsx from 'clsx';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/ui/Container';
import CTASection from '../components/sections/CTASection';
import { projects, projectCategories } from '../data/projects';

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected work"
        description="A sample of products we've designed and built across industries. Case studies available on request."
      />

      <section className="py-24">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={clsx(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active === category
                    ? 'bg-brand-600 text-white'
                    : 'border border-white/10 text-ink-300 hover:text-white'
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-brand-400/30"
              >
                <div className={`h-36 bg-gradient-to-br ${project.accent} opacity-80`} />
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-ink-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
