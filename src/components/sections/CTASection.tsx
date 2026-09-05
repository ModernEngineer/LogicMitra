import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import { LinkButton } from '../ui/Button';

export default function CTASection() {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-700/40 via-ink-900 to-ink-900 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Have a product idea? Let's build it right.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-300">
              Tell us about your project and we'll get back to you within one business day with next steps.
            </p>
            <div className="mt-8 flex justify-center">
              <LinkButton to="/contact" size="lg">
                Get in touch <ArrowRight size={18} />
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
