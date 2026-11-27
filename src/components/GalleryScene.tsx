import React, { useEffect, useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { AnimatePresence, m } from 'motion/react';
import { GALLERY_PHOTOS } from '../data/restaurantMedia';
import { ResponsiveImage } from './ResponsiveImage';

export const GalleryScene: React.FC = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIdx((prev) => (prev === null ? null : (prev + 1) % GALLERY_PHOTOS.length));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIdx((prev) =>
          prev === null ? null : (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
        );
      }
    };

    if (lightboxIdx !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxIdx]);

  const activePhoto = lightboxIdx !== null ? GALLERY_PHOTOS[lightboxIdx] : null;

  return (
    <section
      id="gallery"
      className="bg-[#F5F0E6] py-12 text-[#F5F0E6] sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#171615]/12 bg-[#171615] p-6 shadow-[0_20px_50px_rgba(23,22,21,0.12)] sm:p-10 lg:rounded-[2rem] lg:p-12">
          <div className="flex flex-col justify-between gap-6 border-b border-[#F5F0E6]/10 pb-8 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C69A63]">
                <Camera className="h-4 w-4" aria-hidden="true" />
                <span>معرض الصور المختار</span>
              </div>
              <h2 className="section-title mt-3 font-display font-bold text-[#F5F0E6]">
                لقطات حقيقية من مطعم زهور الشفاء
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#D8D0C4]">
              تشكيلة مختارة بدقة عالية لأطباق المشاوي، التواصي، والمقبلات. اضغط على أي صورة للتكبير.
            </p>
          </div>

          {/* Asymmetrical Editorial Gallery Grid */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[235px]">
          {GALLERY_PHOTOS.map((photo, index) => (
            <m.button
              key={photo.id}
              type="button"
              onClick={() => setLightboxIdx(index)}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-2xl border border-[#F5F0E6]/10 bg-[#24211F] text-right focus-visible:outline-2 focus-visible:outline-[#C69A63] ${photo.spanClass} ${photo.aspectClass}`}
            >
              <ResponsiveImage
                src={photo.src}
                alt={photo.alt}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171615]/92 via-[#171615]/20 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-3 bottom-3 rounded-xl border border-[#F5F0E6]/10 bg-[#171615]/60 p-3.5 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-0.5 sm:inset-x-4 sm:bottom-4 sm:p-4">
                <span className="block text-xs font-medium leading-normal text-[#C69A63]">
                  {photo.category}
                </span>
                <p className="mt-1 font-display text-sm font-semibold leading-snug text-[#F5F0E6] sm:text-base">
                  {photo.caption}
                </p>
              </div>
            </m.button>
          ))}
        </div>
        </div>
      </div>

      {/* Lightbox Modal with Animated Transitions */}
      <AnimatePresence>
        {activePhoto && lightboxIdx !== null && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.caption}
          >
            <m.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-[#F5F0E6]/15 bg-[#171615]"
            >
              <div className="flex items-center justify-between border-b border-[#F5F0E6]/10 px-5 py-3.5">
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-semibold text-[#C69A63]">{activePhoto.category}</span>
                  <span aria-hidden="true" className="text-[#B9B2A8]/50">·</span>
                  <span className="tabular-nums text-xs text-[#D8D0C4]">
                    {lightboxIdx + 1} / {GALLERY_PHOTOS.length}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxIdx(null)}
                  aria-label="إغلاق المعرض"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#F5F0E6]/15 text-[#F5F0E6] hover:border-[#C69A63]"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="relative flex max-h-[72vh] items-center justify-center bg-[#121110] p-3 sm:p-6">
                <AnimatePresence mode="wait">
                  <m.div
                    key={activePhoto.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="flex max-h-[65vh] items-center justify-center"
                  >
                    <ResponsiveImage
                      src={activePhoto.src}
                      alt={activePhoto.alt}
                      loading="eager"
                      sizes="(max-width: 768px) 95vw, 900px"
                      className="max-h-[65vh] w-auto rounded-lg object-contain"
                    />
                  </m.div>
                </AnimatePresence>

                <button
                  type="button"
                  onClick={() =>
                    setLightboxIdx(
                      (lightboxIdx - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
                    )
                  }
                  aria-label="الصورة السابقة"
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#F5F0E6]/20 bg-[#171615]/85 text-[#F5F0E6] backdrop-blur-sm transition-colors hover:border-[#C69A63] hover:text-[#C69A63]"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => setLightboxIdx((lightboxIdx + 1) % GALLERY_PHOTOS.length)}
                  aria-label="الصورة التالية"
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#F5F0E6]/20 bg-[#171615]/85 text-[#F5F0E6] backdrop-blur-sm transition-colors hover:border-[#C69A63] hover:text-[#C69A63]"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="border-t border-[#F5F0E6]/10 px-5 py-3.5">
                <p className="font-display text-sm font-semibold text-[#F5F0E6] sm:text-base">
                  {activePhoto.caption}
                </p>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
};
