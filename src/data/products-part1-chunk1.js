const productsPart1Chunk1 = [
  {
    id: 1,
    name: { fr: "Féroglobine (Formule Liquide)", ar: "فيروجلوبين سائل", en: "Feroglobin (Liquid Formula)" },
    category: "Fer",
    price: 150, 
    originalPrice: 165,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35d67f9d-ab26-49f1-806f-ad0a85ce9339/e5e3df7daaf64aa6df6d3fb52411fe07.jpg",
    rating: 4.8,
    reviews: 156,
    inStock: true,
    description: { 
      fr: "Apport en fer doux et efficace. Contribue à la réduction de la fatigue.", 
      ar: "تركيبة حديد سائلة لذيذة. تقلل من التعب والإرهاق. مفيدة لمن هم فوق الخمسين والرياضيين والنساء أثناء الحيض أو الحمل.", 
      en: "Gentle and effective iron intake. Contributes to reducing fatigue." 
    },
    fullDescription: {
      fr: "Objectif principal : Apport en fer doux et efficace.\nBénéfices clés : Contribue à la réduction de la fatigue, soutient la vitalité générale. Idéal pour les populations spécifiques (plus de 50 ans, athlètes, femmes enceintes/menstruées).",
      ar: "الهدف الرئيسي: مصدر حديد لطيف وفعال.\nالفوائد الرئيسية: يساهم في تقليل التعب، ويدعم الحيوية العامة. مثالي لفئات معينة (أكثر من 50 عامًا، الرياضيون، النساء الحوامل/في فترة الحيض).",
      en: "Main objective: Gentle and effective iron intake.\nKey benefits: Contributes to reducing fatigue, supports general vitality. Ideal for specific populations (over 50, athletes, pregnant/menstruating women)."
    }
  },
  {
    id: 2,
    name: { fr: "Vitabiotics Feroglobin-B12 Capsules", ar: "كبسولات فيروجلوبين-ب12 فيتابيوتكس", en: "Vitabiotics Feroglobin-B12 Capsules" },
    category: "Fer",
    price: 150,
    originalPrice: 165,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35d67f9d-ab26-49f1-806f-ad0a85ce9339/62caecc6c781ac573a3378eb56e968a4.jpg",
    rating: 4.7,
    reviews: 203,
    inStock: true,
    description: { 
      fr: "Optimisation de l'énergie et soutien sanguin. Réduction de la fatigue.", 
      ar: "يساعد على تقليل التعب والإرهاق. يدعم الهيموجلوبين وخلايا الدم الحمراء. لطيف على المعدة.", 
      en: "Energy optimization and blood support. Reduction of fatigue." 
    },
     fullDescription: {
      fr: "Objectif principal : Optimisation de l'énergie et soutien sanguin.\nBénéfices clés : Réduction de la fatigue et de la lassitude, soutien à la formation de l'hémoglobine et des globules rouges, amélioration du transport d'oxygène. Doux pour l'estomac.",
      ar: "الهدف الرئيسي: تحسين الطاقة ودعم الدم.\nالفوائد الرئيسية: تقليل التعب والإرهاق، ودعم تكوين الهيموجلوبين وخلايا الدم الحمراء، وتحسين نقل الأكسجين. لطيف على المعدة.",
      en: "Main objective: Energy optimization and blood support.\nKey benefits: Reduction of fatigue and tiredness, support for the formation of hemoglobin and red blood cells, improvement of oxygen transport. Gentle on the stomach."
    }
  },
  {
    id: 3,
    name: { fr: "Holland & Barrett Herbal Digestive and Enzyme Formula", ar: "تركيبة إنزيمات الهضم والأعشاب من هولاند آند باريت", en: "Holland & Barrett Herbal Digestive and Enzyme Formula" },
    category: "Digestif",
    price: 299,
    originalPrice: 320,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35d67f9d-ab26-49f1-806f-ad0a85ce9339/9cfaadc565fa87c1dddbc9fd920c297c.jpg",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    description: { 
      fr: "Soutien global de la santé digestive. Améliore l'assimilation des nutriments.", 
      ar: "يدعم صحة الجهاز الهضمي. يحتوي على إنزيمات هاضمة + كركم وعرق السوس.", 
      en: "Overall support for digestive health. Improves nutrient assimilation." 
    },
    fullDescription: {
      fr: "Objectif principal : Soutien global de la santé digestive.\nBénéfices clés : Améliore l'assimilation des nutriments (protéines, graisses, glucides), favorise un confort digestif optimal. Formule végétarienne et végétalienne.",
      ar: "الهدف الرئيسي: دعم شامل لصحة الجهاز الهضمي.\nالفوائد الرئيسية: يحسن امتصاص العناصر الغذائية (البروتينات والدهون والكربوهيدرات)، ويعزز راحة الجهاز الهضمي المثلى. تركيبة نباتية.",
      en: "Main objective: Overall support for digestive health.\nKey benefits: Improves the assimilation of nutrients (proteins, fats, carbohydrates), promotes optimal digestive comfort. Vegetarian and vegan formula."
    }
  },
  {
    id: 4,
    name: { fr: "Solgar Skin, Nails and Hair Formula", ar: "سولجار للبشرة والأظافر والشعر", en: "Solgar Skin, Nails and Hair Formula" },
    category: "Beauté",
    price: 350,
    originalPrice: 380,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35d67f9d-ab26-49f1-806f-ad0a85ce9339/95f62087078f750d47d2a3a2c8e8e4d3.jpg",
    rating: 4.9,
    reviews: 312,
    inStock: true,
    description: { 
      fr: "Beauté structurelle de la peau, des cheveux et des ongles. Soutient collagène et kératine.", 
      ar: "يساعد على دعم إنتاج الجسم للكولاجين والكيراتين، وهو أمر حيوي لقوة وصحة ومظهر البشرة والشعر والأظافر. يحتوي على فيتامين سي والزنك والنحاس. خالٍ من السكر والملح والنشا ومناسب للنباتيين.", 
      en: "Structural beauty of skin, hair, and nails. Supports collagen and keratin." 
    },
    fullDescription: {
      fr: "Objectif principal : Beauté structurelle de la peau, des cheveux et des ongles.\nBénéfices clés : Soutient la production naturelle de collagène et de kératine pour la force, la santé et l'apparence. Formule végétalienne, exempte d'allergènes courants.",
      ar: "الهدف الرئيسي: جمال هيكلي للبشرة والشعر والأظافر.\nالفوائد الرئيسية: يدعم الإنتاج الطبيعي للكولاجين والكيراتين للقوة والصحة والمظهر. تركيبة نباتية، خالية من مسببات الحساسية الشائعة.",
      en: "Main objective: Structural beauty of skin, hair, and nails.\nKey benefits: Supports the natural production of collagen and keratin for strength, health, and appearance. Vegan formula, free of common allergens."
    }
  },
  {
    id: 5,
    name: { fr: "Apple Cider Vinegar Complex", ar: "مركب خل التفاح", en: "Apple Cider Vinegar Complex" },
    category: "Poids",
    price: 280,
    originalPrice: 0,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35d67f9d-ab26-49f1-806f-ad0a85ce9339/3422bbf8ba57fc27226d84b862100a4a.jpg",
    rating: 4.5,
    reviews: 167,
    inStock: false,
    description: { 
      fr: "Gestion du poids et soutien digestif. Aide à gérer l'appétit.", 
      ar: "يدعم إدارة الوزن والتمثيل الغذائي.", 
      en: "Weight management and digestive support. Helps manage appetite." 
    },
    fullDescription: {
      fr: "Objectif principal : Gestion du poids et soutien digestif.\nBénéfices clés : Aide à gérer le poids et l'appétit, soutient la régulation énergétique, favorise une microflore intestinale équilibrée et contribue au nettoyage interne.",
      ar: "الهدف الرئيسي: إدارة الوزن ودعم الجهاز الهضمي.\nالفوائد الرئيسية: يساعد في إدارة الوزن والشهية، ويدعم تنظيم الطاقة، ويعزز توازن البكتيريا المعوية ويساهم في التنظيف الداخلي.",
      en: "Main objective: Weight management and digestive support.\nKey benefits: Helps manage weight and appetite, supports energy regulation, promotes balanced intestinal microflora, and contributes to internal cleansing."
    }
  }
];

export { productsPart1Chunk1 };