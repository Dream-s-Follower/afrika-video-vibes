
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "À propos" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="bg-beige shadow-md sticky top-0 z-30">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="text-2xl font-bold font-playfair text-accent">
          CM Vidéo Afrique
        </Link>
        <ul className="flex gap-6 font-medium">
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
      </div>
    </nav>
  );
}
