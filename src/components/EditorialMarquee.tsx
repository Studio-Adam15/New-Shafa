import React from 'react';

const MARQUEE_PHRASES = [
  'لحوم بلدية طازجة',
  'مشاوي على الفحم',
  'قلايات ساخنة',
  'سلطات ومقبلات يومية',
  'صالة وسفري وتواصي',
  'أبو نصير — عمّان',
];

export const EditorialMarquee: React.FC = () => {
  const repeated = [
    ...MARQUEE_PHRASES,
    ...MARQUEE_PHRASES,
    ...MARQUEE_PHRASES,
    ...MARQUEE_PHRASES,
  ];

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-[#171615]/10 bg-[#171615] py-4 sm:py-5 select-none"
    >
      <div className="flex w-max items-center animate-marquee-rtl">
        {repeated.map((phrase, idx) => (
          <div key={idx} className="flex shrink-0 items-center">
            <span className="px-5 font-display text-lg font-semibold tracking-normal text-[#F5F0E6]/90 sm:px-7 sm:text-2xl">
              {phrase}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#C69A63]" />
          </div>
        ))}
      </div>
    </div>
  );
};
