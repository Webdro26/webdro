import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="nav-wrap">

      <nav className="nav">

        {/* BRAND */}
        <a
          href="#top"
          className="brand"
          onClick={closeMenu}
        >
          <img
            src="/logo/webdro-logo.png"
            alt="Webdro logo"
            className="brand-logo"
          />

          <span className="brand-name">
            webdro
          </span>
        </a>


        {/* DESKTOP NAVIGATION */}
        <div className="nav-links">

          <a href="#services">
            Services
          </a>

          <a href="#work">
            Work
          </a>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        {/* DESKTOP CTA */}
        <a
          href="#contact"
          className="nav-cta"
        >
          Let's talk
          <span className="arrow">↗</span>
        </a>


        {/* MOBILE MENU BUTTON */}
        <button
          className={`menu ${menuOpen ? "menu-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <i></i>
          <i></i>
          <i></i>
        </button>

      </nav>


      {/* MOBILE MENU */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              y: -15,
              height: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              y: -15,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >

            <a
              href="#services"
              onClick={closeMenu}
            >
              Services
            </a>

            <a
              href="#work"
              onClick={closeMenu}
            >
              Work
            </a>

            <a
              href="#about"
              onClick={closeMenu}
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a>

            <a
              href="#contact"
              className="mobile-menu-cta"
              onClick={closeMenu}
            >
              Let's talk
              <span className="arrow">↗</span>
            </a>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}

export default Navbar;