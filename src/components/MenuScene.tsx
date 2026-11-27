import React, { useState } from 'react';
import { AnimatePresence, m } from 'motion/react';
import {
  ABU_NSAIR_TAKEAWAY_OFFER,
  MENU_CATEGORIES,
  MenuCategory,
} from '../data/menuData';
import { ResponsiveImage } from './ResponsiveImage';

type ServiceMode = 'dineIn' | 'takeaway';

export const MenuScene: React.FC = () => {
  const [serviceMode, setServiceMode] = useState<ServiceMode>('dineIn');
  const [selectedCategoryId, setSelectedCategoryId] =
    useState<MenuCategory['id']>('grills');

  const activeCategory =
    MENU_CATEGORIES.find((cat) => cat.id === selectedCategoryId) ?? MENU_CATEGORIES[0];
  const activeItems =
    serviceMode === 'dineIn' ? activeCategory.dineInItems : activeCategory.takeawayItems;

  return (
    <section
      id="menu"
      className="bg-[#F5F0E6] py-16 text-[#171615] sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Menu Header & Service Mode Switcher */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#171615]/12 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold text-[#762B35]">
              قائمة الطعام والأسعار · بالدينار الأردني
            </p>
            <h2 className="section-title mt-3 font-display font-bold text-[#171615]">
              منيو مطعم زهور الشفاء
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#4F4942]">
              أسعار معتمدة لطلبات الصالة والسفري عبر القوائم الرسمية للمطعم وعروض فرع أبو نصير.
            </p>
          </div>

          <div
            role="group"
            aria-label="اختيار نوع القائمة"
            className="inline-flex w-full sm:w-auto rounded-full border border-[#171615]/12 bg-[#EBE3D4] p-1.5"
          >
            <button
              type="button"
              onClick={() => setServiceMode('dineIn')}
              className={`relative flex-1 sm:flex-initial inline-flex h-11 items-center justify-center rounded-full px-5 text-sm leading-none whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#762B35] ${
                serviceMode === 'dineIn'
                  ? 'text-[#F5F0E6] font-semibold'
                  : 'text-[#4F4942] font-medium hover:text-[#171615]'
              }`}
            >
              {serviceMode === 'dineIn' && (
                <m.span
                  layoutId="menu-service-pill"
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-[#171615]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">قائمة الصالة</span>
            </button>
            <button
              type="button"
              onClick={() => setServiceMode('takeaway')}
              className={`relative flex-1 sm:flex-initial inline-flex h-11 items-center justify-center rounded-full px-5 text-sm leading-none whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#762B35] ${
                serviceMode === 'takeaway'
                  ? 'text-[#F5F0E6] font-semibold'
                  : 'text-[#4F4942] font-medium hover:text-[#171615]'
              }`}
            >
              {serviceMode === 'takeaway' && (
                <m.span
                  layoutId="menu-service-pill"
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-[#171615]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">قائمة السفري</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="أقسام قائمة الطعام"
          className="mt-6 flex items-center gap-2 overflow-x-auto pb-2"
        >
          {MENU_CATEGORIES.map((category) => {
            const isActive = category.id === selectedCategoryId;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategoryId(category.id)}
                className={`inline-flex h-11 shrink-0 items-center justify-center rounded-full border px-5 text-sm font-medium leading-none whitespace-nowrap transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#762B35] ${
                  isActive
                    ? 'border-[#762B35] bg-[#762B35] text-[#F5F0E6] font-semibold shadow-sm'
                    : 'border-[#171615]/12 bg-[#FAF7F2] text-[#4F4942] hover:border-[#171615]/30 hover:text-[#171615]'
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Editorial Menu Layout */}
        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <m.div
                key={`${serviceMode}-${activeCategory.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl border border-[#171615]/10 bg-[#FAF7F2] p-5 shadow-[0_14px_40px_rgba(23,22,21,0.06)] sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#171615]/10 pb-5">
                  <div>
                    <h3 className="font-display text-xl font-bold leading-snug text-[#171615] sm:text-2xl">
                      {activeCategory.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#575049]">
                      {activeCategory.subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#762B35]">
                    {serviceMode === 'dineIn' ? 'أسعار الصالة' : 'أسعار السفري'}
                  </span>
                </div>

                <ul className="divide-y divide-[#171615]/10">
                  {activeItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-baseline justify-between gap-4 py-4"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-base font-semibold leading-relaxed text-[#171615]">
                          {item.name}
                        </p>
                        {item.description && (
                          <p className="mt-1 text-xs leading-relaxed text-[#575049] sm:text-sm">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <p className="shrink-0 whitespace-nowrap text-left text-base font-bold leading-relaxed tabular-nums text-[#762B35]">
                        <span>{item.price}</span>
                        {item.currency && (
                          <span className="mr-1.5 text-sm font-medium text-[#575049]">
                            {item.currency}
                          </span>
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              </m.div>
            </AnimatePresence>

            {/* Dedicated Abu Nsair Takeaway Offer Card */}
            {serviceMode === 'takeaway' && selectedCategoryId === 'grills' && (
              <m.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 rounded-3xl border border-[#C69A63]/45 bg-[#EBE3D4]/75 p-5 sm:p-8"
              >
                <div className="border-b border-[#171615]/10 pb-4">
                  <h4 className="font-display text-lg font-bold leading-snug text-[#762B35] sm:text-xl">
                    عرض المشاوي والصواني — أبو نصير
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#4F4942]">
                    للسفري فقط · يُرجى التأكد من استمرار العرض عند الطلب
                  </p>
                </div>
                <ul className="divide-y divide-[#171615]/10">
                  {ABU_NSAIR_TAKEAWAY_OFFER.map((offer) => (
                    <li
                      key={offer.id}
                      className="flex items-baseline justify-between gap-4 py-3.5"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-base font-semibold leading-relaxed text-[#171615]">
                          {offer.name}
                        </p>
                        {offer.details && (
                          <p className="mt-0.5 text-xs leading-relaxed text-[#575049] sm:text-sm">
                            {offer.details}
                          </p>
                        )}
                      </div>
                      <p className="shrink-0 whitespace-nowrap text-left text-base font-bold leading-relaxed tabular-nums text-[#762B35]">
                        <span>{offer.price}</span>
                        <span className="mr-1.5 text-sm font-medium text-[#575049]">
                          {offer.currency}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              </m.div>
            )}
          </div>

          {/* Sticky Category Dish Visual Column */}
          <div className="lg:sticky lg:top-24 lg:col-span-5">
            <AnimatePresence mode="wait">
              <m.div
                key={activeCategory.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-3xl border border-[#171615]/10 bg-[#FAF7F2] shadow-[0_14px_40px_rgba(23,22,21,0.08)]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <ResponsiveImage
                    src={activeCategory.previewImage}
                    alt={activeCategory.previewAlt}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="font-display text-lg font-bold leading-snug text-[#171615]">
                    {activeCategory.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#575049]">
                    {activeCategory.subtitle}
                  </p>
                  <p className="mt-4 flex flex-wrap items-center gap-x-1 border-t border-[#171615]/10 pt-3 text-xs leading-relaxed text-[#4F4942]">
                    <span>للتأكد من التوفر اليومي أو الحجز والطلب المسبق، تواصل معنا على الرقم الموحد</span>
                    <a
                      href="tel:065530019"
                      dir="ltr"
                      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md px-2 font-bold text-[#762B35] hover:bg-[#762B35]/10 hover:underline focus-visible:outline-2 focus-visible:outline-[#762B35]"
                    >
                      065530019
                    </a>
                  </p>
                </div>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
