const productsPart2Chunk1 = [
  {
    id: 21,
    name: { fr: "Organic Supergreens Powder With 9 Superfoods", ar: "مسحوق الخضروات الفائقة العضوية مع 9 أطعمة خارقة", en: "Organic Supergreens Powder With 9 Superfoods" },
    category: "Super-aliments",
    price: 280,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35d67f9d-ab26-49f1-806f-ad0a85ce9339/f16e12f64a0330ea8c6ad9af08177187.jpg",
    rating: 4.6,
    reviews: 115,
    inStock: true,
    description: {
      fr: "Apport nutritionnel complet et bien-être interne.",
      ar: "مستخلص الخرشوف للهضم وصحة الكبد، مع الفلفل الأسود.",
      en: "Complete nutritional intake and internal well-being."
    },
    fullDescription: {
      fr: "Objectif principal : Apport nutritionnel complet et bien-être interne.\nBénéfices clés : Idéal pour les articulations, les soins de la peau et les organes sains. Réapprovisionne les nutriments clés manquants, assure l'apport quotidien de légumes verts.",
      ar: "الهدف الرئيسي: مدخول غذائي كامل ورفاهية داخلية.\nالفوائد الرئيسية: مثالي للمفاصل والعناية بالبشرة والأعضاء الصحية. يجدد العناصر الغذائية الرئيسية المفقودة، ويضمن المدخول اليومي من الخضروات الورقية.",
      en: "Main objective: Complete nutritional intake and internal well-being.\nKey benefits: Ideal for joints, skin care, and healthy organs. Replenishes key missing nutrients, ensures daily intake of leafy greens."
    }
  },
  {
    id: 22,
    name: { fr: "Detox & Cleanse Capsules", ar: "كبسولات إزالة السموم والتنظيف", en: "Detox & Cleanse Capsules" },
    category: "Détox",
    price: 279,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35d67f9d-ab26-49f1-806f-ad0a85ce9339/cd83a28d6c319a87aa7293c033d2a4fd.jpg",
    rating: 4.5,
    reviews: 90,
    inStock: true,
    description: {
      fr: "Nettoyage et détoxification corporelle.",
      ar: "طحلب البحر (الطحلب الأيرلندي) غني بالمعادن والمغذيات الأساسية.",
      en: "Body cleansing and detoxification."
    },
    fullDescription: {
      fr: "Objectif principal : Nettoyage et détoxification corporelle.\nBénéfices clés : Aide à nettoyer et détoxifier le corps, favorise la croissance osseuse normale, contient de bonnes bactéries et contribue au fonctionnement normal des enzymes digestives.",
      ar: "الهدف الرئيسي: تنظيف الجسم وإزالة السموم منه.\nالفوائد الرئيسية: يساعد على تنظيف الجسم وإزالة السموم منه، ويعزز نمو العظام الطبيعي، ويحتوي على بكتيريا جيدة ويساهم في الأداء الطبيعي للإنزيمات الهاضمة.",
      en: "Main objective: Body cleansing and detoxification.\nKey benefits: Helps cleanse and detoxify the body, promotes normal bone growth, contains good bacteria, and contributes to the normal functioning of digestive enzymes."
    }
  },
  {
    id: 23,
    name: { fr: "Pro Bio Culture Complex Capsule", ar: "كبسولة مركب برو بيو الثقافي", en: "Pro Bio Culture Complex Capsule" },
    category: "Digestif",
    price: 290,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35d67f9d-ab26-49f1-806f-ad0a85ce9339/978c78acc7da8c39fcd631389bea953d.jpg",
    rating: 4.7,
    reviews: 125,
    inStock: false,
    description: {
      fr: "Équilibre de la flore intestinale et renforcement des défenses.",
      ar: "ألياف قشور السيليوم مع أسيدوفيلس لصحة الجهاز الهضمي والانتظام.",
      en: "Balance of intestinal flora and strengthening of defenses."
    },
    fullDescription: {
      fr: "Objectif principal : Équilibre de la flore intestinale et renforcement des défenses.\nBénéfices clés : Offre des microbes bénéfiques pour une microflore intestinale équilibrée, conçu pour la régularité intestinale et la gestion du poids, renforce les défenses naturelles.",
      ar: "الهدف الرئيسي: توازن البكتيريا المعوية وتعزيز الدفاعات.\nالفوائد الرئيسية: يوفر ميكروبات مفيدة لتوازن البكتيريا المعوية، مصمم لانتظام الأمعاء وإدارة الوزن، ويعزز الدفاعات الطبيعية.",
      en: "Main objective: Balance of intestinal flora and strengthening of defenses.\nKey benefits: Offers beneficial microbes for a balanced intestinal microflora, designed for intestinal regularity and weight management, strengthens natural defenses."
    }
  },
  {
    id: 24,
    name: { fr: "Iron Bisglycinate (WeightWorld)", ar: "بايسجليسينات الحديد (ويتوورلد)", en: "Iron Bisglycinate (WeightWorld)" },
    category: "Fer",
    price: 250,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35d67f9d-ab26-49f1-806f-ad0a85ce9339/82f7cf5d63ba794e0281e90db6951f73.jpg",
    rating: 4.8,
    reviews: 170,
    inStock: true,
    description: {
      fr: "Soutien des niveaux de fer et de la formation sanguine.",
      ar: "DIM (Diindolylmethane) لدعم توازن هرموني صحي.",
      en: "Support for iron levels and blood formation."
    },
    fullDescription: {
      fr: "Objectif principal : Soutien des niveaux de fer et de la formation sanguine.\nBénéfices clés : Aide à maintenir un niveau sain de fer, essentiel à la formation des globules rouges et de l'hémoglobine. Formule douce pour l'estomac.",
      ar: "الهدف الرئيسي: دعم مستويات الحديد وتكوين الدم.\nالفوائد الرئيسية: يساعد في الحفاظ على مستوى صحي من الحديد، وهو ضروري لتكوين خلايا الدم الحمراء والهيموجلوبين. تركيبة لطيفة على المعدة.",
      en: "Main objective: Support for iron levels and blood formation.\nKey benefits: Helps maintain a healthy iron level, essential for the formation of red blood cells and hemoglobin. Gentle formula for the stomach."
    }
  },
  {
    id: 25,
    name: { fr: "PROSTASURE", ar: "بروستاكيور", en: "PROSTASURE" },
    category: "Santé masculine",
    price: 329,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35d67f9d-ab26-49f1-806f-ad0a85ce9339/98258eac953ac908509ce929cda5a4de.jpg",
    rating: 4.7,
    reviews: 155,
    inStock: true,
    description: {
      fr: "Soutien de la santé masculine et urinaire.",
      ar: "مالات المغنيسيوم للطاقة ووظيفة العضلات والأعصاب.",
      en: "Support for male and urinary health."
    },
    fullDescription: {
      fr: "Objectif principal : Soutien de la santé masculine et urinaire.\nBénéfices clés : Conçu pour restaurer un flux urinaire normal, prend en charge la taille normale de la prostate et l'équilibre hormonal masculin.",
      ar: "الهدف الرئيسي: دعم صحة الرجل والجهاز البولي.\nالفوائد الرئيسية: مصمم لاستعادة تدفق البول الطبيعي، ويدعم الحجم الطبيعي للبروستاتا والتوازن الهرموني الذكوري.",
      en: "Main objective: Support for male and urinary health.\nKey benefits: Designed to restore normal urinary flow, supports normal prostate size and male hormonal balance."
    }
  }
];

export { productsPart2Chunk1 };