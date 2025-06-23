"use client";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow flex flex-col md:flex-row items-center justify-between px-6 py-4 rounded-b-2xl">
      <div className="flex flex-col items-center md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-4">
        <span className="text-base font-bold text-black tracking-tight">
          Fişek Profil Demir Ticaret ve Sanayi Ltd. Şti.
        </span>
        <span className="text-sm text-gray-500 md:ml-2 text-center">
          30 Yılı Aşkın Tecrübe ile Profil Demirde Güvenin Adı
        </span>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop navigation */}
      <nav className="hidden md:flex space-x-6">
        <a
          href="#subelerimiz"
          className="border border-red-500 p-2 rounded-3xl text-gray-700 hover:bg-red-500 hover:text-white"
        >
          Şubelerimiz
        </a>
        <a
          href="#hakkimizda"
          className="border border-red-500 p-2 rounded-3xl text-gray-700 hover:bg-red-500 hover:text-white"
        >
          Hakkımızda
        </a>
        <a
          href="#iletisim"
          className="border border-red-500 p-2 rounded-3xl text-gray-700 hover:bg-red-500 hover:text-white"
        >
          İletişim
        </a>
      </nav>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <nav className="md:hidden w-full mt-4 space-y-2">
          <a
            href="#subelerimiz"
            className="block border border-red-500 p-2 rounded-3xl text-gray-700 hover:bg-red-500 hover:text-white text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Şubelerimiz
          </a>
          <a
            href="#hakkimizda"
            className="block border border-red-500 p-2 rounded-3xl text-gray-700 hover:bg-red-500 hover:text-white text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Hakkımızda
          </a>
          <a
            href="#iletisim"
            className="block border border-red-500 p-2 rounded-3xl text-gray-700 hover:bg-red-500 hover:text-white text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            İletişim
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
