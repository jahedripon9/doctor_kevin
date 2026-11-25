import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import FadeIn from './FadeIn';

const COLLEAGUE_QUOTES = [
  {
    id: 1,
    quoteKey: 'testimonial.quote',
    authorKey: 'testimonial.author',
    designationKey: 'testimonial.designation',
  },
  {
    id: 2,
    quote:
      '“Dr. Ralph Edwards brings rare diagnostic clarity and steady leadership to every multidisciplinary neurology board.”',
    author: 'DR. Sarah Jenkins',
    designation: 'NEUROSURGEON',
  },
  {
    id: 3,
    quote:
      '“Working alongside Ralph for over a decade has shown me what genuine clinical empathy and scientific rigor look like.”',
    author: 'DR. Michael Chen',
    designation: 'PEDIATRIC SPECIALIST',
  },
  {
    id: 4,
    quote:
      '“Patients trust him immediately, and fellows learn from his calm bedside manner every single day.”',
    author: 'DR. Hannah Alvarez',
    designation: 'CHIEF MEDICAL OFFICER',
  },
];

function Testimonial() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const current = COLLEAGUE_QUOTES[activeIndex];

  const getField = (item, field) =>
    item[`${field}Key`] ? t(item[`${field}Key`]) : item[field];

  return (
    <section className="bg-gray-50 text-gray-800 py-16 md:py-24 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brand-navy mb-4">
                {t('testimonial.label')}
              </p>

              <div className="min-h-[260px] md:min-h-[210px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <blockquote className="text-2xl sm:text-3xl font-semibold text-gray-700 leading-snug">
                      {getField(current, 'quote')}
                    </blockquote>

                    <div className="mt-8">
                      <p className="text-base font-bold text-gray-900">
                        {getField(current, 'author')}
                      </p>
                      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-gray-500">
                        {getField(current, 'designation')}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex items-center gap-2.5">
                {COLLEAGUE_QUOTES.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Show colleague testimonial ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      activeIndex === idx ? 'w-6 bg-gray-900' : 'w-2.5 bg-gray-300 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-lg">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop"
                  alt="Medical team collaborating"
                  className="w-full h-auto object-cover rounded-sm shadow-lg bg-gray-200"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
