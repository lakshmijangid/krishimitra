import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

import cropsData from "./DATA";

export default function MandiBhav() {
  const navigate = useNavigate();

  const [season, setSeason] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("price-desc");

  /* ================= FILTER + SORT LOGIC ================= */

  const filteredCrops = useMemo(() => {
    let data = [...cropsData];

    // Season filter
    if (season !== "all") {
      data = data.filter((c) => c.season === season);
    }

    // Search
    if (search.trim()) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sorting
    if (sort === "price-asc") data.sort((a, b) => a.price.current - b.price.current);
    if (sort === "price-desc") data.sort((a, b) => b.price.current - a.price.current);
    if (sort === "name") data.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "change") data.sort((a, b) => b.trend.changePercent - a.trend.changePercent);

    return data;
  }, [season, search, sort]);

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white px-6 py-20">

      {/* ================= HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto mb-14"
      >
        <h1 className="text-4xl font-semibold text-gray-800">
          मंडी भाव
        </h1>
        <p className="text-gray-600 mt-2">
          फसलों के ताज़ा बाज़ार भाव देखें, तुलना करें और सही निर्णय लें
        </p>
      </motion.div>

      {/* ================= SEASON FILTER ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <SeasonCard classNamee='bg-purple-600/30 border-purple-600/60 text-purple-800' title="सभी" active={season === "all"} onClick={() => setSeason("all")} />

        <SeasonCard classNamee="bg-pink-500/30 border-pink-500/60 text-pink-800" title="खरीफ" active={season === "kharif"} onClick={() => setSeason("kharif")} />
         
        <SeasonCard classNamee="bg-blue-500/30 border-blue-500/60 text-blue-800" title="रबी" active={season === "rabi"} onClick={() => setSeason("rabi")} />
        <SeasonCard classNamee='bg-green-500/30 border-green-500/60 text-green-800' title="ज़ायद" active={season === "zaid"} onClick={() => setSeason("zaid")} />
         
      </div>

      {/* ================= SEARCH + SORT ================= */}
      <div className="max-w-6xl mx-auto flex flex-wrap gap-4 mb-14">
        <div className="flex items-center gap-2 bg-green-200/60 backdrop-blur-md border-2 border-green-400/40 rounded-xl px-6 py-4 ">
          <FaSearch className="text-gray-400" />
          <input
            placeholder="फसल खोजें..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-sm  rounded-md px-2 py-1 transition w-full"
          />
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-green-200/60 backdrop-blur-md border-2 border-green-400/40 rounded-2xl px-4 py-2 text-sm"
        >
          <option value="price-desc">भाव: ज़्यादा → कम</option>
          <option value="price-asc">भाव: कम → ज़्यादा</option>
          <option value="name">नाम A–Z</option>
          <option value="change">परिवर्तन %</option>
        </select>
      </div>

      {/* ================= CROP CARDS ================= */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-6">
        {filteredCrops.map((crop, i) => (
          <motion.div
            key={crop.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            onClick={() => navigate(`/crop/${crop.id}`)}
            className={`
              cursor-pointer
              backdrop-blur-md
              border border-white/40
              rounded-2xl p-6 shadow-sm
              hover:shadow-md transition
              ${crop.season === "kharif" ? "bg-white" : crop.season === "rabi" ? "bg-blue-50" : "bg-green-50"}
            `}
          >
            <div className=""> <img
              src={crop.image}
              alt={crop.name}
              className="w-40 m-auto rounded-2xl h-40 object-cover
               mb-4"
            /></div>
           

            <h3 className="text-lg font-semibold text-gray-800">
              {crop.name}
            </h3>

            <p className="mt-1 text-2xl font-bold text-green-700">
              ₹{crop.price.current}
            </p>

            <div className="mt-2 flex items-center gap-2 text-sm">
              {crop.trend.direction === "up" ? (
                <span className="text-green-600 flex items-center gap-1">
                  <FaArrowUp /> {crop.trend.changePercent}%
                </span>
              ) : (
                <span className="text-red-600 flex items-center gap-1">
                  <FaArrowDown /> {Math.abs(crop.trend.changePercent)}%
                </span>
              )}
              <span className="text-gray-500">पिछली तुलना</span>
            </div>

            <span className={`inline-block mt-4 text-xs px-3 py-1 rounded-full ${crop.season === "kharif" ? "bg-pink-200 text-pink-800" : crop.season === "rabi" ? "bg-blue-200 text-blue-800" : "bg-green-200 text-green-800"}`}>
              {crop.season.toUpperCase()}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ================= SEASON CARD ================= */

function SeasonCard({ title, active, onClick, classNamee }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className={`
        cursor-pointer text-center py-8 rounded-2xl
       
        backdrop-blur-md border-2 border-blue-700/60
        ${" ", classNamee}
        transition
        ${active
          ? "border-4 scale-110"
          : "hover:bg-white/30 text-gray-800"}
      `}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
    </motion.div>
  );
}
