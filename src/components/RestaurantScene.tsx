import React from 'react';
import { m } from 'motion/react';
import { BotanicalDivider } from './BotanicalOrnament';
import { GlassTabItem, TabsGlass } from './TabsGlass';

const RESTAURANT_SPACES: GlassTabItem[] = [
  {
    id: 'facade',
    label: 'الواجهة المسائية',
    image: '/assets/official/11.jpg',
    alt: 'الواجهة الخارجية لمطعم زهور الشفاء مع الإضاءة الذهبية المسائية',
    caption: 'الواجهة الخارجية المضاءة في فرع أبو نصير لاستقبالكم مساءً',
  },
  {
    id: 'entrance',
    label: 'المدخل المعماري',
    image: '/assets/official/009.jpg',
    alt: 'المدخل المعماري لمطعم زهور الشفاء وشعار المطعم ليلاً',
    caption: 'تصميم معماري دافئ يرحب بكم منذ لحظة الوصول',
  },
  {
    id: 'hall',
    label: 'صالة الولائم',
    image: '/assets/official/Zohoor-Al-Shafa-Stuffed-lamb-scaled.jpg',
    alt: 'صالة الضيافة الداخلية في مطعم زهور الشفاء مع تقديم الولائم',
    caption: 'موائد عامرة بالولائم والخاروف المحشي لجمعات العائلة والأصدقاء',
  },
];

export const RestaurantScene: React.FC = () => {
  return (
    <section
      id="restaurant"
      className="bg-[#F5F0E6] py-16 text-[#171615] sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Editorial Text */}
          <m.div
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-semibold text-[#762B35]">
              المطعم والأجواء
            </p>

            <h2 className="section-title mt-3 font-display font-bold text-[#171615]">
              مكان بتجمع فيه الناس، وبتضل فيه الذكريات.
            </h2>

            <p className="mt-6 text-base leading-[1.9] text-[#4F4942] sm:text-lg">
              واجهة معمارية دافئة وإضاءة مسائية هادئة تقودك إلى صالة رحبة مهيأة لجمعات العائلة والأصدقاء حول موائد المشاوي الساخنة والولائم الشرقية.
            </p>

            <BotanicalDivider className="mt-8 justify-start text-[#762B35]" />

            <div className="mt-7 space-y-2 text-sm font-medium text-[#4F4942]">
              <p>عمّان — أبو نصير، بالقرب من مدينة الجبيهة الترويحية</p>
              <p>جلسات عائلية · استقبال وطلبات سفري · تواصي</p>
            </div>
          </m.div>

          {/* Interactive Glassmorphic Tabbed Space Showcase */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <TabsGlass
              tabs={RESTAURANT_SPACES}
              layoutId="restaurant-space-glass"
              ariaLabel="استعراض مرافق وأجواء مطعم زهور الشفاء"
              className="h-[360px] w-full rounded-2xl sm:h-[440px] lg:h-[500px]"
            />
          </m.div>
        </div>
      </div>
    </section>
  );
};

