import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useAnimationControls } from 'framer-motion';

const EVENTS = [
  {
    id: 1,
    date: '8 Sep, 2020',
    comments: '125 Comments',
    titleKey: 'events.bma',
    description:
      'Keynote symposium covering advances in clinical neurology, early intervention protocols, and collaborative patient care standards.',
  },
  {
    id: 2,
    date: '14 Oct, 2020',
    comments: '94 Comments',
    titleKey: 'events.cesr',
    description:
      'Interactive workshop guiding specialty doctors through portfolio preparation, clinical governance, and specialist registration.',
  },
  {
    id: 3,
    date: '22 Nov, 2020',
    comments: '78 Comments',
    title: 'International Pediatric Neurology Forum',
    description:
      'Panel discussion reviewing neurodiagnostic imaging trends and long-term outcomes for pediatric movement disorders.',
  },
  {
    id: 4,
    date: '10 Jan, 2021',
    comments: '112 Comments',
    title: 'Global Stroke Rehabilitation Summit',
    description:
      'Multidisciplinary briefing on post-stroke neuroplasticity therapies and community-based patient recovery programs.',
  },
];

const rotateForward = (items) => [...items.slice(1), items[0]];
const rotateBackward = (items) => [...items.slice(-1), ...items.slice(0, -1)];
const rotateToIndex = (items, index) => [...items.slice(index), ...items.slice(0, index)];

function LatestEvents() {
  const { t } = useTranslation();
  const [order, setOrder] = useState(EVENTS);
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

  const handleDotClick = (index) => {
    if (isAnimating.current) return;
    setOrder(rotateToIndex(order, index));
    controls.set({ x: '0%' });
  };

  const activeIndex = EVENTS.findIndex((event) => event.id === order[0].id);
  const leftEvents = direction === 'prev' ? rotateBackward(order) : order;
  const rightEvents = direction === 'prev' ? order : rotateForward(order);

  const getTitle = (event) =>
    event.titleKey ? t(event.titleKey) : event.title;

  const renderCards = (items) =>
    items.map((event) => (
      <article key={event.id} className="w-full bg-white shadow-sm rounded-sm p-8">
        <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-gray-500 mb-4">
          <span className="inline-flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{event.date}</span>
          </span>

          <span className="inline-flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span>{event.comments}</span>
          </span>
        </div>

        <h3 className="text-xl font-bold text-brand-navy">{getTitle(event)}</h3>
        <p className="mt-3 font-mono text-sm text-gray-600 leading-relaxed">
          {event.description}
        </p>
      </article>
    ));

  return (
    <section id="article" className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">
            {t('events.title')}
          </h2>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous events"
              className="w-11 h-11 rounded-full bg-white text-brand-navy flex items-center justify-center shadow-sm hover:bg-brand-yellow transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next events"
              className="w-11 h-11 rounded-full bg-white text-brand-navy flex items-center justify-center shadow-sm hover:bg-brand-yellow transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="min-h-[300px] md:min-h-[240px]">
          <div className="overflow-hidden w-full">
            <motion.div initial={false} animate={controls} className="flex w-[200%]">
              <div className="grid w-1/2 flex-shrink-0 grid-cols-1 md:grid-cols-2 gap-8">
                {renderCards(leftEvents)}
              </div>
              <div className="grid w-1/2 flex-shrink-0 grid-cols-1 md:grid-cols-2 gap-8">
                {renderCards(rightEvents)}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2.5">
          {EVENTS.map((event, idx) => (
            <button
              key={event.id}
              type="button"
              onClick={() => handleDotClick(idx)}
              aria-label={`Show event slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === idx ? 'w-6 bg-brand-navy' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestEvents;
