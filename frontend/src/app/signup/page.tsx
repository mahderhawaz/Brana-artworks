import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SignupForm from "../../components/SignupForm";
import "../../styles/globals.css";

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Create an account — BRANA Arts</title>
        <meta name="description" content="Sign up to BRANA Arts — join our community of artists and collectors." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Top nav (simple inline header like the screenshot) */}
      <header style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "#fbfaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <Image src="/assets/logo.png" alt="BRANA Arts" width={60} height={60} priority className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full object-cover" />
          </div>

          <nav style={{ display: "flex", gap: 20, alignItems: "center", fontSize: 15, position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <Link href="/#hero" style={{ color: "#a65b2b", textDecoration: "none" }}>Home</Link>
            <Link href="/#collection" style={{ color: "#a65b2b", textDecoration: "none" }}>Our Collections</Link>
            <Link href="/#about" style={{ color: "#a65b2b", textDecoration: "none" }}>About Us</Link>
            <Link href="/#contact" style={{ color: "#a65b2b", textDecoration: "none" }}>Contact</Link>
          </nav>

          <div>
            <Link href="/login" style={{ background: "#a65b2b", color: "#fff", padding: "8px 12px", borderRadius: 8, textDecoration: "none" }}>Login</Link>
          </div>
        </div>
      </header>

      <main>
        <SignupForm />
      </main>
    </>
  );
}