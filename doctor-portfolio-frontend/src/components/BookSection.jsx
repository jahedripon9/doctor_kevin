import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';

const BOOK_HIGHLIGHTS = [
  {
    titleKey: 'book.point1Title',
    descriptionKey: 'book.point1Desc',
  },
  {
    titleKey: 'book.point2Title',
    descriptionKey: 'book.point2Desc',
  },
];

function BookSection() {
  const { t } = useTranslation();

  const getField = (item, field) =>
    item[`${field}Key`] ? t(item[`${field}Key`]) : item[field];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#f8f9fa] flex items-center justify-center py-16 px-4 md:px-12">
        <FadeIn>
          <div className="w-full max-w-sm">
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop"
              alt="The Highly Sensitive Person 3D book cover"
              className="w-full h-auto object-cover rounded-sm shadow-xl bg-gray-200"
            />
          </div>
        </FadeIn>
      </div>

      <div className="bg-white text-gray-800 py-16 px-8 md:px-16 flex flex-col justify-center shadow-2xl rounded-xl m-4 md:m-8">
        <FadeIn delay={0.1}>
          <div className="max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {t('book.title')}
            </h2>

            <p className="mt-4 font-mono text-sm sm:text-base text-gray-600 leading-relaxed">
              {t('book.description')}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
                alt="Kevin Gilbert"
                className="w-12 h-12 rounded-full object-cover bg-gray-200 border border-gray-300"
              />
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  {t('book.writtenBy')}
                </p>
                <p className="text-sm font-bold text-gray-900">{t('book.authorName')}</p>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            <ul className="space-y-5">
              {BOOK_HIGHLIGHTS.map((item) => (
                <li key={item.titleKey} className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-yellow-50 border border-yellow-200 flex items-center justify-center text-brand-navy">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      {getField(item, 'title')}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-gray-600 leading-relaxed">
                      {getField(item, 'description')}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default BookSection;
