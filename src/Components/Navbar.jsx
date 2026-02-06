import React, { useState, Link, forwardRef } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { IoChevronBackCircle } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { PiStepsFill } from "react-icons/pi";
import { MdDeveloperMode } from "react-icons/md";
import { GiInspiration } from "react-icons/gi";
import { MdContactMail } from "react-icons/md";
import { FaSchool } from "react-icons/fa6";
import { FaFileContract } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { MdAdd } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";

function Slidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen((!isOpen));
  };

  const [openDrop, setDrop] = useState(false);
  const openDropdown = () => {
    setDrop((!openDrop))
  };

  return(
    <>
    <header className="fixed left-0 h-full w-10 lg:w-20 z-50">
      
      <nav className="flex flex-col w-13 md:w-20 h-screen text-gray-800 bg-linear-to-b from-emerald-100 to-teal-50 shadow-lg">
        {!isOpen && (
          <div className="w-full h-full flex flex-col justify-start items-center py-8">
            <div onClick={openMenu} className="mb-8 text-emerald-700 cursor-pointer hover:text-emerald-900 transition-all">
              <TfiMenuAlt size={28} />
            </div>
            <div className="border-b-2 border-emerald-300 mb-8 w-12"></div>
            <div className="flex flex-col justify-start items-center gap-8 w-full px-3">
              <a href="/home" className="text-emerald-700 hover:bg-white p-2 rounded-lg transition-all" title="Home"><FaHome size={24} /></a>
              <a href="/dashboard" className="text-emerald-700 hover:bg-white p-2 rounded-lg transition-all" title="Dashboard"><RiAdminFill size={24} /></a>
              <a href="/leaderboard" className="text-emerald-700 hover:bg-white p-2 rounded-lg transition-all" title="Leaderboard"><FaFileContract size={24} /></a>
              <a href="/initiatives" className="text-emerald-700 hover:bg-white p-2 rounded-lg transition-all" title="Initiatives"><PiStepsFill size={24} /></a>
              <a href="/inspiration" className="text-emerald-700 hover:bg-white p-2 rounded-lg transition-all" title="Inspiration"><GiInspiration size={24} /></a>
              <a href="/developer" className="text-emerald-700 hover:bg-white p-2 rounded-lg transition-all" title="Developer"><MdDeveloperMode size={24} /></a>
              <a href="/contact" className="text-emerald-700 hover:bg-white p-2 rounded-lg transition-all" title="Contact"><MdContactMail size={24} /></a>
            </div>
          </div>
        )}

        {isOpen && (
          <div className="fixed inset-0 w-screen z-50 bg-black/40 backdrop-blur-sm" onClick={openMenu}>
            <div className="bg-linear-to-b from-emerald-50 to-teal-50 h-full w-64 shadow-2xl flex flex-col z-20" onClick={(e) => e.stopPropagation()}>
              <div className="p-6 border-b-2 border-emerald-200 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-emerald-800">Menu</h2>
                <div onClick={openMenu} className="text-emerald-700 cursor-pointer hover:text-emerald-900 transition-all">
                  <IoChevronBackCircle size={28} />
                </div>
              </div>
              <div className="flex flex-col gap-3 p-4 overflow-y-auto flex-1">
                <a href="/home" className="flex items-center gap-3 px-4 py-3 text-lg font-semibold text-emerald-900 hover:bg-emerald-200 rounded-lg transition-all">
                  <FaHome size={20} />HOME
                </a>
                <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-lg font-semibold text-emerald-900 hover:bg-emerald-200 rounded-lg transition-all">
                  <RiAdminFill size={20} />DASHBOARD
                </a>
                <a href="/leaderboard" className="flex items-center gap-3 px-4 py-3 text-lg font-semibold text-emerald-900 hover:bg-emerald-200 rounded-lg transition-all">
                  <FaFileContract size={20} />LEADERBOARD
                </a>
                <a href="/initiatives" className="flex items-center gap-3 px-4 py-3 text-lg font-semibold text-emerald-900 hover:bg-emerald-200 rounded-lg transition-all">
                  <PiStepsFill size={20} />INITIATIVES
                </a>
                <a href="/inspiration" className="flex items-center gap-3 px-4 py-3 text-lg font-semibold text-emerald-900 hover:bg-emerald-200 rounded-lg transition-all">
                  <GiInspiration size={20} />OUR INSPIRATION
                </a>
                <a href="/developer" className="flex items-center gap-3 px-4 py-3 text-lg font-semibold text-emerald-900 hover:bg-emerald-200 rounded-lg transition-all">
                  <MdDeveloperMode size={20} />DEVELOPERS
                </a>
                <a href="/contact" className="flex items-center gap-3 px-4 py-3 text-lg font-semibold text-emerald-900 hover:bg-emerald-200 rounded-lg transition-all">
                  <MdContactMail size={20} />CONTACT US
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

    </header>
    </>
  );
}

export default Slidebar;
