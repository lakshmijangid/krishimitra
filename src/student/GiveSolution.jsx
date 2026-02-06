import { useState } from "react";
import { motion } from "framer-motion";

const GiveSolution = () => {

  // ===== DUMMY PROBLEM DATA =====
  const problem = {
    id: 1,
    crop: "गेहूँ",
    problemTitle: "पत्तियों पर पीले धब्बे",
    farmerName: "रामलाल",
    district: "चूरू",
    severity: "Medium",
    description:
      "फसल की पत्तियों पर पीले धब्बे दिखाई दे रहे हैं और उत्पादन कम हो रहा है।",
    image: "/Images/wheat-problem.png",
    aiSuggestion:
      "नीम तेल का छिड़काव करें और मिट्टी की जांच करवाएं। नाइट्रोजन की कमी भी कारण हो सकती है।"
  };

  const [solution, setSolution] = useState("");
  const [method, setMethod] = useState("");
  const [reference, setReference] = useState("");
  const [preview, setPreview] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const maxChars = 600;

  const handleSubmit = () => {
    if (!solution || !method) return;

    const submissionData = {
      id: Date.now(),
      problemId: problem.id,
      studentName: "Laxmi",
      solutionText: solution,
      methodType: method,
      reference: reference,
      date: new Date().toLocaleDateString()
    };

    console.log("Submitted Data:", submissionData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="
            bg-white/60 backdrop-blur-2xl
            border border-white/30
            rounded-3xl p-10 shadow-xl text-center
            max-w-md w-full
          "
        >
          <h2 className="text-2xl font-semibold text-green-700">
            ✅ Solution Submitted Successfully
          </h2>
          <p className="text-gray-600 mt-4">
            Your agricultural solution has been recorded.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen px-4 lg:px-16 py-12">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-300 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto space-y-10">

        {/* ===== PROBLEM SUMMARY ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            bg-white/50 backdrop-blur-2xl
            border border-white/30
            rounded-3xl p-8 shadow-xl
          "
        >
          <h2 className="text-xl font-semibold mb-4">
            🌾 Problem Context
          </h2>

          <img
            src={problem.image}
            alt="problem"
            className="w-full h-52 object-cover rounded-xl mb-6"
          />

          <p className="font-semibold text-gray-800">
            {problem.problemTitle}
          </p>

          <p className="text-sm text-gray-600 mt-1">
            Crop: {problem.crop} • Farmer: {problem.farmerName} • District: {problem.district}
          </p>

          <div className="mt-6 bg-green-50 p-4 rounded-xl">
            <h4 className="font-medium text-green-700 mb-2">
              🤖 AI Suggestion
            </h4>
            <p className="text-sm text-gray-700">
              {problem.aiSuggestion}
            </p>
          </div>
        </motion.div>


        {/* ===== SOLUTION FORM ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            bg-white/50 backdrop-blur-2xl
            border border-white/30
            rounded-3xl p-8 shadow-xl
            space-y-8
          "
        >
          <h3 className="text-xl font-semibold">
            ✍ Provide Expert Solution
          </h3>

          {/* TEXTAREA */}
          <div>
            <textarea
              rows="6"
              value={solution}
              maxLength={maxChars}
              onChange={(e) => setSolution(e.target.value)}
              placeholder="कृपया वैज्ञानिक या व्यावहारिक समाधान लिखें…"
              className="
                w-full bg-white/70 backdrop-blur-md
                border border-gray-200
                rounded-xl p-4
                outline-none focus:ring-2 focus:ring-green-400
              "
            />

            <div className="text-right text-sm text-gray-500 mt-2">
              {solution.length} / {maxChars}
            </div>
          </div>

          {/* METHOD TYPE */}
          <div>
            <p className="font-medium mb-3">🧪 Method Type</p>

            <div className="grid sm:grid-cols-3 gap-4">
              {["Organic Method", "Chemical Method", "Scientific Research Based"].map(type => (
                <label
                  key={type}
                  className={`
                    p-4 rounded-xl border cursor-pointer
                    ${method === type
                      ? "bg-green-100 border-green-500"
                      : "bg-white/70 border-gray-200"}
                  `}
                >
                  <input
                    type="radio"
                    value={type}
                    onChange={(e) => setMethod(e.target.value)}
                    className="hidden"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* REFERENCE */}
          <div>
            <input
              type="text"
              placeholder="Optional Reference / Study / Book"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              className="
                w-full bg-white/70 backdrop-blur-md
                border border-gray-200
                rounded-xl p-4
                outline-none focus:ring-2 focus:ring-green-400
              "
            />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setPreview(!preview)}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white"
            >
              {preview ? "Hide Preview" : "Preview"}
            </button>

            <button
              onClick={handleSubmit}
              className="
                px-6 py-3 rounded-xl
                bg-linear-to-r from-green-600 to-blue-600
                text-white
              "
            >
              Submit Solution
            </button>
          </div>

          {/* PREVIEW */}
          {preview && (
            <div className="
              bg-white/70 backdrop-blur-md
              border border-gray-200
              rounded-xl p-6
            ">
              <h4 className="font-medium mb-3">📄 Preview</h4>
              <p className="whitespace-pre-line">{solution}</p>
              <p className="text-sm mt-4 text-gray-600">
                Method: {method}
              </p>
              <p className="text-sm text-gray-600">
                Date: {new Date().toLocaleDateString()}
              </p>
            </div>
          )}

        </motion.div>

      </div>
    </div>
  );
};

export default GiveSolution;
