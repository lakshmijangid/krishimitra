import { motion } from "framer-motion";
import { FaTimes, FaLeaf, FaUser } from "react-icons/fa";

const ProblemDetail = ({ problem, close }) => {

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-40"
        onClick={close}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.25 }}
        className="
          fixed top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[95%] max-w-3xl
          bg-white rounded-2xl
          shadow-xl z-50
          p-8
        "
      >

        {/* Header */}
        <div className="flex justify-between items-start mb-6">

          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              {problem.problemTitle}
            </h3>

            <div className="flex items-center gap-3 mt-2 text-sm">

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                {problem.crop}
              </span>

              <span className={`
                px-3 py-1 rounded-full text-xs font-medium
                ${problem.severity === "High"
                  ? "bg-red-100 text-red-700"
                  : problem.severity === "Medium"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"}
              `}>
                {problem.severity} Severity
              </span>

            </div>
          </div>

          <FaTimes
            className="cursor-pointer text-gray-500 hover:text-gray-800"
            onClick={close}
          />

        </div>

        {/* Image */}
        <img
          src={problem.image}
          className=" m-auto h-64 object-cover rounded-xl mb-6"
        />

        {/* Farmer Info */}
        <div className="flex items-center gap-3 mb-4 text-gray-600 text-sm">
          <FaUser className="text-green-600" />
          किसान: {problem.farmerName} • {problem.district}
        </div>

        {/* Description */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">
            समस्या विवरण
          </h4>

          <p className="text-gray-700 leading-relaxed">
            {problem.description}
          </p>
        </div>

        {/* AI Advisory */}
        <div className="bg-green-50 border border-green-100 p-5 rounded-xl mb-8">
          <h4 className="font-semibold text-green-700 flex items-center gap-2 mb-2">
            <FaLeaf />
            AI कृषि सलाह
          </h4>

          <p className="text-gray-700 leading-relaxed">
            {problem.aiSuggestion}
          </p>
        </div>

        {/* CTA Button */}
      <button className=" w-full bg-linear-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl shadow-lg "> Give Solution </button>

      </motion.div>
    </>
  );
};

export default ProblemDetail;
