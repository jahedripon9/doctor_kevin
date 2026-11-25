import { useTranslation } from 'react-i18next';

const QUICK_LINKS = [
  { id: 'about', labelKey: 'navbar.about', href: '#about', highlighted: false },
  { id: 'cv', labelKey: 'navbar.cv', href: '#cv', highlighted: true },
  { id: 'events', labelKey: 'navbar.article', href: '#article', highlighted: false },
  { id: 'article', labelKey: 'navbar.article', href: '#article', highlighted: false },
  { id: 'contact', labelKey: 'navbar.contact', href: '#contact', highlighted: false },
];

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: '#facebook',
    highlighted: false,
    icon: (
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    ),
  },
  {
    name: 'Twitter',
    href: '#twitter',
    highlighted: false,
    icon: (
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    ),
  },
  {
    name: 'LinkedIn',
    href: '#linkedin',
    highlighted: true,
    icon: (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    name: 'Instagram',
    href: '#instagram',
    highlighted: false,
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    name: 'WhatsApp',
    href: '#whatsapp',
    highlighted: false,
    icon: (
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    ),
  },
  {
    name: 'YouTube',
    href: '#youtube',
    highlighted: false,
    icon: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </>
    ),
  },
];

function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-slate-900 text-gray-400 py-16 px-4 md:px-12 border-t-4 border-[#facc15]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-14 border-b border-slate-700">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              {t('footer.ctaTitle')}
            </h2>
          </div>

          <div className="md:pl-8">
            <p className="font-mono text-sm text-gray-300 leading-relaxed mb-6">
              {t('footer.ctaDesc')}
            </p>
            <a
              href="mailto:contact@ralphedwardsmd.com"
              className="bg-[#facc15] text-black font-semibold text-sm px-6 py-3.5 rounded-sm inline-flex items-center gap-2 hover:bg-yellow-400 transition-colors hover:scale-105 transition-transform duration-300"
            >
              <span>{t('footer.getInTouch')}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          <div>
            <a
              href="#home"
              className="bg-white text-black font-bold uppercase px-4 py-2.5 text-sm tracking-wider inline-block"
            >
              RALPH EDWARDS.
            </a>
          </div>

          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
              {t('footer.location')}
            </h3>
            <address className="not-italic font-mono text-sm text-gray-400 space-y-1.5 leading-relaxed">
              <p>Outram Road, Singapore 169608</p>
              <p>Department of Neurology, Block 3</p>
              <p>+65 6222 3322</p>
            </address>
          </div>

          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`transition-colors ${
                      link.highlighted
                        ? 'text-[#facc15] font-semibold'
                        : 'text-gray-400 hover:text-[#facc15]'
                    }`}
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
              {t('footer.followMe')}
            </h3>
            <div className="flex flex-wrap items-center gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className={`w-9 h-9 rounded-sm flex items-center justify-center transition-colors ${
                    social.highlighted
                      ? 'bg-[#facc15] text-[#0f172a]'
                      : 'bg-slate-800 text-gray-200 hover:bg-[#facc15] hover:text-[#0f172a]'
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="font-mono text-xs text-gray-400">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
