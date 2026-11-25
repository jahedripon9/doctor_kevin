import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useAnimationControls } from 'framer-motion';
import FadeIn from './FadeIn';

const WORKING_HISTORY = [
  {
    id: 'sgh',
    periodKey: 'workingHistory.current',
    hospitalKey: 'workingHistory.sgh',
    description:
      'Leading neurological consultations and inpatient stroke care while mentoring clinical fellows in neurodiagnostic evaluation.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
  },
  {
    id: 'tokyo',
    period: 'Jan, 2019 to March, 2021',
    hospitalKey: 'workingHistory.tokyo',
    description:
      'Served as senior attending neurologist focusing on neurodegenerative research and collaborative clinical trials.',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'johns-hopkins',
    period: 'May, 2014 to Dec, 2018',
    hospitalKey: 'workingHistory.hopkins',
    description:
      'Managed complex outpatient neurology cases and coordinated multidisciplinary treatment plans for movement disorders.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000&auto=format&fit=crop',
  },
];

const rotateForward = (items) => [...items.slice(1), items[0]];
const rotateBackward = (items) => [...items.slice(-1), ...items.slice(0, -1)];

function WorkingHistory() {
  const { t } = useTranslation();
  const [order, setOrder] = useState(WORKING_HISTORY);
  const [direction, setDirection] = useState(null);
  const controls = useAnimationControls();
  const isAnimating = useRef(false);

  useEffect(() => {
    if (!direction) return undefined;

    controls.set({ x: direction === 'prev' ? '-50%' : '0%' });

    let cancelled = false;
    const targetX = direction === 'next' ? '-50%' : '0%';

    controls
      .start({
        x: targetX,
        transition: { duration: 0.6, ease: 'easeInOut' },
      })
      .then(() => {
        if (cancelled) return;

        setOrder((prev) => (direction === 'next' ? rotateForward(prev) : rotateBackward(prev)));
        controls.set({ x: '0%' });
        setDirection(null);
        isAnimating.current = false;
      })
      .catch(() => {
        isAnimating.current = false;
      });

    return () => {
      cancelled = true;
    };
  }, [direction, controls]);

  const handlePrev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setDirection('prev');
  };

  const handleNext = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setDirection('next');
  };

  const leftCards = direction === 'prev' ? rotateBackward(order) : order;
  const rightCards = direction === 'prev' ? order : rotateForward(order);

  const getLabel = (item, field) =>
    item[`${field}Key`] ? t(item[`${field}Key`]) : item[field];

  const renderCards = (items) =>
    items.map((item) => (
      <article
        key={item.id}
        className="w-full bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden flex flex-col"
      >
        <img
          src={item.image}
          alt={getLabel(item, 'hospital')}
          className="w-full h-48 object-cover bg-gray-200 hover:scale-105 transition-transform duration-500"
        />
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
            {getLabel(item, 'period')}
          </p>
          <h3 className="mt-2 text-xl font-bold text-brand-navy">
            {getLabel(item, 'hospital')}
          </h3>
          <p className="mt-3 font-mono text-sm text-gray-600 leading-relaxed">
            {item.description}
          </p>
        </div>
      </article>
    ));

  return (
    <section id="cv" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">
              {t('workingHistory.title')}
            </h2>
            <p className="mt-3 font-mono text-sm sm:text-base text-gray-600">
              {t('workingHistory.subtitle')}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="min-h-[400px]">
            <div className="overflow-hidden w-full">
              <motion.div initial={false} animate={controls} className="flex w-[200%]">
                <div className="grid w-1/2 flex-shrink-0 grid-cols-1 md:grid-cols-3 gap-8">
                  {renderCards(leftCards)}
                </div>
                <div className="grid w-1/2 flex-shrink-0 grid-cols-1 md:grid-cols-3 gap-8">
                  {renderCards(rightCards)}
                </div>
              </motion.div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous working history"
            className="w-11 h-11 rounded-full border border-gray-300 bg-white text-brand-navy flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next working history"
            className="w-11 h-11 rounded-full border border-gray-300 bg-white text-brand-navy flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default WorkingHistory;
