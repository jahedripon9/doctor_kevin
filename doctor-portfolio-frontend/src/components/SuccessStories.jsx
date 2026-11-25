import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

const STORIES = [
  {
    id: 1,
    quote:
      'Dr. Ralph Edwards took the time to listen carefully to every concern, explained the diagnosis clearly, and guided our family through a recovery plan that restored my mobility and confidence.',
    author: 'Eleanor Vance',
  },
  {
    id: 2,
    quote:
      'After months of uncertainty, Dr. Edwards identified the underlying neurological cause during our very first consultation and coordinated a treatment approach that made an immediate difference.',
    author: 'Marcus Sterling',
  },
  {
    id: 3,
    quote:
      'His calm professionalism and thorough follow-up care gave our son the best possible outcome. We are deeply grateful for his expertise and kindness.',
    author: 'Priya Nair',
  },
  {
    id: 4,
    quote:
      'Every appointment felt unhurried and reassuring. Dr. Edwards and his clinical team provided clear answers and unwavering support throughout my rehabilitation.',
    author: 'Daniel Brooks',
  },
];

function SuccessStories() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + STORIES.length) % STORIES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % STORIES.length);
  };

  const currentStory = STORIES[activeIndex];

  return (
    <section id="testimonial" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight">
              {t('successStories.title')}
            </h2>

            <p className="mt-4 font-mono text-sm sm:text-base text-gray-600 leading-relaxed">
              {t('successStories.subtitle')}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous patient story"
                className="w-11 h-11 rounded-full border-2 border-brand-yellow bg-white text-brand-navy flex items-center justify-center hover:bg-brand-yellow transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next patient story"
                className="w-11 h-11 rounded-full border-2 border-brand-yellow bg-white text-brand-navy flex items-center justify-center hover:bg-brand-yellow transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="mt-8 flex items-center gap-2.5">
              {STORIES.map((story, idx) => (
                <button
                  key={story.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Show patient story ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === idx
                      ? 'w-6 bg-brand-navy'
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="min-h-[320px] md:min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className="bg-yellow-50 border-2 border-brand-yellow rounded-sm p-8 sm:p-10">
                  <span
                    aria-hidden="true"
                    className="block text-5xl leading-none font-serif text-brand-yellow mb-4 select-none"
                  >
                    &rdquo;
                  </span>
                  <p className="font-mono text-sm sm:text-base text-brand-navy leading-relaxed">
                    {currentStory.quote}
                  </p>
                  <footer className="mt-6 text-sm font-bold text-brand-navy">
                    &mdash; {currentStory.author}
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
