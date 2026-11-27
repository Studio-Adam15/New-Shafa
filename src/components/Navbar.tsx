import React, { useEffect, useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantMedia';

const NAV_LINKS = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'عن المطعم', href: '#about' },
  { label: 'على الفحم', href: '#grill' },
  { label: 'المنيو', href: '#menu' },
  { label: 'معرض الصور', href: '#gallery' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let rafId = 0;
    const updateScroll = () => {
      rafId = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? Math.min(1, Math.max(0, y / maxScroll)) : 0);
    };
    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    updateScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F0E6]/92 backdrop-blur-md border-b border-[#171615]/10 shadow-sm shadow-[#171615]/5'
            : 'bg-[#F5F0E6]/85 backdrop-blur-sm border-b border-[#171615]/8'
        }`}
      >
        <div
          style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: 'right' }}
          className="h-[2px] w-full bg-[#762B35] transition-transform duration-75"
          aria-hidden="true"
        />

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:gap-8 sm:px-6 lg:px-8">
          {/* Zone 1: Circular Crest Emblem + Single-Line Brand Wordmark */}
          <a
            href="#hero"
            className="flex min-h-[44px] items-center gap-3 whitespace-nowrap shrink-0 rounded-sm py-1 leading-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#762B35]"
            aria-label="مطعم زهور الشفاء — العودة للأعلى"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C69A63]/60 bg-[#171615] p-1.5 shadow-sm">
              <img
                src={RESTAURANT_INFO.officialLogo}
                alt="شعار مطعم زهور الشفاء"
                width={28}
                height={34}
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </span>
            <span className="font-display text-base font-bold leading-none text-[#171615] sm:text-lg">
              زهور الشفاء
            </span>
          </a>

          {/* Zone 2: Clean Editorial Nav Links */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-4 lg:gap-7 text-sm font-medium text-[#171615]/80"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative inline-flex min-h-[44px] min-w-[44px] items-center justify-center px-2 leading-none whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#762B35] after:absolute after:bottom-2 after:right-2 after:h-px after:w-0 after:bg-[#762B35] after:transition-all after:duration-200 hover:after:w-[calc(100%-1rem)]"
              >
                <span className="relative inline-flex overflow-hidden py-0.5">
                  <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                    {item.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 inline-flex items-center justify-center translate-y-full text-[#762B35] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"
                  >
                    {item.label}
                  </span>
                </span>
              </a>
            ))}
          </nav>

          {/* Zone 3: Pill-Bordered Editorial Primary Action + Mobile Drawer Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#location"
              className="hidden sm:inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#171615]/28 bg-transparent px-5 text-sm font-semibold leading-none text-[#171615] whitespace-nowrap shrink-0 transition-all duration-200 hover:border-[#171615] hover:bg-[#171615] hover:text-[#F5F0E6] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762B35]"
            >
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>موقع المطعم</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="فتح قائمة التنقل"
              aria-expanded={mobileOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#171615]/20 bg-[#EBE3D4]/70 text-[#171615] transition-colors hover:border-[#762B35] md:hidden focus-visible:outline-2 focus-visible:outline-[#762B35]"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* RTL Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#171615]/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <aside
            onClick={(e) => e.stopPropagation()}
            className="fixed top-0 right-0 bottom-0 flex w-72 max-w-[84vw] flex-col justify-between border-l border-[#171615]/12 bg-[#F5F0E6] p-6 text-[#171615]"
            aria-label="القائمة الجانبية"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#171615]/10 pb-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C69A63]/50 bg-[#171615] p-1.5">
                    <img
                      src={RESTAURANT_INFO.officialLogo}
                      alt="شعار مطعم زهور الشفاء"
                      width={24}
                      height={30}
                      className="h-full w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </span>
                  <span className="font-display text-base font-bold leading-none text-[#171615]">
                    زهور الشفاء
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="إغلاق القائمة"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#171615]/15 text-[#171615] hover:border-[#762B35]"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="التنقل على الجوال" className="mt-6 flex flex-col gap-1.5">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex h-11 items-center rounded-xl px-3.5 text-base font-medium text-[#171615]/85 transition-colors hover:bg-[#EBE3D4] hover:text-[#762B35]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-3 border-t border-[#171615]/10 pt-5">
              <p className="text-xs text-[#575049]">{RESTAURANT_INFO.districtAr}</p>
              <a
                href="#location"
                onClick={() => setMobileOpen(false)}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#171615] px-4 text-sm font-semibold text-[#F5F0E6] hover:bg-[#762B35]"
              >
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>موقع المطعم والاتجاهات</span>
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};
