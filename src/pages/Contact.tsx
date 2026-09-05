import { Mail, MapPin, Phone } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/ui/Container';
import ContactForm from '../components/sections/ContactForm';

const details = [
  { icon: Mail, label: 'Email', value: 'hello@logicmitra.com' },
  { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
  { icon: MapPin, label: 'Office', value: 'Bengaluru, India' },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Share a few details about what you're building and we'll get back to you within one business day."
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-semibold text-white">Get in touch</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                Prefer email or a call? Reach us directly using the details below, or fill out the form and we'll
                follow up.
              </p>

              <div className="mt-8 space-y-5">
                {details.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                      <item.icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-ink-500">{item.label}</p>
                      <p className="text-sm font-medium text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
