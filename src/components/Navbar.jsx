import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20
      bg-gradient-to-r from-[#18203a] to-black shadow-[0px_4px_25px_0px_#0000000D]">

      {/* LOGO */}
      <Link to="/" className="flex items-center">
        <img
          src="/job-employment.svg"
          alt="Hirely Logo"
          className="h-10 w-auto"
        />
      </Link>

      {/* DESKTOP NAV LINKS */}
      <ul className="md:flex hidden items-center gap-10 font-medium">
        <li>
          <Link to="/" className="text-white hover:opacity-80 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="text-white hover:opacity-80 transition">
            Services
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="text-white hover:opacity-80 transition">
            Rating
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="text-white hover:opacity-80 transition">
            Contact
          </Link>
        </li>
      </ul>

      {/* MOBILE MENU BUTTON */}
      <button
        aria-label="menu-btn"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="inline-block md:hidden active:scale-90 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M 3 7 L 27 7 M 3 15 L 27 15 M 3 23 L 27 23"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full p-6 md:hidden
          bg-gradient-to-b from-[#18203a] to-white shadow-lg">

          <ul className="flex flex-col space-y-4 text-lg font-medium">
            <li>
              <Link
                to="/"
                className="text-white"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="text-white"
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="text-white"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
