"use client";

import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Sparkles,
  ShieldCheck,
  Navigation,
  Search,
  Star,
  Zap,
  CheckCircle2,
} from "lucide-react";
import Footer from "@/components/Landing Page/Footer";
import Header from "@/components/Landing Page/Header";
import HeroSection from "@/components/Landing Page/HeroSection";
import CTA from "@/components/Landing Page/CTA";
import HowItWorks from "@/components/Landing Page/HowItWorks";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-gray-900">

      <Header />
      <HeroSection />
      <HowItWorks />
      <CTA />
      <Footer />
      
    </main>
  );
}