import React from "react";

function CropRateCards({ crop, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer p-4 border-l-4 border-green-600 hover:border-green-800"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-gray-800">{crop.name}</h3>
        <span className="text-2xl">{crop.icon}</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600 text-sm">मौजूदा दर:</span>
          <span className="font-semibold text-green-600">₹{crop.currentRate}/किग्रा</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 text-sm">पिछली दर:</span>
          <span className="text-gray-500 line-through">₹{crop.previousRate}/किग्रा</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 text-sm">परिवर्तन:</span>
          <span className={`font-semibold ${crop.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {crop.change > 0 ? '+' : ''}{crop.change}%
          </span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-500">विस्तृत जानकारी के लिए क्लिक करें</p>
      </div>
    </div>
  );
}

export default CropRateCards;
