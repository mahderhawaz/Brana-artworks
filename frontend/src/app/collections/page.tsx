'use client';

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "../../styles/globals.css";

const categories = [
  {
    name: "Traditional Paintings",
    images: [
      "/assets/paint1.jpg",
      "/assets/paint2.jpg",
      "/assets/paint3.jpg",
      "/assets/paint4.jpg"
    ]
  },
  {
    name: "Pottery & Ceramics", 
    images: [
      "/assets/pot1.jpg",
      "/assets/pot2.jpg",
      "/assets/pot3.jpg",
      "/assets/pot4.jpg"
    ]
  },
  {
    name: "Traditional Textiles",
    images: [
      "/assets/tibeb1.jpg",
      "/assets/tibeb2.jpg",
      "/assets/tibeb3.jpg",
      "/assets/tibeb.jpg"
    ]
  },
  {
    name: "Handwoven Crafts",
    images: [
      "/assets/basketery1.jpg",
      "/assets/basketery3.jpg",
      "/assets/basketery4.jpg",
      "/assets/about us.jpg"
    ]
  }
];

export default function CollectionsPage() {
  return (
    <>
      <Head>
        <title>Our Collections — BRANA Arts</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <header style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "#fbfaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <Image src="/assets/logo.png" alt="BRANA Arts" width={60} height={60} priority className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full object-cover" />
          </div>

          <nav style={{ display: "flex", gap: 16, alignItems: "center", fontSize: 15, position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <Link href="/" style={{ color: "#a65b2b", textDecoration: "none" }}>Home</Link>
            <Link href="/collections" style={{ color: "#a65b2b", textDecoration: "none", fontWeight: "bold" }}>Our Collections</Link>
            <Link href="/#about" style={{ color: "#a65b2b", textDecoration: "none" }}>About Us</Link>
            <Link href="/#contact" style={{ color: "#a65b2b", textDecoration: "none" }}>Contact</Link>
          </nav>

          <div style={{ display: "flex", gap: "8px" }}>
            <Link href="/signup" style={{ background: "#a65b2b", color: "#fff", padding: "7px 12px", borderRadius: 8, textDecoration: "none" }}>Sign Up</Link>
            <Link href="/login" style={{ background: "#a65b2b", color: "#fff", padding: "7px 12px", borderRadius: 8, textDecoration: "none" }}>Log in</Link>
          </div>
        </div>
      </header>

      <main style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "2.5rem", color: "#a65b2b", marginBottom: "16px" }}>
            Our Collections
          </h1>
          <p style={{ color: "#6b625d", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Discover the beauty of Ethiopian art through our carefully curated collections of traditional paintings, pottery, textiles, and handwoven crafts.
          </p>
        </div>

        {categories.map((category, categoryIndex) => (
          <section key={categoryIndex} style={{ marginBottom: "60px" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.8rem", color: "#a65b2b", marginBottom: "24px", textAlign: "center" }}>
              {category.name}
            </h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
              {category.images.map((image, imageIndex) => (
                <div key={imageIndex} style={{ 
                  backgroundColor: "white", 
                  borderRadius: "12px", 
                  overflow: "hidden", 
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                }}>
                  <div style={{ position: "relative", width: "100%", height: "200px" }}>
                    <Image
                      src={image}
                      alt={`${category.name} ${imageIndex + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "16px" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#5a2f15", marginBottom: "8px" }}>
                      {category.name} #{imageIndex + 1}
                    </h3>
                    <p style={{ color: "#6b625d", fontSize: "0.9rem" }}>
                      Authentic Ethiopian {category.name.toLowerCase()} crafted by local artisans.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}