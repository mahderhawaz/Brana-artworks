'use client';

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ForgotPasswordForm from "../../components/ForgotPasswordForm";
import ThemeToggle from "../../components/ThemeToggle";
import "../../styles/globals.css";

export default function ForgotPasswordPage() {
  return (
    <>
      <Head>
        <title>Forgot Password — BRANA Arts</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <header style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "#fbfaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Image src="/assets/logo.png" alt="BRANA Arts" width={60} height={60} priority className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full object-cover" />
          </div>

          <nav className="nav-links" style={{ display: "flex", gap: 16, alignItems: "center", fontSize: 15, position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <Link href="/#hero" className="nav-link">Home</Link>
            <Link href="/#collection" className="nav-link">Our Collections</Link>
            <Link href="/#about" className="nav-link">About Us</Link>
            <Link href="/#contact" className="nav-link">Contact</Link>
          </nav>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <ThemeToggle />
            <Link href="/login" className="auth-btn">Log in</Link>
          </div>
        </div>
      </header>

      <main>
        <ForgotPasswordForm />
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
        
        :root.dark label {
          color: #f4e4bc !important;
        }
        
        :root.dark input, :root.dark select, :root.dark textarea {
          background: #4a3319 !important;
          border-color: #6b4e2a !important;
          color: white !important;
        }
        
        :root.dark button {
          background: #a65b2b !important;
          color: white !important;
        }
        
        :root.dark div, :root.dark section {
          background: #3d2914 !important;
        }
        
        :root.dark form {
          background: #4a3319 !important;
        }
        
        :root.dark a {
          color: #d4b896 !important;
        }
      `}</style>
    </>
  );
}