import React from "react";
import Image from "next/image";

const Hakkimizda = () => (
  <section id="hakkimizda" className="py-12 bg-white">
    <div className="flex flex-col items-center justify-center px-12">
      <div className="flex flex-row items-center justify-center h-full p-12">
        <h2 className="text-3xl text-black underline font-bold text-center mb-8">
          Hakkımızda
        </h2>
      </div>
      <div className="flex flex-row items-center justify-center h-full p-12">
        <div className="text-left text-gray-700 p-12 ">
          <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl">
            {
              "Fişek Profil, 30 yılı aşkın tecrübesiyle İzmir'de profil demir sektöründe güvenin ve kalitenin adresidir. Kurulduğumuz günden bu yana müşteri memnuniyetini ve yenilikçi çözümleri ön planda tutarak, sektörde öncü olmayı başardık. Çiğli, Narlıdere, Menemen ve Koyundere'de bulunan şubelerimizle İzmir'in her noktasına hizmet veriyoruz. Uzman kadromuz ve geniş ürün yelpazemizle, her türlü profil demir ihtiyacınıza hızlı ve güvenilir çözümler sunuyoruz."
            }
          </p>
        </div>
        <div className="flex items-center justify-center relative w-1/2">
          <Image
            src="/Forklift-Profil.JPG"
            alt="Hakkimizda-Image"
            width={500}
            height={500}
            className="object-cover rounded-3xl border-2 border-black"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hakkimizda;
