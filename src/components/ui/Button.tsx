import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-600/25 hover:shadow-brand-500/30',
  secondary:
    'bg-white/5 text-ink-50 border border-white/10 hover:bg-white/10 hover:border-white/20',
  ghost: 'text-ink-200 hover:text-white hover:bg-white/5',
};

const sizeClasses: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-60';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)} {...rest}>
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  to,
  variant = 'primary',
  size = 'md',
  className,
}: BaseProps & { to: string }) {
  return (
    <Link to={to} className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)}>
      {children}
    </Link>
  );
}
