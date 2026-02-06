import { useState } from "react";
import { motion } from "framer-motion";
import { FaUpload } from "react-icons/fa";

const UploadProduct = () => {

  const [product, setProduct] = useState({
    productName: "",
    cropType: "",
    price: "",
    quantity: "",
    location: "",
    description: "",
    image: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({
        ...product,
        image: URL.createObjectURL(file)
      });
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-10">

      {/* ===== FORM SIDE ===== */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="
          bg-white/70 backdrop-blur-xl
          border border-gray-300/40
          rounded-3xl p-8 shadow-sm
        "
      >

        <h2 className="text-2xl font-bold mb-6">
          नया उत्पाद जोड़ें
        </h2>

        <Input
          label="उत्पाद नाम"
          name="productName"
          onChange={handleChange}
        />

        <Input
          label="फसल प्रकार"
          name="cropType"
          onChange={handleChange}
        />

        <Input
          label="कीमत"
          name="price"
          onChange={handleChange}
        />

        <Input
          label="मात्रा"
          name="quantity"
          onChange={handleChange}
        />

        <Input
          label="स्थान"
          name="location"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="उत्पाद विवरण"
          onChange={handleChange}
          className="w-full mt-4 p-3 rounded-xl border border-green-600/15 bg-green-50 outline-none"
        />

       {/* IMAGE UPLOAD SECTION */}
<div className="mt-6">

  <label className="block text-sm font-medium text-gray-700 mb-2">
    उत्पाद छवि
  </label>

  <motion.label
    whileHover={{ scale: 1.02 }}
    className="
      flex flex-col items-center justify-center
      w-full
      border-2 border-dashed border-green-300
      rounded-xl
      p-6
      cursor-pointer
      bg-white/60 backdrop-blur-md
      hover:bg-green-50
      transition
    "
  >
    <FaUpload className="text-green-600 text-2xl mb-2" />

    <span className="text-gray-600 text-sm text-center">
      छवि अपलोड करने के लिए क्लिक करें
    </span>

    <span className="text-xs text-gray-400 mt-1">
      PNG, JPG (Max 5MB)
    </span>

    <input
      type="file"
      accept="image/*"
      onChange={handleImage}
      className="hidden"
    />
  </motion.label>
</div>
        <button className="
          mt-6 bg-green-600 text-white
          px-6 py-3 rounded-xl
        ">
          Save Product
        </button>

      </motion.div>

      {/* ===== LIVE PREVIEW ===== */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex justify-center items-center"
      >

        <div className="
          w-full max-w-sm
          bg-white/70 backdrop-blur-xl
          border border-white/40
          rounded-3xl overflow-hidden shadow-md
        ">

          <img
            src={product.image || "/Images/placeholder.png"}
            className="w-full h-52 object-cover"
          />

          <div className="p-6">

            <h3 className="text-xl font-semibold">
              {product.productName || "उत्पाद नाम"}
            </h3>

            <p className="text-green-700 font-bold mt-1">
              ₹{product.price || "0"}
            </p>

            <p className="text-gray-600 mt-2">
              {product.quantity || "मात्रा"}
            </p>

            <p className="text-gray-500 text-sm mt-2">
              {product.location || "स्थान"}
            </p>

            <p className="text-gray-600 mt-3 text-sm">
              {product.description || "उत्पाद विवरण यहाँ दिखेगा"}
            </p>

          </div>
        </div>

      </motion.div>

    </div>
  );
};

export default UploadProduct;


/* ===== INPUT COMPONENT ===== */

const Input = ({ label, name, onChange }) => (
  <div className="mt-4">
    <label className="font-semibold  text-gray-700">
      {label}
    </label>

    <input
      name={name}
      onChange={onChange}
      className="
        w-full mt-2 px-4 py-3
        bg-green-50 rounded-xl
        outline-none focus:ring-1
        focus:ring-green-400 border border-green-600/15
      "
    />
  </div>
);
