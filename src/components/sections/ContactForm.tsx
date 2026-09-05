import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { Button } from '../ui/Button';

interface FormState {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}

const initialState: FormState = { name: '', email: '', company: '', budget: '', message: '' };

type Errors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.message.trim()) errors.message = 'Tell us a little about your project.';
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange =
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    // No backend is wired up yet — replace this with a real API call or form service
    // (e.g. your own endpoint, Formspree, or a serverless function) before going live.
    window.setTimeout(() => {
      setStatus('success');
      setValues(initialState);
    }, 900);
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-16 text-center">
        <CheckCircle2 className="text-emerald-400" size={40} />
        <h3 className="mt-4 font-display text-xl font-semibold text-white">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-400">
          Thanks for reaching out — our team will get back to you within one business day.
        </p>
        <Button variant="secondary" className="mt-6" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <input
            value={values.name}
            onChange={handleChange('name')}
            type="text"
            placeholder="Jane Doe"
            className={inputClass}
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            value={values.email}
            onChange={handleChange('email')}
            type="email"
            placeholder="jane@company.com"
            className={inputClass}
          />
        </Field>
        <Field label="Company (optional)">
          <input
            value={values.company}
            onChange={handleChange('company')}
            type="text"
            placeholder="Acme Inc."
            className={inputClass}
          />
        </Field>
        <Field label="Budget range (optional)">
          <select value={values.budget} onChange={handleChange('budget')} className={inputClass}>
            <option value="">Select a range</option>
            <option value="<10k">Under $10k</option>
            <option value="10-50k">$10k – $50k</option>
            <option value="50-100k">$50k – $100k</option>
            <option value="100k+">$100k+</option>
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Project details" error={errors.message}>
          <textarea
            value={values.message}
            onChange={handleChange('message')}
            rows={5}
            placeholder="Tell us about your project, timeline and goals..."
            className={inputClass}
          />
        </Field>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send message <Send size={16} />
          </>
        )}
      </Button>
    </form>
  );
}

const inputClass =
  'w-full rounded-lg border border-white/10 bg-ink-950/60 px-4 py-2.5 text-sm text-white placeholder:text-ink-500 outline-none transition-colors focus:border-brand-400/50';

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-200">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
    </label>
  );
}
