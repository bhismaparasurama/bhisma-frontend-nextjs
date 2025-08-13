'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Information from "./components/Information";
import Footer from "./components/Footer";
import BlogPage from "./components/Blog";
import { CardHoverEffectDemo } from "./lib/CardHoverEffectDemo";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Journey from "./components/Journey";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <Information />
    <CardHoverEffectDemo/>
    <Experience />
    <Journey />
    <Contact />
    <BlogPage />
    <Footer />
    </>
  );
}
