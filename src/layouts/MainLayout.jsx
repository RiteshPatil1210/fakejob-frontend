import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShieldAlt, FaHome, FaSearch, FaQuestionCircle } from 'react-icons/fa';
import Chatbot from '../components/Chatbot';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="app-container">
      {/* Navbar - Sticky & Glassmorphism */}
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaShieldAlt className="logo-icon" />
            <span>FakeJob<span style={{ color: 'var(--accent-neon)' }}>Shield</span></span>
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <FaHome style={{ marginRight: '5px' }} /> Home
          </Link>
          <Link to="/how-to-use" className={`nav-item ${location.pathname === '/how-to-use' ? 'active' : ''}`}>
            How to Use
          </Link>
          <Link to="/why-matters" className={`nav-item ${location.pathname === '/why-matters' ? 'active' : ''}`}>
            Why this Matters
          </Link>
          <Link to="/analyze" className={`nav-item ${location.pathname === '/analyze' ? 'active' : ''}`}>
            <FaSearch style={{ marginRight: '5px' }} /> Analyze
          </Link>
          <Link to="/how-it-works" className={`nav-item ${location.pathname === '/how-it-works' ? 'active' : ''}`}>
            How it Works
          </Link>
          <Link to="/accuracy" className={`nav-item ${location.pathname === '/accuracy' ? 'active' : ''}`}>
            Accuracy
          </Link>

          {/* Help Button */}
          <button
            onClick={() => setShowChat(!showChat)}
            className="nav-item"
            style={{
              background: 'transparent',
              border: '1px solid var(--border-color)',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              marginLeft: '1rem'
            }}
          >
            <div style={{ position: 'relative' }}>
              <FaQuestionCircle />
              <div className="nav-badge"></div>
            </div>
            Help & Support
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Chatbot Overlay */}
      <Chatbot isOpen={showChat} onClose={() => setShowChat(false)} />

      {/* Footer is omitted for simplicity or can be added structurally similar to Navbar */}
    </div>
  );
};

export default MainLayout;
