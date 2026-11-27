import React, { useRef } from 'react';
import { m, useScroll, useTransform } from 'motion/react';
import { BotanicalDivider, LeafCornerMark } from './BotanicalOrnament';
import { ResponsiveImage } from './ResponsiveImage';

const FRESH_ITEMS = ['فتوش وتبولة', 'سلطة جرجير', 'طرشي ويالنجي', 'ليمون ونعناع'];

export const FreshnessScene: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const mainImageY = useTransform(scrollYProgress, [0, 1], ['16px', '-16px']);

  return (
    <section
      id="freshness"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F5F0E6] py-20 text-[#171615] sm:py-28"
    >
      <LeafCornerMark className="absolute -top-8 -left-8 h-52 w-52 rotate-180 text-[#C69A63]/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* High-Res Freshness Visual Composition */}
          <div className="grid grid-cols-12 items-stretch gap-4 sm:gap-5 lg:col-span-7">
            <m.div
              style={{ y: mainImageY }}
              initial={{ clipPath: 'inset(10% 0% 0% 0%)', opacity: 0.4 }}
              whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-7 overflow-hidden rounded-2xl bg-[#D8D0C4] will-change-transform"
            >
              <ResponsiveImage
                src="/assets/official/Zohoor-Al-Shafa-Salad-scaled.jpg"
                alt="سلطة فتوش طازجة بالخبز المحمص والليمون في مطعم زهور الشفاء"
                sizes="(max-width: 1024px) 58vw, 35vw"
                className="h-full min-h-[320px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </m.div>

            <div className="col-span-5 flex flex-col gap-4 sm:gap-5">
              <m.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 overflow-hidden rounded-2xl bg-[#D8D0C4]"
              >
                <ResponsiveImage
                  src="/assets/maps/maps_photo_2.jpg"
                  alt="طماطم وبصل مشوي على الفحم فوق البقدونس الطازج والليمون من فرع أبو نصير"
                  sizes="(max-width: 1024px) 42vw, 25vw"
                  className="h-full min-h-[160px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 overflow-hidden rounded-2xl bg-[#D8D0C4]"
              >
                <ResponsiveImage
                  src="/assets/official/ZEY05835-scaled-3.jpg"
                  alt="عصير ليمون ونعناع طازج في مطعم زهور الشفاء"
                  sizes="(max-width: 1024px) 42vw, 25vw"
                  className="h-full min-h-[160px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </m.div>
            </div>
          </div>

          {/* Editorial Copy */}
          <m.div
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-semibold text-[#762B35]">
              السلطات والمقبلات · من مائدة أبو نصير
            </p>

            <h2 className="section-title mt-3 font-display font-bold text-[#171615]">
              طازج، بسيط، ومليان نكهة.
            </h2>

            <p className="mt-6 text-base leading-[1.9] text-[#171615]/80 sm:text-lg">
              لأن توازن المائدة يبدأ بالخضار الطازجة، تُحضّر أطباق الفتوش والتبولة وسلطة الجرجير يومياً، إلى جانب البصل والطماطم المشوية على الفحم وعصائر الليمون والنعناع الطازجة.
            </p>

            <BotanicalDivider className="mt-8 justify-start text-[#762B35]" />

            <div className="mt-7 grid grid-cols-2 gap-3 border-t border-[#171615]/10 pt-6 sm:grid-cols-4 lg:grid-cols-2">
              {FRESH_ITEMS.map((item) => (
                <p
                  key={item}
                  className="text-sm font-medium leading-relaxed text-[#4F4942]"
                >
                  {item}
                </p>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};
