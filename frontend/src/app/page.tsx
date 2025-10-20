import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Collection from "../components/Collection";
import Mission from "../components/Mission";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Collection />
      <About />
      <Mission />
      <Testimonials />
      <FAQ />
    </>
  );
}