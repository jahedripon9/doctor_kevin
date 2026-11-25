import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-yellow-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-navy mb-4">
                <svg
                  className="w-4 h-4 text-brand-navy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                <span>{t('about.label')}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
                {t('about.title')}
              </h2>

              <p className="mt-6 font-mono text-gray-600 text-sm sm:text-base leading-relaxed">
                {t('about.description')}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#cv"
                  className="bg-brand-yellow text-brand-navy font-semibold text-sm px-6 py-3.5 rounded-sm hover:bg-yellow-300 transition-colors"
                >
                  {t('about.learnMore')}
                </a>
                <a
                  href="#testimonial"
                  className="bg-white border-2 border-brand-yellow text-brand-navy font-semibold text-sm px-6 py-3.5 rounded-sm hover:bg-yellow-100 transition-colors"
                >
                  {t('about.successStory')}
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-md overflow-hidden rounded-sm shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
                  alt="Dr. Ralph Edwards giving a thumbs up"
                  className="w-full h-auto object-cover bg-gray-200 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default About;
