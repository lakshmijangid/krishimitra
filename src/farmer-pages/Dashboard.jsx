import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaSeedling,
  FaBoxOpen,
  FaRobot,
  FaBars,
  FaTimes,
  FaUserGraduate
} from "react-icons/fa";

import DashboardHome from "./home";
import UploadProduct from "./uploadProduct";
import MyProducts from "./MyProducts";
import AIProblem from "./AIsolution";
import StudentRequests from "./studentrequest";

const FarmerLayout = () => {

  const [active, setActive] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-blue-50 flex">

      {/* ===== DESKTOP SIDEBAR ===== */}
      <div className="hidden md:block">
        <Sidebar active={active} setActive={setActive} />
      </div>

      {/* ===== MOBILE SIDEBAR ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              className="fixed z-50 md:hidden"
            >
              <Sidebar
                active={active}
                setActive={setActive}
                close={() => setMobileOpen(false)}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ===== MAIN AREA ===== */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <header className="
          sticky top-0 z-30
          bg-white/70 backdrop-blur-xl
          border-b border-white/40
          px-4 md:px-6 py-4
          flex justify-between items-center
        ">
          <div className="flex items-center gap-3">

            <button
              className="md:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <FaBars size={20} />
            </button>

            <h2 className="text-lg font-semibold text-green-700">
              Farmer Dashboard
            </h2>

          </div>

          <span className="text-xs md:text-sm text-gray-500">
            KrishiMitra Portal
          </span>
        </header>

        {/* CONTENT */}
        <main className="flex-1 p-4 md:p-6">

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              bg-white/60 backdrop-blur-xl
              border border-white/40
              rounded-2xl shadow-sm
              md:p-6
              min-h-[60vh]
            "
          >

            {active === "dashboard" && <DashboardHome />}
            {active === "upload" && <UploadProduct />}
            {active === "products" && <MyProducts />}
            {active === "ai" && <AIProblem />}
              {active === "request" && <StudentRequests  />}
          </motion.div>

        </main>

      </div>
    </div>
  );
};

export default FarmerLayout;


/* ===== SIDEBAR ===== */

const Sidebar = ({ active, setActive, close }) => {

  const menu = [
    { key: "dashboard", icon: <FaHome />, label: "Dashboard" },
    { key: "upload", icon: <FaSeedling />, label: "Upload Product" },
    { key: "products", icon: <FaBoxOpen />, label: "My Products" },
    { key: "ai", icon: <FaRobot />, label: "AI Crop Solution" },
    { key: "request", icon: <FaUserGraduate />, label: "Student Requests" }
  ];

  return (
    <aside className="
      w-64 h-screen
      bg-white/80 backdrop-blur-xl
      border-r border-white/40
      shadow-sm
      p-5
      flex flex-col
    ">

      {/* LOGO */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-green-700">
          🌾 KrishiMitra
        </h2>

        {close && (
          <FaTimes
            className="md:hidden cursor-pointer"
            onClick={close}
          />
        )}
      </div>

      {/* MENU */}
      <div className="flex-1 overflow-y-auto">
        {menu.map(item => (
          <SidebarItem
            key={item.key}
            icon={item.icon}
            text={item.label}
            active={active === item.key}
            onClick={() => {
              setActive(item.key);
              close && close();
            }}
          />
        ))}
      </div>

    </aside>
  );
};


/* ===== SIDEBAR ITEM ===== */

const SidebarItem = ({ icon, text, active, onClick }) => {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        flex items-center gap-3
        cursor-pointer p-3 rounded-xl mt-2
        transition relative
        ${active
          ? "bg-green-600/15  text-green-800 border border-green-500  shadow-sm"
          : "text-gray-700 hover:bg-green-50"}
      `}
    >
      {icon}
      <span className="font-medium">{text}</span>

    
    </motion.div>
  );
};
