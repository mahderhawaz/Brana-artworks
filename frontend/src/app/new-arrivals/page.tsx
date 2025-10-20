'use client';

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { Artwork, api, User } from '../../lib/api';
import ArtworkModal from '../../components/ArtworkModal';
import ThemeToggle from "../../components/ThemeToggle";
import "../../styles/globals.css";

export default function NewArrivals() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const userProfile = await api.getProfile();
          setUser(userProfile);
        }
        
        const allArtworks = await api.getArtworks();
        const sortedArtworks = allArtworks.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setArtworks(sortedArtworks);
      } catch (error) {
        console.error('Failed to fetch artworks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleArtworkUpdate = async () => {
    try {
      const allArtworks = await api.getArtworks();
      const sortedArtworks = allArtworks.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setArtworks(sortedArtworks);
    } catch (error) {
      console.error('Failed to refresh artworks:', error);
    }
  };

  const handleBuyArtwork = async (artworkId: string) => {
    if (!user) return;
    try {
      await api.buyArtwork(artworkId);
      handleArtworkUpdate();
    } catch (error) {
      console.error('Failed to buy artwork:', error);
    }
  };

  const isOwner = (artwork: Artwork) => {
    return user && (user._id === artwork.artist._id || user.id === artwork.artist._id);
  };

  if (loading) {
    return (
      <section className="section">
        <div className="container">
          <div className="loadingState">
            <div className="spinner"></div>
            <p>Loading new arrivals...</p>
          </div>
        </div>
        <style jsx>{`
          .section { padding: 64px 20px; background: #fbfaf8; min-height: 100vh; display: flex; align-items: center; }
          .container { max-width: 1200px; margin: 0 auto; }
          .loadingState { text-align: center; }
          .spinner { width: 40px; height: 40px; border: 3px solid #f3f1ef; border-top: 3px solid #a65b2b; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px; }
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          p { color: #a65b2b; font-size: 18px; }
        `}</style>
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>New Arrivals — BRANA Arts</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <header style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "#fbfaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Image src="/assets/logo.png" alt="BRANA Arts" width={60} height={60} priority className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full object-cover" />
          </div>

          <nav className="nav-links" style={{ display: "flex", gap: 16, alignItems: "center", fontSize: 15, position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/collections" className="nav-link">Our Collections</Link>
            <Link href="/about" className="nav-link">About Us</Link>
            <Link href="/new-arrivals" className="nav-link active">New Arrivals</Link>
            <Link href="/#contact" className="nav-link">Contact</Link>
          </nav>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <ThemeToggle />
            <Link href="/signup" className="auth-btn">Sign Up</Link>
            <Link href="/login" className="auth-btn">Log in</Link>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <h1 className="heading">New Arrivals</h1>
          <p className="subtitle">Discover the latest masterpieces from our talented artists</p>
          
          {artworks.length === 0 ? (
            <div className="emptyState">
              <div className="emptyIcon">🎨</div>
              <h3>No Artworks Yet</h3>
              <p>Be the first to share your creativity with the world!</p>
            </div>
          ) : (
            <>
              <div className="statsInfo">
                <p>{artworks.length} amazing {artworks.length === 1 ? 'artwork' : 'artworks'} to explore</p>
              </div>
              
              <div className="grid">
                {artworks.map((artwork, index) => (
                  <article 
                    key={artwork._id} 
                    className={`card ${index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight'}`}
                    onClick={() => setSelectedArtwork(artwork)}
                  >
                    <div className="media">
                      <img
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      {artwork.forSale && !artwork.sold && (
                        <div className="priceTag">${artwork.price}</div>
                      )}
                      {artwork.sold && (
                        <div className="soldTag">SOLD</div>
                      )}
                    </div>
                    
                    <div className="content">
                      <h3 className="cardTitle">{artwork.title}</h3>
                      <p className="artist">by {artwork.artist.username}</p>
                      <div className="cardStats">
                        <span className="stat">
                          {user && artwork.likedBy?.includes(user._id || user.id || '') ? '❤️' : '🤍'} {artwork.likes}
                        </span>
                        <span className="stat">💬 {artwork.comments.length}</span>
                        <span className="date">{new Date(artwork.createdAt).toLocaleDateString()}</span>
                      </div>
                      {artwork.forSale && !artwork.sold && (
                        <div className="priceInfo">
                          <span className="price">${artwork.price}</span>
                          {!isOwner(artwork) && user && (
                            <button 
                              className="buyBtn"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleBuyArtwork(artwork._id);
                              }}
                            >
                              Buy Now
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          user={user}
          onClose={() => setSelectedArtwork(null)}
          onUpdate={handleArtworkUpdate}
        />
      )}

      <style jsx global>{`
        .section {
          padding: 64px 20px;
          background: #fbfaf8;
          min-height: 100vh;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .heading {
          text-align: center;
          font-family: "Playfair Display", serif;
          font-size: clamp(28px, 3.5vw, 44px);
          margin-bottom: 16px;
          color: #a65b2b;
        }
        .subtitle {
          text-align: center;
          color: #6b625d;
          font-size: 18px;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .statsInfo {
          text-align: center;
          margin-bottom: 32px;
        }
        .statsInfo p {
          color: #6b625d;
          font-size: 16px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          align-items: start;
        }

        .card {
          background: #ffffff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
          display: flex;
          flex-direction: column;
          transition: transform 220ms ease, box-shadow 220ms ease;
          cursor: pointer;
          will-change: transform;
        }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0,0,0,0.18);
        }

        .media {
          position: relative;
          width: 100%;
          padding-top: 70%;
          background: #f3f1ef;
        }
        .media img {
          position: absolute;
          top: 0;
          left: 0;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }

        .priceTag {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(34, 197, 94, 0.9);
          color: white;
          padding: 6px 10px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: 700;
        }
        .soldTag {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(239, 68, 68, 0.9);
          color: white;
          padding: 6px 10px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: 700;
        }

        .content {
          padding: 18px 16px 20px 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cardTitle {
          margin: 0;
          font-family: "Playfair Display", serif;
          font-size: 18px;
          color: #a65b2b;
          letter-spacing: -0.2px;
        }
        .artist {
          margin: 0;
          color: #a65b2b;
          font-size: 14px;
          font-weight: 600;
        }
        .cardStats {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 8px;
        }
        .cardStats span {
          color: #6b625d;
          font-size: 12px;
        }
        .cardStats .date {
          font-size: 11px;
          opacity: 0.8;
        }
        .cardStats .stat {
          cursor: default;
        }
        .priceInfo {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 12px;
          padding-top: 8px;
          border-top: 1px solid #f0f0f0;
        }
        .priceInfo .price {
          font-weight: 700;
          color: #a65b2b;
          font-size: 16px;
        }
        .buyBtn {
          background: #a65b2b;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .buyBtn:hover {
          background: #8f4a20;
          transform: translateY(-1px);
        }

        .emptyState {
          text-align: center;
          padding: 80px 20px;
        }
        .emptyIcon {
          font-size: 64px;
          margin-bottom: 20px;
        }
        .emptyState h3 {
          font-family: "Playfair Display", serif;
          font-size: 28px;
          color: #a65b2b;
          margin: 0 0 12px;
        }
        .emptyState p {
          color: #6b625d;
          font-size: 16px;
          margin: 0;
        }

        @media (max-width: 1100px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .heading {
            font-size: 26px;
          }
          .grid {
            grid-template-columns: 1fr;
          }
          .media {
            padding-top: 56%;
          }
        }

        .nav-link {
          color: #a65b2b !important;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        :root:not(.dark) .nav-link {
          color: #a65b2b !important;
        }
        
        .nav-link.active {
          font-weight: bold;
        }
        
        .auth-btn {
          background: #a65b2b;
          color: #fff;
          padding: 7px 12px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.2s ease;
        }
        
        header {
          background: #fbfaf8 !important;
        }
        
        :root.dark .nav-link {
          color: white !important;
        }
        
        :root.dark .auth-btn {
          background: #a65b2b !important;
          color: white !important;
        }
        
        :root.dark header {
          background: #3d2914 !important;
          border-bottom: 1px solid rgba(255,255,255,0.1) !important;
        }
        
        :root.dark .section {
          background: #3d2914 !important;
        }
        
        :root.dark body {
          background: #3d2914 !important;
        }
        
        :root.dark h1, :root.dark h2, :root.dark h3, :root.dark p {
          color: white !important;
        }
        
        :root.dark .card {
          background: #4a3319 !important;
        }
      `}</style>
    </>
  );
}