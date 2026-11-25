import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NAV_LINKS = [
  { key: 'home', href: '#home', active: true },
  { key: 'about', href: '#about', active: false },
  { key: 'cv', href: '#cv', active: false },
  { key: 'education', href: '#education', active: false },
  { key: 'testimonial', href: '#testimonial', active: false },
  { key: 'article', href: '#article', active: false },
];

function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isBengali = i18n.language === 'bn';

  const toggleLanguage = () => {
    i18n.changeLanguage(isBengali ? 'en' : 'bn');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="bg-black text-white font-bold uppercase px-4 py-2.5 text-sm tracking-wider inline-block"
          >
            RALPH EDWARDS.
          </a>

          <div className="flex items-center gap-2">
            <nav aria-label="Primary" className="hidden md:flex items-center gap-2 lg:gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-sm transition-colors ${
                    link.active
                      ? 'bg-yellow-100 text-brand-navy'
                      : 'text-gray-700 hover:bg-yellow-50 hover:text-brand-navy'
                  }`}
                >
                  {t(`navbar.${link.key}`)}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 bg-brand-yellow text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-sm hover:bg-yellow-300 transition-colors"
              >
                {t('navbar.contact')}
              </a>
            </nav>

            <button
              type="button"
              onClick={toggleLanguage}
              aria-label="Switch language between English and Bengali"
              className="inline-flex items-center gap-1.5 rounded-sm border border-gray-200 px-2.5 py-2 text-xs font-semibold text-brand-navy hover:bg-yellow-50 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z"
                />
              </svg>
              <span>
                <span className={isBengali ? 'text-gray-400' : 'text-brand-navy'}>EN</span>
                <span className="mx-0.5 text-gray-300">/</span>
                <span className={isBengali ? 'text-brand-navy' : 'text-gray-400'}>BN</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-sm text-brand-navy hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav aria-label="Mobile" className="md:hidden pb-4 flex flex-col gap-2 border-t border-gray-100 pt-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-sm ${
                  link.active
                    ? 'bg-yellow-100 text-brand-navy'
                    : 'text-gray-700 hover:bg-yellow-50 hover:text-brand-navy'
                }`}
              >
                {t(`navbar.${link.key}`)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-1 bg-brand-yellow text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-sm text-center hover:bg-yellow-300 transition-colors"
            >
              {t('navbar.contact')}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
