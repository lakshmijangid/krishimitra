import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaTimes } from "react-icons/fa";
import ProblemCard from "./problemCard";
import ProblemDetail from "./ProblemDetail";

const dummyProblems = [
  {
    id: 1,
    crop: "गेहूँ",
    problemTitle: "पत्तियों पर पीले धब्बे",
    farmerName: "रामलाल",
    district: "चूरू",
    severity: "Medium",
    description: "फसल की पत्तियों पर पीले धब्बे दिखाई दे रहे हैं।",
    image: "/Images/wheat-problem.png",
    aiSuggestion: "नीम तेल का छिड़काव करें..."
  },
  {
    id: 2,
    crop: "सरसों",
    problemTitle: "कीट प्रकोप",
    farmerName: "मोहनलाल",
    district: "झुंझुनू",
    severity: "High",
    description: "फसल में कीटों का अत्यधिक प्रकोप।",
    image: "/Images/mustard-Problem.png",
    aiSuggestion: "कीटनाशक का नियंत्रित छिड़काव करें।"
  }
];

const FarmerProblems = () => {

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = dummyProblems.filter(p =>
    p.crop.includes(search) ||
    p.problemTitle.includes(search)
  );

  return (
    <div className="relative min-h-screen px-4 lg:px-10 py-10">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-300 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 rounded-full blur-[120px] opacity-30" />
      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-semibold text-gray-800">
          🌾 Farmer Problems
        </h2>
        <p className="text-gray-600 mt-2">
          Review and provide impactful agricultural solutions.
        </p>
      </motion.div>

      {/* GLASS SEARCH BAR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          bg-white/40 backdrop-blur-2xl
          border border-white/30
          rounded-2xl
          shadow-lg
          p-4 mb-10
        "
      >
        <div className="flex items-center gap-3">
          <FaSearch className="text-gray-500" />
          <input
            placeholder="Search by crop or problem..."
            className="bg-transparent outline-none w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </motion.div>

      {/* PROBLEMS GRID */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

        {filtered.map(problem => (
          <ProblemCard
            key={problem.id}
            problem={problem}
            onClick={() => setSelected(problem)}
          />
        ))}

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <ProblemDetail
            problem={selected}
            close={() => setSelected(null)}
          />
        )}
      </AnimatePresence>

    </div>
  );
};

export default FarmerProblems;
