"use client";
import Header from "../views/Header";
import Hero from "../views/Hero";
import Subelerimiz from "../views/Subelerimiz";
import Hakkimizda from "../views/Hakkimizda";
import Contact from "../views/Contact";
import Footer from "../views/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Subelerimiz />
      <Hakkimizda />
      <Contact />
      <Footer />
    </div>
  );
}
