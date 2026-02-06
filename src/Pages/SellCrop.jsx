import React, { useState } from "react";
import SellCropCard from "../Components/SellCropCard";

function SellCrop() {
  const [selected, setSelected] = useState(null);

  const listings = [
    {
      id: 1,
      crop: "गेहूँ",
      seller: "राधा फार्मर्स",
      price: 2100,
      unit: "किग्रा",
      quantity: "2000 किग्रा",
      available: true,
      location: "हरियाणा",
      quality: "A-Grade",
      description: "ताजा सरसों फसल, अच्छी गुणवत्ता के साथ।",
      contact: "+91-9876543210"
    },
    {
      id: 2,
      crop: "चावल",
      seller: "श्री कृषि",
      price: 3150,
      unit: "किग्रा",
      quantity: "1500 किग्रा",
      available: true,
      location: "पश्चिम बंगाल",
      quality: "B-Grade",
      description: "नया सीज़न चावल, थोक उपलब्ध।",
      contact: "+91-9123456780"
    },
    {
      id: 3,
      crop: "मक्का",
      seller: "कृष्ण फार्म",
      price: 1800,
      unit: "किग्रा",
      quantity: "500 किग्रा",
      available: false,
      location: "महाराष्ट्र",
      quality: "A-Grade",
      description: "सीमित मात्रा में उपलब्ध।",
      contact: "+91-9988776655"
    }
  ];

  const handleClick = (listing) => setSelected(listing);
  const closeDetail = () => setSelected(null);

  return (
    <div className="min-h-screen pl-13 md:pl-20 py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">Sell Crop Listings</h1>
        <p className="text-gray-600 mb-6">Registered sellers offering crops for sale</p>

        <div className="w-full flex justify-center items-center px-2">
          <a href="" className="bg-green-100 py-2 w-full text-emerald-700  text-center rounded-md border border-emerald-200 max-w-150 text-lg mb-6">Sell Your Crop</a>
        </div>

        {!selected ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((l) => (
              <div key={l.id} onClick={() => handleClick(l)}>
                <SellCropCard listing={l} onClick={() => handleClick(l)} />
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="p-6 bg-green-500 text-white flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{selected.crop} — {selected.seller}</h2>
                  <p className="text-yellow-100 mt-1">{selected.location} • {selected.quality}</p>
                </div>
                <button onClick={closeDetail} className="bg-white text-green-600 rounded-full w-9 h-9 flex items-center justify-center font-bold">✕</button>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-green-50 rounded">
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="text-2xl font-bold text-green-600">₹{selected.price} / {selected.unit}</p>
                    <p className="text-xs text-gray-500 mt-1">Quantity: {selected.quantity}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <p className="text-sm text-gray-600">Status</p>
                    <p className={`text-lg font-semibold ${selected.available ? 'text-green-600' : 'text-red-600'}`}>
                      {selected.available ? 'Available' : 'Unavailable'}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Contact: {selected.contact}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
                  <p className="text-gray-700">{selected.description}</p>
                </div>

                <button onClick={closeDetail} className="w-full bg-green-500 text-white py-3 rounded font-semibold hover:bg-green-600 transition">Back to listings</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SellCrop;