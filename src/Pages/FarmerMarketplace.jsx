import { useState, useMemo } from "react";
import farmerProducts from "./FarmerProductData"; 
import ProductCard from "./FarmerProductCard"; 
import ProductModal from "./FarmerProductDetailModal";
import { motion } from "framer-motion";
import { FaSearch, FaFilter, FaMapMarkerAlt, FaSortAmountDown } from "react-icons/fa";

const FarmerMarketplace = () => {

  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cropFilter, setCropFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const [sortOption, setSortOption] = useState("price-desc");

  const filteredProducts = useMemo(() => {

    let data = [...farmerProducts];

    if (search) {
      data = data.filter(p =>
        p.productName.includes(search)
      );
    }

    if (cropFilter !== "all") {
      data = data.filter(p => p.cropType === cropFilter);
    }

    if (locationFilter !== "all") {
      data = data.filter(p => p.subDistrict === locationFilter);
    }

    if (sortOption === "price-asc")
      data.sort((a, b) => a.price - b.price);

    if (sortOption === "price-desc")
      data.sort((a, b) => b.price - a.price);

    return data;

  }, [search, cropFilter, locationFilter, sortOption]);

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white px-6 py-20">


{/* top section */}

     <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="
    bg-white/50 backdrop-blur-xl
    border border-white/40
    rounded-2xl
    shadow-sm max-w-7xl
 m-auto   p-6 mb-12
  "
>

  {/* HEADING */}
  <h1 className="text-3xl font-semibold text-gray-800 mb-6">
    किसान उत्पाद बाजार
  </h1>

  {/* FILTER GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

    {/* SEARCH */}
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="
        flex items-center gap-3
        bg-white/60 backdrop-blur-md
        border border-gray-200
        rounded-xl px-4 py-3
        focus-within:ring-2 focus-within:ring-green-400
        transition
      "
    >
      <FaSearch className="text-gray-500" />

      <input
        placeholder="उत्पाद खोजें..."
        className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </motion.div>


    {/* CROP FILTER */}
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="
        flex items-center gap-3
        bg-white/60 backdrop-blur-md
        border border-gray-200
        rounded-xl px-4 py-3
      "
    >
      <FaFilter className="text-gray-500" />

      <select
        onChange={(e) => setCropFilter(e.target.value)}
        className="bg-transparent outline-none w-full text-gray-700"
      >
        <option value="all">सभी फसलें</option>
        <option value="गेहूँ">गेहूँ</option>
        <option value="सरसों">सरसों</option>
      </select>
    </motion.div>


    {/* LOCATION FILTER */}
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="
        flex items-center gap-3
        bg-white/60 backdrop-blur-md
        border border-gray-200
        rounded-xl px-4 py-3
      "
    >
      <FaMapMarkerAlt className="text-gray-500" />

      <select
        onChange={(e) => setLocationFilter(e.target.value)}
        className="bg-transparent outline-none w-full text-gray-700"
      >
        <option value="all">पूरा चूरू</option>
        <option value="सरदारशहर">सरदारशहर</option>
        <option value="रतनगढ़">रतनगढ़</option>
        <option value="तारानगर">तारानगर</option>
        <option value="सुजानगढ़">सुजानगढ़</option>
        <option value="राजगढ़">राजगढ़</option>
        <option value="चूरू शहर">चूरू शहर</option>
      </select>
    </motion.div>


    {/* SORT */}
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="
        flex items-center gap-3
        bg-white/60 backdrop-blur-md
        border border-gray-200
        rounded-xl px-4 py-3
      "
    >
      <FaSortAmountDown className="text-gray-500" />

      <select
        onChange={(e) => setSortOption(e.target.value)}
        className="bg-transparent outline-none w-full text-gray-700"
      >
        <option value="price-desc">कीमत ज्यादा → कम</option>
        <option value="price-asc">कीमत कम → ज्यादा</option>
      </select>
    </motion.div>

  </div>
</motion.div>

      {/* Grid */}
      <div className="grid max-w-7xl m-auto sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default FarmerMarketplace;
