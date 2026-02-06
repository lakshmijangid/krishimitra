import { motion } from "framer-motion";
import {
  FaSeedling,
  FaRobot,
  FaUserGraduate,
  FaChartLine,
  FaStore,
  FaUniversity,
  FaHandsHelping
} from "react-icons/fa";

const KrishiMitraLanding = () => {
  return (
    <div className="relative overflow-hidden">

     
      

      {/* ===== PROBLEM SECTION ===== */}
      <section className="px-6 lg:px-10 py-5 space-y-2">
        <h2 className="text-3xl font-semibold text-center">
          कृषि क्षेत्र की वास्तविक चुनौतियाँ
        </h2>

        <div className="grid md:grid-cols-3 gap-3">
          {[
            "Market price confusion",
            "Students lack field exposure",
            "No instant expert advisory"
          ].map((text, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="glassCard p-8 text-center"
            >
              <FaChartLine className="mx-auto text-green-600 text-3xl mb-4" />
              <p className="text-gray-700">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="px-6 lg:px-20 py-20 bg-white/30 backdrop-blur-xl">
        <h2 className="text-3xl font-semibold text-center mb-12">
          How KrishiMitra Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <Flow icon={<FaSeedling />} text="Farmer posts problem" />
          <Flow icon={<FaRobot />} text="AI gives instant suggestion" />
          <Flow icon={<FaUserGraduate />} text="Student provides expert solution" />
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section className="px-6 lg:px-20 py-20 space-y-12">
        <h2 className="text-3xl font-semibold text-center">
          Core Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Feature icon={<FaChartLine />} title="Mandi Bhav" />
          <Feature icon={<FaStore />} title="Marketplace" />
          <Feature icon={<FaRobot />} title="AI Crop Advisory" />
          <Feature icon={<FaUniversity />} title="Govt Schemes" />
          <Feature icon={<FaHandsHelping />} title="Student Collaboration" />
          <Feature icon={<FaSeedling />} title="Research Requests" />
        </div>
      </section>

      {/* ===== AI HIGHLIGHT ===== */}
      <section className="bg-green-800 text-white py-20 px-6 lg:px-20 text-center space-y-6">
        <FaRobot className="mx-auto text-6xl" />
        <h2 className="text-3xl font-semibold">
          AI Powered Agriculture Advisory
        </h2>
        <p className="max-w-2xl mx-auto">
          Get instant crop suggestions and expert recommendations powered by AI.
        </p>
        <button className="px-6 py-3 bg-white text-green-800 rounded-xl">
          Try AI Now
        </button>
      </section>

     
      {/* ===== FINAL CTA ===== */}
      <section className="bg-white/40 backdrop-blur-xl py-20 text-center space-y-6">
        <h2 className="text-3xl font-semibold">
          Join the Agricultural Digital Revolution 🌾
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          <button className="px-6 py-3 bg-green-600 text-white rounded-xl">
            Register Now
          </button>
          <button className="px-6 py-3 bg-white/60 backdrop-blur-xl border border-white/30 rounded-xl">
            Explore Platform
          </button>
        </div>
      </section>



    </div>
  );
};

export default KrishiMitraLanding;


/* ===== REUSABLE COMPONENTS ===== */

const Flow = ({ icon, text }) => (
  <motion.div whileHover={{ y: -5 }} className="glassCard p-8">
    <div className="text-green-600 text-4xl mb-4">{icon}</div>
    <p>{text}</p>
  </motion.div>
);

const Feature = ({ icon, title }) => (
  <motion.div whileHover={{ y: -5 }} className="glassCard p-4 text-center">
    <div className="text-green-600 text-3xl mb-4">{icon}</div>
    <p className="font-medium">{title}</p>
  </motion.div>
);

const Counter = ({ number, label }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="glassCard p-6">
    <p className="text-3xl font-bold text-green-700">{number}</p>
    <p className="text-gray-600 mt-2">{label}</p>
  </motion.div>
);


/* ===== GLASS CARD STYLE ===== */
const style = document.createElement("style");
style.innerHTML = `
.glassCard {
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
`;
document.head.appendChild(style);
