import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';

const QUALIFICATIONS = [
  {
    university: 'Oxford University',
    date: '2004 - 2009',
    degree: 'Bachelor of Medicine & Bachelor of Surgery (MBBS)',
    description:
      'Graduated with honors in clinical medicine, focusing on foundational neuroanatomy and patient care.',
  },
  {
    university: 'Harvard Medical School',
    date: '2010 - 2012',
    degree: 'Master of Medical Sciences in Neurology',
    description:
      'Completed advanced translational research on neurodegenerative pathways and clinical trial design.',
  },
  {
    university: 'Johns Hopkins University',
    date: '2012 - 2015',
    degree: 'Residency in Clinical Neurology',
    description:
      'Led inpatient stroke and epilepsy consultations while training in electroencephalography.',
  },
  {
    university: 'Stanford University',
    date: '2015 - 2017',
    degree: 'Fellowship in Movement Disorders',
    description:
      'Specialized in deep brain stimulation protocols and multidisciplinary neurorehabilitation.',
  },
];

const AWARDS = [
  {
    number: '01',
    title: 'Lasker Award',
    description:
      'Recognized for advancing clinical understanding of early diagnostic biomarkers in neurology.',
    image: 'https://cdn-icons-png.flaticon.com/512/3112/3112946.png',
    numberClass: 'text-gray-100',
  },
  {
    number: '02',
    title: 'John Howland Award',
    description:
      'Honored for lifelong dedication to academic medicine, mentorship, and compassionate care.',
    image: 'https://cdn-icons-png.flaticon.com/512/3112/3112940.png',
    numberClass: 'text-gray-100',
  },
  {
    number: '03',
    title: 'Maxwell Finland Award',
    description:
      'Awarded for distinguished contributions to clinical investigation and evidence-based practice.',
    image: 'https://cdn-icons-png.flaticon.com/512/3112/3112948.png',
    numberClass: 'text-brand-yellow',
  },
];

function Qualification() {
  const { t } = useTranslation();

  return (
    <section id="education" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">
              {t('qualification.title')}
            </h2>
            <p className="mt-3 font-mono text-sm sm:text-base text-gray-600">
              {t('qualification.subtitle')}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* বাম কলাম: শিক্ষাগত যোগ্যতা */}
            <div className="flex flex-col">
              {QUALIFICATIONS.map((item) => (
                <div
                  key={item.degree}
                  className="border-b border-gray-200 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                    <div className="sm:col-span-4">
                      <p className="text-blue-500 text-sm font-semibold">{item.university}</p>
                      <p className="mt-1 text-xs text-gray-400 font-mono">{item.date}</p>
                    </div>
                    <div className="sm:col-span-8">
                      <h3 className="text-lg font-bold text-brand-navy leading-snug">{item.degree}</h3>
                      <p className="mt-2 text-sm text-gray-600 font-mono leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ডান কলাম: অ্যাওয়ার্ডস (Staggered Flex Layout) */}
            <div className="flex flex-col relative w-full pt-4">
              {AWARDS.map((award, index) => {
                // কার্ডের পজিশন ক্লাস
                let positionClass = "";
                if (index === 0) {
                  positionClass = "self-start z-10 w-[85%] sm:w-[75%]"; // উপরে বামে
                } else if (index === 1) {
                  positionClass = "self-end -mt-12 z-20 w-[85%] sm:w-[75%]"; // নিচে ডানে
                } else if (index === 2) {
                  positionClass = "self-start -mt-12 ml-4 sm:ml-8 z-30 w-[85%] sm:w-[75%]"; // নিচে বামে
                }

                return (
                  <article
                    key={award.number}
                    className={`bg-white border border-gray-100 shadow-[0_5px_25px_rgb(0,0,0,0.06)] p-6 sm:p-8 rounded-sm relative ${positionClass}`}
                  >
                    {/* বড় নাম্বার (ব্যাকগ্রাউন্ডে) */}
                    <span
                      aria-hidden="true"
                      className={`absolute top-4 right-4 text-6xl sm:text-7xl font-bold ${award.numberClass}`}
                    >
                      {award.number}
                    </span>

                    {/* ট্রফি এবং লেখা (সবার উপরে থাকবে যাতে ঢাকা না পড়ে) */}
                    <div className="relative z-40">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-md"
                      />
                      <h3 className="text-lg font-bold text-brand-navy mt-4 pr-10">
                        {award.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 font-mono mt-3 leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
            
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Qualification;
