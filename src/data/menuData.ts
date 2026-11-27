export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  currency: string;
}

export interface MenuCategory {
  id: 'grills' | 'trays' | 'meals' | 'tawasi' | 'appetizers' | 'drinks';
  title: string;
  subtitle: string;
  previewImage: string;
  previewAlt: string;
  dineInItems: MenuItem[];
  takeawayItems: MenuItem[];
}

export interface TakeawaySpecialItem {
  id: string;
  name: string;
  details?: string;
  price: string;
  currency: string;
}

// Verified Abu Nsair takeaway grill & tray offer from supplied menu card
export const ABU_NSAIR_TAKEAWAY_OFFER: TakeawaySpecialItem[] = [
  { id: 'an-shaqaf', name: 'كيلو شقف', price: '22', currency: 'دينار' },
  { id: 'an-kebab', name: 'كيلو كباب', price: '18', currency: 'دينار' },
  { id: 'an-riash', name: 'كيلو ريش', price: '20', currency: 'دينار' },
  { id: 'an-mix-2', name: 'كيلو مشكل', details: 'شقف · كباب', price: '19', currency: 'دينار' },
  { id: 'an-mix-3', name: 'كيلو مشكل', details: 'شقف · كباب · شيش طاووق', price: '17', currency: 'دينار' },
  { id: 'an-kofta', name: 'صينية كفته', details: '250 غرام', price: '5', currency: 'دنانير' },
  { id: 'an-ras-asfour', name: 'صينية راس عصفور', details: '250 غرام', price: '6', currency: 'دنانير' },
];

// Verified official menu categories and prices from zohooralshafa.com/menu & /take-away-menu
export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'grills',
    title: 'المشاوي',
    subtitle: 'مشاوي على الفحم من اللحوم البلدية الطازجة',
    previewImage: '/assets/official/ZEY00229-1-scaled-3.jpg',
    previewAlt: 'أسياخ الشيش طاووق والكباب فوق الفحم المتوهج',
    dineInItems: [
      { id: 'd-mix-1kg', name: 'كيلو مشاوي مشكل', price: '33', currency: 'دينار' },
      { id: 'd-shaqaf-1kg', name: 'كيلو شقف', price: '42', currency: 'دينار' },
      { id: 'd-riash-1kg', name: 'كيلو ريش', price: '38', currency: 'دينار' },
      { id: 'd-kebab-1kg', name: 'كيلو كباب', price: '28', currency: 'دينار' },
      { id: 'd-shish-1kg', name: 'كيلو شيش طاووق', price: '27', currency: 'دينار' },
      { id: 'd-offal-1kg', name: 'كيلو كبدة / كلاوي / قلب / بيض غنم', price: '28', currency: 'دينار' },
      { id: 'd-half-mutaffa', name: 'نصف دجاجة مطفى بالثوم والليمون', price: '8.50', currency: 'دينار' },
      { id: 'd-half-turkish', name: 'نصف دجاج تركي على الفحم', price: '7', currency: 'دنانير' },
      { id: 'd-half-boneless', name: 'نصف دجاج مسحب على الفحم', price: '7', currency: 'دنانير' },
      { id: 'd-brain', name: 'مخ مشوي', price: '5', currency: 'دنانير' },
    ],
    takeawayItems: [
      {
        id: 't-mix-1kg',
        name: 'كيلو مشاوي مشكل',
        description: '6 أسياخ كباب · 3 شقف · 2 شيش طاووق · بصل وبندورة مشوية · خبز',
        price: '25',
        currency: 'دينار',
      },
      {
        id: 't-kebab-1kg',
        name: 'كيلو كباب',
        description: '12 سيخ كباب · بصل وبندورة مشوية · خبز',
        price: '22',
        currency: 'دينار',
      },
      {
        id: 't-shish-1kg',
        name: 'كيلو شيش طاووق',
        description: '8 أسياخ شيش · بصل وبندورة مشوية · خبز',
        price: '22',
        currency: 'دينار',
      },
      {
        id: 't-offal-1kg',
        name: 'كيلو كبدة / كلاوي / قلب / بيض غنم',
        description: '12 سيخ مشوي · بصل وبندورة مشوية · خبز',
        price: '22',
        currency: 'دينار',
      },
      {
        id: 't-mix-500',
        name: 'نصف كيلو مشاوي مشكل',
        description: '2 سيخ كباب · 2 سيخ شقف · سيخ شيش طاووق · بندورة وبصل · خبز',
        price: '12.50',
        currency: 'دينار',
      },
      {
        id: 't-kebab-500',
        name: 'نصف كيلو كباب',
        description: '6 أسياخ كباب · بندورة وبصل · خبز',
        price: '12',
        currency: 'دينار',
      },
      {
        id: 't-shish-500',
        name: 'نصف كيلو شيش طاووق',
        description: '4 أسياخ شيش طاووق · بندورة وبصل · خبز',
        price: '11',
        currency: 'دينار',
      },
      {
        id: 't-offal-500',
        name: 'نصف كيلو كبدة / كلاوي / قلب / بيض غنم',
        description: '6 أسياخ من الصنف المطلوب · بندورة وبصل · خبز',
        price: '12',
        currency: 'دينار',
      },
      {
        id: 't-mix-250',
        name: 'ربع كيلو مشاوي مشكل',
        description: '2 سيخ كباب · 1 سيخ شقف · بندورة وبصل · خبز',
        price: '6.25',
        currency: 'دينار',
      },
      {
        id: 't-kebab-250',
        name: 'ربع كيلو كباب',
        description: '3 أسياخ كباب · بندورة وبصل · خبز',
        price: '6',
        currency: 'دنانير',
      },
      {
        id: 't-shish-250',
        name: 'ربع كيلو شيش طاووق',
        description: '2 سيخ شيش طاووق · بندورة وبصل · خبز',
        price: '5.50',
        currency: 'دينار',
      },
      {
        id: 't-chicken-boneless-full',
        name: 'دجاجة مسحب كاملة على الفحم',
        description: '4 قطع بدون عظم · بصل وبندورة مشوية · مثومة · خبز',
        price: '8',
        currency: 'دنانير',
      },
      {
        id: 't-chicken-turkish-full',
        name: 'دجاجة تركي كاملة على الفحم',
        description: '10 قطع مشوية · بصل وبندورة مشوية · مثومة · خبز',
        price: '7',
        currency: 'دنانير',
      },
      {
        id: 't-chicken-boneless-half',
        name: 'نصف دجاجة مسحب على الفحم',
        description: 'قطعتين بدون عظم · بصل وبندورة مشوية · مثومة · خبز',
        price: '4',
        currency: 'دنانير',
      },
      {
        id: 't-chicken-turkish-half',
        name: 'نصف دجاج تركي على الفحم',
        description: '5 قطع مشوية · بصل وبندورة مشوية · مثومة · خبز',
        price: '3.50',
        currency: 'دينار',
      },
    ],
  },
  {
    id: 'trays',
    title: 'الصواني والقلايات',
    subtitle: 'صواني الفرن والقلايات الساخنة والعرايس',
    previewImage: '/assets/official/04.jpg',
    previewAlt: 'قلاية نحاسية ساخنة مقدمة مع السلطة الطازجة',
    dineInItems: [
      { id: 'd-kofta-tom', name: 'ربع كيلو كفتة بالبندورة', price: '9', currency: 'دنانير' },
      { id: 'd-kofta-tah', name: 'ربع كيلو كفتة بالطحينية', price: '9', currency: 'دنانير' },
      { id: 'd-qalaya-tom', name: 'ربع كيلو قلاية لحمة بالبندورة', price: '9', currency: 'دنانير' },
      { id: 'd-qalaya-oni', name: 'ربع كيلو قلاية لحمة بالبصل', price: '9', currency: 'دنانير' },
      { id: 'd-qalaya-hum', name: 'ربع كيلو قلاية حمص باللحمة', price: '9', currency: 'دنانير' },
      { id: 'd-qalaya-off', name: 'ربع كيلو قلاية كبدة / كلاوي / قلب / بيض غنم', price: '9', currency: 'دنانير' },
      { id: 'd-arayes', name: 'عرايس (قطعة واحدة)', price: '2.50', currency: 'دينار' },
    ],
    takeawayItems: [
      { id: 't-kofta-tom', name: 'ربع كيلو كفتة بالبندورة', price: '7', currency: 'دنانير' },
      { id: 't-kofta-tah', name: 'ربع كيلو كفتة بالطحينية', price: '7', currency: 'دنانير' },
      { id: 't-qalaya-tom', name: 'ربع كيلو قلاية لحمة بالبندورة', price: '7', currency: 'دنانير' },
      { id: 't-qalaya-oni', name: 'ربع كيلو قلاية لحمة بالبصل', price: '7', currency: 'دنانير' },
      { id: 't-qalaya-hum', name: 'ربع كيلو قلاية حمص باللحمة', price: '7', currency: 'دنانير' },
      { id: 't-qalaya-off', name: 'ربع كيلو قلاية كبدة / كلاوي / قلب / بيض غنم', price: '7', currency: 'دنانير' },
      { id: 't-arayes', name: 'حبة عرايس', price: '1.25', currency: 'دينار' },
    ],
  },
  {
    id: 'meals',
    title: 'الوجبات',
    subtitle: 'وجبات شرقية وعراقية متكاملة تحضر يومياً',
    previewImage: '/assets/official/002.jpg',
    previewAlt: 'وجبة لحم محمر على الأرز الشرقي باللوز والمرق',
    dineInItems: [
      { id: 'd-meal-qouzi', name: 'وجبة قوزي عراقي', price: '13', currency: 'دينار' },
      { id: 'd-meal-mansaf', name: 'وجبة منسف', price: '13', currency: 'دينار' },
      { id: 'd-meal-ouzi', name: 'وجبة أوزي', price: '13', currency: 'دينار' },
      { id: 'd-meal-dolma', name: 'وجبة دولمة', price: '13', currency: 'دينار' },
      { id: 'd-meal-freekeh', name: 'فريكة بالكريمة', price: '9', currency: 'دنانير' },
      { id: 'd-meal-cannelloni', name: 'كانيلوني سبانخ (صنف نباتي)', price: '9', currency: 'دنانير' },
      {
        id: 'd-meal-kids',
        name: 'وجبة الأطفال',
        description: '4 قطع تندر دجاج · بطاطا · كاتشب · مايونيز',
        price: '5',
        currency: 'دنانير',
      },
    ],
    takeawayItems: [
      {
        id: 't-meal-qouzi',
        name: 'وجبة قوزي لحم',
        description: 'قطعة لحم 350 غم · أرز · نوع مرق (فاصولياء / بامية / تبسي)',
        price: '10',
        currency: 'دنانير',
      },
      {
        id: 't-meal-dolma',
        name: 'وجبة دولمة',
        description: '6 حبات ورق عنب · 2 كوسا · باذنجان · 2 بصل · فلفل حلو · بندورة · قطعة لحم',
        price: '10',
        currency: 'دنانير',
      },
      {
        id: 't-meal-mansaf',
        name: 'وجبة منسف لحم',
        description: 'قطعة لحم 350 غم · جميد · أرز · خبز شراك · لوز',
        price: '9',
        currency: 'دنانير',
      },
      {
        id: 't-meal-ouzi',
        name: 'وجبة أوزي لحم',
        description: 'قطعة لحم 350 غم · أرز · لبن',
        price: '9',
        currency: 'دنانير',
      },
    ],
  },
  {
    id: 'tawasi',
    title: 'التواصي',
    subtitle: 'مناسف وقوزي وخواريف محشية للولائم والمناسبات',
    previewImage: '/assets/official/Zohoor-Al-Shafa-Stuffed-lamb-scaled.jpg',
    previewAlt: 'خاروف محشي على صينية نحاسية مع الأرز واللوز',
    dineInItems: [
      { id: 'd-taw-mansaf', name: 'كيلو منسف لحم', price: '33', currency: 'دينار' },
      { id: 'd-taw-qouzi', name: 'كيلو قوزي عراقي لحم (برياني / أرز أبيض)', price: '33', currency: 'دينار' },
      { id: 'd-taw-ouzi', name: 'كيلو أوزي / مندي / فريكة لحم', price: '33', currency: 'دينار' },
      { id: 'd-taw-lamb', name: 'كيلو خاروف محشي أرز أو فريكة (خاروف كامل)', price: '28', currency: 'دينار' },
      { id: 'd-taw-rib', name: 'ضلعة محشية (أرز أو فريكة)', price: '22', currency: 'دينار' },
      { id: 'd-taw-neck', name: 'رقبة محشية (أرز أو فريكة)', price: '20', currency: 'دينار' },
    ],
    takeawayItems: [
      {
        id: 't-taw-mansaf',
        name: 'كيلو منسف لحم',
        description: '3 قطع لحم (350 غم للقطعة) · 1 كيلو جميد · 500 غم أرز · خبز شراك · لوز',
        price: '25',
        currency: 'دينار',
      },
      {
        id: 't-taw-qouzi',
        name: 'كيلو قوزي عراقي لحم',
        description: '3 قطع لحم (350 غم للقطعة) · أرز أبيض أو برياني · مرق (فاصولياء / بامية / تبسي)',
        price: '24',
        currency: 'دينار',
      },
      {
        id: 't-taw-ouzi',
        name: 'كيلو أوزي / فريكة / مندي لحم',
        description: '3 قطع لحم (350 غم للقطعة) · أرز · لبن',
        price: '22',
        currency: 'دينار',
      },
      {
        id: 't-taw-lamb',
        name: 'كيلو خاروف محشي أرز أو فريكة',
        description: 'الأوزان تبدأ من 10 كيلو · 1 كيلو لبن عادي أو بخيار · صحن خضراوات',
        price: '20',
        currency: 'دينار',
      },
      {
        id: 't-taw-grape',
        name: 'كيلو ورق عنب',
        description: '50 إلى 60 حبة (أقل كمية للطلب 2 كيلو)',
        price: '18',
        currency: 'دينار',
      },
      {
        id: 't-taw-rib',
        name: 'ضلعة محشية أرز أو فريكة',
        description: 'بوزن بين 990 غم و1100 غم · لبن',
        price: '16',
        currency: 'دينار',
      },
      {
        id: 't-taw-neck',
        name: 'رقبة محشية أرز أو فريكة',
        description: 'بوزن بين 700 غم و750 غم · لبن',
        price: '15',
        currency: 'دينار',
      },
      {
        id: 't-taw-chicken',
        name: 'دجاجة محشية أرز أو فريكة',
        description: 'أقل كمية للطلب دجاجتين · لبن',
        price: '12',
        currency: 'دينار',
      },
    ],
  },
  {
    id: 'appetizers',
    title: 'المقبلات والسلطات',
    subtitle: 'مقبلات باردة وساخنة وسلطات تحضر طازجة يومياً',
    previewImage: '/assets/official/Zohoor-Al-Shafa-Salad-scaled.jpg',
    previewAlt: 'سلطة فتوش طازجة بالخبز المحمص والليمون',
    dineInItems: [
      { id: 'd-app-plate', name: 'صحن مقبلات مشكل', price: '9.50', currency: 'دينار' },
      { id: 'd-app-hummus', name: 'حمص', price: '3.50', currency: 'دينار' },
      { id: 'd-app-mutabbal', name: 'متبل باذنجان', price: '3.50', currency: 'دينار' },
      { id: 'd-app-beet', name: 'متبل شمندر', price: '3.50', currency: 'دينار' },
      { id: 'd-app-baba', name: 'بابا غنوج', price: '3.50', currency: 'دينار' },
      { id: 'd-app-rocca', name: 'سلطة جرجير', price: '3.50', currency: 'دينار' },
      { id: 'd-app-fattoush', name: 'فتوش', price: '3.50', currency: 'دينار' },
      { id: 'd-app-tabbouleh', name: 'تبولة', price: '3.50', currency: 'دينار' },
      { id: 'd-app-grape', name: 'ورق عنب', price: '3.50', currency: 'دينار' },
      { id: 'd-app-olives', name: 'زيتون حلبي', price: '3.50', currency: 'دينار' },
      { id: 'd-app-torshi', name: 'طرشي', price: '3', currency: 'دنانير' },
      { id: 'd-app-kibbeh-fried', name: 'كبة مقلية (عدد 2)', price: '3', currency: 'دنانير' },
      { id: 'd-app-fries', name: 'بطاطا مقلية', price: '2.75', currency: 'دينار' },
      { id: 'd-app-kibbeh-grill', name: 'كبة مشوية (عدد 1)', price: '1.75', currency: 'دينار' },
      { id: 'd-app-barak', name: 'برك (جبنة أو لحمة)', price: '1.50', currency: 'دينار' },
    ],
    takeawayItems: [
      { id: 't-app-plate', name: 'صحن مقبلات مشكل (5 أصناف)', price: '6', currency: 'دنانير' },
      { id: 't-app-hummus', name: 'حمص', price: '2', currency: 'دينار' },
      { id: 't-app-mutabbal', name: 'متبل باذنجان', price: '2', currency: 'دينار' },
      { id: 't-app-beet', name: 'متبل شمندر', price: '2', currency: 'دينار' },
      { id: 't-app-baba', name: 'بابا غنوج', price: '2', currency: 'دينار' },
      { id: 't-app-torshi', name: 'طرشي', price: '2', currency: 'دينار' },
      { id: 't-app-garlic', name: 'ثومية', price: '2', currency: 'دينار' },
      { id: 't-app-rocca', name: 'سلطة جرجير', price: '2', currency: 'دينار' },
      { id: 't-app-fattoush', name: 'فتوش', price: '2', currency: 'دينار' },
      { id: 't-app-tabbouleh', name: 'تبولة', price: '2', currency: 'دينار' },
      { id: 't-app-arabic', name: 'سلطة عربية', price: '2', currency: 'دينار' },
      { id: 't-app-turkish', name: 'سلطة تركية', price: '2', currency: 'دينار' },
      { id: 't-app-eggplant', name: 'سلطة باذنجان', price: '2', currency: 'دينار' },
      { id: 't-app-grape', name: 'ورق عنب', price: '2', currency: 'دينار' },
      { id: 't-app-olives', name: 'زيتون حلبي', price: '2', currency: 'دينار' },
      { id: 't-app-kibbeh-fried', name: 'كبة مقلية (عدد 2)', price: '2', currency: 'دينار' },
      { id: 't-app-fries', name: 'بطاطا مقلية', price: '1.50', currency: 'دينار' },
      { id: 't-app-kibbeh-grill', name: 'كبة مشوية (عدد 1)', price: '1', currency: 'دينار' },
      { id: 't-app-barak', name: 'برك (جبنة أو لحمة)', price: '1', currency: 'دينار' },
    ],
  },
  {
    id: 'drinks',
    title: 'المشروبات',
    subtitle: 'عصائر طازجة ومشروبات باردة وقهوة',
    previewImage: '/assets/official/ZEY05835-scaled-3.jpg',
    previewAlt: 'عصير ليمون ونعناع طازج',
    dineInItems: [
      { id: 'd-drk-juice', name: 'عصير طبيعي 250 مل (برتقال / ليمون)', price: '3.50', currency: 'دينار' },
      { id: 'd-drk-mojito', name: 'موهيتو زهور الشفاء', price: '3.50', currency: 'دينار' },
      { id: 'd-drk-ayran', name: 'شنينة 250 مل', price: '2', currency: 'دينار' },
      { id: 'd-drk-sparkling', name: 'مياه غازية', price: '2', currency: 'دينار' },
      { id: 'd-drk-coffee', name: 'قهوة تركي', price: '2', currency: 'دينار' },
      { id: 'd-drk-soda', name: 'مشروبات غازية 250 مل', price: '1.50', currency: 'دينار' },
      { id: 'd-drk-water', name: 'مياه صغيرة', price: '1', currency: 'دينار' },
    ],
    takeawayItems: [
      { id: 't-drk-note', name: 'تتوفر المشروبات الغازية والعصائر الطازجة والشنينة في الفرع — يُرجى تأكيد التوافر والسعر عند الطلب', price: 'عند الطلب', currency: '' },
    ],
  },
];
