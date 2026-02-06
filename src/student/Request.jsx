import { useState } from "react";
import { motion } from "framer-motion";

const CreateProjectRequest = () => {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [land, setLand] = useState("");
  const [duration, setDuration] = useState("");
  const [benefit, setBenefit] = useState("");
  const [resources, setResources] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const maxWords = 150;

  const wordCount = benefit.trim() === ""
    ? 0
    : benefit.trim().split(/\s+/).length;

  const handleSubmit = () => {
    if (!title || !category || !land || !duration || !benefit) return;

    const projectData = {
      id: Date.now(),
      studentName: "Laxmi",
      projectTitle: title,
      category,
      landRequired: land,
      duration,
      benefit,
      resources,
      status: "Pending",
      date: new Date().toLocaleDateString()
    };

    console.log("Project Submitted:", projectData);
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
            ✅ Project Request Submitted
          </h2>
          <p className="text-gray-600 mt-4">
            Your innovation request is now under review.
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

      <div className="max-w-6xl mx-auto space-y-12">

        {/* ===== HEADER ===== */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            🚀 Create Project Request
          </h2>
          <p className="text-gray-600 mt-2">
            Submit your agricultural innovation idea for field collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ===== FORM SECTION ===== */}
          <div className="
            bg-white/50 backdrop-blur-2xl
            border border-white/30
            rounded-3xl p-8 shadow-xl
            space-y-6
          ">

            {/* Project Title */}
            <input
              type="text"
              placeholder="Project Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="inputStyle"
            />

            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="inputStyle"
            >
              <option value="">Select Category</option>
              <option>Soil Research</option>
              <option>Crop Improvement</option>
              <option>Organic Farming</option>
              <option>Water Management</option>
              <option>Pest Control</option>
            </select>

            {/* Land Required */}
            <input
              type="text"
              placeholder="Required Land (e.g., 2 Acres)"
              value={land}
              onChange={(e) => setLand(e.target.value)}
              className="inputStyle"
            />

            {/* Duration */}
            <input
              type="text"
              placeholder="Project Duration (e.g., 3 Months)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="inputStyle"
            />

            {/* Benefit */}
            <div>
              <textarea
                rows="4"
                placeholder="Expected Farmer Benefit..."
                value={benefit}
                onChange={(e) => setBenefit(e.target.value)}
                className="inputStyle"
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {wordCount} / {maxWords} words
              </div>
            </div>

            {/* Resources */}
            <input
              type="text"
              placeholder="Resources Needed (Optional)"
              value={resources}
              onChange={(e) => setResources(e.target.value)}
              className="inputStyle"
            />

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="
                w-full
                bg-linear-to-r from-green-600 to-blue-600
                text-white py-3 rounded-xl shadow-lg
              "
            >
              Submit Project Request
            </button>

          </div>

          {/* ===== LIVE PREVIEW ===== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              bg-white/50 backdrop-blur-2xl
              border border-white/30
              rounded-3xl p-8 shadow-xl
            "
          >
            <h3 className="text-lg font-semibold mb-6">
              📄 Live Preview
            </h3>

            <div className="space-y-4">
              <p className="font-semibold text-gray-800">
                {title || "Project Title"}
              </p>

              <p className="text-sm text-gray-600">
                Category: {category || "-"}
              </p>

              <p className="text-sm text-gray-600">
                Land Required: {land || "-"}
              </p>

              <p className="text-sm text-gray-600">
                Duration: {duration || "-"}
              </p>

              <p className="text-sm text-gray-700">
                {benefit || "Expected benefit will appear here."}
              </p>

              <p className="text-xs text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full inline-block">
                Status: Pending
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default CreateProjectRequest;


/* ===== COMMON INPUT STYLE ===== */
const style = document.createElement("style");
style.innerHTML = `
  .inputStyle {
    width: 100%;
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(12px);
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 12px;
    outline: none;
  }
`;
document.head.appendChild(style);
