import Container from '../components/ui/Container';
import { LinkButton } from '../components/ui/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-24">
      <Container className="text-center">
        <p className="font-display text-7xl font-bold text-brand-500/30">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-white">Page not found</h1>
        <p className="mt-2 text-ink-400">The page you're looking for doesn't exist or has moved.</p>
        <LinkButton to="/" size="md" className="mt-8">
          Back to home
        </LinkButton>
      </Container>
    </section>
  );
}
