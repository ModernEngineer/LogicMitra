import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { team } from '../../data/team';

export default function TeamGrid() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Our people"
          title="Meet the team behind the work"
          description="A small, senior team that stays closely involved in every engagement."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-lg font-bold text-white">
                {member.initials}
              </span>
              <h3 className="mt-4 font-semibold text-white">{member.name}</h3>
              <p className="mt-1 text-xs font-medium text-brand-400">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
