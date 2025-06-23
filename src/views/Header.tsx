import React from "react";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow flex flex-col md:flex-row items-center justify-between px-6 py-4 rounded-b-2xl">
    <div className="flex flex-col items-center md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-4">
      <span className="text-2xl font-bold tracking-tight">Fişek Profil</span>
      <span className="text-sm text-gray-500 md:ml-2">
        30 Yılı Aşkın Tecrübe ile Profil Demirde Güvenin Adı
      </span>
    </div>
    <nav className="flex space-x-6 mt-2 md:mt-0">
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
  </header>
);

export default Header;
