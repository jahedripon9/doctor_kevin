import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';

function BookAppointment() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', date: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `${t('appointment.label')} - ${form.name}`;
    const body = [
      `${t('appointment.name')}: ${form.name}`,
      `${t('appointment.email')}: ${form.email}`,
      `${t('appointment.date')}: ${form.date}`,
      '',
      `${t('appointment.message')}:`,
      form.message,
    ].join('\n');

    const mailtoLink = `mailto:contact@ralphedwardsmd.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    window.alert(t('appointment.success'));
  };

  return (
    <section id="appointment" className="bg-yellow-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brand-navy mb-4">
                {t('appointment.label')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight">
                {t('appointment.title')}
              </h2>
              <p className="mt-4 font-mono text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                {t('appointment.description')}
              </p>
              <a
                href="mailto:contact@ralphedwardsmd.com"
                className="mt-6 inline-block text-sm font-semibold text-brand-navy underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-blue-700 transition-colors"
              >
                contact@ralphedwardsmd.com
              </a>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 sm:p-8 rounded-sm border border-yellow-100 shadow-md space-y-5"
            >
              <div>
                <label htmlFor="appointment-name" className="block text-sm font-semibold text-brand-navy mb-2">
                  {t('appointment.name')}
                </label>
                <input
                  id="appointment-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t('appointment.namePlaceholder')}
                  className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="appointment-email" className="block text-sm font-semibold text-brand-navy mb-2">
                    {t('appointment.email')}
                  </label>
                  <input
                    id="appointment-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t('appointment.emailPlaceholder')}
                    className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow"
                  />
                </div>

                <div>
                  <label htmlFor="appointment-date" className="block text-sm font-semibold text-brand-navy mb-2">
                    {t('appointment.date')}
                  </label>
                  <input
                    id="appointment-date"
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="appointment-message" className="block text-sm font-semibold text-brand-navy mb-2">
                  {t('appointment.message')}
                </label>
                <textarea
                  id="appointment-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t('appointment.messagePlaceholder')}
                  className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-yellow text-brand-navy font-semibold text-sm px-6 py-3.5 rounded-sm hover:bg-yellow-300 hover:scale-[1.02] transition-all duration-300"
              >
                {t('appointment.submit')}
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default BookAppointment;
