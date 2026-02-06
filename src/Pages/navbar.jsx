import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaStore,
  FaChartLine,
  FaFileAlt,
  FaInfoCircle,
  FaEnvelope,
  FaSignInAlt,
  FaUserPlus
} from "react-icons/fa";

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Mandi Bhav", path: "/crop-rate", icon: <FaChartLine /> },
    { name: "Marketplace", path: "/farmer-product", icon: <FaStore /> },
    { name: "Government Schemes", path: "/schemes", icon: <FaFileAlt /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header className="
        sticky top-0 z-50
        bg-white/60 backdrop-blur-xl
        border-b border-white/40
        shadow-sm
      ">

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link to="/" className="text-xl font-bold text-green-700">
            🌾 KrishiMitra
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <motion.div
                  key={link.path}
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <Link
                    to={link.path}
                    className={`
                      font-medium transition
                      ${isActive ? "text-green-700" : "text-gray-700"}
                    `}
                  >
                    {link.name}
                  </Link>

                  {/* ACTIVE / HOVER UNDERLINE */}
                  <motion.span
                    layoutId="navUnderline"
                    className={`
                      absolute left-0 -bottom-1 h-1
                      bg-green-600
                      ${isActive ? "w-full" : "w-0"}
                    `}
                  />
                </motion.div>
              );
            })}

            {/* AUTH BUTTONS */}
            <div className="flex gap-3 ml-4">

              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="
                    px-4 py-2
                    bg-white/70 backdrop-blur-md
                    border border-green-600
                    text-green-700
                    rounded-xl
                    flex items-center gap-2
                  "
                >
                  <FaSignInAlt size={14} />
                  Login
                </motion.button>
              </Link>

              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="
                    px-4 py-2
                    bg-green-600 text-white
                    rounded-xl
                    flex items-center gap-2
                    shadow
                  "
                >
                  <FaUserPlus size={14} />
                  Register
                </motion.button>
              </Link>

            </div>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <FaBars size={20} />
          </button>

        </div>
      </header>

      {/* ===== MOBILE DRAWER ===== */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: 280 }}
              animate={{ x: 0 }}
              exit={{ x: 280 }}
              transition={{ type: "tween" }}
              className="
                fixed z-50 top-0 right-0 h-full w-64
                bg-white/90 backdrop-blur-xl
                shadow-lg p-6
              "
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-bold text-green-700">
                  KrishiMitra
                </h2>
                <FaTimes
                  className="cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="flex flex-col gap-5">

                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                ))}

                <hr className="my-4" />

                <Link to="/login" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-2 text-green-700">
                    <FaSignInAlt />
                    Login
                  </div>
                </Link>

                <Link to="/register" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-2 text-green-700">
                    <FaUserPlus />
                    Register
                  </div>
                </Link>

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
