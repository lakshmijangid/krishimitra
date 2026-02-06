import { useState } from "react";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";

const dummyProducts = [
  {
    id: 1,
    productName: "देशी घी",
    cropType: "दुग्ध उत्पाद",
    price: 950,
    quantity: "1 किलो",
    location: "सुजानगढ़, चूरू",
    image: "/Images/ghee.png",
    description: "शुद्ध देसी गाय के दूध से बना घी"
  }
];

const MyProducts = () => {

  const [products, setProducts] = useState(dummyProducts);

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-10">

      {/* ===== HEADER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          bg-gradient-to-r from-green-600 to-green-400
          rounded-3xl p-8 text-white shadow-md
        "
      >
        <h1 className="text-3xl font-bold">
          🌾 मेरे उत्पाद
        </h1>
        <p className="mt-2 text-green-100">
          यहाँ आप अपने सभी उत्पाद देख और प्रबंधित कर सकते हैं।
        </p>
      </motion.div>

      {/* ===== PRODUCT GRID ===== */}
      {products.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product, i) => (
            <motion.div
  key={product.id}
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.08 }}
 
  className="
    group
    bg-white/60 backdrop-blur-xl
    border border-white/40
    rounded-3xl
    overflow-hidden
    shadow-sm hover:shadow-lg max-w-sm
    transition
  "
>

  {/* IMAGE SECTION */}
  <div className="relative p-2">

    <img
      src={product.image}
      className="w-full  h-52 rounded-2xl object-cover  transition duration-300"
    />

    {/* PRICE BADGE */}
    <div className="
      absolute top-4 left-4
      bg-green-600 text-white
      px-4 py-1 rounded-full
      text-sm font-semibold shadow
    ">
      ₹{product.price}
    </div>

    {/* LOCATION BADGE */}
    <div className="
      absolute bottom-4 left-4
      bg-white/80 backdrop-blur-md
      px-3 py-1 rounded-full
      text-xs text-gray-700
      shadow-sm
    ">
      {product.location}
    </div>

  </div>

  {/* CONTENT */}
  <div className="p-6">

    <h3 className="text-lg font-semibold text-gray-800">
      {product.productName}
    </h3>

    <p className="text-gray-600 text-sm mt-1">
      {product.quantity}
    </p>

    <p className="text-gray-600 mt-3 text-sm leading-relaxed">
      {product.description}
    </p>

    {/* ACTION BUTTONS */}
    <div className="flex gap-3 mt-6">

      <motion.button
       
        whileTap={{ scale: 0.95 }}
        className="
          flex-1
          bg-green-600/20 hover:bg-green-700 hover:text-white text-green-600
          py-2 rounded-xl border-2 border-green-600/40
          flex items-center justify-center gap-2
          transition
        "
      >
        <FaEdit size={14} />
        <span className="text-sm">Edit</span>
      </motion.button>

      <motion.button
       
        whileTap={{ scale: 0.95 }}
        onClick={() => deleteProduct(product.id)}
        className="
          flex-1
          bg-red-500/15 border-2 border-red-500/30 text-red-600   hover:text-white
          py-2 rounded-xl
          flex items-center justify-center gap-2
          hover:bg-red-600/80 transition
        "
      >
        <FaTrash size={14} />
        <span className="text-sm">Delete</span>
      </motion.button>

    </div>

  </div>
</motion.div>

          ))}

        </div>
      )}

    </div>
  );
};

export default MyProducts;


/* ===== EMPTY STATE ===== */

const EmptyState = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="
      bg-white/60 backdrop-blur-xl
      border border-white/40
      rounded-3xl p-10 text-center
    "
  >
    <h3 className="text-xl font-semibold text-gray-700">
      कोई उत्पाद नहीं मिला
    </h3>

    <p className="text-gray-500 mt-2">
      नया उत्पाद जोड़ने के लिए Upload Product सेक्शन में जाएँ।
    </p>
  </motion.div>
);
