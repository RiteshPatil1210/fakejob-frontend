// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <span className="logo-icon">🛡️</span>
          <span className="logo-text">FakeJob Shield</span>
        </div>
      </div>

      <nav className="navbar-links">
        <Link
          to="/"
          className={
            location.pathname === "/" ? "nav-link nav-link-active" : "nav-link"
          }
        >
          Home
        </Link>
        <Link
          to="/analyze"
          className={
            location.pathname === "/analyze"
              ? "nav-link nav-link-active"
              : "nav-link"
          }
        >
          Analyze
        </Link>
      </nav>
    </header>
  );
}
