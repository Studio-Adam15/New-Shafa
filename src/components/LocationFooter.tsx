import React from 'react';
import { ExternalLink, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { m } from 'motion/react';
import { RESTAURANT_INFO } from '../data/restaurantMedia';

export const LocationFooter: React.FC = () => {
  return (
    <footer
      id="location"
      className="relative overflow-hidden border-t border-[#171615]/12 bg-[#EBE3D4] pt-16 pb-10 text-[#171615] sm:pt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Clean 4-Column Architectural Footer + Embedded Map Card */}
        <m.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12"
        >
          {/* Column 1: Contact + 3 Circular Dark Icon Buttons */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-bold text-[#762B35]">
              تواصل معنا
            </h2>
            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-[#4F4942]">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#762B35]" aria-hidden="true" />
              <span>{RESTAURANT_INFO.addressDetailAr}</span>
            </p>

            <div className="mt-4 space-y-1 text-sm text-[#171615]">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-[#575049]">الهاتف الموحد</span>
                <a
                  href={`tel:${RESTAURANT_INFO.phones.unified}`}
                  dir="ltr"
                  className="inline-flex min-h-[44px] items-center font-semibold tabular-nums hover:text-[#762B35] focus-visible:outline-2 focus-visible:outline-[#762B35]"
                >
                  {RESTAURANT_INFO.phones.unified}
                </a>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-[#575049]">هاتف فرع أبو نصير</span>
                <a
                  href={`tel:${RESTAURANT_INFO.phones.branch}`}
                  dir="ltr"
                  className="inline-flex min-h-[44px] items-center font-semibold tabular-nums hover:text-[#762B35] focus-visible:outline-2 focus-visible:outline-[#762B35]"
                >
                  {RESTAURANT_INFO.phones.branch}
                </a>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={`tel:${RESTAURANT_INFO.phones.unified}`}
                aria-label="اتصل بالمطعم"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#171615] text-[#F5F0E6] transition-colors hover:bg-[#762B35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762B35]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={RESTAURANT_INFO.phones.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تواصل عبر واتساب"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#171615] text-[#F5F0E6] transition-colors hover:bg-[#762B35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762B35]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={RESTAURANT_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="احصل على الاتجاهات على خرائط جوجل"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#171615] text-[#F5F0E6] transition-colors hover:bg-[#762B35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#762B35]"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-sm font-bold text-[#762B35]">
              أقسام الموقع
            </h2>
            <nav aria-label="روابط سريعة" className="mt-4 flex flex-col items-start gap-1 text-sm text-[#4F4942]">
              <a
                href="#hero"
                className="inline-flex min-h-[44px] items-center hover:text-[#171615] transition-colors focus-visible:outline-2 focus-visible:outline-[#762B35]"
              >
                الرئيسية
              </a>
              <a
                href="#about"
                className="inline-flex min-h-[44px] items-center hover:text-[#171615] transition-colors focus-visible:outline-2 focus-visible:outline-[#762B35]"
              >
                عن المطعم
              </a>
              <a
                href="#grill"
                className="inline-flex min-h-[44px] items-center hover:text-[#171615] transition-colors focus-visible:outline-2 focus-visible:outline-[#762B35]"
              >
                على الفحم
              </a>
              <a
                href="#menu"
                className="inline-flex min-h-[44px] items-center hover:text-[#171615] transition-colors focus-visible:outline-2 focus-visible:outline-[#762B35]"
              >
                المنيو
              </a>
              <a
                href="#gallery"
                className="inline-flex min-h-[44px] items-center hover:text-[#171615] transition-colors focus-visible:outline-2 focus-visible:outline-[#762B35]"
              >
                معرض الصور
              </a>
            </nav>
          </div>

          {/* Column 3: Services & Verified Google Maps Links */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-bold text-[#762B35]">
              الخدمات والمواقع
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-[#4F4942]">
              <li>صالة عائلية — فرع أبو نصير</li>
              <li>طلبات السفري والعروض اليومية</li>
              <li>تواصي الولائم والمناسبات</li>
            </ul>

            <div className="mt-5 flex flex-col gap-2">
              {RESTAURANT_INFO.mapsLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-between gap-2 rounded-xl border border-[#171615]/12 bg-[#FAF7F2] px-3.5 py-2 text-xs font-semibold text-[#171615] transition-colors hover:border-[#762B35] hover:text-[#762B35] focus-visible:outline-2 focus-visible:outline-[#762B35]"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Rounded Embedded Google Map Card */}
          <div className="flex flex-col gap-3 lg:col-span-4">
            <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-[#171615]/12 bg-[#FAF7F2] shadow-sm sm:h-56">
              <iframe
                title="موقع مطعم زهور الشفاء — أبو نصير على خرائط جوجل"
                src={`https://maps.google.com/maps?q=${RESTAURANT_INFO.coordinates.lat},${RESTAURANT_INFO.coordinates.lng}&z=16&output=embed&hl=ar`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>

            <a
              href={RESTAURANT_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#171615] px-5 text-sm font-semibold leading-none text-[#F5F0E6] transition-colors hover:bg-[#762B35] focus-visible:outline-2 focus-visible:outline-[#762B35]"
            >
              <Navigation className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>احصل على الاتجاهات</span>
            </a>
          </div>
        </m.div>

        {/* Bottom Copyright & Brand Seal */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#171615]/10 pt-7 text-xs text-[#4F4942] sm:flex-row">
          <div className="flex items-center gap-3 shrink-0">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C69A63]/50 bg-[#171615] p-1.5">
              <img
                src={RESTAURANT_INFO.officialLogo}
                alt="شعار مطعم زهور الشفاء"
                width={24}
                height={30}
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </span>
            <span className="font-semibold text-[#171615]">
              مطعم زهور الشفاء — أبو نصير، عمّان
            </span>
          </div>

          <p className="whitespace-nowrap">
            © {new Date().getFullYear()} مطعم زهور الشفاء — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};
