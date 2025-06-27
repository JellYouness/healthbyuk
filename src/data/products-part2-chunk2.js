const productsPart2Chunk2 = [
  {
    id: 26,
    name: { fr: "Alpha Lipoic Acide", ar: "حمض ألفا ليبويك", en: "Alpha Lipoic Acid" },
    category: "Poids",
    price: 350,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35d67f9d-ab26-49f1-806f-ad0a85ce9339/1dbb26c5bbb6cdc351bf8af1b9a1dcb7.jpg",
    rating: 4.9,
    reviews: 135,
    inStock: true,
    description: {
      fr: "Gestion du poids, soutien métabolique et cognitif.",
      ar: "TUDCA (حمض التاوروسوديوكسيكوليك) لصحة الكبد والأمعاء.",
      en: "Weight management, metabolic and cognitive support."
    },
    fullDescription: {
      fr: "Objectif principal : Gestion du poids, soutien métabolique et cognitif.\nBénéfices clés : Idéal pour la gestion du poids, les niveaux normaux de glucose. Soutient la mémoire, le cerveau et les nerfs, et prend soin du cœur.",
      ar: "الهدف الرئيسي: إدارة الوزن، ودعم التمثيل الغذائي والإدراكي.\nالفوائد الرئيسية: مثالي لإدارة الوزن، ومستويات الجلوكوز الطبيعية. يدعم الذاكرة والدماغ والأعصاب، ويعتني بالقلب.",
      en: "Main objective: Weight management, metabolic and cognitive support.\nKey benefits: Ideal for weight management, normal glucose levels. Supports memory, brain, and nerves, and takes care of the heart."
    }
  },
  {
    id: 27,
    name: { fr: "Solgar L-Glutamine 500mg", ar: "سولجار إل-جلوتامين 500 مجم", en: "Solgar L-Glutamine 500mg" },
    category: "Sport",
    price: 300,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35d67f9d-ab26-49f1-806f-ad0a85ce9339/4057232d54a58ac5fd4ee773f71ee56e.jpg",
    rating: 4.6,
    reviews: 100,
    inStock: true,
    description: {
      fr: "Soutien musculaire et récupération.",
      ar: "حلوى فيتامينات متعددة لذيذة مصممة خصيصًا للنساء.",
      en: "Muscle support and recovery."
    },
    fullDescription: {
      fr: "Objectif principal : Soutien musculaire et récupération.\nBénéfices clés : Fournit un soutien essentiel aux personnes actives, garantit un apport suffisant pour les muscles, et aide à minimiser la dégradation musculaire lors de stress intense.",
      ar: "الهدف الرئيسي: دعم العضلات والتعافي.\nالفوائد الرئيسية: يوفر دعمًا أساسيًا للأشخاص النشطين، ويضمن إمدادًا كافيًا للعضلات، ويساعد على تقليل انهيار العضلات أثناء الإجهاد الشديد.",
      en: "Main objective: Muscle support and recovery.\nKey benefits: Provides essential support for active individuals, ensures sufficient supply for muscles, and helps minimize muscle breakdown during intense stress."
    }
  },
  {
    id: 28,
    name: { fr: "Solgar Boron 3mg", ar: "بورون سولجار 3مغ", en: "Solgar Boron 3mg" },
    category: "Minéraux",
    price: 110,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35d67f9d-ab26-49f1-806f-ad0a85ce9339/af4f66f4f58b7e3ef90b270405ea36a8.jpg",
    rating: 4.5,
    reviews: 85,
    inStock: true,
    description: {
      fr: "Oligo-élément bore pour la santé osseuse et l'équilibre hormonal.",
      ar: "عنصر البورون النادر لصحة العظام والتوازن الهرموني.",
      en: "Trace mineral boron for bone health and hormone balance."
    },
    fullDescription: {
      fr: "Le bore est un oligo-élément qui joue un rôle dans le métabolisme du calcium, du magnésium et de la vitamine D, contribuant ainsi à la santé osseuse. Il peut également influencer l'équilibre hormonal.",
      ar: "البورون هو عنصر نادر يلعب دورًا في استقلاب الكالسيوم والمغنيسيوم وفيتامين د، وبالتالي يساهم في صحة العظام. قد يؤثر أيضًا على التوازن الهرموني.",
      en: "Boron is a trace mineral that plays a role in calcium, magnesium, and vitamin D metabolism, thereby contributing to bone health. It may also influence hormone balance."
    }
  },
  {
    id: 29,
    name: { fr: "NMN with Resveratrol 1100mg", ar: "NMN مع ريسفيراترول 1100مغ", en: "NMN with Resveratrol 1100mg" },
    category: "Anti-âge",
    price: 450,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35d67f9d-ab26-49f1-806f-ad0a85ce9339/e7283f2604f6b22b95d74fab3c22ddc7.jpg",
    rating: 4.9,
    reviews: 210,
    inStock: true,
    description: {
      fr: "NMN et Resvératrol pour la longévité cellulaire et le soutien anti-âge.",
      ar: "NMN وريسفيراترول لطول عمر الخلية ودعم مكافحة الشيخوخة.",
      en: "NMN and Resveratrol for cellular longevity and anti-aging support."
    },
    fullDescription: {
      fr: "Ce puissant complexe combine le Nicotinamide Mononucléotide (NMN), un précurseur du NAD+, avec le Resvératrol, un polyphénol antioxydant. Ensemble, ils soutiennent la production d'énergie cellulaire, la réparation de l'ADN et favorisent la longévité.",
      ar: "يجمع هذا المركب القوي بين أحادي نيوكليوتيد النيكوتيناميد (NMN)، وهو مقدمة لـ NAD+، مع ريسفيراترول، وهو بوليفينول مضاد للأكسدة. معًا، يدعمان إنتاج الطاقة الخلوية وإصلاح الحمض النووي وتعزيز طول العمر.",
      en: "This potent complex combines Nicotinamide Mononucleotide (NMN), a precursor to NAD+, with Resveratrol, an antioxidant polyphenol. Together, they support cellular energy production, DNA repair, and promote longevity."
    }
  },
  {
    id: 30,
    name: { fr: "Chlorophyll Liquid Drops", ar: "قطرات الكلوروفيل السائلة", en: "Chlorophyll Liquid Drops" },
    category: "Détox",
    price: 150,
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35d67f9d-ab26-49f1-806f-ad0a85ce9339/846eb6de6ca9c1f4deeefe81d430ba5a.jpg",
    rating: 4.6,
    reviews: 140,
    inStock: true,
    description: {
      fr: "Gouttes de chlorophylle liquide naturelle pour détoxifier et rafraîchir.",
      ar: "قطرات الكلوروفيل السائلة الطبيعية للتخلص من السموم والانتعاش.",
      en: "Natural liquid chlorophyll drops to detoxify and freshen."
    },
    fullDescription: {
      fr: "La chlorophylle liquide est un moyen naturel de soutenir la détoxification de l'organisme, d'améliorer la digestion et de neutraliser les odeurs corporelles. Nos gouttes à saveur de menthe sont rafraîchissantes et faciles à utiliser.",
      ar: "الكلوروفيل السائل هو وسيلة طبيعية لدعم إزالة السموم من الجسم، وتحسين الهضم، وتحييد روائح الجسم. قطراتنا بنكهة النعناع منعشة وسهلة الاستخدام.",
      en: "Liquid chlorophyll is a natural way to support the body's detoxification processes, improve digestion, and neutralize body odors. Our mint-flavored drops are refreshing and easy to use."
    }
  }
];

export { productsPart2Chunk2 };