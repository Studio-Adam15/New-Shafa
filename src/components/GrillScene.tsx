import React, { useEffect, useRef, useState } from 'react';
import { Camera, ExternalLink, Flame, Play, X } from 'lucide-react';
import {
  AnimatePresence,
  m,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { VERIFIED_VIDEOS, VerifiedVideo } from '../data/restaurantMedia';
import { ResponsiveImage } from './ResponsiveImage';

export const GrillScene: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VerifiedVideo | null>(null);
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

  const panY = useTransform(smoothProgress, [0, 1], ['16px', '-16px']);
  const saladY = useTransform(smoothProgress, [0, 1], ['-14px', '18px']);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeVideo]);

  return (
    <section
      id="grill"
      ref={sectionRef}
      className="bg-[#F5F0E6] py-12 text-[#171615] sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 4-Column Architectural Checkerboard Strip matching editorial reference */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Charcoal Grill + Video Modal Trigger */}
          <m.div
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-3xl border border-[#171615]/10 bg-[#EBE3D4] p-6 sm:p-7"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#762B35]">
                <Flame className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>تجربة الشواء</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-[#171615]">
                على الفحم… بتبدأ الحكاية.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4F4942]">
                بين حرارة الجمر ولهب المطبخ المفتوح، تُشوى أسياخ الكباب والشقف والشيش طاووق والريش لتصل طاولتك ساخنة.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveVideo(VERIFIED_VIDEOS[0])}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#171615] px-5 text-xs font-semibold leading-none text-[#F5F0E6] whitespace-nowrap transition-all duration-200 hover:scale-[1.03] hover:bg-[#762B35] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#762B35] sm:text-sm"
              >
                <Play className="h-3.5 w-3.5 fill-current shrink-0" aria-hidden="true" />
                <span>شاهد الفيديوهات</span>
              </button>
            </div>
          </m.div>

          {/* Card 2: Live Copper Pan Photo */}
          <m.div
            data-cursor="dish"
            style={prefersReducedMotion ? undefined : { y: panY }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group relative min-h-[260px] overflow-hidden rounded-3xl border border-[#171615]/10 bg-[#171615] will-change-transform"
          >
            <ResponsiveImage
              src="/assets/official/Zohoor-Al-Shafa-Pan-scaled.jpg"
              alt="شيف مطعم زهور الشفاء يحضر القلايات والمشاوي على اللهب المباشر"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
            />
          </m.div>

          {/* Card 3: Gallery Intro + Anchor CTA */}
          <m.div
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-3xl border border-[#171615]/10 bg-[#EBE3D4] p-6 sm:p-7"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#762B35]">
                <Camera className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>من مطبخنا</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-[#171615]">
                معرض الصور
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4F4942]">
                تشكيلة لقطات حقيقية لأطباق المشاوي، التواصي، القلايات النحاسية، والسلطات اليومية في فرع أبو نصير.
              </p>
            </div>

            <div className="mt-6">
              <a
                href="#gallery"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#171615] px-5 text-xs font-semibold leading-none text-[#F5F0E6] whitespace-nowrap transition-all duration-200 hover:scale-[1.03] hover:bg-[#762B35] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[#762B35] sm:text-sm"
              >
                <span>استكشف المعرض</span>
              </a>
            </div>
          </m.div>

          {/* Card 4: Fresh Salad & Mezze Photo */}
          <m.div
            data-cursor="dish"
            style={prefersReducedMotion ? undefined : { y: saladY }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="group relative min-h-[260px] overflow-hidden rounded-3xl border border-[#171615]/10 bg-[#171615] will-change-transform"
          >
            <ResponsiveImage
              src="/assets/official/Zohoor-Al-Shafa-Salad-scaled.jpg"
              alt="سلطة فتوش طازجة بالخبز المحمص والليمون في مطعم زهور الشفاء"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-rotate-1"
            />
          </m.div>
        </div>
      </div>

      {/* Verified Video Modal with Video Switcher for Both Real Restaurant Videos */}
      <AnimatePresence>
        {activeVideo && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={activeVideo.title}
          >
            <m.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl overflow-hidden rounded-2xl border border-[#F5F0E6]/15 bg-[#171615] text-[#F5F0E6]"
            >
              <div className="flex items-center justify-between border-b border-[#F5F0E6]/10 px-5 py-4">
                <div>
                  <h3 className="font-display text-base font-semibold text-[#F5F0E6]">
                    {activeVideo.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-[#B9B2A8]">{activeVideo.sourceLabel}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  aria-label="إغلاق مشغل الفيديو"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#F5F0E6]/15 text-[#F5F0E6] hover:border-[#C69A63]"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              {/* Switch between both verified videos */}
              <div className="flex flex-wrap gap-2 border-b border-[#F5F0E6]/10 bg-[#24211F] px-5 py-2.5">
                {VERIFIED_VIDEOS.map((video) => {
                  const isSelected = video.id === activeVideo.id;
                  return (
                    <button
                      key={video.id}
                      type="button"
                      onClick={() => setActiveVideo(video)}
                      className={`inline-flex h-11 items-center gap-2 rounded-full px-4 text-xs font-medium transition-colors ${
                        isSelected
                          ? 'bg-[#C69A63] text-[#171615] font-semibold'
                          : 'border border-[#F5F0E6]/15 text-[#D8D0C4] hover:border-[#C69A63]'
                      }`}
                    >
                      <Play className="h-3 w-3 fill-current shrink-0" aria-hidden="true" />
                      <span>{video.title}</span>
                    </button>
                  );
                })}
              </div>

              <div className="aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>

              <div className="flex items-center justify-between px-5 py-2 text-xs text-[#B9B2A8]">
                <span>مصدر الفيديو العام</span>
                <a
                  href={activeVideo.watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-1.5 px-2 text-[#C69A63] hover:underline"
                >
                  <span>مشاهدة على YouTube</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
};
