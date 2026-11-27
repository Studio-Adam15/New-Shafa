export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
  spanClass: string;
  aspectClass: string;
}

export interface VerifiedVideo {
  id: string;
  youtubeId: string;
  title: string;
  sourceLabel: string;
  watchUrl: string;
  thumbnail: string;
}

export const RESTAURANT_INFO = {
  nameAr: 'زهور الشفاء',
  fullNameAr: 'مطعم زهور الشفاء — أبو نصير',
  nameEn: 'Zohoor AlShifa Restaurant',
  taglineAr: 'الطعم الأصيل… على أصوله.',
  taglineEn: 'A Taste Worth Coming Back For',
  districtAr: 'أبو نصير — عمّان، الأردن',
  addressDetailAr: 'عمّان، أبو نصير — بالقرب من مدينة الجبيهة الترويحية',
  coordinates: {
    lat: 32.0488125,
    lng: 35.8745625,
  },
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=32.0488125,35.8745625',
  mapsLinks: [
    {
      label: 'رابط الموقع الأول على خرائط جوجل',
      url: 'https://maps.app.goo.gl/CYs3Y7LtPrXLg6ce9?g_st=ac',
    },
    {
      label: 'رابط الموقع الثاني على خرائط جوجل',
      url: 'https://maps.app.goo.gl/W7nu9ygEzDkQDksz9?g_st=ac',
    },
  ],
  phones: {
    unified: '065530019',
    branch: '065232304',
    mobile: '0798818871',
    whatsappUrl: 'https://wa.me/962798818871',
  },
  officialLogo: '/assets/official/cropped-Zohoor-Logo-white.png',
};

export const VERIFIED_VIDEOS: VerifiedVideo[] = [
  {
    id: 'grill-video-1',
    youtubeId: 'ecZ967Xu7_8',
    title: 'مشاوي مطعم زهور الشفاء على الطاولة',
    sourceLabel: 'لقطة فيديو حقيقية لمشاوي زهور الشفاء',
    watchUrl: 'https://www.youtube.com/shorts/ecZ967Xu7_8',
    thumbnail: '/assets/official/ZEY00229-1-scaled-3.jpg',
  },
  {
    id: 'grill-video-2',
    youtubeId: 'GuTM6xvf838',
    title: 'جولة داخل مطعم وملحمة زهور الشفاء للمشاوي',
    sourceLabel: 'تقرير مرئي — زهور الشفاء عمّان',
    watchUrl: 'https://www.youtube.com/watch?v=GuTM6xvf838',
    thumbnail: '/assets/official/Zohoor-Al-Shafa-Pan-scaled.jpg',
  },
];

// Curated high-resolution verified photography only
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g-charcoal',
    src: '/assets/official/ZEY00229-1-scaled-3.jpg',
    alt: 'أسياخ الشيش طاووق والمشاوي فوق جمر الفحم المتوهج',
    caption: 'أسياخ الشواء فوق جمر الفحم المتوهج',
    category: 'على الفحم',
    spanClass: 'md:col-span-2 md:row-span-2',
    aspectClass: 'aspect-[4/3] md:aspect-auto md:h-full',
  },
  {
    id: 'g-lemon-arayes',
    src: '/assets/official/MG_6426-scaled-4.jpg',
    alt: 'عرايس باللحم البلدي مع عصرة ليمون طازجة',
    caption: 'عرايس مقرمشة بلمسة الليمون الطازج',
    category: 'التقديم',
    spanClass: 'md:col-span-1 md:row-span-2',
    aspectClass: 'aspect-[3/4] md:aspect-auto md:h-full',
  },
  {
    id: 'g-pan-fire',
    src: '/assets/official/Zohoor-Al-Shafa-Pan-scaled.jpg',
    alt: 'تحضير القلايات الساخنة على اللهب المباشر في مطبخ زهور الشفاء',
    caption: 'القلايات الساخنة على اللهب المباشر',
    category: 'المطبخ',
    spanClass: 'md:col-span-2',
    aspectClass: 'aspect-[16/9] md:aspect-auto md:h-full',
  },
  {
    id: 'g-qouzi',
    src: '/assets/official/002.jpg',
    alt: 'لحم محمر على الأرز الشرقي باللوز مع المرق',
    caption: 'القوزي المحمر بالأرز المتبل واللوز',
    category: 'الوجبات',
    spanClass: 'md:col-span-1',
    aspectClass: 'aspect-[4/5] md:aspect-auto md:h-full',
  },
  {
    id: 'g-feast-table',
    src: '/assets/official/33-e1777529433615.jpg',
    alt: 'سفرة مشاوي مشكلة مع الكبة والبطاطا والمقبلات الطازجة',
    caption: 'تشكيلة المشاوي المشكلة والمقبلات',
    category: 'المشاوي',
    spanClass: 'md:col-span-1',
    aspectClass: 'aspect-[4/3] md:aspect-auto md:h-full',
  },
  {
    id: 'g-stuffed-lamb',
    src: '/assets/official/Zohoor-Al-Shafa-Stuffed-lamb-scaled.jpg',
    alt: 'صينية خاروف محشي بالأرز واللوز في مطعم زهور الشفاء',
    caption: 'ولائم التواصي والخاروف المحشي',
    category: 'التواصي',
    spanClass: 'md:col-span-2',
    aspectClass: 'aspect-[16/10] md:aspect-auto md:h-full',
  },
  {
    id: 'g-copper',
    src: '/assets/official/04.jpg',
    alt: 'طاسة قلاية نحاسية ساخنة مع سلطة الجرجير واللبن بالنعناع',
    caption: 'قلايات نحاسية ساخنة مع الجرجير الطازج',
    category: 'الصواني',
    spanClass: 'md:col-span-1',
    aspectClass: 'aspect-[4/5] md:aspect-auto md:h-full',
  },
  {
    id: 'g-burak',
    src: '/assets/official/Zohoor-Al-Shafa-Burak-scaled.jpg',
    alt: 'برك مقرمشة مقدمة بجانب سدر المشاوي',
    caption: 'البرك المقرمشة مع سدر المشاوي',
    category: 'المقبلات',
    spanClass: 'md:col-span-2',
    aspectClass: 'aspect-[16/9] md:aspect-auto md:h-full',
  },
];
