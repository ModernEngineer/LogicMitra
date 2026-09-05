import { Link } from 'react-router-dom';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-bold text-white shadow-lg shadow-brand-600/30">
        LM
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-white">
        Logic<span className="text-brand-400">Mitra.In</span>
      </span>
    </Link>
  );
}
