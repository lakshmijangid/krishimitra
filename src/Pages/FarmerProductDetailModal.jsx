import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="
          bg-white rounded-2xl p-4 
          max-w-lg w-full relative
        "
      >
        <button
          onClick={onClose}
          className="absolute -top-1 -right-1 text-xl bg-gray-400/70 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:shadow-lg transition p-2"
        >
          ✕
        </button>

        <img
          src={product.image}
          className="w-full h-58 object-cover rounded-xl"
        />

        <h2 className="mt-4 text-2xl font-semibold">
          {product.productName}
        </h2>

        <p className="text-green-700 font-bold mt-2">
          ₹{product.price}
        </p>

        <p className="mt-2 text-gray-600">
          मात्रा: {product.quantity}
        </p>

        <p className="mt-4 text-gray-700">
          {product.description}
        </p>

        <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2">
          <FaPhone />
          संपर्क करें
        </button>
      </motion.div>
    </div>
  );
};

export default ProductModal;
