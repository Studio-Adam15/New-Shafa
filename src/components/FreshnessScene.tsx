import React, { useRef } from 'react';
import { m, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { BotanicalDivider, LeafCornerMark } from './BotanicalOrnament';
import { ResponsiveImage } from './ResponsiveImage';

const FRESH_ITEMS = ['فتوش وتبولة', 'سلطة جرجير', 'طرشي ويالنجي', 'ليمون ونعناع'];

export const FreshnessScene: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.4,
  });

  const mainImageY = useTransform(smoothProgress, [0, 1], ['26px', '-26px']);
  const mainImageRotate = useTransform(smoothProgress, [0, 1], [-1.5, 1.5]);
  const topRightY = useTransform(smoothProgress, [0, 1], ['-16px', '20px']);
  const bottomRightY = useTransform(smoothProgress, [0, 1], ['20px', '-20px']);
  const leafY = useTransform(smoothProgress, [0, 1], ['-32px', '32px']);
  const leafRotate = useTransform(smoothProgress, [0, 1], [170, 192]);

  return (
    <section
      id="freshness"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F5F0E6] py-20 text-[#171615] sm:py-28"
    >
      <m.div
        aria-hidden="true"
        style={prefersReducedMotion ? undefined : { y: leafY, rotate: leafRotate }}
        className="pointer-events-none absolute -top-8 -left-8 z-0 will-change-transform"
      >
        <LeafCornerMark className="h-52 w-52 text-[#C69A63]/28" />
      </m.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* High-Res Multi-Depth Parallax Freshness Visual Composition */}
          <div className="grid grid-cols-12 items-stretch gap-4 sm:gap-5 lg:col-span-7">
            <m.div
              data-cursor="dish"
              style={
                prefersReducedMotion
                  ? undefined
                  : { y: mainImageY, rotate: mainImageRotate }
              }
              initial={{ clipPath: 'inset(10% 0% 0% 0%)', opacity: 0.4 }}
              whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group col-span-7 overflow-hidden rounded-3xl border border-[#171615]/8 bg-[#D8D0C4] shadow-[0_20px_44px_rgba(23,22,21,0.1)] will-change-transform"
            >
              <ResponsiveImage
                src="/assets/official/Zohoor-Al-Shafa-Salad-scaled.jpg"
                alt="سلطة فتوش طازجة بالخبز المحمص والليمون في مطعم زهور الشفاء"
                sizes="(max-width: 1024px) 58vw, 35vw"
                className="h-full min-h-[320px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
              />
            </m.div>

            <div className="col-span-5 flex flex-col gap-4 sm:gap-5">
              <m.div
                data-cursor="dish"
                style={prefersReducedMotion ? undefined : { y: topRightY }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex-1 overflow-hidden rounded-3xl border border-[#171615]/8 bg-[#D8D0C4] shadow-sm will-change-transform"
              >
                <ResponsiveImage
                  src="/assets/maps/maps_photo_2.jpg"
                  alt="طماطم وبصل مشوي على الفحم فوق البقدونس الطازج والليمون من فرع أبو نصير"
                  sizes="(max-width: 1024px) 42vw, 25vw"
                  className="h-full min-h-[160px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-rotate-1"
                />
              </m.div>

              <m.div
                data-cursor="dish"
                style={prefersReducedMotion ? undefined : { y: bottomRightY }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="group flex-1 overflow-hidden rounded-3xl border border-[#171615]/8 bg-[#D8D0C4] shadow-sm will-change-transform"
              >
                <ResponsiveImage
                  src="/assets/official/ZEY05835-scaled-3.jpg"
                  alt="عصير ليمون ونعناع طازج في مطعم زهور الشفاء"
                  sizes="(max-width: 1024px) 42vw, 25vw"
                  className="h-full min-h-[160px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
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
