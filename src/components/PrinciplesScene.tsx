import React, { useRef } from 'react';
import { Flame, Leaf, MoveLeft, Users, UtensilsCrossed } from 'lucide-react';
import { m, useScroll, useTransform } from 'motion/react';

const PRINCIPLES = [
  {
    id: 'meat',
    title: 'لحوم بلدية طازجة',
    description:
      'اختيار يومي لأجود القطع وتتبيل متوازن يحافظ على الطعم الأصيل لكل سيخ ووجبة.',
    icon: UtensilsCrossed,
    cardClass: 'bg-[#FAF7F2] border-[#171615]/10 text-[#171615]',
    iconBgClass: 'bg-[#762B35]/10 text-[#762B35]',
    descClass: 'text-[#4F4942]',
  },
  {
    id: 'charcoal',
    title: 'على جمر الفحم',
    description:
      'شواء مباشر لأسياخ الكباب والشقف والشيش طاووق والريش لتصل طاولتك ساخنة بنكهتها الدخانية.',
    icon: Flame,
    cardClass: 'bg-[#762B35] border-[#762B35] text-[#F5F0E6]',
    iconBgClass: 'bg-[#F5F0E6]/15 text-[#F5F0E6]',
    descClass: 'text-[#F5F0E6]/88',
  },
  {
    id: 'freshness',
    title: 'مقبلات وسلطات يومية',
    description:
      'توازن المائدة بين حرارة المشاوي ونضارة الفتوش والتبولة والجرجير والمشروبات المنعشة.',
    icon: Leaf,
    cardClass: 'bg-[#171615] border-[#171615] text-[#F5F0E6]',
    iconBgClass: 'bg-[#C69A63]/18 text-[#C69A63]',
    descClass: 'text-[#D8D0C4]',
  },
  {
    id: 'hospitality',
    title: 'صالة وسفري وتواصي',
    description:
      'صالة رحبة لجمعات العائلة والأصدقاء في أبو نصير، مع تجهيز طلبات السفري والولائم والمناسبات.',
    icon: Users,
    cardClass: 'bg-[#C69A63] border-[#B68952] text-[#171615]',
    iconBgClass: 'bg-[#171615]/12 text-[#171615]',
    descClass: 'text-[#171615]/85',
  },
];

export const PrinciplesScene: React.FC = () => {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // In RTL layout, shifting right (+X) reveals leftward cards cleanly across scroll
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '37%']);

  return (
    <section
      ref={targetRef}
      aria-labelledby="principles-heading"
      className="relative border-y border-[#171615]/10 bg-[#EBE3D4] text-[#171615] lg:h-[210vh]"
    >
      {/* Mobile & Tablet Grid Layout (< lg) */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:hidden">
        <m.div
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <p className="text-xs font-semibold text-[#762B35]">
            أصول الضيافة · زهور الشفاء
          </p>
          <h2
            id="principles-heading-mobile"
            className="section-title mt-3 font-display font-bold text-[#171615]"
          >
            أربعة أركان تصنع التجربة.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#4F4942]">
            تفاصيل ثابتة في مطبخنا وصالتنا في فرع أبو نصير لتبقى النكهة كما تعوّدتها دائماً.
          </p>
        </m.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <m.div
                key={item.id}
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col justify-between rounded-3xl border p-6 shadow-sm ${item.cardClass}`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBgClass}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-xl font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className={`mt-2.5 text-sm leading-relaxed ${item.descClass}`}>
                    {item.description}
                  </p>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>

      {/* Desktop Sticky Scroll Horizontal Showcase (lg+) */}
      <div className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:overflow-hidden">
        <m.div style={{ x }} className="flex items-stretch gap-8 px-12 xl:px-20">
          <div className="flex w-[32vw] max-w-md shrink-0 flex-col justify-center pl-4">
            <p className="text-xs font-semibold text-[#762B35]">
              أصول الضيافة · زهور الشفاء
            </p>
            <h2
              id="principles-heading"
              className="mt-3 font-display text-4xl font-bold leading-tight text-[#171615] xl:text-5xl"
            >
              أربعة أركان <br />
              <span className="text-[#762B35]">تصنع التجربة.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#4F4942]">
              تفاصيل ثابتة في مطبخنا وصالتنا في فرع أبو نصير لتبقى النكهة كما تعوّدتها دائماً.
            </p>
            <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-[#762B35]">
              <span>تابع التمرير لاستعراض الأركان</span>
              <MoveLeft className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>

          {PRINCIPLES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex h-[52vh] min-h-[340px] max-h-[430px] w-[340px] xl:w-[370px] shrink-0 flex-col justify-between rounded-3xl border p-8 shadow-[0_18px_38px_rgba(23,22,21,0.08)] transition-transform duration-300 hover:-translate-y-1.5 ${item.cardClass}`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBgClass}`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed xl:text-base ${item.descClass}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
};
