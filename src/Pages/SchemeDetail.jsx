import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import schemesData from "./SkeemData";

const SchemeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const scheme = schemesData.find((s) => s.id === Number(id));

  if (!scheme) return <div>योजना नहीं मिली</div>;

  return (
    <div className="min-h-screen bg-linear-to-br from-green-100 via-white to-blue-100 py-14 px-4">

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 md:ml-20 px-5 py-2 rounded-lg bg-white/60 backdrop-blur-md border border-gray-200 shadow-sm"
      >
        ← वापस
      </button>

      {/* MAIN CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          max-w-4xl mx-auto
          bg-white/60 backdrop-blur-xl
          border border-white/40
          rounded-3xl shadow-md
          p-6 md:p-8 
        "
      >

        {/* HEADER */}
        <div className="flex items-center justify-center ">

          <img
            src={scheme.image}
            alt={scheme.name}
            className="w-48 md:w-100  h-48 md:h-80 object-cover rounded-xl"
          />

         
        </div>
 <div className="flex flex-col items-center mt-6 justify-between">
            <h1 className="text-4xl font-bold text-gray-800">
              {scheme.name}
            </h1>

            <p className="text-md text-green-700 mt-1">
              {scheme.category}
            </p>

            <p className="text-gray-600 mt-3 text-md">
              {scheme.shortDesc}
            </p>

            <p className="text-red-600 text-md mt-3 font-medium">
              अंतिम तिथि: {scheme.deadline}
            </p>
          </div>
        {/* FULL DETAILS */}
        <Section title="योजना का विवरण">
          <p>{scheme.fullDetails}</p>
        </Section>

        {/* BENEFITS */}
        <Section title="लाभ">
          {scheme.benefits.map((b, i) => (
            <ListItem key={i} text={b} />
          ))}
        </Section>

        {/* ELIGIBILITY */}
        <Section title="पात्रता">
          {scheme.eligibility.map((e, i) => (
            <ListItem key={i} text={e} />
          ))}
        </Section>

        {/* APPLY BUTTON */}
        <div className="mt-8 text-center">
          <a
            href={scheme.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              bg-green-700 text-white
              px-7 py-2.5
              rounded-lg
              hover:bg-green-800
              transition
            "
          >
            आवेदन करें
            <FaExternalLinkAlt />
          </a>
        </div>

      </motion.div>

    </div>
  );
};


/* ---------- SECTION ---------- */

const Section = ({ title, children }) => (
  <div className="mt-8">
    <h3 className="font-bold text-gray-800 mb-3 text-2xl">
      {title}
    </h3>

    <div className="text-gray-600 text-md space-y-2">
      {children}
    </div>
  </div>
);


/* ---------- LIST ITEM ---------- */

const ListItem = ({ text }) => (
  <div className="flex gap-2 items-start">
    <FaCheckCircle className="text-green-600 mt-1" />
    <p>{text}</p>
  </div>
);

export default SchemeDetail;
