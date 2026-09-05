import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Container from '../ui/Container';
import { LinkButton } from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid pb-24 pt-20 sm:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[30%] h-[300px] w-[300px] rounded-full bg-fuchsia-600/10 blur-[100px]" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-ink-200">
            <Sparkles size={14} className="text-brand-400" />
            Trusted software partner for growing teams
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl">
            Engineering logic.
            <br />
            <span className="text-gradient">Building trust.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
            LogicMitra designs and builds web, mobile, cloud and AI-powered products for startups and enterprises —
            from first prototype to production scale.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <LinkButton to="/contact" size="lg">
              Start a Project <ArrowRight size={18} />
            </LinkButton>
            <LinkButton to="/portfolio" variant="secondary" size="lg">
              View Our Work
            </LinkButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/40">
            <div className="rounded-xl border border-white/5 bg-ink-900/60 p-6 sm:p-10">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {['Discover', 'Design & Build', 'Launch & Scale'].map((label, i) => (
                  <div key={label} className="rounded-lg border border-white/5 bg-white/[0.02] p-5">
                    <span className="font-display text-2xl font-bold text-brand-400">0{i + 1}</span>
                    <p className="mt-2 text-sm font-medium text-ink-200">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
