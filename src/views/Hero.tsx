import React from "react";
import Image from "next/image";

const Hero = () => (
  <section className="relative h-[40vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center">
    <div className="absolute inset-0 ">
      <Image
        src="/Hero.JPG"
        alt="Hero"
        fill
        className="object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div className="relative text-center text-black pt-24 md:pt-0 p-6">
      <h1 className="text-5xl md:text-8xl font-bold mb-8 text-white md:p-8">
        Fişek Profil
      </h1>
      <p className="mb-4 text-base md:text-xl font-medium text-white">
        30 Yılı Aşkın Tecrübe ile Profil Demirde Güvenin Adı
      </p>
      <p className="mb-8 text-[10px] md:text-sm text-white px-12">
        Profil demir sektöründe yenilikçi ve güvenilir çözümler sunuyoruz.
      </p>
    </div>
  </section>
);

export default Hero;
