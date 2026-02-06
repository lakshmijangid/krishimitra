


const cropsData = [
  {
  id: 1,
  name: "गेहूँ",
  image: "/Images/wheat.png",
  season: "rabi",
  mandi: {
    name: "जयपुर",
    district: "जयपुर",
    state: "राजस्थान"
  },

  price: {
    current: 2150,
    previous: 2100,
    unit: "₹/क्विंटल",
    lastUpdated: "2026-02-10"
  },

  trend: {
    changePercent: 2.4,
    direction: "up" // up | down | stable
  },

  quality: {
    grade: "A",
    moisture: "12–14%",
    grainSize: "Medium–Large"
  },

  production: {
    suitableTemperature: "15–25°C",
    rainfall: "50–75 सेमी",
    duration: "120–150 दिन",
    yieldPerHectare: "40–50 क्विंटल"
  },

  majorStates: [
    "पंजाब",
    "हरियाणा",
    "उत्तर प्रदेश",
    "मध्य प्रदेश"
  ],

  uses: [
    "आटा और ब्रेड निर्माण",
    "पशु आहार",
    "खाद्य प्रसंस्करण उद्योग"
  ],

  advisory: {
    bestSellingTime: "फरवरी–मार्च",
    storageTip: "सूखी और हवादार जगह पर रखें",
    riskNote: "अधिक नमी से गुणवत्ता घट सकती है"
  },

  description:
    "गेहूँ भारत की प्रमुख रबी फसल है, जो देश की खाद्य सुरक्षा में महत्वपूर्ण भूमिका निभाती है। यह फसल ठंडे मौसम में अच्छी पैदावार देती है और किसानों के लिए स्थिर आय का प्रमुख स्रोत है।"
}

,

  {
    id: 2,
    name: "सरसों",
    image: "/Images/mustard.png",
    season: "rabi",
    mandi: {
      name: "सीकर",
      district: "सीकर",
      state: "राजस्थान"
    },
    price: {
      current: 5650,
      previous: 5500,
      unit: "₹/क्विंटल",
      lastUpdated: "2026-02-09"
    },
    trend: {
      changePercent: 2.7,
      direction: "up"
    },
    quality: {
      grade: "A",
      moisture: "8–10%",
      grainSize: "Medium"
    },
    production: {
      suitableTemperature: "10–25°C",
      rainfall: "25–40 सेमी",
      duration: "110–140 दिन",
      yieldPerHectare: "15–20 क्विंटल"
    },
    majorStates: ["राजस्थान", "हरियाणा", "उत्तर प्रदेश", "मध्य प्रदेश"],
    uses: ["खाद्य तेल निर्माण", "पशु चारा", "मसाला उद्योग"],
    advisory: {
      bestSellingTime: "मार्च–अप्रैल",
      storageTip: "सूखी जगह पर रखें",
      riskNote: "अत्यधिक गर्मी से तेल की गुणवत्ता घट सकती है"
    },
    description:
      "सरसों भारत की प्रमुख तिलहन फसल है जो खाने के तेल के लिए व्यापक रूप से उपयोग होती है।"
  },

  {
    id: 3,
    name: "बाजरा",
    image: "/Images/bajara.png",
    season: "kharif",
    mandi: {
      name: "चूरू",
      district: "चूरू",
      state: "राजस्थान"
    },
    price: {
      current: 2400,
      previous: 2450,
      unit: "₹/क्विंटल",
      lastUpdated: "2026-02-08"
    },
    trend: {
      changePercent: -2,
      direction: "down"
    },
    quality: {
      grade: "B",
      moisture: "10–12%",
      grainSize: "Medium"
    },
    production: {
      suitableTemperature: "25–35°C",
      rainfall: "40–60 सेमी",
      duration: "75–90 दिन",
      yieldPerHectare: "18–25 क्विंटल"
    },
    majorStates: ["राजस्थान", "गुजरात", "हरियाणा", "महाराष्ट्र"],
    uses: ["रोटी निर्माण", "पशु चारा", "पोषण आहार"],
    advisory: {
      bestSellingTime: "सितंबर–अक्टूबर",
      storageTip: "नमी से दूर रखें",
      riskNote: "बारिश से फसल खराब हो सकती है"
    },
    description:
      "बाजरा सूखा प्रभावित क्षेत्रों की महत्वपूर्ण अनाज फसल है और पोषण से भरपूर होती है।"
  },

  {
    id: 4,
    name: "चना",
    image: "/Images/chana.png",
    season: "rabi",
    mandi: {
      name: "कोटा",
      district: "कोटा",
      state: "राजस्थान"
    },
    price: {
      current: 5200,
      previous: 5100,
      unit: "₹/क्विंटल",
      lastUpdated: "2026-02-07"
    },
    trend: {
      changePercent: 1.9,
      direction: "up"
    },
    quality: {
      grade: "A",
      moisture: "10–12%",
      grainSize: "Medium"
    },
    production: {
      suitableTemperature: "20–30°C",
      rainfall: "30–50 सेमी",
      duration: "100–120 दिन",
      yieldPerHectare: "12–18 क्विंटल"
    },
    majorStates: ["मध्य प्रदेश", "राजस्थान", "महाराष्ट्र", "उत्तर प्रदेश"],
    uses: ["दाल निर्माण", "बेसन उद्योग", "पशु चारा"],
    advisory: {
      bestSellingTime: "मार्च–अप्रैल",
      storageTip: "ठंडी और सूखी जगह रखें",
      riskNote: "कीट लगने का खतरा रहता है"
    },
    description:
      "चना भारत की प्रमुख दलहन फसल है जो प्रोटीन का अच्छा स्रोत है।"
  },

  {
    id: 5,
    name: "मूंग",
    image: "/Images/moong.png",
    season: "kharif",
    mandi: {
      name: "झुंझुनूं",
      district: "झुंझुनूं",
      state: "राजस्थान"
    },
    price: {
      current: 7200,
      previous: 7000,
      unit: "₹/क्विंटल",
      lastUpdated: "2026-02-06"
    },
    trend: {
      changePercent: 2.8,
      direction: "up"
    },
    quality: {
      grade: "A",
      moisture: "9–11%",
      grainSize: "Small–Medium"
    },
    production: {
      suitableTemperature: "25–35°C",
      rainfall: "60–80 सेमी",
      duration: "70–90 दिन",
      yieldPerHectare: "8–12 क्विंटल"
    },
    majorStates: ["राजस्थान", "महाराष्ट्र", "कर्नाटक", "मध्य प्रदेश"],
    uses: ["दाल निर्माण", "स्प्राउट्स", "पोषण आहार"],
    advisory: {
      bestSellingTime: "अगस्त–सितंबर",
      storageTip: "हवादार स्थान पर रखें",
      riskNote: "अधिक नमी से फफूंदी लग सकती है"
    },
    description:
      "मूंग जल्दी पकने वाली दलहन फसल है जो मिट्टी की उर्वरता बढ़ाने में मदद करती है।"
  },

  {
  id: 6,
  name: "जौ",
  image: "/Images/barlay.png",
  season: "rabi",
  mandi: {
    name: "बीकानेर",
    district: "बीकानेर",
    state: "राजस्थान"
  },
  price: {
    current: 1850,
    previous: 1800,
    unit: "₹/क्विंटल",
    lastUpdated: "2026-02-05"
  },
  trend: {
    changePercent: 2.7,
    direction: "up"
  },
  quality: {
    grade: "B",
    moisture: "11–13%",
    grainSize: "Medium"
  },
  production: {
    suitableTemperature: "12–25°C",
    rainfall: "40–60 सेमी",
    duration: "100–120 दिन",
    yieldPerHectare: "35–45 क्विंटल"
  },
  majorStates: ["राजस्थान", "उत्तर प्रदेश", "हरियाणा"],
  uses: ["पशु चारा", "बीयर उद्योग", "स्वास्थ्य आहार"],
  advisory: {
    bestSellingTime: "मार्च",
    storageTip: "सूखे स्थान पर रखें",
    riskNote: "अधिक बारिश से नुकसान हो सकता है"
  },
  description: "जौ पोषक तत्वों से भरपूर रबी फसल है जिसका उपयोग स्वास्थ्य आहार और पशु चारे में होता है।"
},

{
  id: 7,
  name: "मक्का",
  image: "/Images/corn.png",
  season: "kharif",
  mandi: {
    name: "उदयपुर",
    district: "उदयपुर",
    state: "राजस्थान"
  },
  price: {
    current: 2100,
    previous: 2050,
    unit: "₹/क्विंटल",
    lastUpdated: "2026-02-04"
  },
  trend: {
    changePercent: 2.4,
    direction: "up"
  },
  quality: {
    grade: "A",
    moisture: "12–14%",
    grainSize: "Large"
  },
  production: {
    suitableTemperature: "20–30°C",
    rainfall: "60–90 सेमी",
    duration: "90–110 दिन",
    yieldPerHectare: "45–55 क्विंटल"
  },
  majorStates: ["कर्नाटक", "मध्य प्रदेश", "राजस्थान", "बिहार"],
  uses: ["पॉपकॉर्न", "पशु चारा", "खाद्य उद्योग"],
  advisory: {
    bestSellingTime: "सितंबर–अक्टूबर",
    storageTip: "हवादार स्थान पर रखें",
    riskNote: "कीट संक्रमण का खतरा"
  },
  description: "मक्का बहुउपयोगी अनाज फसल है जिसका उपयोग खाद्य और औद्योगिक कार्यों में होता है।"
},

{
  id: 8,
  name: "कपास",
  image: "/Images/cottan.png",
  season: "kharif",
  mandi: {
    name: "हनुमानगढ़",
    district: "हनुमानगढ़",
    state: "राजस्थान"
  },
  price: {
    current: 7500,
    previous: 7600,
    unit: "₹/क्विंटल",
    lastUpdated: "2026-02-03"
  },
  trend: {
    changePercent: -1.3,
    direction: "down"
  },
  quality: {
    grade: "A",
    moisture: "7–9%",
    grainSize: "Long Fiber"
  },
  production: {
    suitableTemperature: "25–35°C",
    rainfall: "50–70 सेमी",
    duration: "150–180 दिन",
    yieldPerHectare: "20–25 क्विंटल"
  },
  majorStates: ["गुजरात", "महाराष्ट्र", "राजस्थान", "तेलंगाना"],
  uses: ["कपड़ा उद्योग", "तेल निर्माण", "पशु चारा"],
  advisory: {
    bestSellingTime: "नवंबर–जनवरी",
    storageTip: "नमी से बचाकर रखें",
    riskNote: "कीट और गुलाबी इल्ली का खतरा"
  },
  description: "कपास भारत की महत्वपूर्ण नकदी फसल है जिसका उपयोग वस्त्र उद्योग में किया जाता है।"
},

{
  id: 9,
  name: "मूंगफली",
  image: "/Images/groundnut.png",
  season: "kharif",
  mandi: {
    name: "जालौर",
    district: "जालौर",
    state: "राजस्थान"
  },
  price: {
    current: 5800,
    previous: 5700,
    unit: "₹/क्विंटल",
    lastUpdated: "2026-02-02"
  },
  trend: {
    changePercent: 1.7,
    direction: "up"
  },
  quality: {
    grade: "A",
    moisture: "8–10%",
    grainSize: "Medium"
  },
  production: {
    suitableTemperature: "25–30°C",
    rainfall: "50–75 सेमी",
    duration: "110–130 दिन",
    yieldPerHectare: "18–22 क्विंटल"
  },
  majorStates: ["गुजरात", "राजस्थान", "तमिलनाडु", "कर्नाटक"],
  uses: ["तेल निर्माण", "नाश्ता उद्योग", "पशु चारा"],
  advisory: {
    bestSellingTime: "अक्टूबर–नवंबर",
    storageTip: "ठंडी जगह रखें",
    riskNote: "फफूंदी लगने का खतरा"
  },
  description: "मूंगफली प्रमुख तिलहन फसल है जिसका उपयोग तेल और खाद्य उद्योग में किया जाता है।"
},

{
  id: 10,
  name: "अरहर (तूर)",
  image: "/Images/arahar.png",
  season: "kharif",
  mandi: {
    name: "बांसवाड़ा",
    district: "बांसवाड़ा",
    state: "राजस्थान"
  },
  price: {
    current: 6900,
    previous: 6800,
    unit: "₹/क्विंटल",
    lastUpdated: "2026-02-01"
  },
  trend: {
    changePercent: 1.4,
    direction: "up"
  },
  quality: {
    grade: "A",
    moisture: "10–12%",
    grainSize: "Medium"
  },
  production: {
    suitableTemperature: "26–32°C",
    rainfall: "60–100 सेमी",
    duration: "150–180 दिन",
    yieldPerHectare: "12–18 क्विंटल"
  },
  majorStates: ["महाराष्ट्र", "कर्नाटक", "उत्तर प्रदेश", "राजस्थान"],
  uses: ["दाल निर्माण", "पोषण आहार", "पशु चारा"],
  advisory: {
    bestSellingTime: "दिसंबर–जनवरी",
    storageTip: "सूखी जगह रखें",
    riskNote: "कीट और बीमारी का खतरा"
  },
  description: "अरहर भारत की महत्वपूर्ण दलहन फसल है जो प्रोटीन का प्रमुख स्रोत है।"
},

{
  id: 11,
  name: "सोयाबीन",
  image: "/Images/soyabeen.png",
  season: "kharif",
  mandi: {
    name: "कोटा",
    district: "कोटा",
    state: "राजस्थान"
  },
  price: {
    current: 4800,
    previous: 4700,
    unit: "₹/क्विंटल",
    lastUpdated: "2026-02-05"
  },
  trend: {
    changePercent: 2.1,
    direction: "up"
  },
  quality: {
    grade: "A",
    moisture: "10–12%",
    grainSize: "Medium"
  },
  production: {
    suitableTemperature: "20–30°C",
    rainfall: "60–100 सेमी",
    duration: "90–110 दिन",
    yieldPerHectare: "20–25 क्विंटल"
  },
  majorStates: ["मध्य प्रदेश", "महाराष्ट्र", "राजस्थान"],
  uses: ["तेल निर्माण", "पशु चारा", "प्रोटीन उत्पाद"],
  advisory: {
    bestSellingTime: "अक्टूबर–नवंबर",
    storageTip: "सूखी जगह रखें",
    riskNote: "अधिक नमी से फफूंदी लग सकती है"
  },
  description: "सोयाबीन प्रोटीन और तेल का प्रमुख स्रोत है।"
},

{
  id: 12,
  name: "तिल",
  image: "/Images/sesame.png",
  season: "kharif",
  mandi: {
    name: "जोधपुर",
    district: "जोधपुर",
    state: "राजस्थान"
  },
  price: {
    current: 8200,
    previous: 8000,
    unit: "₹/क्विंटल",
    lastUpdated: "2026-02-04"
  },
  trend: {
    changePercent: 2.5,
    direction: "up"
  },
  quality: {
    grade: "A",
    moisture: "6–8%",
    grainSize: "Small"
  },
  production: {
    suitableTemperature: "25–35°C",
    rainfall: "30–50 सेमी",
    duration: "80–100 दिन",
    yieldPerHectare: "8–12 क्विंटल"
  },
  majorStates: ["राजस्थान", "गुजरात", "उत्तर प्रदेश"],
  uses: ["तेल निर्माण", "मिठाई उद्योग", "औषधीय उपयोग"],
  advisory: {
    bestSellingTime: "सितंबर",
    storageTip: "ठंडी जगह पर रखें",
    riskNote: "अत्यधिक वर्षा से नुकसान"
  },
  description: "तिल उच्च गुणवत्ता वाले तेल और मिठाई उद्योग में उपयोग होने वाली महत्वपूर्ण फसल है।"
},

{
  id: 13,
  name: "मसूर",
  image: "/Images/massor.png",
  season: "rabi",
  mandi: {
    name: "अलवर",
    district: "अलवर",
    state: "राजस्थान"
  },
  price: {
    current: 6400,
    previous: 6300,
    unit: "₹/क्विंटल",
    lastUpdated: "2026-02-03"
  },
  trend: {
    changePercent: 1.6,
    direction: "up"
  },
  quality: {
    grade: "A",
    moisture: "10–12%",
    grainSize: "Small"
  },
  production: {
    suitableTemperature: "18–25°C",
    rainfall: "30–45 सेमी",
    duration: "100–110 दिन",
    yieldPerHectare: "10–15 क्विंटल"
  },
  majorStates: ["उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान"],
  uses: ["दाल निर्माण", "पोषण आहार"],
  advisory: {
    bestSellingTime: "मार्च",
    storageTip: "सूखी जगह रखें",
    riskNote: "कीट लगने का खतरा"
  },
  description: "मसूर प्रोटीन युक्त दलहन फसल है जिसका उपयोग दाल के रूप में किया जाता है।"
},

{
  id: 14,
  name: "धान (चावल)",
  image: "/Images/rice.png",
  season: "kharif",
  mandi: {
    name: "उदयपुर",
    district: "उदयपुर",
    state: "राजस्थान"
  },
  price: {
    current: 3100,
    previous: 3000,
    unit: "₹/क्विंटल",
    lastUpdated: "2026-02-02"
  },
  trend: {
    changePercent: 3.3,
    direction: "up"
  },
  quality: {
    grade: "A",
    moisture: "12–14%",
    grainSize: "Long Grain"
  },
  production: {
    suitableTemperature: "20–35°C",
    rainfall: "100–200 सेमी",
    duration: "120–150 दिन",
    yieldPerHectare: "40–60 क्विंटल"
  },
  majorStates: ["पश्चिम बंगाल", "उत्तर प्रदेश", "पंजाब", "छत्तीसगढ़"],
  uses: ["चावल उत्पादन", "खाद्य उद्योग"],
  advisory: {
    bestSellingTime: "नवंबर–दिसंबर",
    storageTip: "सूखी जगह रखें",
    riskNote: "अधिक पानी से फसल खराब हो सकती है"
  },
  description: "धान भारत की प्रमुख खाद्य फसल है जिससे चावल बनाया जाता है।"
},

{
  id: 15,
  name: "ग्वार",
  image: "/Images/guar.png",
  season: "kharif",
  mandi: {
    name: "श्रीगंगानगर",
    district: "श्रीगंगानगर",
    state: "राजस्थान"
  },
  price: {
    current: 5200,
    previous: 5100,
    unit: "₹/क्विंटल",
    lastUpdated: "2026-02-01"
  },
  trend: {
    changePercent: 1.9,
    direction: "up"
  },
  quality: {
    grade: "A",
    moisture: "9–11%",
    grainSize: "Medium"
  },
  production: {
    suitableTemperature: "25–35°C",
    rainfall: "40–60 सेमी",
    duration: "80–100 दिन",
    yieldPerHectare: "15–20 क्विंटल"
  },
  majorStates: ["राजस्थान", "हरियाणा", "पंजाब"],
  uses: ["ग्वार गम उद्योग", "पशु चारा", "खाद्य उद्योग"],
  advisory: {
    bestSellingTime: "सितंबर–अक्टूबर",
    storageTip: "सूखी जगह रखें",
    riskNote: "अत्यधिक वर्षा से नुकसान"
  },
  description: "ग्वार राजस्थान की महत्वपूर्ण नकदी फसल है जिसका उपयोग ग्वार गम उद्योग में किया जाता है।"
},

{
  id: 16,
  name: "तरबूज",
  image: "/Images/watermelon.png",
  season: "zaid",
  mandi: {
    name: "कोटा",
    district: "कोटा",
    state: "राजस्थान"
  },
  price: {
    current: 1800,
    previous: 1700,
    unit: "₹/क्विंटल",
    lastUpdated: "2026-02-05"
  },
  trend: {
    changePercent: 5.8,
    direction: "up"
  },
  quality: {
    grade: "A",
    moisture: "85–90%",
    grainSize: "Large Fruit"
  },
  production: {
    suitableTemperature: "25–35°C",
    rainfall: "20–30 सेमी",
    duration: "70–90 दिन",
    yieldPerHectare: "200–250 क्विंटल"
  },
  majorStates: ["राजस्थान", "उत्तर प्रदेश", "महाराष्ट्र"],
  uses: ["फल सेवन", "जूस निर्माण"],
  advisory: {
    bestSellingTime: "मई–जून",
    storageTip: "ठंडी जगह पर रखें",
    riskNote: "अत्यधिक गर्मी से फल खराब हो सकते हैं"
  },
  description: "तरबूज गर्मियों में उगाई जाने वाली लोकप्रिय जायद फल फसल है।"
},

{
  id: 17,
  name: "खरबूजा",
  image: "/Images/muskmelon.png",
  season: "zaid",
  mandi: {
    name: "जयपुर",
    district: "जयपुर",
    state: "राजस्थान"
  },
  price: {
    current: 2200,
    previous: 2100,
    unit: "₹/क्विंटल",
    lastUpdated: "2026-02-05"
  },
  trend: {
    changePercent: 4.7,
    direction: "up"
  },
  quality: {
    grade: "A",
    moisture: "80–85%",
    grainSize: "Medium Fruit"
  },
  production: {
    suitableTemperature: "24–35°C",
    rainfall: "20–30 सेमी",
    duration: "65–80 दिन",
    yieldPerHectare: "180–220 क्विंटल"
  },
  majorStates: ["राजस्थान", "पंजाब", "हरियाणा"],
  uses: ["फल सेवन", "जूस निर्माण"],
  advisory: {
    bestSellingTime: "मई–जून",
    storageTip: "ठंडी जगह रखें",
    riskNote: "कीट संक्रमण का खतरा"
  },
  description: "खरबूजा गर्मियों का पौष्टिक और लोकप्रिय फल है।"
},

{
  id: 18,
  name: "खीरा",
  image: "/Images/cucumber.png",
  season: "zaid",
  mandi: {
    name: "अजमेर",
    district: "अजमेर",
    state: "राजस्थान"
  },
  price: {
    current: 2600,
    previous: 2500,
    unit: "₹/क्विंटल",
    lastUpdated: "2026-02-05"
  },
  trend: {
    changePercent: 4,
    direction: "up"
  },
  quality: {
    grade: "A",
    moisture: "90–95%",
    grainSize: "Medium"
  },
  production: {
    suitableTemperature: "22–32°C",
    rainfall: "20–25 सेमी",
    duration: "50–70 दिन",
    yieldPerHectare: "150–200 क्विंटल"
  },
  majorStates: ["राजस्थान", "उत्तर प्रदेश", "बिहार"],
  uses: ["सलाद", "जूस", "अचार निर्माण"],
  advisory: {
    bestSellingTime: "अप्रैल–मई",
    storageTip: "ठंडी जगह रखें",
    riskNote: "अत्यधिक धूप से नुकसान"
  },
  description: "खीरा गर्मियों की प्रमुख सब्जी फसल है जो शरीर को ठंडक देती है।"
},

{
  id: 19,
  name: "लोबिया",
  image: "/Images/lobia.png",
  season: "zaid",
  mandi: {
    name: "बीकानेर",
    district: "बीकानेर",
    state: "राजस्थान"
  },
  price: {
    current: 5400,
    previous: 5300,
    unit: "₹/क्विंटल",
    lastUpdated: "2026-02-05"
  },
  trend: {
    changePercent: 1.9,
    direction: "up"
  },
  quality: {
    grade: "A",
    moisture: "10–12%",
    grainSize: "Medium"
  },
  production: {
    suitableTemperature: "25–35°C",
    rainfall: "30–50 सेमी",
    duration: "60–80 दिन",
    yieldPerHectare: "12–18 क्विंटल"
  },
  majorStates: ["राजस्थान", "हरियाणा", "उत्तर प्रदेश"],
  uses: ["दाल निर्माण", "सब्जी", "पशु चारा"],
  advisory: {
    bestSellingTime: "जून",
    storageTip: "सूखी जगह रखें",
    riskNote: "कीट लगने का खतरा"
  },
  description: "लोबिया जायद मौसम की दलहन फसल है जो मिट्टी की उर्वरता बढ़ाती है।"
},

{
  id: 20,
  name: "कद्दू",
  image: "/Images/pumpkin.png",
  season: "zaid",
  mandi: {
    name: "उदयपुर",
    district: "उदयपुर",
    state: "राजस्थान"
  },
  price: {
    current: 1900,
    previous: 1850,
    unit: "₹/क्विंटल",
    lastUpdated: "2026-02-05"
  },
  trend: {
    changePercent: 2.7,
    direction: "up"
  },
  quality: {
    grade: "A",
    moisture: "85–90%",
    grainSize: "Large Fruit"
  },
  production: {
    suitableTemperature: "25–35°C",
    rainfall: "25–35 सेमी",
    duration: "80–100 दिन",
    yieldPerHectare: "180–220 क्विंटल"
  },
  majorStates: ["राजस्थान", "मध्य प्रदेश", "उत्तर प्रदेश"],
  uses: ["सब्जी", "मिठाई उद्योग", "बीज उत्पादन"],
  advisory: {
    bestSellingTime: "मई–जून",
    storageTip: "ठंडी जगह रखें",
    riskNote: "अधिक पानी से फल खराब हो सकते हैं"
  },
  description: "कद्दू गर्मियों में उगाई जाने वाली लोकप्रिय सब्जी फसल है।"
}




];

export default cropsData;
