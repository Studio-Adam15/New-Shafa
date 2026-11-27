import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantMedia';

interface HeroSlide {
  id: string;
  src: string;
  mobileSrc?: string;
  alt: string;
  eyebrow: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'charcoal-grills',
    src: '/assets/official/ZEY00229-1-scaled-3.jpg',
    mobileSrc: '/assets/official/MG_6662-scaled.jpg',
    alt: 'مشاوي مطعم زهور الشفاء فوق جمر الفحم المتوهج',
    eyebrow: 'أبو نصير — عمّان، الأردن · مشاوي على الفحم',
  },
  {
    id: 'feast-spread',
    src: '/assets/official/33-e1777529433615.jpg',
    alt: 'تشكيلة المشاوي المشكلة والكبة والمقبلات الطازجة في مطعم زهور الشفاء',
    eyebrow: 'أبو نصير — عمّان، الأردن · موائد ومقبلات يومية',
  },
  {
    id: 'pan-flames',
    src: '/assets/official/Zohoor-Al-Shafa-Pan-scaled.jpg',
    alt: 'تحضير القلايات الساخنة على اللهب المباشر في مطبخ زهور الشفاء',
    eyebrow: 'أبو نصير — عمّان، الأردن · قلايات وصواني ساخنة',
  },
];

export const HeroScene: React.FC = () => {
  const [slideIdx, setSlideIdx] = useState(0);
  const currentSlide = HERO_SLIDES[slideIdx];

  const prevSlide = () =>
    setSlideIdx((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const nextSlide = () =>
    setSlideIdx((prev) => (prev + 1) % HERO_SLIDES.length);

  return (
    <section
      id="hero"
      className="relative bg-[#F5F0E6] pt-24 pb-8 sm:pt-28 sm:pb-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center gap-3 lg:gap-5">
          {/* Desktop Previous Slide Arrow (Right side in RTL) */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="الصورة السابقة"
            className="hidden lg:inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#171615]/15 bg-[#EBE3D4]/75 text-[#171615] transition-colors hover:border-[#762B35] hover:bg-[#171615] hover:text-[#F5F0E6] focus-visible:outline-2 focus-visible:outline-[#762B35]"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Framed Architectural Showcase Banner */}
          <div className="relative min-h-[500px] w-full flex-1 overflow-hidden rounded-3xl border border-[#171615]/12 bg-[#171615] shadow-[0_24px_60px_rgba(23,22,21,0.16)] sm:min-h-[560px] lg:min-h-[600px] lg:rounded-[2rem]">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === slideIdx;
              const baseDesktop = slide.src.slice(0, -4);
              const baseMobile = slide.mobileSrc ? slide.mobileSrc.slice(0, -4) : null;

              return (
                <div
                  key={slide.id}
                  aria-hidden={!isActive}
                  className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                    isActive ? 'opacity-100' : 'pointer-events-none opacity-0'
                  }`}
                >
                  <picture>
                    {baseMobile && (
                      <>
                        <source
                          media="(max-width: 639px)"
                          type="image/webp"
                          srcSet={`${baseMobile}-800w.webp`}
                        />
                        <source
                          media="(max-width: 639px)"
                          srcSet={slide.mobileSrc}
                        />
                      </>
                    )}
                    <source
                      type="image/webp"
                      srcSet={`${baseDesktop}-800w.webp 800w, ${baseDesktop}-1440w.webp 1440w`}
                      sizes="(max-width: 1280px) 100vw, 1160px"
                    />
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className={`h-full w-full object-cover object-center ${
                        idx === 0 ? 'animate-ken-burns' : ''
                      }`}
                      referrerPolicy="no-referrer"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      fetchPriority={idx === 0 ? 'high' : 'low'}
                    />
                  </picture>
                </div>
              );
            })}

            {/* Measured Contrast Scrims */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171615]/92 via-[#171615]/48 to-[#171615]/35" />
            <div className="pointer-events-none absolute inset-0 bg-radial from-[#171615]/45 via-transparent to-transparent" />

            {/* Editorial Typography & Primary Actions */}
            <div className="relative z-10 flex min-h-[500px] flex-col items-center justify-center px-6 py-12 text-center sm:min-h-[560px] sm:px-12 lg:min-h-[600px]">
              <p className="mb-3 text-xs font-semibold text-[#D7B485] sm:text-sm animate-hero-fade-up">
                {currentSlide.eyebrow}
              </p>

              <h1 className="hero-title max-w-3xl font-display font-extrabold text-[#F5F0E6] text-balance">
                <span
                  style={{ animationDelay: '80ms' }}
                  className="block animate-hero-fade-up"
                >
                  زهور الشفاء
                </span>
                <span
                  style={{ animationDelay: '160ms' }}
                  className="hero-subtitle mt-2 block font-semibold text-[#C69A63] animate-hero-fade-up"
                >
                  {RESTAURANT_INFO.taglineAr}
                </span>
              </h1>

              <p
                style={{ animationDelay: '240ms' }}
                className="mt-4 max-w-xl text-sm leading-relaxed text-[#F5F0E6]/90 sm:text-lg animate-hero-fade-up"
              >
                من المشاوي على الفحم، للمذاق اللي بتحبه وبتتذكره.
              </p>

              <div
                style={{ animationDelay: '320ms' }}
                className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 animate-hero-fade-up"
              >
                <a
                  href="#menu"
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#C69A63] px-7 text-sm font-semibold leading-none text-[#171615] whitespace-nowrap transition-all duration-200 hover:bg-[#D7B485] active:scale-[0.98] sm:text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0E6]"
                >
                  <UtensilsCrossed className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>اكتشف المنيو</span>
                </a>

                <a
                  href="#location"
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-[#F5F0E6]/35 bg-[#171615]/55 px-7 text-sm font-medium leading-none text-[#F5F0E6] whitespace-nowrap backdrop-blur-md transition-all duration-200 hover:border-[#C69A63] hover:text-[#C69A63] active:scale-[0.98] sm:text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C69A63]"
                >
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>موقع المطعم</span>
                </a>
              </div>

              {/* Slide Controls (Mobile arrows + accessible dot indicators) */}
              <div className="mt-8 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="الصورة السابقة"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#F5F0E6]/25 bg-[#171615]/60 text-[#F5F0E6] backdrop-blur-md transition-colors hover:border-[#C69A63] hover:text-[#C69A63] lg:hidden focus-visible:outline-2 focus-visible:outline-[#C69A63]"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <div className="flex items-center gap-1.5" role="group" aria-label="اختيار صورة العرض">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setSlideIdx(idx)}
                      aria-label={`عرض الصورة ${idx + 1}`}
                      aria-pressed={idx === slideIdx}
                      className="inline-flex h-11 w-8 items-center justify-center focus-visible:outline-2 focus-visible:outline-[#C69A63] rounded-full"
                    >
                      <span
                        className={`block h-1.5 rounded-full transition-all duration-300 ${
                          idx === slideIdx
                            ? 'w-7 bg-[#C69A63]'
                            : 'w-2 bg-[#F5F0E6]/45 hover:bg-[#F5F0E6]/75'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="الصورة التالية"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#F5F0E6]/25 bg-[#171615]/60 text-[#F5F0E6] backdrop-blur-md transition-colors hover:border-[#C69A63] hover:text-[#C69A63] lg:hidden focus-visible:outline-2 focus-visible:outline-[#C69A63]"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Next Slide Arrow (Left side in RTL) */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="الصورة التالية"
            className="hidden lg:inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#171615]/15 bg-[#EBE3D4]/75 text-[#171615] transition-colors hover:border-[#762B35] hover:bg-[#171615] hover:text-[#F5F0E6] focus-visible:outline-2 focus-visible:outline-[#762B35]"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
