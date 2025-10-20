'use client';

import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import { api, User } from "../../lib/api";



const stats = [
  { label: "Total Sales", value: "$12,500" },
  { label: "Total Artworks", value: "35" },
  { label: "Likes", value: "2,345" },
  { label: "Followers", value: "1,876" },
];

const DashboardStats: React.FC = () => (
  <section className="stats" aria-label="Dashboard statistics">
    {stats.map((s) => (
      <div key={s.label} className="statCard">
        <div className="label">{s.label}</div>
        <div className="value">{s.value}</div>
      </div>
    ))}

    <style jsx>{`
      :global(:root) {
        --card-bg: #fff;
        --muted: #6b625d;
        --accent: #a65b2b;
        --shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
      }
      .stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 18px;
        margin: 18px 0 28px;
      }
      .statCard {
        background: var(--card-bg);
        padding: 18px 20px;
        border-radius: 12px;
        box-shadow: var(--shadow);
        border: 1px solid rgba(0, 0, 0, 0.03);
      }
      .label {
        font-size: 13px;
        color: var(--muted);
        font-weight: 600;
      }
      .value {
        margin-top: 8px;
        font-family: "Playfair Display", serif;
        font-size: 22px;
        color: #1a1410;
      }

      @media (max-width: 900px) {
        .stats {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 520px) {
        .stats {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </section>
);

type Art = { src: string; title: string; price: string; status?: "For Sale" | "Pending" | "Sold" };

const ArtCard: React.FC<Art> = ({ src, title, price, status = "For Sale" }) => (
  <article className="artCard">
    <div className="media">
      <Image src={src} alt={title} fill style={{ objectFit: "cover" }} />
    </div>

    <div className="info">
      <h3 className="artTitle">{title}</h3>
      <div className="row">
        <div className="price">{price}</div>
        <div className={`badge ${status === "Pending" ? "pending" : ""}`}>{status}</div>
      </div>
    </div>

    <style jsx>{`
      :global(:root) {
        --card-bg: #fff;
        --muted: #6b625d;
        --accent: #a65b2b;
        --success: #1f9d6a;
        --pending: #f0d8b8;
        --shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
      }
      .artCard {
        background: var(--card-bg);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: var(--shadow);
        border: 1px solid rgba(0, 0, 0, 0.03);
        display: flex;
        flex-direction: column;
      }
      .media {
        position: relative;
        height: 170px;
        background: #efece9;
      }
      .info {
        padding: 12px 14px 16px;
      }
      .artTitle {
        font-family: "Playfair Display", serif;
        font-size: 16px;
        margin: 0 0 8px;
        color: #1a1410;
      }
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
      }
      .price {
        color: var(--accent);
        font-weight: 700;
      }
      .badge {
        background: #e8f5ee;
        color: #1b8a5a;
        padding: 6px 10px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 700;
      }
      .pending {
        background: var(--pending);
        color: var(--accent);
      }
    `}</style>
  </article>
);

const demoArt: Art[] = [
  { src: "/cards/pottery 1.jpg", title: "Traditional Pottery", price: "$150", status: "For Sale" },
  { src: "/cards/paint.jpg", title: "Queen of Sheba Painting", price: "$500", status: "For Sale" },
  { src: "/cards/basket.jpg", title: "Woven Basketry", price: "$80", status: "For Sale" },
  { src: "/cards/tibeb 2.jpg", title: "Tibeb Textile Art", price: "$220", status: "Pending" },
];

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await api.getProfile();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <Head>
        <title>BRANA Arts — Artist Dashboard</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <div className="page">
        <DashboardSidebar activePage="dashboard" />
        <div className="contentArea">
        <header className="topnav" role="banner">
          <div className="brand">
          </div>

          <nav className="centerlinks" aria-label="Main">
            <a href="/">Home</a>
            <a href="/collections">Explore</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/my-artworks">My Artworks</a>
          </nav>

          <div className="right">
            <button className="iconBtn" aria-label="Notifications">🔔</button>
            <div className="avatar">
              <Image 
                src={user?.profilePicture || "/assets/hanna.jpg"} 
                alt="User" 
                width={36} 
                height={36} 
              />
            </div>
          </div>
        </header>
          <main className="main">
            <div className="pageHeader">
              <h1>Dashboard Overview</h1>
              <p className="subtitle">Welcome to your artist dashboard</p>
            </div>
            <DashboardStats />

            <section className="artSection" aria-label="My Artworks">
              <div className="headerRow">
                <h3 className="sectionTitle">My Artworks</h3>
                <a href="/upload-artwork" className="upload">+ Upload New Artwork</a>
              </div>

              <div className="grid">
                {demoArt.map((a) => (
                  <ArtCard key={a.title} {...a} />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      <style jsx>{`
        :root {
          --page-bg: #fbfaf8;
          --accent: #a65b2b;
          --muted: #6b625d;
        }
        * { box-sizing: border-box; }
        body { margin: 0; font-family: "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, Arial; background: var(--page-bg); color: #a65b2b !important; }
        * { color: #a65b2b !important; }
        .page { display: flex; min-height: 100vh; }
        .contentArea { flex: 1; display: flex; flex-direction: column; }

        .topnav {
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding: 14px 28px;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          background: #fff;
          position: sticky;
          top: 0;
          z-index: 20;
        }
        .brand{ display:flex; align-items:center; gap:12px; }
        .centerlinks { display:flex; gap:20px; }
        .centerlinks a { color:#a65b2b !important; text-decoration:none; font-weight:600; }
        .centerlinks a:hover { text-decoration:underline; }
        .right { display:flex; align-items:center; gap:12px; }
        .iconBtn{
          background:transparent;
          border:none;
          font-size:18px;
          cursor:pointer;
        }
        .avatar { border-radius:999px; overflow:hidden; }
        .avatar img { border-radius: 50%; object-fit: cover; }

        .main {
          padding: 22px 32px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .pageHeader {
          margin-bottom: 24px;
        }
        h1 { font-family: "Playfair Display", serif; font-size: 36px; margin: 0; color: #a65b2b !important; }
        .subtitle {
          margin: 0;
          color: var(--muted);
          font-size: 16px;
        }

        .headerRow {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .sectionTitle {
          font-family: "Playfair Display", serif;
          font-size: 20px;
          color: #1a1410;
          margin: 0;
        }
        .upload {
          background: var(--accent);
          color: #fff !important;
          padding: 8px 14px;
          border-radius: 10px;
          border: none;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
        }
        .upload:hover {
          background: #8f4a20;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 12px;
        }

        @media (max-width: 1100px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}