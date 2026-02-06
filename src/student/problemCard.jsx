import React from 'react';



import { motion, AnimatePresence } from "framer-motion";

const ProblemCard  = ({ problem, onClick }) => {

  const severityStyle = {
    Low: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    High: "bg-red-100 text-red-700"
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="
        group
        bg-white/50 backdrop-blur-2xl
        border border-white/30
        rounded-3xl
        shadow-xl max-w-xs
        overflow-hidden
        cursor-pointer
        transition
      "
      onClick={onClick}
    >

      <div className="relative">
        <img
          src={problem.image}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
        />

        <div className={`absolute top-4 right-4 px-3 py-1 text-xs rounded-full ${severityStyle[problem.severity]}`}>
          {problem.severity}
        </div>
      </div>

      <div className="p-6 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">
          {problem.problemTitle}
        </h3>

        <p className="text-sm text-gray-600">
          {problem.crop} • {problem.district}
        </p>

        <p className="text-sm text-gray-500 line-clamp-2">
          {problem.description}
        </p>

        <div className="text-green-700 text-sm font-medium">
          View Details →
        </div>
      </div>

    </motion.div>
  );
};
export default  ProblemCard;