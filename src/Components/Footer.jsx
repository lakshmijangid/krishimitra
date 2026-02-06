import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-emerald-700 pt-2 pl-14 lg:pt-8 text-white">

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1 bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center h-fit">
            <div className="text-emerald-700 text-4xl font-bold mb-2">🌱</div>
            <h3 className="text-2xl font-bold text-emerald-700">KrishiMitra</h3>
            <p className="text-emerald-600 text-sm mt-2">Empowering Farmers</p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-3">
              <li>
                <a href="/articles" className="hover:text-emerald-200 transition-colors">
                  Articles
                </a>
              </li>
              <li>
                <a href="/crops" className="hover:text-emerald-200 transition-colors">
                  Crops Database
                </a>
              </li>
              <li>
                <a href="/pest-guide" className="hover:text-emerald-200 transition-colors">
                  Pest & Disease Guide
                </a>
              </li>
              <li>
                <a href="/techniques" className="hover:text-emerald-200 transition-colors">
                  Farming Techniques
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">About Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="/mission" className="hover:text-emerald-200 transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-emerald-200 transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-emerald-200 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-emerald-200 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="hover:text-emerald-200 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-emerald-200 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="hover:text-emerald-200 transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-6">
            <div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">Follow Us</h4>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white duration-500 hover:text-blue-800 p-3 rounded-full transition-all"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white duration-500 hover:text-blue-400 p-3 rounded-full transition-all"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white duration-500 hover:text-pink-500 p-3 rounded-full transition-all"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white duration-500 hover:text-blue-700 p-3 rounded-full transition-all"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white duration-500 hover:text-red-500 p-3 rounded-full transition-all"
                >
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/20 py-6 text-center text-sm text-white/80">
        <p>© 2026 KrishiMitra. All reserved | Developed by EcoWeb Solutions</p>
      </div>
    </footer>
  );
}

export default Footer;
