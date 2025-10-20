"use client"

import Head from "next/head"
import Image from "next/image"
import { useState, useEffect } from "react"
import DashboardSidebar from "../../components/DashboardSidebar"
import ThemeToggle from "../../components/ThemeToggle"
import DefaultAvatar from "../../components/DefaultAvatar"
import PageTransition from "../../components/PageTransition"
import { api, Artwork, User } from "../../lib/api"

/**
 * Enhanced "My Artworks" page
 * - Modern design with circular logo badge
 * - Improved visual hierarchy and spacing
 * - Better card interactions and styling
 * - Responsive grid layout
 */

const demoArtworkRows = [
  [
    { title: "Ethiopian Coffee Ceremony", price: "$250", status: "Available", src: "/cards/paint.jpg" },
    { title: "Traditional Wedding", price: "$300", status: "Sold", src: "/cards/pottery 1.jpg" },
    { title: "Mask Dance", price: "$180", status: "Available", src: "/cards/basket.jpg" },
    { title: "Ethiopian Weaving", price: "$220", status: "Available", src: "/cards/tibeb 2.jpg" },
    { title: "Pottery Art", price: "$150", status: "Sold", src: "/assets/pot1.jpg" },
    { title: "Basketry Craft", price: "$200", status: "Available", src: "/assets/basketery1.jpg" },
    { title: "Traditional Paint", price: "$320", status: "Available", src: "/assets/paint1.jpg" },
    { title: "Ceramic Bowl", price: "$180", status: "Available", src: "/assets/pot2.jpg" }
  ],
  [
    { title: "Tibeb Textile", price: "$280", status: "Available", src: "/assets/tibeb1.jpg" },
    { title: "Woven Basket", price: "$160", status: "Sold", src: "/assets/basketery3.jpg" },
    { title: "Ancient Art", price: "$450", status: "Available", src: "/assets/paint2.jpg" },
    { title: "Clay Pottery", price: "$190", status: "Available", src: "/assets/pot3.jpg" },
    { title: "Traditional Cloth", price: "$240", status: "Available", src: "/assets/tibeb2.jpg" },
    { title: "Handcraft Basket", price: "$210", status: "Sold", src: "/assets/basketery4.jpg" },
    { title: "Royal Painting", price: "$380", status: "Available", src: "/assets/paint3.jpg" },
    { title: "Ceramic Art", price: "$170", status: "Available", src: "/assets/pot4.jpg" }
  ]
]

const artworkRows = [
  [
    { title: "Ethiopian Coffee Ceremony", price: "$250", status: "Available", src: "/cards/paint.jpg" },
    { title: "Traditional Wedding", price: "$300", status: "Sold", src: "/cards/pottery 1.jpg" },
    { title: "Mask Dance", price: "$180", status: "Available", src: "/cards/basket.jpg" },
    { title: "Ethiopian Weaving", price: "$220", status: "Available", src: "/cards/tibeb 2.jpg" },
    { title: "Pottery Art", price: "$150", status: "Sold", src: "/assets/pot1.jpg" },
    { title: "Basketry Craft", price: "$200", status: "Available", src: "/assets/basketery1.jpg" },
    { title: "Traditional Paint", price: "$320", status: "Available", src: "/assets/paint1.jpg" },
    { title: "Ceramic Bowl", price: "$180", status: "Available", src: "/assets/pot2.jpg" }
  ],
  [
    { title: "Tibeb Textile", price: "$280", status: "Available", src: "/assets/tibeb1.jpg" },
    { title: "Woven Basket", price: "$160", status: "Sold", src: "/assets/basketery3.jpg" },
    { title: "Ancient Art", price: "$450", status: "Available", src: "/assets/paint2.jpg" },
    { title: "Clay Pottery", price: "$190", status: "Available", src: "/assets/pot3.jpg" },
    { title: "Traditional Cloth", price: "$240", status: "Available", src: "/assets/tibeb2.jpg" },
    { title: "Handcraft Basket", price: "$210", status: "Sold", src: "/assets/basketery4.jpg" },
    { title: "Royal Painting", price: "$380", status: "Available", src: "/assets/paint3.jpg" },
    { title: "Ceramic Art", price: "$170", status: "Available", src: "/assets/pot4.jpg" }
  ]
]

export default function MyArtworksPage() {
  const [page, setPage] = useState(1)
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)
  const totalPages = 10

  useEffect(() => {
    loadUserArtworks()
    loadUserProfile()
    
    // Listen for artwork uploads
    const handleArtworkUploaded = () => {
      loadUserArtworks()
    }
    
    window.addEventListener('artworkUploaded', handleArtworkUploaded)
    return () => window.removeEventListener('artworkUploaded', handleArtworkUploaded)
  }, [])

  async function loadUserArtworks() {
    try {
      const userArtworks = await api.getUserArtworks()
      setArtworks(userArtworks)
      console.log('Loaded artworks:', userArtworks)
    } catch (error) {
      console.error('Failed to load artworks:', error)
    } finally {
      setLoading(false)
    }
  }

  async function loadUserProfile() {
    try {
      const userData = await api.getProfile()
      setUser(userData)
    } catch (error) {
      console.error('Failed to load user profile:', error)
    }
  }

  function convertToDisplayFormat(artworks: Artwork[]) {
    return artworks.map(artwork => ({
      title: artwork.title,
      price: artwork.price ? `$${artwork.price}` : 'Not for sale',
      status: artwork.sold ? 'Sold' : artwork.forSale ? 'Available' : 'Not for sale',
      src: artwork.imageUrl
    }))
  }

  const displayArtworks = convertToDisplayFormat(artworks)
  const artworkRows = displayArtworks.length > 0 
    ? [displayArtworks.slice(0, Math.ceil(displayArtworks.length / 2)), displayArtworks.slice(Math.ceil(displayArtworks.length / 2))]
    : demoArtworkRows

  function goto(p: number) {
    if (p < 1 || p > totalPages) return
    setPage(p)
  }

  return (
    <>
      <Head>
        <title>My Artworks — BRANA Arts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <PageTransition>
        <div className="page">
          <DashboardSidebar activePage="my-artworks" />
          <div className="contentArea">
        <header className="topnav" role="banner">
          <div className="brand">
          </div>

          <nav className="centerlinks" aria-label="Main">
            <a href="/" className="nav-link">Home</a>
            <a href="/collections" className="nav-link">Explore</a>
            <a href="/dashboard" className="nav-link">Dashboard</a>
            <a href="/my-artworks" className="nav-link">My Artworks</a>
          </nav>

          <div className="right">
            <ThemeToggle />
            <button className="iconBtn" aria-label="Notifications">
              🔔
            </button>
            <div className="avatar">
              {user?.profilePicture ? (
                <Image 
                  src={user.profilePicture} 
                  alt="User" 
                  width={36} 
                  height={36} 
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
              ) : (
                <DefaultAvatar size={36} />
              )}
            </div>
          </div>
        </header>

        <main className="main">
          <div className="pageHeader">
            <div>
              <h1>My Artworks</h1>
              <p className="subtitle">Curated collection of Ethiopian artisan crafts</p>
            </div>
            <a href="/upload-artwork" className="uploadBtn" aria-label="Upload new artwork">
              <span className="plus">+</span> Upload New Artwork
            </a>
          </div>

          {loading ? (
            <div className="loadingState">
              <div className="spinner"></div>
              <p>Loading your artworks...</p>
            </div>
          ) : (
            artworkRows.map((row, rowIndex) => (
            <section key={rowIndex} className="artworkRow" aria-label={`Artwork row ${rowIndex + 1}`}>
              <div className="scrollContainer">
                <div className="artworkGrid">
                  {row.map((a) => (
                    <article className="card" key={a.title}>
                      <div className="media">
                        {a.src && a.src.startsWith('data:') ? (
                          <img src={a.src} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                          <Image src={a.src || "/placeholder.svg"} alt={a.title} fill style={{ objectFit: "cover" }} />
                        )}
                      </div>
                      <div className="overlay">
                        <div className="meta">
                          <div className="title">{a.title}</div>
                          <div className="bottomRow">
                            <div className={`price ${a.status === "Sold" ? "sold" : "available"}`}>{a.price}</div>
                            <div className={`status ${a.status === "Sold" ? "statusSold" : "statusAvail"}`}>{a.status}</div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

              </div>
            </section>
          ))
          )}


        </main>
          </div>
        </div>
      </PageTransition>

      <style jsx global>{`
        body {
          background: #fff;
          color: #a65b2b;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        :root.dark body {
          background: #3d2914 !important;
          color: white !important;
        }
        
        .topnav {
          background: #fbfaf8;
          border-bottom: 1px solid rgba(166, 91, 43, 0.1);
        }
        
        :root.dark .topnav {
          background: #3d2914 !important;
          border-bottom: 1px solid rgba(255,255,255,0.1) !important;
        }
        
        .nav-link {
          color: #a65b2b !important;
          text-decoration: none;
          font-weight: 600;
        }
        
        :root.dark .nav-link {
          color: white !important;
        }
        
        .nav-link:hover {
          text-decoration: underline;
        }
        
        .iconBtn {
          color: #a65b2b;
        }
        
        :root.dark .iconBtn {
          color: white !important;
        }
        
        h1 {
          color: #a65b2b !important;
        }
        
        :root.dark h1 {
          color: white !important;
        }
        
        .subtitle {
          color: #8b7d75;
        }
        
        :root.dark .subtitle {
          color: white !important;
        }
        
        .uploadBtn {
          background: #c17a4a;
          color: #fff !important;
        }
        
        :root.dark .uploadBtn {
          background: #a65b2b !important;
          color: white !important;
        }
        
        .card {
          background: #fff;
          border: 1px solid rgba(166, 91, 43, 0.1);
        }
        
        :root.dark .card {
          background: #4a3319 !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
        }
        
        .title {
          color: #fff;
        }
        
        :root.dark .title {
          color: white !important;
        }
        
        .price {
          color: #fff;
        }
        
        :root.dark .price {
          color: white !important;
        }
        
        :root.dark .main {
          background: #3d2914 !important;
        }
        
        :root.dark .contentArea {
          background: #3d2914 !important;
        }

        :root{
          --page-bg: #fbfaf8;
          --muted: #6b625d;
          --accent: #a65b2b;
          --card-shadow: 0 10px 30px rgba(0,0,0,0.06);
          --card-shadow-hover: 0 20px 45px rgba(0,0,0,0.12);
          --accent-light: rgba(166, 91, 43, 0.1);
        }
        *{box-sizing:border-box}
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
        
        .logo{ border-radius: 50%; object-fit: cover; }
        
        .centerlinks { display:flex; gap:20px; }
        .centerlinks a { color:#a65b2b !important; text-decoration:none; font-weight:600; }
        .centerlinks a:hover { text-decoration:underline; }

        .right{ display:flex; align-items:center; gap:12px; }
        .iconBtn{
          background:transparent;
          border:none;
          font-size:18px;
          cursor:pointer;
        }
        .avatar{ border-radius:999px; overflow:hidden; }
        .avatar img { border-radius: 50%; object-fit: cover; }

        .main{
          max-width: 1280px;
          margin: 0 auto;
          padding: 40px 24px 80px;
        }

        .pageHeader{
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          margin-bottom: 36px;
          gap: 24px;
        }
        h1 { font-family: "Playfair Display", serif; font-size: 36px; margin: 0; color: #a65b2b !important; }
        .subtitle{
          font-size: 15px;
          color: var(--muted);
          margin: 0;
          font-weight: 400;
        }
        .uploadBtn{
          background: var(--accent);
          color: #fff !important;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight:600;
          cursor:pointer;
          display:flex;
          align-items:center;
          gap:8px;
          box-shadow: 0 6px 18px rgba(193, 122, 74, 0.18);
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .uploadBtn:hover{
          background: #b36a3a;
          box-shadow: 0 8px 24px rgba(193, 122, 74, 0.24);
          transform: translateY(-2px);
        }
        .plus{ font-weight:700; font-size:18px; color: #fff !important; }

        /* artwork rows */
        .artworkRow{
          margin-bottom: 32px;
        }
        .scrollContainer{
          position: relative;
        }
        .artworkGrid{
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding-bottom: 10px;
        }
        .artworkGrid::-webkit-scrollbar{
          height: 6px;
        }
        .artworkGrid::-webkit-scrollbar-track{
          background: #f1f1f1;
          border-radius: 3px;
        }
        .artworkGrid::-webkit-scrollbar-thumb{
          background: var(--accent);
          border-radius: 3px;
        }

        .card{
          border-radius: 12px;
          overflow:hidden;
          background: #fff;
          box-shadow: var(--card-shadow);
          position: relative;
          min-width: 250px;
          width: 250px;
          height: 200px;
          flex-shrink: 0;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .card:hover{
          box-shadow: var(--card-shadow-hover);
          transform: translateY(-4px);
        }

        .media{
          position: relative;
          width: 100%;
          height: 200px;
          background: #f0ebe5;
        }

        .scrollBtn{
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.9);
          border: 1px solid var(--accent);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 18px;
          color: var(--accent);
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: all 0.2s;
          z-index: 10;
        }
        .scrollBtn:hover{
          background: var(--accent);
          color: #fff;
          transform: translateY(-50%) scale(1.1);
        }

        .overlay{
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 16px;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.52) 100%);
          display:flex;
          align-items:flex-end;
        }

        .meta{ width:100%; color: #fff; }
        .title{
          font-family: "Playfair Display", serif;
          font-size: 16px;
          font-weight:700;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
          line-height: 1.3;
        }
        .bottomRow{
          display:flex;
          gap:10px;
          align-items:center;
          margin-top:8px;
        }
        .price{ font-weight:700; color: #fff; font-size: 14px; }
        .price.sold{ color: #f5c9b8; }
        .status{
          padding:6px 12px;
          border-radius:20px;
          font-size:11px;
          font-weight:700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .statusAvail{ background: rgba(76, 175, 80, 0.2); color: #a8e6a1; }
        .statusSold{ background: rgba(255,255,255,0.15); color: #f5c9b8; }

        /* pagination */
        .pagination{
          display:flex;
          align-items:center;
          gap:8px;
          justify-content:center;
          margin-top:40px;
          color: var(--muted);
        }
        .pageBtn{
          background:transparent;
          border:none;
          font-size:20px;
          padding:8px;
          cursor:pointer;
          color: var(--muted);
          transition: color 0.2s;
        }
        .pageBtn:hover{ color: var(--accent); }
        .pageNum{
          width:40px;
          height:40px;
          border-radius:50%;
          border:none;
          background:transparent;
          cursor:pointer;
          font-weight:600;
          color: var(--muted);
          transition: all 0.2s;
          font-size: 14px;
        }
        .pageNum:hover{
          background: var(--accent-light);
          color: var(--accent);
        }
        .pageNum.active{
          background: var(--accent);
          color:#fff;
          box-shadow: 0 4px 12px rgba(193, 122, 74, 0.2);
        }
        .dots{ font-size:16px; padding: 0 4px; }

        /* loading state */
        .loadingState {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          text-align: center;
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #f3f1ef;
          border-top: 3px solid #a65b2b;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .loadingState p {
          color: #a65b2b;
          font-size: 16px;
          margin: 0;
        }
        :root.dark .loadingState p {
          color: white !important;
        }
        :root.dark .spinner {
          border-color: #4a3319;
          border-top-color: #a65b2b;
        }

        /* responsive */
        @media (max-width: 768px){
          .card{ min-width: 200px; width: 200px; height: 160px; }
          .media{ height: 160px; }
          h1{ font-size: 32px; }
          .pageHeader{ flex-direction: column; }
          .uploadBtn{ width: 100%; justify-content: center; }
          .topnav{ padding: 12px 16px; }
          .centerlinks{ gap: 16px; }
        }
        @media (max-width: 480px){
          .card{ min-width: 180px; width: 180px; height: 140px; }
          .media{ height: 140px; }
          h1{ font-size: 24px; }
          .main{ padding: 24px 16px 60px; }
          .topnav{ flex-wrap: wrap; gap: 12px; }
          .centerlinks{ display: none; }
          .pagination{ gap: 4px; }
          .pageNum{ width: 36px; height: 36px; font-size: 12px; }
          .scrollBtn{ width: 35px; height: 35px; font-size: 16px; }
        }
      `}</style>
    </>
  )
}