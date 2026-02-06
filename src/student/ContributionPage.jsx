import { useState } from "react";
import { motion } from "framer-motion";

const dummyContributions = [
  {
    id: 1,
    type: "solution",
    title: "पत्तियों पर पीले धब्बे",
    crop: "गेहूँ",
    method: "Organic Method",
    date: "12 June 2026",
    status: "Pending"
  },
  {
    id: 2,
    type: "solution",
    title: "कीट प्रकोप नियंत्रण",
    crop: "सरसों",
    method: "Chemical Method",
    date: "10 June 2026",
    status: "Accepted"
  },
  {
    id: 3,
    type: "project",
    title: "Low Cost Drip Irrigation Model",
    crop: "-",
    method: "-",
    date: "5 June 2026",
    status: "Rejected"
  }
];

const MyContributions = () => {

  const [activeTab, setActiveTab] = useState("solution");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredData = dummyContributions
    .filter(item => item.type === activeTab)
    .filter(item => statusFilter === "All" || item.status === statusFilter)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="relative min-h-screen px-4 lg:px-16 py-12">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-300 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto space-y-10">

        {/* ===== HEADER ===== */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            🎯 My Contributions
          </h2>
          <p className="text-gray-600 mt-2">
           Here You can view you all contributions
          </p>
        </div>

        {/* ===== TABS ===== */}
        <div className="flex gap-4">

          {["solution", "project"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-6 py-3 rounded-full
                ${activeTab === tab
                  ? "bg-linear-to-r from-green-600 to-blue-600 text-white"
                  : "bg-white/50 backdrop-blur-xl border border-white/30"}
              `}
            >
              {tab === "solution" ? "Solutions" : "Project Requests"}
            </button>
          ))}

        </div>

        {/* ===== FILTER ===== */}
        <div className="
          bg-white/50 backdrop-blur-xl
          border border-white/30
          rounded-2xl p-4 shadow-md
        ">
          <select
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-transparent outline-none"
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        {/* ===== CARDS ===== */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {filteredData.length === 0 ? (
            <EmptyState />
          ) : (
            filteredData.map(item => (
              <ContributionCard key={item.id} item={item} />
            ))
          )}

        </div>

      </div>
    </div>
  );
};

export default MyContributions;



/* ===== CONTRIBUTION CARD ===== */

const ContributionCard = ({ item }) => {

  const statusStyle = {
    Pending: "bg-yellow-100 text-yellow-700",
    Accepted: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700"
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
        bg-white/60 backdrop-blur-2xl
        border border-white/30
        rounded-3xl p-6 shadow-xl
        space-y-4
      "
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">
          {item.title}
        </h3>

        <span className={`px-3 py-1 text-xs rounded-full ${statusStyle[item.status]}`}>
          {item.status}
        </span>
      </div>

      {item.type === "solution" && (
        <>
          <p className="text-sm text-gray-600">
            Crop: {item.crop}
          </p>
          <p className="text-sm text-gray-600">
            Method: {item.method}
          </p>
        </>
      )}

      {item.type === "project" && (
        <p className="text-sm text-gray-600">
          Research Project Submission
        </p>
      )}

      <p className="text-sm text-gray-500">
        Submitted on: {item.date}
      </p>

    </motion.div>
  );
};


/* ===== EMPTY STATE ===== */

const EmptyState = () => (
  <div className="
    col-span-full
    bg-white/50 backdrop-blur-xl
    border border-white/30
    rounded-3xl p-10 text-center
  ">
    <p className="text-gray-600">
      No contributions found.
    </p>
  </div>
);
