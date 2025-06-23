import React from "react";
import Image from "next/image";

const Hakkimizda = () => (
  <section
    id="hakkimizda"
    className="py-12 bg-white w-full md:w-3/4 mx-auto px-4"
  >
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-[60vh] gap-8">
      <div className="flex flex-col items-start justify-start p-4 lg:p-12 w-full lg:w-1/2">
        <div className="flex flex-row items-center lg:justify-start justify-center w-full">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-extrabold text-center lg:text-left mb-4">
            Hakkımızda
          </h2>
        </div>
        <div className="flex justify-center lg:justify-start items-center text-gray-700 w-full">
          <p className="text-center lg:text-left text-sm md:text-base lg:text-lg">
            {
              "Fişek Profil, 30 yılı aşkın tecrübesiyle İzmir'de profil demir sektöründe güvenin ve kalitenin adresidir. Kurulduğumuz günden bu yana müşteri memnuniyetini ve yenilikçi çözümleri ön planda tutarak, sektörde öncü olmayı hedefledik. Çiğli, Narlıdere, Menemen ve Koyundere'de bulunan şubelerimizle İzmir'in her noktasına hizmet veriyoruz. Uzman kadromuz ve geniş ürün yelpazemizle, her türlü profil demir ihtiyacınıza hızlı ve güvenilir çözümler sunuyoruz."
            }
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center relative w-full lg:w-1/2">
        <Image
          src="/Forklift-Profil.JPG"
          alt="Hakkimizda-Image"
          width={600}
          height={600}
          className="object-cover rounded-3xl border-2 border-black w-full max-w-md lg:max-w-none"
        />
      </div>
    </div>
  </section>
);

export default Hakkimizda;
