import React, { useState } from 'react';
import { AnimatePresence, m } from 'motion/react';
import { ResponsiveImage } from './ResponsiveImage';

export interface GlassTabItem {
  id: string;
  label: string;
  image?: string;
  alt?: string;
  caption?: string;
}

interface TabsGlassProps {
  tabs: GlassTabItem[];
  backgroundImages?: string[];
  defaultActive?: number;
  layoutId?: string;
  ariaLabel?: string;
  className?: string;
  buttonBgColor?: string;
  buttonHoverBgColor?: string;
  buttonTextColor?: string;
  activeIndicatorBgColor?: string;
}

export const TabsGlass: React.FC<TabsGlassProps> = ({
  tabs,
  backgroundImages = [],
  defaultActive = 0,
  layoutId = 'glass-active',
  ariaLabel = 'استعراض الصور',
  className = 'h-[360px] sm:h-[430px] lg:h-[480px] w-full rounded-2xl',
  buttonBgColor = 'rgba(23, 22, 21, 0.45)',
  buttonHoverBgColor = 'rgba(245, 240, 230, 0.2)',
  buttonTextColor = '#F5F0E6',
  activeIndicatorBgColor = 'rgba(245, 240, 230, 0.28)',
}) => {
  const safeDefault =
    tabs.length > 0 ? Math.min(Math.max(defaultActive, 0), tabs.length - 1) : 0;
  const [active, setActive] = useState(safeDefault);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  if (tabs.length === 0) return null;

  const activeTab = tabs[active % tabs.length];
  const bgImage =
    activeTab.image ??
    backgroundImages[active % Math.max(backgroundImages.length, 1)] ??
    '';
  const bgAlt = activeTab.alt ?? activeTab.label;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setActive((index + 1) % tabs.length);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setActive((index - 1 + tabs.length) % tabs.length);
    }
  };

  return (
    <div
      className={`relative overflow-hidden border border-[#F5F0E6]/10 bg-[#171615] ${className}`}
    >
      {/* Crossfading Responsive Background Visual */}
      <AnimatePresence mode="wait">
        <m.div
          key={`${activeTab.id}-${bgImage}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <ResponsiveImage
            src={bgImage}
            alt={bgAlt}
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="h-full w-full object-cover"
          />
        </m.div>
      </AnimatePresence>

      {/* Subtle Readability Gradient Scrim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171615]/88 via-[#171615]/25 to-[#171615]/15"
      />

      {/* Bottom Overlay Stack: Caption + Glassmorphic Floating Pill Tabs */}
      <div className="pointer-events-none absolute inset-x-3 bottom-3 z-10 flex flex-col items-center gap-2.5 sm:inset-x-6 sm:bottom-4 sm:gap-3">
        {activeTab.caption && (
          <AnimatePresence mode="wait">
            <m.p
              key={activeTab.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-lg rounded-xl border border-[#F5F0E6]/12 bg-[#171615]/70 px-3.5 py-2 text-center text-xs font-medium leading-relaxed text-[#F5F0E6] backdrop-blur-md sm:px-4 sm:text-sm"
            >
              {activeTab.caption}
            </m.p>
          </AnimatePresence>
        )}

        <div
          role="tablist"
          aria-label={ariaLabel}
          className="pointer-events-auto flex flex-wrap items-center justify-center gap-1.5 sm:gap-2"
        >
          {tabs.map((tab, i) => {
            const isActive = active === i;
            const isHovered = hoveredIdx === i;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative inline-flex min-h-[44px] min-w-[44px] items-center justify-center overflow-hidden rounded-full border border-[#F5F0E6]/20 px-3.5 py-2 text-xs font-bold leading-none backdrop-blur-md transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C69A63] sm:px-5 sm:text-sm"
                style={{
                  color: buttonTextColor,
                  backgroundColor: isHovered && !isActive ? buttonHoverBgColor : buttonBgColor,
                }}
              >
                {isActive && (
                  <m.span
                    layoutId={layoutId}
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full border border-[#C69A63]/55"
                    style={{ backgroundColor: activeIndicatorBgColor }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
