import React from "react";
import Image from "next/image";

const Hero = () => (
  <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center">
    <div className="absolute inset-0 ">
      <Image
        src="/Hero.JPG"
        alt="Hero"
        fill
        className="object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div className="relative z-10 text-center text-black  p-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white ">
        Fişek Profil
      </h1>
      <p className="mb-2 text-lg font-medium text-white">
        30 Yılı Aşkın Tecrübe ile Profil Demirde Güvenin Adı
      </p>
      <p className="mb-8 text-base text-white">
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
