import React from "react";
import Image from "next/image";

const Hero = () => (
  <section className="relative h-[70vh] flex items-center justify-center bg-cover bg-center">
    <div className="absolute inset-0 bg-black bg-opacity-40">
      <Image src="/Borular.JPG" alt="Hero" fill className="object-cover" />
    </div>
    <div className="relative z-10 text-center text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Fişek Profil</h1>
      <p className="mb-6 text-lg font-medium">
        30 Yılı Aşkın Tecrübe ile Profil Demirde Güvenin Adı
      </p>
      <p className="mb-8 text-base">
        Profil demir sektöründe yenilikçi ve güvenilir çözümler sunuyoruz.
      </p>
      <a
        href="#subelerimiz"
        className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100"
      >
        Şubelerimizi Gör
      </a>
    </div>
  </section>
);

export default Hero;
