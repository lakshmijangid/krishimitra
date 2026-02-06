import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";

const ProductCard = ({ product, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      className="
        cursor-pointer
        bg-white/70 backdrop-blur-md
        border border-white/40
        rounded-2xl p-5 shadow-sm
      "
    >
      <img
        src={product.image}
        alt={product.productName}
        className="w-full h-60 object-cover rounded-xl"
      />

      <h3 className="mt-4 font-semibold text-lg">
        {product.productName}
      </h3>

      <p className="text-green-700 font-bold mt-1">
        ₹{product.price}
      </p>

      <div className="text-sm text-gray-600 mt-2 flex items-center gap-2">
        <FaUser /> {product.farmerName}
      </div>

      <div className="text-sm text-gray-600 flex items-center gap-2">
        <FaMapMarkerAlt /> {product.location}
      </div>
    </motion.div>
  );
};

export default ProductCard;
