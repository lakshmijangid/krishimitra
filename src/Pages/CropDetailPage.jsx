import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaArrowDown,
  FaTemperatureHigh,
  FaCloudRain,
  FaWarehouse,
  FaLeaf
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import cropsData from "./DATA";

const CropDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const crop = cropsData.find((c) => c.id === Number(id));

  if (!crop) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl text-gray-600">फसल नहीं मिली</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 py-16 px-4">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mb-10 lg:ml-22 bg-white shadow-md hover:shadow-lg transition px-6 py-2 rounded-full font-semibold text-green-700"
      >
         वापस जाएं
      </button>

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto bg-green-50/70 backdrop-blur-xl rounded-3xl shadow-sm p-8 md:p-12"
      >
        <div className="flex flex-col md:flex-row gap-10 items-center">

          {/* IMAGE */}
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={crop.image}
            alt={crop.name}
            className="w-72 h-72 object-cover rounded-2xl shadow-md"
          />

          {/* TEXT */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-800">
              {crop.name}
            </h1>

            <p className="text-gray-600 mt-4 leading-relaxed">
              {crop.description}
            </p>

            <p className="mt-4 text-sm text-gray-500">
              📍 मंडी: {crop.mandi.name}, {crop.mandi.state}
            </p>
          </div>
        </div>
      </motion.div>

      {/* PRICE CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-14">

        <PriceCard
          title="मौजूदा भाव"
          value={crop.price.current}
          unit={crop.price.unit}
        />

        <PriceCard
          title="पिछला भाव"
          value={crop.price.previous}
          unit={crop.price.unit}
          muted
        />

        <PriceCard
          title="परिवर्तन"
          value={`${crop.trend.changePercent}%`}
          trend={crop.trend.direction}
        />

      </div>

      {/* DETAIL SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mt-16">

        <DetailCard title="उत्पादन जानकारी" icon={<FaLeaf />}>
          <li><FaTemperatureHigh /> तापमान: {crop.production.suitableTemperature}</li>
          <li><FaCloudRain /> वर्षा: {crop.production.rainfall}</li>
          <li>⏳ अवधि: {crop.production.duration}</li>
          <li>🌾 उपज: {crop.production.yieldPerHectare}</li>
        </DetailCard>

        <DetailCard title="गुणवत्ता विवरण" icon={<FaLeaf />}>
          <li>ग्रेड: {crop.quality.grade}</li>
          <li>नमी: {crop.quality.moisture}</li>
          <li>दाने का आकार: {crop.quality.grainSize}</li>
        </DetailCard>

        <DetailCard title="मुख्य उत्पादक राज्य">
          {crop.majorStates.map((s, i) => (
            <li key={i}>• {s}</li>
          ))}
        </DetailCard>

        <DetailCard title="उपयोग">
          {crop.uses.map((u, i) => (
            <li key={i}>• {u}</li>
          ))}
        </DetailCard>

      </div>

      {/* ADVISORY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto mt-20 bg-linear-to-r from-purple-100 to-purple-50 border border-purple-200 rounded-3xl p-10 shadow-md"
      >
        <h3 className="text-2xl font-bold mb-6">सलाह और सुझाव</h3>

        <p>📅 <strong>बेचने का सही समय:</strong> {crop.advisory.bestSellingTime}</p>
        <p className="mt-3">📦 <strong>भंडारण:</strong> {crop.advisory.storageTip}</p>
        <p className="mt-3">⚠ <strong>जोखिम:</strong> {crop.advisory.riskNote}</p>
      </motion.div>

    </div>
  );
};


/* ---------- PRICE CARD ---------- */

const PriceCard = ({ title, value, unit, trend, muted }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-green-300/20 backdrop-blur-lg rounded-2xl shadow-md p-6 border border-gray-100"
    >
      <p className="text-gray-500 text-md">{title}</p>

      <div className="flex items-center gap-2 mt-3">
        <p className={`text-3xl font-bold ${muted ? "text-gray-400 line-through" : "text-green-700"}`}>
          ₹{value}
        </p>

        {trend === "up" && <FaArrowUp className="text-green-600" />}
        {trend === "down" && <FaArrowDown className="text-red-600" />}
      </div>

      {unit && <p className="text-xs text-gray-500 mt-2">{unit}</p>}
    </motion.div>
  );
};


/* ---------- DETAIL CARD ---------- */

const DetailCard = ({ title, icon, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-sky-50/80 backdrop-blur-lg rounded-2xl shadow-md p-8 border-2 border-sky-300/30"
    >
      <h4 className="flex items-center gap-2 font-bold text-lg mb-4 text-gray-800">
        {icon}
        {title}
      </h4>

      <ul className="space-y-3 text-gray-600">
        {children}
      </ul>
    </motion.div>
  );
};

export default CropDetail;
