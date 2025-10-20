'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { api, User } from '../lib/api';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.getProfile().then(setUser).catch((error) => {
        console.log('Profile fetch failed:', error.message);
        if (error.message.includes('Failed to fetch')) {
          console.log('Backend server not available');
        } else {
          localStorage.removeItem('token');
        }
      });
    }
  }, []);

  const handleLogout = () => {
    api.logout();
    setUser(null);
    window.location.href = '/';
  };

  return (
    <nav className={`navbar relative ${styles.navbar}`}>
      <div className={`navbar-inner px-4 sm:px-6 lg:px-8 ${styles['navbar-inner']}`}>
        <div className="logo-wrap flex items-center" aria-label="Site logo">
          <Image src="/assets/logo.png" alt="BRANA Arts logo" width={60} height={60} priority className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full object-cover" />
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links hidden md:flex space-x-4 lg:space-x-6" role="menubar" aria-label="Main navigation">
          <li><Link href="/" className="text-sm lg:text-base text-white hover:text-gray-300 transition-colors">Home</Link></li>
          <li><Link href="/collections" className="text-sm lg:text-base text-white hover:text-gray-300 transition-colors">Our Collections</Link></li>
          <li><Link href="/new-arrivals" className="text-sm lg:text-base text-white hover:text-gray-300 transition-colors">New Arrivals</Link></li>
          <li><Link href="/about" className="text-sm lg:text-base text-white hover:text-gray-300 transition-colors">About Us</Link></li>
          <li><Link href="/contact" className="text-sm lg:text-base text-white hover:text-gray-300 transition-colors">Contact</Link></li>
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions hidden md:flex items-center space-x-2 lg:space-x-3">
          <ThemeToggle />
          {user ? (
            <>
              <span className="welcome-text text-xs lg:text-sm">Welcome, {user.username}</span>
              <Link href="/dashboard" className="btn primary text-xs lg:text-sm px-2 lg:px-3 py-1 lg:py-2">Dashboard</Link>
              <button onClick={handleLogout} className="btn ghost text-xs lg:text-sm px-2 lg:px-3 py-1 lg:py-2">
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link href="/signup" className="btn primary text-xs lg:text-sm px-2 lg:px-3 py-1 lg:py-2">Sign Up</Link>
              <Link href="/login" className="btn ghost text-xs lg:text-sm px-2 lg:px-3 py-1 lg:py-2">Log In</Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm z-50">
          <div className="px-4 py-6 space-y-4">
            <Link href="/" className="block text-white hover:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/collections" className="block text-white hover:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>Our Collections</Link>
            <Link href="/new-arrivals" className="block text-white hover:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>New Arrivals</Link>
            <Link href="/about" className="block text-white hover:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link href="/contact" className="block text-white hover:text-gray-300 py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            
            <div className="pt-4 border-t border-white/20 space-y-3">
              <div className="flex justify-center mb-3">
                <ThemeToggle />
              </div>
              {user ? (
                <>
                  <span className="block text-white/80 text-sm">Welcome, {user.username}</span>
                  <Link href="/dashboard" className="block bg-amber-600 text-white text-center py-2 px-4 rounded hover:bg-amber-700" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
                  <button onClick={() => {handleLogout(); setIsMenuOpen(false);}} className="block w-full text-left text-white hover:text-gray-300 py-2">
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/signup" className="block bg-amber-600 text-white text-center py-2 px-4 rounded hover:bg-amber-700" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                  <Link href="/login" className="block border border-white text-white text-center py-2 px-4 rounded hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Log In</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;