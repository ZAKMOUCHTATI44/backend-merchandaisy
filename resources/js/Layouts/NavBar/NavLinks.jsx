import React, { useState } from 'react';

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <button className="menu-button" onClick={toggleDropdown}>
        Services
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-section">
            <h3>Digital Solutions</h3>
            <div className="solution-item">
              <h4>Merch Platform</h4>
              <span className="tag">Platform</span>
              <p>Streamline merch management.</p>
            </div>
            <div className="solution-item">
              <h4>Merch Stores</h4>
              <span className="tag">Stores</span>
              <p>Full-service merch stores.</p>
            </div>
          </div>
          <div className="dropdown-section">
            <h3>Services</h3>
            <ul>
              <li>Merch Packs</li>
              <li>Custom Products</li>
              <li>Warehousing</li>
              <li>Shipping</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="dropdown-section">
            <h3>Use Cases</h3>
            <ul>
              <li>Onboarding Packs</li>
              <li>Christmas Packs</li>
              <li>Event Merch</li>
              <li>Corporate Gifts</li>
              <li>Team & Office</li>
              <li>Sales & Marketing</li>
            </ul>
          </div>
        </div>
      )}
      <style jsx>{`
        .navbar {
          display: flex;
          padding: 1em;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .menu-button {
          background: none;
          border: none;
          font-size: 1em;
          color: #333;
          cursor: pointer;
        }

        .dropdown-menu {
          position: absolute;
          top: 60px;
          left: 20px;
          display: flex;
          gap: 2em;
          padding: 1em;
          background-color: #fff;
          border: 1px solid #e0e0e0;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          z-index: 10;
        }

        .dropdown-section {
          min-width: 200px;
        }

        h3 {
          font-size: 1.2em;
          margin-bottom: 0.5em;
          color: #333;
        }

        .solution-item {
          margin-bottom: 1em;
        }

        h4 {
          font-size: 1em;
          margin: 0;
          display: flex;
          align-items: center;
        }

        .tag {
          margin-left: 0.5em;
          padding: 0.2em 0.5em;
          background-color: #e0f7fa;
          color: #00796b;
          font-size: 0.8em;
          border-radius: 4px;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          margin: 0.5em 0;
          font-size: 0.95em;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default NavLinks;
