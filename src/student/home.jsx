import { motion } from "framer-motion";
import {
  FaSeedling,
  FaLightbulb,
  FaProjectDiagram,
  FaUsers,
  FaArrowRight
} from "react-icons/fa";

const StudentDashboardHome = () => {

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="space-y-10">

      {/* ===== HERO SECTION ===== */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          bg-white/50 backdrop-blur-2xl
          border border-white/30
          rounded-3xl p-8 lg:p-10
          shadow-xl
          flex flex-col lg:flex-row
          justify-between gap-6
        "
      >
        <div>
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
            नमस्ते रवि 👋
          </h2>

          <p className="text-gray-600 mt-2">
            आप कृषि नवाचार पैनल में लॉगिन हैं।
          </p>

          <p className="text-sm text-gray-500 mt-4">
            {today}
          </p>
        </div>

        <div className="
          bg-linear-to-r from-blue-600 to-green-500
          text-white px-6 py-3
          rounded-full self-start lg:self-center
          shadow-md
        ">
          🎓 Agriculture Student
        </div>
      </motion.div>


      {/* ===== STATS GRID ===== */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          icon={<FaSeedling />}
          title="Farmer Problems"
          value="24"
        />

        <StatCard
          icon={<FaLightbulb />}
          title="Solutions Submitted"
          value="8"
        />

        <StatCard
          icon={<FaProjectDiagram />}
          title="Active Projects"
          value="3"
        />

        <StatCard
          icon={<FaUsers />}
          title="Collaboration Requests"
          value="5"
        />

      </div>


      {/* ===== ACTIVE FARMER PROBLEMS ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          bg-white/50 backdrop-blur-2xl
          border border-white/30
          rounded-3xl p-8 shadow-xl
        "
      >
        <h3 className="text-xl font-semibold mb-6">
          🌾 Active Farmer Problems
        </h3>

        <div className="space-y-5">

          <ProblemPreview
            crop="गेहूँ"
            description="फसल में पीलापन और उत्पादन कम हो रहा है।"
          />

          <ProblemPreview
            crop="सरसों"
            description="कीट प्रकोप के कारण फसल नुकसान।"
          />

        </div>
      </motion.div>


      {/* ===== QUICK ACTIONS ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          bg-white/50 backdrop-blur-2xl
          border border-white/30
          rounded-3xl p-8 shadow-xl
        "
      >
        <h3 className="text-xl font-semibold mb-6">
          🚀 Quick Actions
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <ActionButton text="Solve Farmer Problem" />
          <ActionButton text="Create Research Project" />
          <ActionButton text="View My Contributions" />

        </div>
      </motion.div>

    </div>
  );
};

export default StudentDashboardHome;


/* ===== STAT CARD ===== */

const StatCard = ({ icon, title, value }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="
      bg-white/50 backdrop-blur-xl
      border border-white/30
      rounded-2xl p-6
      shadow-md
    "
  >
    <div className="text-green-600 text-xl mb-3">
      {icon}
    </div>

    <h4 className="text-gray-600 text-sm">
      {title}
    </h4>

    <p className="text-2xl font-semibold mt-1 text-gray-800">
      {value}
    </p>
  </motion.div>
);


/* ===== PROBLEM PREVIEW ===== */

const ProblemPreview = ({ crop, description }) => (
  <div className="
    flex flex-col sm:flex-row
    justify-between items-start sm:items-center
    gap-4
    bg-white/40 backdrop-blur-md
    border border-white/20
    rounded-xl p-4
  ">
    <div>
      <p className="font-medium text-gray-800">
        {crop}
      </p>
      <p className="text-sm text-gray-600 mt-1">
        {description}
      </p>
    </div>

    <button className="
      bg-green-600 text-white
      px-4 py-2 rounded-lg
      flex items-center gap-2
      hover:bg-green-700 transition
      text-sm
    ">
      Solve Now
      <FaArrowRight size={12} />
    </button>
  </div>
);


/* ===== ACTION BUTTON ===== */

const ActionButton = ({ text }) => (
  <motion.button
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
    className="
      bg-linear-to-r from-blue-600 to-green-500
      text-white
      px-6 py-4
      rounded-xl
      shadow-md
      font-medium
      text-sm
    "
  >
    {text}
  </motion.button>
);
