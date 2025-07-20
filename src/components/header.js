import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
// Icon-Quelle: https://www.flaticon.com/free-icon/hanger_5736500?term=hanger+shirt&page=1&position=12&origin=search&related_id=5736500
import clothesShopImageHeader from '../assets/clothes-shop-icon.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handler für Klick auf Logo oder Startseite
  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      e.preventDefault(); // Kein Reload, falls schon auf Startseite
      setMenuOpen(false);
    } else {
      setMenuOpen(false);
    }
  };

  // Scrollt mit Offset zu einer bestimmten ID (z.B. "Über uns")
  const scrollToIdWithOffset = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Höhe des fixierten Headers berücksichtigen
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Handler für interne Anker-Links (z.B. "Über uns", "So funktionierts")
  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);

    if (location.pathname !== "/") {
      // Erst zur Startseite navigieren, dann scrollen
      navigate("/", { replace: false });
      setTimeout(() => {
        scrollToIdWithOffset(id);
      }, 100);
    } else {
      scrollToIdWithOffset(id);
    }
  };

  return (
    <header>
      <nav className="bg-white border-b border-gray-200 shadow fixed w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-6 md:px-0 py-6">
          {/* Logo mit Link zur Startseite */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={handleHomeClick}
          >
            <img
              src={clothesShopImageHeader}
              alt="Firmenlogo"
              className="h-12 w-12"
            />
            <span className="font-bold pt-2 text-2xl text-emerald-800 tracking-tight">
              KleiderHelden e.V.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="pt-2 text-base lg:text-lg hidden md:flex space-x-4">
            <li>
              <Link
                to="/"
                className="py-2 text-gray-700 hover:text-emerald-700 transition font-semibold leading-tight"
                onClick={handleHomeClick}
              >
                Startseite
              </Link>
            </li>
            <li>
              <a
                href="#ueberuns"
                onClick={(e) => handleAnchorClick(e, "ueberuns")}
                className="py-2 text-gray-700 hover:text-emerald-700 transition font-semibold leading-tight whitespace-nowrap"
              >
                Über uns
              </a>
            </li>
            <li>
              <a
                href="#sofunktionierts"
                onClick={(e) => handleAnchorClick(e, "sofunktionierts")}
                className="py-2 text-gray-700 hover:text-emerald-700 transition font-semibold whitespace-nowrap"
              >
                So funktionierts
              </a>
            </li>
            <li>
              <Link
                to="/spende"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-full shadow transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-300"
                onClick={() => setMenuOpen(false)}
              >
                Jetzt spenden
              </Link>
            </li>
          </ul>

          {/* Hamburger Button für Mobilgeräte */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden rounded focus:outline-none focus:ring-2 focus:ring-emerald-300"
            aria-label="Menü umschalten"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobiles Menü */}
        {menuOpen && (
          <div className="bg-white border-t border-gray-200 md:hidden">
            <ul className="flex flex-col">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                  onClick={handleHomeClick}
                >
                  Startseite
                </Link>
              </li>
              <li>
                <a
                  href="#ueberuns"
                  onClick={(e) => handleAnchorClick(e, "ueberuns")}
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                >
                  Über uns
                </a>
              </li>
              <li>
                <a
                  href="#sofunktionierts"
                  onClick={(e) => handleAnchorClick(e, "sofunktionierts")}
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                >
                  So funktionierts
                </a>
              </li>
              <li>
                <Link
                  to="/spende"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Jetzt spenden
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {/* Spacer, damit der fixierte Header den Content-Bereich nicht überlappt */}
      <div className="h-24"></div>
    </header>
  );
}
