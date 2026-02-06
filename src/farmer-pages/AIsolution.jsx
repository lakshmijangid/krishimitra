import { useState } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaLeaf } from "react-icons/fa";

const AIProblem = () => {

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [solution, setSolution] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    setLoading(true);
    setSolution("");

    setTimeout(() => {
      setSolution(`
आपकी फसल में कीट संक्रमण के लक्षण दिखाई दे रहे हैं।

✔ नीम तेल का छिड़काव करें  
✔ प्रभावित पौधों को अलग करें  
✔ खेत में नमी संतुलित रखें  
✔ जैविक कीटनाशक का उपयोग करें  

यह समस्या शुरुआती अवस्था में नियंत्रित की जा सकती है।
      `);
      setLoading(false);
    }, 2500);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-10">

      {/* ================= LEFT PANEL ================= */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        className="
          bg-white/70 backdrop-blur-xl
          border border-white/40
          rounded-3xl p-8 shadow-sm
        "
      >

        <h2 className="text-2xl font-bold flex gap-2">
          <FaLeaf className="text-green-600" />
          फसल समस्या दर्ज करें
        </h2>

        <input
          placeholder="समस्या शीर्षक"
          className="w-full mt-6 p-3 rounded-xl bg-green-50 border border-green-500/25 outline-none"
        />

        <textarea
          placeholder="समस्या विस्तार से लिखें..."
          className="w-full mt-4 p-3 rounded-xl bg-green-50 border border-green-500/25 outline-none"
        />

        {/* IMAGE */}
        <div className="mt-6">
          <input type="file" onChange={handleImage} />

          {image && (
            <img
              src={image}
              className="mt-4 w-44 h-44 object-cover rounded-xl"
            />
          )}
        </div>

        <motion.button
         
          onClick={handleSubmit}
          className="
            mt-8 bg-green-600/10 border cursor-pointer border-green-500  text-green-800 font-bold hover:bg-green-600/85 hover:text-white transition-duration-900
            px-8 py-3 rounded-xl
          "
        >
          AI समाधान प्राप्त करें
        </motion.button>

      </motion.div>

      {/* ================= RIGHT AI PANEL ================= */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        className="
          relative overflow-hidden
          bg-linear-to-br from-green-500/10 to-green-300/10
          rounded-3xl p-8 text-black border-2 border-green-600/15 shadow-lg
        "
      >

       

        <h2 className="text-2xl font-bold flex gap-2">
          <FaRobot />
          AI कृषि सहायक
        </h2>

        {/* LOADING */}
        {loading && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-gray-800"
          >
            AI आपकी समस्या का विश्लेषण कर रहा है...
          </motion.p>
        )}

        {/* SOLUTION */}
        {solution && (
          <TypingText text={solution} />
        )}

        {!solution && !loading && (
          <p className="mt-8 text-green-800">
            अपनी समस्या दर्ज करें और AI तुरंत समाधान देगा।
          </p>
        )}

      </motion.div>

    </div>
  );
};

export default AIProblem;


/* ================= TYPING EFFECT ================= */

const TypingText = ({ text }) => {
  return (
    <motion.pre
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-8 whitespace-pre-wrap text-gray-900 leading-relaxed"
    >
      {text}
    </motion.pre>
  );
};
