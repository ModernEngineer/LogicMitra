import { ArrowUpRight } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { LinkButton } from '../ui/Button';
import { projects } from '../../data/projects';

export default function FeaturedProjects() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Our work"
          title="Products we've helped bring to life"
          description="A sample of engagements across web, mobile, cloud and AI — each shipped with the same care as our own product."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
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

        <div className="mt-12 flex justify-center">
          <LinkButton to="/portfolio" variant="secondary" size="md">
            View all projects <ArrowUpRight size={16} />
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
