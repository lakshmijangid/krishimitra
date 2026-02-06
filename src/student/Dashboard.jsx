import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaExclamationCircle,
  FaLightbulb,
  FaProjectDiagram,
  FaHandsHelping,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";
import StudentDashboardHome from "./home";
import FarmerProblems from "./FarmerProblem";
import GiveSolution from "./GiveSolution";
import MyContributions from "./ContributionPage";
import CreateProjectRequest from "./Request";

const StudentDashboard = () => {

  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const menu = [
    { key: "home", label: "Dashboard Home", icon: <FaHome /> },
    { key: "problems", label: "Farmer Problems", icon: <FaExclamationCircle /> },
    { key: "solution", label: "Give Solution", icon: <FaLightbulb /> },
    { key: "project", label: "Create Project Request", icon: <FaProjectDiagram /> },
    { key: "contributions", label: "My Contributions", icon: <FaHandsHelping /> },
    { key: "profile", label: "Profile", icon: <FaUser /> },
    { key: "logout", label: "Logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="
      min-h-screen
      bg-linear-to-br from-blue-100 via-white to-green-100
      flex
    ">

      {/* Desktop Sidebar */}
      <div className="hidden lg:block p-6">
        <GlassSidebar menu={menu} active={active} setActive={setActive} />
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
             
              className="fixed z-50 lg:hidden"
            >
              <GlassSidebar
                menu={menu}
                active={active}
                setActive={(key) => {
                  setActive(key);
                  setMobileOpen(false);
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">

        {/* Glass Header */}
        <header className="
          sticky top-0 z-30
          bg-white/40 backdrop-blur-2xl
          border-b border-white/30
          px-6 py-4 flex justify-between items-center rounded-b-2xl
        ">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <FaBars size={20} />
            </button>

            <h2 className="text-xl font-semibold text-blue-700">
              Student Dashboard
            </h2>
          </div>

          <span className="text-sm hidden md:flex text-gray-600">
            KrishiMitra Portal
          </span>
        </header>

        {/* Page Content */}
        <main className="p-6 lg:p-10 flex-1">

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              bg-white/50 backdrop-blur-2xl
              border border-white/30
              rounded-3xl
              shadow-xl
              p-8 lg:p-12
              min-h-[65vh]
            "
          >
          

           {active === "home" && <StudentDashboardHome />}
            {active === "problems" && <FarmerProblems />}
            {active === "solution" && <GiveSolution />}
            {active === "project" &&  <CreateProjectRequest/>}
              {active === "contributions" && <MyContributions />}
               {active === "profile" && <p>Your Profile</p>}
          </motion.div>

        </main>

      </div>
    </div>
  );
};

export default StudentDashboard;


/* ===== PREMIUM GLASS SIDEBAR ===== */

const GlassSidebar = ({ menu, active, setActive }) => {

  return (
    <aside className="
      w-72 h-[calc(100vh-3rem)]
      bg-white/40 backdrop-blur-2xl
      border border-white/30
      rounded-3xl
      shadow-xl
      p-6
      flex flex-col
    ">

      <h2 className="text-xl font-bold text-blue-700 mb-8">
        🎓 Student Panel
      </h2>

      <div className="flex-1 space-y-2">

        {menu.map(item => {

          const isActive = active === item.key;

          return (
            <motion.div
              key={item.key}
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActive(item.key)}
              className={`
                relative flex items-center gap-3
                px-4 py-3 rounded-xl
                cursor-pointer transition
                ${isActive
                  ? "text-white"
                  : "text-gray-700 hover:bg-white/30"}
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSidebar"
                  className="
                    absolute inset-0
                    bg-linear-to-r from-blue-600 to-green-500
                    rounded-xl
                    -z-10
                  "
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}

              {item.icon}
              <span className="font-medium">{item.label}</span>
            </motion.div>
          );
        })}

      </div>

    </aside>
  );
};
