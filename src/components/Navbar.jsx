import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-app/95 border-b border-default backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar container */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <FaLeaf className="text-primary text-2xl" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-default">KisanMitra</span>
              <span className="text-[10px] text-muted -mt-1">
                हर किसान का सच्चा दोस्त
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-default hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-3">
              <Link to="/login">
                <button className="btn btn-outline">Login</button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-primary">Get Started</button>
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-default focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium text-default hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <button className="btn btn-outline w-full">Login</button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <button className="btn btn-primary w-full">Get Started</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
