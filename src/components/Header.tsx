import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

export function Header() {
  const location = useLocation();

  const navLinks = [
    { name: "À propos", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm px-mobile-margin md:px-desktop-margin py-8 flex justify-between items-center bg-transparent!">
      <Link to="/" className="text-2xl font-medium tracking-tight hover:opacity-80 transition-opacity">
        Zetoon is back
      </Link>
      
      <nav>
        <ul className="flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path === "/" && !["/about", "/blog"].includes(location.pathname));
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-[15px] tracking-[0.02em] transition-all relative ${
                    isActive ? "font-medium" : "font-normal opacity-60 hover:opacity-100"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 w-full h-[1px] bg-foreground"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
