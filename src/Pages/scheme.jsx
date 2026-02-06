import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import schemesData from "./SkeemData";

const Schemes = () => {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredSchemes = useMemo(() => {

    let data = [...schemesData];

    if (search) {
      data = data.filter(s =>
        s.name.includes(search)
      );
    }

    if (category !== "all") {
      data = data.filter(s =>
        s.category === category
      );
    }

    return data;

  }, [search, category]);

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white px-6 py-20">

      {/* HEADER + FILTER WRAPPER */}
<motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  className="
    max-w-6xl mx-auto
    bg-white/50 backdrop-blur-xl
    border border-white/40
    rounded-3xl
    shadow-sm
    p-6 md:p-8
    mb-14
  "
>

  {/* HEADING */}
  <div className="relative mb-8">

   
    <div className="pl-5">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
        सरकारी योजनाएँ
      </h1>

      <p className="text-gray-600 mt-2 text-sm md:text-base">
        किसानों के लिए उपलब्ध सरकारी सहायता और योजनाएँ
      </p>
    </div>

  </div>

  {/* FILTER BAR */}
  <div className="flex flex-col lg:flex-row lg:items-center gap-4">

    {/* SEARCH */}
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="
        flex items-center gap-3
        flex-1
        bg-white/60 backdrop-blur-md
        border border-gray-200
        rounded-xl px-4 py-3
        focus-within:ring-2 focus-within:ring-green-400
        transition
      "
    >
      <FaSearch className="text-gray-500" />

      <input
        placeholder="योजना खोजें..."
        className="bg-transparent outline-none w-full text-gray-700"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </motion.div>

    {/* CATEGORY PILLS */}
    <div className="flex flex-wrap gap-2">

      {["all", "Insurance", "Loan"].map((cat) => (
        <motion.button
          key={cat}
          whileTap={{ scale: 0.95 }}
          whileHover={{ y: -2 }}
          onClick={() => setCategory(cat)}
          className={`
            px-5 py-2 rounded-full text-sm font-medium
            transition-all
            border
            ${
              category === cat
                ? "bg-green-600 text-white border-green-600 shadow"
                : "bg-white/60 border-gray-200 text-gray-700 hover:bg-green-50"
            }
          `}
        >
          {cat}
        </motion.button>
      ))}

    </div>

  </div>

</motion.div>


      {/* SCHEME CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredSchemes.map((scheme, i) => (

          <motion.div
            key={scheme.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            onClick={() => navigate(`/scheme/${scheme.id}`)}
            className="
              cursor-pointer
              bg-white/70 backdrop-blur-md
              border border-white/40
              rounded-2xl overflow-hidden
              shadow-sm hover:shadow-md
            "
          >
            {/* IMAGE */}
            <img
              src={scheme.image}
              className="w-full h-44 object-cover"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold">
                {scheme.name}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                {scheme.shortDesc}
              </p>

              {/* DEADLINE BADGE */}
              <div className="flex items-center gap-2 mt-4 text-yellow-500 text-md font-bold ">
                <FaCalendarAlt />
                अंतिम तिथि: {scheme.deadline}
              </div>
            </div>

          </motion.div>

        ))}
      </div>

    </div>
  );
};

export default Schemes;
