import { useEffect, useState } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import Container from '../ui/Container';
import Logo from '../ui/Logo';
import { LinkButton } from '../ui/Button';
import { navLinks } from '../../data/nav';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open ? 'bg-ink-950/85 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-black/20' : 'bg-transparent'
      )}
    >
      <Container className="flex h-20 items-center justify-between py-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                clsx(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  isActive ? 'bg-white/10 text-white' : 'text-ink-300 hover:text-white'
                )
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LinkButton to="/contact" size="md">
            Start a Project
          </LinkButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/5 bg-ink-950/95 backdrop-blur-lg lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  clsx(
                    'rounded-lg px-4 py-3 text-sm font-medium',
                    isActive ? 'bg-white/10 text-white' : 'text-ink-300'
                  )
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
            <LinkButton to="/contact" size="md" className="mt-2 w-full">
              Start a Project
            </LinkButton>
          </Container>
        </div>
      )}
    </header>
  );
}
