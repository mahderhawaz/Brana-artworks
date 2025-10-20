'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

interface MobileNavProps {
  isDashboard?: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ isDashboard = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-header">
          <ThemeToggle />
          <button className="close-btn" onClick={toggleMenu}>×</button>
        </div>
        
        <nav className="mobile-nav">
          {isDashboard ? (
            <>
              <Link href="/dashboard" onClick={toggleMenu}>Dashboard</Link>
              <Link href="/my-artworks" onClick={toggleMenu}>My Artworks</Link>
              <Link href="/upload-artwork" onClick={toggleMenu}>Upload</Link>
              <Link href="/sales" onClick={toggleMenu}>Sales</Link>
              <Link href="/purchases" onClick={toggleMenu}>Purchases</Link>
              <Link href="/profile" onClick={toggleMenu}>Profile</Link>
              <Link href="/settings" onClick={toggleMenu}>Settings</Link>
            </>
          ) : (
            <>
              <Link href="/" onClick={toggleMenu}>Home</Link>
              <Link href="/collections" onClick={toggleMenu}>Collections</Link>
              <Link href="/about" onClick={toggleMenu}>About</Link>
              <Link href="/contact" onClick={toggleMenu}>Contact</Link>
              <Link href="/login" onClick={toggleMenu}>Login</Link>
              <Link href="/signup" onClick={toggleMenu}>Sign Up</Link>
            </>
          )}
        </nav>
      </div>

      <style jsx>{`
        .hamburger {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          gap: 4px;
        }

        .hamburger span {
          width: 20px;
          height: 2px;
          background: #a65b2b;
          transition: all 0.3s ease;
        }

        :root.dark .hamburger span {
          background: white;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 998;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -300px;
          width: 280px;
          height: 100vh;
          background: #fff;
          z-index: 999;
          transition: right 0.3s ease;
          padding: 20px;
          box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
        }

        :root.dark .mobile-menu {
          background: #3d2914;
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(166, 91, 43, 0.1);
        }

        :root.dark .mobile-header {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #a65b2b;
          padding: 4px;
        }

        :root.dark .close-btn {
          color: white;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .mobile-nav a {
          color: #a65b2b;
          text-decoration: none;
          font-weight: 600;
          padding: 12px 0;
          border-bottom: 1px solid rgba(166, 91, 43, 0.1);
          transition: color 0.2s ease;
        }

        :root.dark .mobile-nav a {
          color: white;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-nav a:hover {
          color: #8b4a20;
        }

        :root.dark .mobile-nav a:hover {
          color: #f4e4bc;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </>
  );
};

export default MobileNav;