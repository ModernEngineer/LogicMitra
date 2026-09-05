import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { faqs } from '../../data/faqs';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />

        <div className="mt-12 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={clsx('shrink-0 text-ink-400 transition-transform', isOpen && 'rotate-180 text-brand-400')}
                  />
                </button>
                <div
                  className={clsx(
                    'grid transition-all duration-300 ease-in-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-ink-400">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
