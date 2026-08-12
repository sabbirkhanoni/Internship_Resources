import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="h-18 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <img
                src="/logonew.png"
                alt="Local Lens AI"
                className="w-7 h-7 object-contain"
              />

            <span className="text-xl font-bold tracking-tight">
              Lost & Found
              <span className="text-blue-600"> AI</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition">
              Features
            </a>

            <a href="#how-it-works" className="hover:text-gray-900 transition">
              How It Works
            </a>

            <a href="#about" className="hover:text-gray-900 transition">
              About
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:block text-sm font-semibold text-gray-600 hover:text-gray-900 transition"
            >
              Sign In
            </Link>

            <Link
              href="/registration"
              className="h-10 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold flex items-center gap-2 shadow-lg shadow-blue-200 transition"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
