"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, easeOut, easeIn, circOut } from "framer-motion";

type NavbarProps = {
  toggleCart: () => void;
  cartCount: number;
};

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Products", href: "#products" },
  { name: "Book Now", href: "#booking" },
];

const overlayVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.32, ease: easeOut } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.24, ease: easeIn } },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.08 * i, ease: circOut },
  }),
};

const Navbar: React.FC<NavbarProps> = ({ toggleCart, cartCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // lock body scroll when mobile overlay is open
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      // add a small inset to avoid layout shift on mobile when scrollbar disappears
      document.documentElement.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.touchAction = "";
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.style.touchAction = "";
    };
  }, [mobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((s) => !s);
  };

  return (
    <nav className="main-navbar ">
      <div className="container-wrapper">
        <div className="nav-inner">
          <div className="logo-container">
            <h1 className="logo-text">MANEGASM</h1>
          </div>

          <div className="responsive-show">
            <div className="nav-links">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="nav-link">
                  {link.name}
                </a>
              ))}

              <button
                id="cart-toggle"
                className="nav-item"
                onClick={toggleCart}
                aria-label="Toggle Cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-size"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="notification-badge">{cartCount}</span>
              </button>
            </div>
          </div>

          <div className="mobile-toggle">
            <button
              id="mobile-menu-button"
              className="nav-button "
              onClick={handleMobileMenuToggle}
              aria-label="Toggle Mobile Menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="icon-size"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
        </div>

        {/* Fullscreen Mobile Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.aside
              className="mobile-overlay"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            >
              {/* blurred dark glass background */}
              <div className="overlay-backdrop" onClick={() => setMobileMenuOpen(false)} />

              <motion.div
                className="overlay-content"
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.36, ease: easeOut } }}
                exit={{ y: 12, opacity: 0, transition: { duration: 0.22 } }}
              >
                <button
                  className="overlay-close"
                  aria-label="Close menu"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>

                <nav className="overlay-menu" aria-label="Mobile primary">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="overlay-link"
                      onClick={() => setMobileMenuOpen(false)}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={menuItemVariants}
                    >
                      {link.name}
                    </motion.a>
                  ))}

                  <motion.button
                    className="overlay-cta"
                    onClick={() => {
                      toggleCart();
                      setMobileMenuOpen(false);
                    }}
                    custom={navLinks.length + 1}
                    initial="hidden"
                    animate="visible"
                    variants={menuItemVariants}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-small"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    Cart
                  </motion.button>
                </nav>
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
