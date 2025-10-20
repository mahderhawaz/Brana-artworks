'use client';

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../../components/ThemeToggle";
import MobileNav from "../../components/MobileNav";
import "../../styles/globals.css";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us — BRANA Arts</title>
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
            <Link href="/about" className="nav-link active">About Us</Link>
            <Link href="/#contact" className="nav-link">Contact</Link>
          </nav>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <ThemeToggle />
            <MobileNav />
            <Link href="/signup" className="auth-btn">Sign Up</Link>
            <Link href="/login" className="auth-btn">Log in</Link>
          </div>
        </div>
      </header>

      <main style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* About Us Section */}
        <section style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "2.5rem", color: "#a65b2b", marginBottom: "16px" }}>
              About BRANA Arts
            </h1>
            <p style={{ color: "#6b625d", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              Celebrating the rich heritage of Ethiopian art and connecting talented artists with art lovers worldwide.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center", marginBottom: "60px" }}>
            <div>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", color: "#5a2f15", marginBottom: "20px" }}>
                Our Story
              </h2>
              <p style={{ color: "#6b625d", lineHeight: "1.6", marginBottom: "20px" }}>
                BRANA Arts was born from a deep appreciation for Ethiopian culture and a desire to showcase the incredible talent of local artists. Our platform serves as a bridge between traditional craftsmanship and the modern world.
              </p>
              <p style={{ color: "#6b625d", lineHeight: "1.6" }}>
                We believe that art has the power to tell stories, preserve culture, and bring people together. Through our carefully curated collections, we aim to share the beauty and diversity of Ethiopian artistic traditions with a global audience.
              </p>
            </div>
            <div style={{ position: "relative", height: "400px", borderRadius: "12px", overflow: "hidden" }}>
              <Image
                src="/assets/about us.jpg"
                alt="About BRANA Arts"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section style={{ marginBottom: "80px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2.2rem", color: "#a65b2b", marginBottom: "30px" }}>
            Our Mission
          </h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ color: "#6b625d", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "30px" }}>
              To preserve, promote, and celebrate Ethiopian artistic heritage while providing a sustainable platform for local artists to showcase their work and connect with collectors worldwide.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px", marginTop: "40px" }}>
              <div className="mission-card" style={{ padding: "30px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                <h3 style={{ color: "#a65b2b", marginBottom: "15px", fontSize: "1.3rem" }}>Preserve Culture</h3>
                <p style={{ color: "#6b625d", lineHeight: "1.6" }}>
                  Safeguarding traditional Ethiopian art forms and techniques for future generations.
                </p>
              </div>
              <div className="mission-card" style={{ padding: "30px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                <h3 style={{ color: "#a65b2b", marginBottom: "15px", fontSize: "1.3rem" }}>Support Artists</h3>
                <p style={{ color: "#6b625d", lineHeight: "1.6" }}>
                  Providing a platform for artists to earn sustainable income from their craft.
                </p>
              </div>
              <div className="mission-card" style={{ padding: "30px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                <h3 style={{ color: "#a65b2b", marginBottom: "15px", fontSize: "1.3rem" }}>Global Reach</h3>
                <p style={{ color: "#6b625d", lineHeight: "1.6" }}>
                  Connecting Ethiopian art with collectors and enthusiasts around the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section style={{ marginBottom: "60px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2.2rem", color: "#a65b2b", marginBottom: "20px" }}>
              Our Values
            </h2>
            <p style={{ color: "#6b625d", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              The principles that guide everything we do at BRANA Arts.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "80px", height: "80px", backgroundColor: "#a65b2b", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>
                🎨
              </div>
              <h3 style={{ color: "#5a2f15", marginBottom: "15px", fontSize: "1.4rem" }}>Authenticity</h3>
              <p style={{ color: "#6b625d", lineHeight: "1.6" }}>
                We celebrate genuine Ethiopian artistic traditions and ensure every piece tells an authentic story.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ width: "80px", height: "80px", backgroundColor: "#a65b2b", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>
                🤝
              </div>
              <h3 style={{ color: "#5a2f15", marginBottom: "15px", fontSize: "1.4rem" }}>Community</h3>
              <p style={{ color: "#6b625d", lineHeight: "1.6" }}>
                Building strong relationships with artists, collectors, and art enthusiasts to create a thriving community.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ width: "80px", height: "80px", backgroundColor: "#a65b2b", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>
                ⭐
              </div>
              <h3 style={{ color: "#5a2f15", marginBottom: "15px", fontSize: "1.4rem" }}>Excellence</h3>
              <p style={{ color: "#6b625d", lineHeight: "1.6" }}>
                Maintaining the highest standards in curation, presentation, and customer service.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ width: "80px", height: "80px", backgroundColor: "#a65b2b", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>
                🌱
              </div>
              <h3 style={{ color: "#5a2f15", marginBottom: "15px", fontSize: "1.4rem" }}>Sustainability</h3>
              <p style={{ color: "#6b625d", lineHeight: "1.6" }}>
                Supporting sustainable practices and fair compensation for artists and craftspeople.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ width: "80px", height: "80px", backgroundColor: "#a65b2b", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>
                🌍
              </div>
              <h3 style={{ color: "#5a2f15", marginBottom: "15px", fontSize: "1.4rem" }}>Cultural Bridge</h3>
              <p style={{ color: "#6b625d", lineHeight: "1.6" }}>
                Connecting Ethiopian heritage with the global art community through education and appreciation.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ width: "80px", height: "80px", backgroundColor: "#a65b2b", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>
                💎
              </div>
              <h3 style={{ color: "#5a2f15", marginBottom: "15px", fontSize: "1.4rem" }}>Quality</h3>
              <p style={{ color: "#6b625d", lineHeight: "1.6" }}>
                Curating only the finest examples of Ethiopian craftsmanship and artistic expression.
              </p>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
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
        
        :root.dark main {
          background: #3d2914 !important;
        }
        
        :root.dark body {
          background: #3d2914 !important;
        }
        
        :root.dark h1, :root.dark h2, :root.dark h3, :root.dark p {
          color: white !important;
        }
        
        :root.dark section > div {
          background: #4a3319 !important;
        }
        
        :root.dark .mission-card {
          background: #4a3319 !important;
        }
        
        :root.dark .mission-card h3 {
          color: #f4e4bc !important;
        }
        
        :root.dark .mission-card p {
          color: #e8d5b7 !important;
        }
      `}</style>
    </>
  );
}