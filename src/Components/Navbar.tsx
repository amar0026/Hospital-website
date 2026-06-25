import { Search, Phone, Mail, Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  "Home",
  "Services",
  "Doctors",
  "Gallery",
  "Health Scheme",
  "About Us",
  "Contact Us",
  "Credentials",
  "Shop",
];

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav
      className="w-full font-sans transition-colors duration-300"
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      {/* TOP BAR */}
      <div
        className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 border-b transition-colors duration-300"
        style={{
          borderColor: darkMode ? "#374151" : "#e5e7eb",
        }}
      >
        {/* Left: Logos + Title */}
        <div className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dquki4xol/image/upload/v1782217168/f3d532215994532d9135a01f42c4fa6d7763dc8e_rhr0v4.png"
            alt="Shusrusha Shishu Seva Niketan Logo"
            className="h-16 w-16 rounded-full object-cover shrink-0"
          />
          <div>
            <h1
              className="text-lg sm:text-xl md:text-2xl font-extrabold leading-tight transition-colors duration-300"
              style={{ color: "#f97316" }}
            >
              Shusrusha Shishu Seva Niketan &amp; Maternity
            </h1>
            <p
              className="text-xs sm:text-sm italic font-semibold transition-colors duration-300"
              style={{ color: darkMode ? "#FA6BB8" : "#FF007A" }}
            >
              Benefiting Every Child's Future
            </p>
            <p
              className="text-xs sm:text-sm font-medium transition-colors duration-300"
              style={{ color: "#1d4ed8" }}
            >
              An initiative of Dr. Prabir Bhaumik and Swetarka Bhaumik
            </p>
            <p
              className="text-xs sm:text-sm font-semibold transition-colors duration-300"
              style={{ color: "#f97316" }}
            >
              Multispeciality Mother and Child Care Unit
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dquki4xol/image/upload/v1782217168/94c29ad4ea33d94b0f44ebe7d3ede96579fef262_jfkggs.png"
            alt="Maternity Care Logo"
            className="h-16 w-16 rounded-full object-cover shrink-0"
          />
        </div>

        {/* Right: Search + Enquire + Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div
            className="hidden md:flex items-center rounded-md px-3 py-2 w-44 transition-colors duration-300"
            style={{
              backgroundColor: "#d1d5db",
            }}
          >
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none flex-1 text-sm placeholder-gray-400"
              style={{ color: "#374151" }}
            />
            <Search size={18} style={{ color: "#6b7280" }} />
          </div>

          <a
            href="https://wa.me/916294220411"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
          >
            Enquire Now
          </a>

          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full transition-colors duration-300"
            style={{
              backgroundColor: darkMode ? "#1e293b" : "#f3f4f6",
            }}
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* BOTTOM NAV BAR */}
      <div
        className="flex flex-wrap items-center justify-between px-4 py-3 gap-3 transition-all duration-300"
        style={{
          background: darkMode
            ? "linear-gradient(to right, #FF007A, #FA6BB8)"
            : "linear-gradient(to right, #dc2626, #f97316)",
        }}
      >
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-3 md:gap-6 w-full md:w-auto`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white text-sm font-bold uppercase tracking-wide hover:text-yellow-200 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <div
          className="hidden lg:flex items-center gap-4 rounded-full px-4 py-2 transition-colors duration-300"
          style={{
            backgroundColor: "rgba(240,253,250,0.9)",
          }}
        >
          <a
            href="tel:6294220411"
            className="flex items-center gap-1 text-sm font-semibold transition-colors"
            style={{ color: "#0f766e" }}
          >
            <Phone size={16} />
            <span>6294220411</span>
          </a>
          <a
            href="mailto:shushrushassn@gmail.com"
            className="flex items-center gap-1 text-sm font-semibold transition-colors"
            style={{ color: "#0f766e" }}
          >
            <Mail size={16} />
            <span>shushrushassn@gmail.com</span>
          </a>
        </div>
      </div>
    </nav>
  );
}