import { motion } from "framer-motion";
import { FaSeedling, FaRobot, FaChartLine } from "react-icons/fa";

const DashboardHome = () => {
  return (
    <div className="space-y-12">

      {/* ===== HERO SECTION ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          relative overflow-hidden
          bg-linear-to-r from-green-600 to-green-400
          rounded-3xl p-10 text-white shadow-lg
        "
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute right-10 top-6 text-7xl opacity-30"
        >
          🌾
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold">
         KrishiMitra में आपका स्वागत है 🌱
        </h1>

        <p className="mt-4 text-green-100 max-w-xl">
          यहाँ से आप अपनी खेती की जानकारी, मंडी भाव और AI सलाह
          तुरंत प्राप्त कर सकते हैं।
        </p>
      </motion.div>

      {/* ===== FLOATING STATS ===== */}
      <div className="grid md:grid-cols-3 gap-8">

        <FloatingCard
          icon={<FaSeedling />}
          title="मेरे उत्पाद"
          value="4"
        />

        <FloatingCard
          icon={<FaRobot />}
          title="AI सलाह"
          value="2"
        />

        <FloatingCard
          icon={<FaChartLine />}
          title="मंडी अपडेट"
          value="Live"
        />

      </div>

      {/* ===== LIVE INSIGHTS ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          bg-white/60 backdrop-blur-xl
          border border-white/40
          rounded-3xl p-8 shadow-sm
        "
      >
        <h2 className="text-xl font-semibold mb-6">
          📊 आज के महत्वपूर्ण अपडेट
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Insight crop="गेहूँ" price="₹2200" />
          <Insight crop="सरसों" price="₹5600" />
          <Insight crop="बाजरा" price="₹1800" />

        </div>
      </motion.div>

      {/* ===== AI SPOTLIGHT ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          bg-linear-to-r from-green-50 to-white
          border border-green-100
          rounded-3xl p-8
        "
      >
        <h2 className="text-xl font-semibold text-green-700">
          🤖 AI खेती सलाह
        </h2>

        <p className="text-gray-700 mt-3">
          यदि आपकी फसल में कोई बीमारी या समस्या है,
          तो AI Crop Solution सेक्शन में जाकर तुरंत समाधान प्राप्त करें।
        </p>
      </motion.div>

    </div>
  );
};

export default DashboardHome;

/* ===== FLOATING CARD ===== */

const FloatingCard = ({ icon, title, value }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="
        bg-white/70 backdrop-blur-md
        border border-white/40
        rounded-2xl p-6 shadow-sm
        flex items-center gap-4
      "
    >
      <div className="text-green-600 text-3xl">
        {icon}
      </div>

      <div>
        <p className="text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">
          {value}
        </h3>
      </div>
    </motion.div>
  );
};

/* ===== INSIGHT CARD ===== */

const Insight = ({ crop, price }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-green-50 rounded-xl p-5 text-center"
    >
      <p className="text-gray-600">{crop}</p>
      <h3 className="text-lg font-semibold text-green-700">
        {price}
      </h3>
    </motion.div>
  );
};
