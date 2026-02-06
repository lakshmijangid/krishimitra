import React, { useState } from "react";
import CropRateCards from "../Components/CropRateCards";

function UserCropRate() {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const cropsData = [
    {
      id: 1,
      name: "गेहूँ",
      icon: "🌾",
      currentRate: 2150,
      previousRate: 2100,
      change: 2.4,
      description: "गेहूँ एक प्रमुख रबी फसल है जो भारत में व्यापक रूप से उगाई जाती है।",
      details: "गेहूँ की खेती के लिए 15-25°C का तापमान उपयुक्त है। यह फसल 120-150 दिनों में तैयार हो जाती है। प्रति हेक्टेयर उत्पादन 40-50 किवंटल तक हो सकता है।",
      state: "पंजाब, हरियाणा, उत्तर प्रदेश",
      season: "रबी (अक्टूबर-मार्च)",
      quality: "A-Grade"
    },
    {
      id: 2,
      name: "चावल",
      icon: "🍚",
      currentRate: 3200,
      previousRate: 3100,
      change: 3.2,
      description: "चावल भारत की मुख्य खाद्य फसल है और विश्व व्यापार में महत्वपूर्ण है।",
      details: "चावल की खेती के लिए 20-30°C तापमान और अधिक वर्षा की आवश्यकता है। यह फसल 90-150 दिनों में पकती है। प्रति हेक्टेयर उत्पादन 30-40 किवंटल है।",
      state: "पश्चिम बंगाल, पंजाब, तमिलनाडु",
      season: "खरीफ (जून-सितंबर)",
      quality: "A-Grade"
    },
    {
      id: 3,
      name: "दाल",
      icon: "🫘",
      currentRate: 4500,
      previousRate: 4350,
      change: 3.4,
      description: "दालें प्रोटीन का मुख्य स्रोत हैं और भारतीय आहार का अभिन्न अंग हैं।",
      details: "दालों की खेती मौसमी फसलों के रूप में की जाती है। मसूर और अरहर मुख्य दाल फसलें हैं। दालों की पैदावार 15-25 किवंटल प्रति हेक्टेयर होती है।",
      state: "मध्य प्रदेश, महाराष्ट्र, कर्नाटक",
      season: "रबी (अक्टूबर-मार्च)",
      quality: "Premium"
    },
    {
      id: 4,
      name: "मक्का",
      icon: "🌽",
      currentRate: 1850,
      previousRate: 1900,
      change: -2.6,
      description: "मक्का एक बहुउपयोगी फसल है जिसका उपयोग अनाज और चारा दोनों के लिए होता है।",
      details: "मक्का की खेती गर्मी और सर्दी दोनों मौसमों में की जाती है। यह फसल 80-120 दिनों में तैयार हो जाती है। प्रति हेक्टेयर उत्पादन 30-45 किवंटल तक हो सकता है।",
      state: "कर्नाटक, महाराष्ट्र, राजस्थान",
      season: "खरीफ और रबी",
      quality: "A-Grade"
    },
    {
      id: 5,
      name: "कपास",
      icon: "🌸",
      currentRate: 5200,
      previousRate: 5000,
      change: 4.0,
      description: "कपास एक नकदी फसल है जो टेक्सटाइल उद्योग के लिए महत्वपूर्ण है।",
      details: "कपास की खेती 20-30°C तापमान में सर्वोत्तम होती है। यह फसल 7-9 महीने में तैयार हो जाती है। भारत विश्व का दूसरा सबसे बड़ा कपास उत्पादक है।",
      state: "गुजरात, महाराष्ट्र, कर्नाटक",
      season: "खरीफ (जून-अक्टूबर)",
      quality: "Premium"
    },
    {
      id: 6,
      name: "सोयाबीन",
      icon: "🌱",
      currentRate: 4800,
      previousRate: 4650,
      change: 3.2,
      description: "सोयाबीन प्रोटीन का समृद्ध स्रोत है और खाद्य तेल के लिए महत्वपूर्ण है।",
      details: "सोयाबीन की खेती खरीफ मौसम में की जाती है। यह फसल 70-100 दिनों में पकती है। प्रति हेक्टेयर उत्पादन 15-20 किवंटल है।",
      state: "मध्य प्रदेश, महाराष्ट्र, राजस्थान",
      season: "खरीफ (जून-अक्टूबर)",
      quality: "A-Grade"
    }
  ];

  const handleCardClick = (crop) => {
    setSelectedCrop(crop);
  };

  const handleCloseDetail = () => {
    setSelectedCrop(null);
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-blue-50 to-green-50 py-12 pl-13 md:pl-20">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">फसलों की दरें</h1>
          <p className="text-gray-600">वर्तमान बाजार भाव और विस्तृत जानकारी</p>
          <div className="mt-6 max-w-md">
            <input
              type="text"
              placeholder="फसल खोजें..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

        </div>

        {!selectedCrop ? (
          <div className="max-w-7xl mx-auto px-1 md:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cropsData
                .filter((crop) => crop.name.includes(searchTerm))
                .map((crop) => (
                  <div key={crop.id} onClick={() => handleCardClick(crop)}>
                    <CropRateCards crop={crop} onClick={() => handleCardClick(crop)} />
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto  md:px-4">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-linear-to-r from-green-600 to-green-800 p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl">{selectedCrop.icon}</span>
                    <div>
                      <h2 className="text-4xl font-bold">{selectedCrop.name}</h2>
                      <p className="text-green-100 text-sm mt-1">{selectedCrop.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCloseDetail}
                    className="bg-white relative top-0 text-green-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl hover:bg-green-100 px-4 transition"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-gray-200">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm mb-1">मौजूदा दर</p>
                    <p className="text-3xl font-bold text-green-600">₹{selectedCrop.currentRate}</p>
                    <p className="text-xs text-gray-500 mt-1">प्रति किग्रा</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm mb-1">पिछली दर</p>
                    <p className="text-3xl font-bold text-gray-500 line-through">₹{selectedCrop.previousRate}</p>
                    <p className="text-xs text-gray-500 mt-1">प्रति किग्रा</p>
                  </div>
                  <div className={`p-4 rounded-lg ${selectedCrop.change > 0 ? 'bg-green-50' : 'bg-red-50'}`}>
                    <p className="text-gray-600 text-sm mb-1">परिवर्तन</p>
                    <p className={`text-3xl font-bold ${selectedCrop.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {selectedCrop.change > 0 ? '+' : ''}{selectedCrop.change}%
                    </p>
                    <p className="text-xs text-gray-500 mt-1">पिछली तुलना में</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">विस्तृत जानकारी</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedCrop.details}</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">🌍 मुख्य उत्पादक राज्य</h4>
                      <p className="text-gray-600">{selectedCrop.state}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">📅 मौसम</h4>
                      <p className="text-gray-600">{selectedCrop.season}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">⭐ गुणवत्ता</h4>
                      <p className="text-gray-600">{selectedCrop.quality}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCloseDetail}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  वापस जाएं
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UserCropRate;