import React from 'react';
import { m } from 'motion/react';
import { ArrowLeft, UtensilsCrossed } from 'lucide-react';
import { BotanicalDivider } from './BotanicalOrnament';
import { ResponsiveImage } from './ResponsiveImage';

const FEATURED_PEDESTALS = [
  {
    id: 'pedestal-grills',
    title: 'مشاوي على الفحم',
    subtitle: 'كباب · شقف · ريش · شيش طاووق',
    src: '/assets/official/33-e1777529433615.jpg',
    alt: 'تشكيلة المشاوي المشكلة والكبة والمقبلات في مطعم زهور الشفاء',
    offsetClass: 'md:ml-auto md:w-[82%]',
  },
  {
    id: 'pedestal-pans',
    title: 'صواني وقلايات ساخنة',
    subtitle: 'قلاية لحمة · كفتة بالطحينية · عرايس',
    src: '/assets/official/04.jpg',
    alt: 'تقديم القلاية في الطاسة النحاسية مع سلطة الجرجير الطازجة واللبن',
    offsetClass: 'md:mx-auto md:w-[82%]',
  },
  {
    id: 'pedestal-arayes',
    title: 'تواصي ووجبات شرقية',
    subtitle: 'قوزي · منسف · عرايس باللحم البلدي',
    src: '/assets/official/MG_6426-scaled-4.jpg',
    alt: 'عرايس محضرة طازجاً مع عصرة ليمون ومخللات في مطعم زهور الشفاء',
    offsetClass: 'md:mr-auto md:w-[82%]',
  },
];

export const IntroScene: React.FC = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F5F0E6] py-16 text-[#171615] sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Stepped Diagonal Plinth Showcase ("Our Menu / Featured Dishes") */}
          <div className="lg:col-span-6">
            <m.div
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-semibold text-[#762B35]">
                أطباقنا المميزة · زهور الشفاء
              </p>
              <h2 className="section-title mt-2 font-display font-bold text-[#171615]">
                نكهات مختارة من مطبخنا
              </h2>
            </m.div>

            <div className="mt-8 flex flex-col gap-6 sm:gap-7">
              {FEATURED_PEDESTALS.map((item, idx) => (
                <m.a
                  key={item.id}
                  href="#menu"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`group flex items-center gap-4 rounded-2xl border border-[#171615]/10 border-b-[5px] border-b-[#D8D0C4] bg-[#FAF7F2] p-3.5 shadow-[0_18px_36px_rgba(23,22,21,0.10)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[#762B35] sm:gap-5 sm:p-4 ${item.offsetClass}`}
                >
                  <div className="h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-[#EBE3D4] sm:h-24 sm:w-28">
                    <ResponsiveImage
                      src={item.src}
                      alt={item.alt}
                      sizes="(max-width: 640px) 96px, 112px"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-bold leading-snug text-[#171615] sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#575049] sm:text-sm">
                      {item.subtitle}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#171615]/10 bg-[#EBE3D4]/60 text-[#171615] transition-colors group-hover:bg-[#171615] group-hover:text-[#F5F0E6]"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </span>
                </m.a>
              ))}
            </div>
          </div>

          {/* Dark Framed "About Us" Photo Card + Editorial Hospitality Block */}
          <div className="flex flex-col gap-8 lg:col-span-6">
            <m.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative min-h-[340px] overflow-hidden rounded-3xl border border-[#171615]/12 bg-[#171615] shadow-[0_20px_50px_rgba(23,22,21,0.14)] sm:min-h-[380px]"
            >
              <ResponsiveImage
                src="/assets/official/002.jpg"
                alt="لحم محمر على الأرز الشرقي باللوز من مطبخ زهور الشفاء"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171615]/94 via-[#171615]/58 to-[#171615]/25" />

              <div className="relative z-10 flex h-full min-h-[340px] flex-col justify-end p-6 sm:min-h-[380px] sm:p-8">
                <p className="text-xs font-semibold text-[#D7B485]">
                  عن المطعم · فرع أبو نصير
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold leading-snug text-[#F5F0E6] sm:text-3xl">
                  كل تفصيلة بتكمل النكهة.
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#F5F0E6]/88 sm:text-base">
                  في مطعم زهور الشفاء نعتني بأدق تفاصيل الضيافة، بدءاً من اللحوم البلدية الطازجة وتتبيلها المتوازن، وصولاً إلى الشواء على الفحم والتقديم الساخن على مائدتك.
                </p>
                <BotanicalDivider className="mt-5 justify-start text-[#C69A63]" />
              </div>
            </m.div>

            {/* Clean Editorial Hospitality Split below About Card */}
            <m.div
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 items-start gap-6 border-t border-[#171615]/12 pt-7 sm:grid-cols-2"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-[#171615]">
                  لحوم بلدية طازجة
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#575049]">
                  اختيار يومي لأجود القطع وتجهيز متكامل للمشاوي المشكلة والقلايات والأطباق الشرقية.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <h3 className="font-display text-lg font-bold text-[#171615]">
                  صالة وسفري وتواصي
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#575049]">
                  جلسات عائلية رحبة في أبو نصير، وطلبات سفري وولائم جاهزة لمناسباتكم.
                </p>
                <a
                  href="#menu"
                  className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#C69A63] px-6 text-sm font-semibold leading-none text-[#171615] transition-colors hover:bg-[#D7B485] focus-visible:outline-2 focus-visible:outline-[#762B35]"
                >
                  <UtensilsCrossed className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>تصفح المنيو الكامل</span>
                </a>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};
