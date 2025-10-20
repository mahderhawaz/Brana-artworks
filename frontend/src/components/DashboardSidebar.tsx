'use client';

import React from 'react';
import Image from 'next/image';

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
        <a className={`item ${activePage === "dashboard" || activePage === "Home" ? "active" : ""}`} href="/dashboard">
          <span className="icon">🏠</span>
          <span>Home</span>
        </a>

        <a className={`item ${activePage === "my-artworks" ? "active" : ""}`} href="/my-artworks">
          <span className="icon">🖼️</span>
          <span>My Artworks</span>
        </a>

        <a className={`item ${activePage === "upload-artwork" ? "active" : ""}`} href="/upload-artwork">
          <span className="icon">➕</span>
          <span>Upload Artwork</span>
        </a>

        <a className={`item ${activePage === "sales" ? "active" : ""}`} href="/sales">
          <span className="icon">💵</span>
          <span>Sales</span>
        </a>

        <a className={`item ${activePage === "purchases" ? "active" : ""}`} href="/purchases">
          <span className="icon">🛒</span>
          <span>Purchases</span>
        </a>
      </nav>

      <div className="bottom">
        <a className={`smallItem ${activePage === "profile" ? "active" : ""}`} href="/profile"><span className="icon">👤</span> Profile</a>
        <a className={`smallItem ${activePage === "settings" ? "active" : ""}`} href="/settings"><span className="icon">⚙️</span> Settings</a>
      </div>

      <style jsx>{`
        :global(:root) {
          --sidebar-bg: #fffaf8;
          --muted: #6b625d;
          --accent: #a65b2b;
          --pill: #efe6df;
        }
        .sidebar {
          width: 220px;
          min-width: 220px;
          background: var(--sidebar-bg);
          border-right: 1px solid rgba(0, 0, 0, 0.04);
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
          color: var(--muted);
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
          color: var(--muted);
          text-decoration: none;
          font-weight: 600;
        }
        .icon {
          font-size: 18px;
          line-height: 1;
        }
        .item:hover {
          background: rgba(166, 91, 43, 0.04);
          color: var(--accent);
          transform: translateY(-1px);
        }
        .active {
          background: var(--pill);
          color: var(--accent);
          box-shadow: 0 6px 16px rgba(166, 91, 43, 0.06);
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
          color: var(--muted);
          text-decoration: none;
          padding: 8px 10px;
          border-radius: 8px;
        }
        .smallItem:hover {
          background: rgba(0, 0, 0, 0.02);
        }
        .smallItem.active {
          background: var(--pill);
          color: var(--accent);
        }
      `}</style>
    </aside>
  );
};

export default DashboardSidebar;