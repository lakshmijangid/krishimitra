import React from "react";

function SellCropCard({ listing, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer p-4 border-l-4 border-green-500 hover:border-green-600"
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{listing.crop}</h3>
          <p className="text-sm text-gray-600 mt-1">Seller: {listing.seller}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-green-600">₹{listing.price}</p>
          <p className="text-xs text-gray-500">/ {listing.unit}</p>
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-600">
        <span>Qty: {listing.quantity}</span>
        <span className={`font-semibold ${listing.available ? 'text-green-600' : 'text-red-600'}`}>
          {listing.available ? 'Avilable' : 'Unavailable'}
        </span>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-500">Click for seller details</p>
      </div>
    </div>
  );
}

export default SellCropCard;
