import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 mt-12">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
      <div className="mb-4 md:mb-0 max-w-xs">
        <span className="font-bold text-lg">Fişek Profil</span>
        <p className="text-sm mt-2 text-gray-300">
          {
            "30 yılı aşkın tecrübesiyle İzmir'de profil demir sektöründe güvenin ve kalitenin adresidir. Uzman kadromuzla her türlü profil demir ihtiyacınıza hızlı ve güvenilir çözümler sunuyoruz."
          }
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-8 items-center">
        <div className="flex flex-col space-y-2 mb-4 md:mb-0">
          <a href="#subelerimiz" className="hover:underline">
            Şubelerimiz
          </a>
          <a href="#hakkimizda" className="hover:underline">
            Hakkımızda
          </a>
          <a href="#iletisim" className="hover:underline">
            İletişim
          </a>
        </div>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400 mt-6">
      © 2024 Fişek Profil. Tüm hakları saklıdır.
    </div>
  </footer>
);

export default Footer;
