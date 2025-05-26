
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "À propos" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-beige shadow-md sticky top-0 z-30">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="text-2xl font-bold font-playfair text-accent">
          CM Vidéo Afrique
        </Link>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 font-medium">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                className={`transition-colors px-2 py-1 rounded-lg ${
                  pathname === to
                    ? "bg-accent text-white"
                    : "hover:bg-accent-light hover:text-anthracite"
                }`}
                to={to}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none text-accent"
          aria-label="Ouvrir le menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 flex">
          <div className="w-3/4 max-w-xs bg-beige shadow-xl h-full flex flex-col py-6 px-6 animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-bold font-playfair text-accent">Menu</span>
              <button
                className="p-2 rounded focus:outline-none text-accent"
                aria-label="Fermer le menu"
                onClick={() => setMobileOpen(false)}
              >
                <X size={28} />
              </button>
            </div>
            <ul className="flex flex-col gap-6 font-medium">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    className={`block px-2 py-2 rounded-lg transition-colors ${
                      pathname === to
                        ? "bg-accent text-white"
                        : "hover:bg-accent-light hover:text-anthracite"
                    }`}
                    to={to}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Click area to close */}
          <div
            className="flex-1"
            onClick={() => setMobileOpen(false)}
            aria-label="Fermer le menu"
          />
        </div>
      )}
    </nav>
  );
}

