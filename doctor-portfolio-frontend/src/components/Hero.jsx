import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';
import Typewriter from './Typewriter';

const FEATURED_HOSPITALS = [
  "Boston Children's Hospital",
  "Cincinnati Children's",
  'Florida Hospital',
];

function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-brand-navy leading-tight">
                {t('hero.greeting')} <Typewriter text={t('hero.name')} />
              </h1>

              <p className="mt-6 font-mono text-gray-600 text-sm sm:text-base leading-relaxed">
                {t('hero.description')}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="bg-brand-yellow text-brand-navy font-semibold text-sm px-6 py-3.5 rounded-sm inline-flex items-center gap-2 hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
                >
                  <span>{t('hero.sendMessage')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <a
                  href="#cv"
                  className="bg-white border-2 border-brand-yellow text-brand-navy font-semibold text-sm px-6 py-3.5 rounded-sm inline-flex items-center gap-2 hover:bg-yellow-50 hover:scale-105 transition-all duration-300"
                >
                  <span>{t('hero.downloadCv')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex flex-col items-center md:items-end">
              <div className="w-full max-w-md">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
                  alt="Dr. Ralph Edwards"
                  className="w-full h-auto object-cover rounded-sm shadow-md bg-gray-200"
                />

                <div className="mt-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-3">
                    {t('hero.featuredBy')}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    {FEATURED_HOSPITALS.map((hospital) => (
                      <div
                        key={hospital}
                        className="px-3 py-2 bg-white border border-gray-200 rounded-sm text-xs font-semibold text-brand-navy shadow-sm"
                      >
                        {hospital}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default Hero;
