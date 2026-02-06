import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaUniversity,
  FaPhone,
  FaLeaf
} from "react-icons/fa";

/* ================= DATA ================= */

const requests = [
  {
    id: 1,
    studentName: "रवि शर्मा",
    college: "राजस्थान कृषि विश्वविद्यालय, बीकानेर",
    course: "B.Sc Agriculture",
    year: "Final Year",

    projectTitle: "मिट्टी गुणवत्ता परीक्षण",
    landRequired: "2 बीघा",
    duration: "30 दिन",

    benefit:
      "किसान को मिट्टी परीक्षण रिपोर्ट और उर्वरक सुझाव मुफ्त मिलेंगे।",

    contact: "9876543210"
  }
];

/* ================= MAIN PAGE ================= */

const StudentRequests = () => {

  const [selected, setSelected] = useState(null);

  return (
    <div className="space-y-12">

      {/* ===== HEADER ===== */}
      <div className="bg-gradient-to-r from-green-800 to-green-600 text-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-semibold">
          छात्र कृषि परियोजना अनुरोध
        </h1>

        <p className="text-green-100 mt-2 max-w-xl">
          कृषि छात्रों द्वारा किए जाने वाले अनुसंधान प्रोजेक्ट,
          जिनसे किसानों को वैज्ञानिक लाभ मिल सकता है।
        </p>
      </div>

      {/* ===== REQUEST GRID ===== */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {requests.map((req, i) => (

          <motion.div
            key={req.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="
              bg-white border border-gray-200
              rounded-2xl p-6 shadow-sm
              transition hover:shadow-lg
            "
          >

            {/* PROJECT TITLE */}
            <h3 className="text-lg font-semibold text-gray-800">
              {req.projectTitle}
            </h3>

            {/* STUDENT INFO */}
            <div className="mt-4 space-y-1 text-sm">

              <p className="flex items-center gap-2 text-gray-700">
                <FaUserGraduate className="text-green-600" />
                {req.studentName}
              </p>

              <p className="flex items-center gap-2 text-green-700 font-medium">
                <FaUniversity />
                {req.college}
              </p>

              <p className="text-gray-500">
                {req.course} • {req.year}
              </p>

            </div>

            {/* LAND + DURATION */}
            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <p>भूमि आवश्यकता: {req.landRequired}</p>
              <p>अवधि: {req.duration}</p>
            </div>

            {/* BENEFIT PREVIEW */}
            <div className="mt-5 bg-green-50 p-3 rounded-lg">
              <p className="text-green-700 text-sm font-medium">
                किसान लाभ
              </p>

              <p className="text-gray-700 text-sm mt-1 line-clamp-2">
                {req.benefit}
              </p>
            </div>

            {/* BUTTON */}
            <button
              onClick={() => setSelected(req)}
              className="
                w-full mt-6 bg-green-700 text-white
                py-2 rounded-lg font-medium
                hover:bg-green-800 transition
              "
            >
              पूर्ण विवरण देखें
            </button>

          </motion.div>

        ))}

      </div>

      {/* ===== MODAL ===== */}
      {selected && (
        <DetailModal
          data={selected}
          onClose={() => setSelected(null)}
        />
      )}

    </div>
  );
};

export default StudentRequests;


/* ================= MODAL ================= */

const DetailModal = ({ data, onClose }) => {

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

      <motion.div
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        className="
          bg-white rounded-2xl p-8
          max-w-lg w-full relative shadow-xl
        "
      >

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-xl"
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-xl font-semibold text-green-800">
          {data.projectTitle}
        </h2>

        {/* STUDENT DETAILS */}
        <div className="mt-4 space-y-2 text-sm">

          <p className="flex gap-2">
            <FaUserGraduate className="text-green-600" />
            {data.studentName}
          </p>

          <p className="flex gap-2 text-green-700 font-medium">
            <FaUniversity />
            {data.college}
          </p>

          <p className="text-gray-500">
            {data.course} • {data.year}
          </p>

        </div>

        {/* LAND DETAILS */}
        <div className="mt-5 text-gray-600 text-sm">
          <p>भूमि आवश्यकता: {data.landRequired}</p>
          <p>अवधि: {data.duration}</p>
        </div>

        {/* BENEFIT BOX */}
        <div className="mt-6 bg-green-50 border border-green-100 p-4 rounded-lg">
          <h4 className="font-semibold text-green-700 flex gap-2">
            <FaLeaf />
            किसान को लाभ
          </h4>

          <p className="text-gray-700 mt-2">
            {data.benefit}
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-4 mt-7">

          <button className="flex-1 bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition">
            स्वीकार करें
          </button>

          <button className="flex-1 bg-gray-100 py-2 rounded-lg flex justify-center gap-2 hover:bg-gray-200 transition">
            <FaPhone />
            संपर्क
          </button>

        </div>

      </motion.div>

    </div>
  );
};
