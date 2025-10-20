'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SidebarProps {
  activePage?: string;
}

const DashboardSidebar: React.FC<SidebarProps> = ({ activePage = "Home" }) => {
  return (
    <aside className="sidebar" aria-label="Artist navigation">
      <div className="brand">
        <Image src="/assets/logo.png" alt="BRANA Arts logo" width={80} height={80} priority className="logo" style={{ borderRadius: '50%', objectFit: 'cover' }} />
        <div className="brandSub">Artist Dashboard</div>
      </div>

      <nav className="nav" aria-label="Main">
        <Link className={`item ${activePage === "dashboard" || activePage === "Home" ? "active" : ""}`} href="/dashboard">
          <span className="icon">🏠</span>
          <span>Home</span>
        </Link>

        <Link className={`item ${activePage === "my-artworks" ? "active" : ""}`} href="/my-artworks">
          <span className="icon">🖼️</span>
          <span>My Artworks</span>
        </Link>

        <Link className={`item ${activePage === "upload-artwork" ? "active" : ""}`} href="/upload-artwork">
          <span className="icon">➕</span>
          <span>Upload Artwork</span>
        </Link>

        <Link className={`item ${activePage === "sales" ? "active" : ""}`} href="/sales">
          <span className="icon">💵</span>
          <span>Sales</span>
        </Link>

        <Link className={`item ${activePage === "purchases" ? "active" : ""}`} href="/purchases">
          <span className="icon">🛒</span>
          <span>Purchases</span>
        </Link>
      </nav>

      <div className="bottom">
        <Link className={`smallItem ${activePage === "profile" ? "active" : ""}`} href="/profile"><span className="icon">👤</span> Profile</Link>
        <Link className={`smallItem ${activePage === "settings" ? "active" : ""}`} href="/settings"><span className="icon">⚙️</span> Settings</Link>
      </div>

      <style jsx global>{`
        .sidebar {
          background: #fffaf8;
          border-right: 1px solid rgba(166, 91, 43, 0.1);
        }
        
        :root.dark .sidebar {
          background: #3d2914 !important;
          border-right: 1px solid rgba(255,255,255,0.1) !important;
        }
        
        .brandSub {
          color: #6b625d;
        }
        
        :root.dark .brandSub {
          color: white !important;
        }
        
        .item {
          color: #6b625d;
        }
        
        :root.dark .item {
          color: white !important;
        }
        
        .item:hover {
          background: rgba(166, 91, 43, 0.04);
          color: #a65b2b;
        }
        
        :root.dark .item:hover {
          background: rgba(255,255,255,0.1) !important;
          color: white !important;
        }
        
        .active {
          background: #efe6df;
          color: #a65b2b;
        }
        
        :root.dark .active {
          background: #4a3319 !important;
          color: white !important;
        }
        
        .smallItem {
          color: #6b625d;
        }
        
        :root.dark .smallItem {
          color: white !important;
        }
        
        .smallItem:hover {
          background: rgba(0, 0, 0, 0.02);
        }
        
        :root.dark .smallItem:hover {
          background: rgba(255,255,255,0.1) !important;
        }
        
        .smallItem.active {
          background: #efe6df;
          color: #a65b2b;
        }
        
        :root.dark .smallItem.active {
          background: #4a3319 !important;
          color: white !important;
        }
        
        :global(:root) {
          --sidebar-bg: #fffaf8;
          --muted: #6b625d;
          --accent: #a65b2b;
          --pill: #efe6df;
        }
        .sidebar {
          width: 220px;
          min-width: 220px;
          padding: 28px 18px;
          height: calc(100vh - 0px);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .brand {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .logo {
          border-radius: 50% !important;
          object-fit: cover;
          width: 80px !important;
          height: 80px !important;
        }
        
        .brandSub {
          font-size: 12px;
          margin-top: 8px;
          margin-bottom: 2px;
        }
        
        .nav {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-top: 0px;
        }
        
        .item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          transform: translateY(0);
          transition: all 0.2s ease;
        }
        
        .item:hover {
          transform: translateY(-1px);
        }
        
        .active {
          box-shadow: 0 6px 16px rgba(166, 91, 43, 0.06);
        }
        
        :root.dark .active {
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3) !important;
        }
        
        .icon {
          font-size: 18px;
          line-height: 1;
        }
        
        .bottom {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 32px;
        }
        
        .smallItem {
          display: flex;
          gap: 10px;
          text-decoration: none;
          padding: 8px 10px;
          border-radius: 8px;
        }
      `}</style>
    </aside>
  );
};

export default DashboardSidebar;