"use client";
import React from "react";
import Image from "next/image";

const branches = [
  {
    name: "Çiğli",
    image: "/Borular.JPG",
    address: "Küçük Çiğli, 8780/23. Sk. No:7, 35620 Aosb/Çiğli/İzmir",
    map: "https://www.google.com/maps/dir//Küçük+Çiğli,+8780%2F23.+Sk.+No:7,+35620+Aosb%2FÇiğli%2Fİzmir/@38.5012012,27.04319,833m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x14bbd0908220bb87:0xbe9501185c50c64!2m2!1d27.0452012!2d38.501111?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Narlıdere",
    image: "/Borular.JPG",
    address: " Narlı, Altınvadi Cd., 35320 Narlıdere/İzmir",
    map: "https://www.google.com/maps?client=safari&rls=en&oe=UTF-8&um=1&ie=UTF-8&fb=1&gl=tr&sa=X&geocode=Ka9kDgyq2LsUMbOSU-R2n6_U&daddr=Narlı,+Altınvadi+Cd.,+35320+Narlıdere/İzmir",
  },
  {
    name: "Menemen",
    image: "/Menemen-Giris.jpg",
    address: "Sanayi Sitesi, Menemen/İzmir",
    map: "https://www.google.com/maps/dir//Mermerli,+Bülent+Ecevit+Blv.+No:65,+35660+Menemen%2Fİzmir/@38.6153295,26.9804617,27353m/data=!3m2!1e3!4b1!4m8!4m7!1m0!1m5!1m1!1s0x14bbd36e0ff3dc4d:0xcf42b641d941fdc5!2m2!1d27.0629235!2d38.6153909?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Koyundere",
    image: "/Koyundere-Giris.jpg",
    address: "Koyundere Mah., Menemen/İzmir",
    map: "https://www.google.com/maps?q=Koyundere+İzmir",
  },
];

const Subelerimiz = () => (
  <section id="subelerimiz" className="py-12 bg-gray-50">
    <h2 className="text-3xl underline text-black font-extrabold text-center mb-8">
      Şubelerimiz
    </h2>

    <div className="text-black mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
      {branches.map((branch, i) => (
        <button
          key={i}
          className="font-bold hover:scale-110 hover:cursor-pointer transition-all duration-300 bg-white rounded-lg shadow p-6 flex flex-col items-center"
          onClick={() => window.open(branch.map, "_blank")}
        >
          {""}
          <Image
            src={branch.image}
            alt="Borular"
            width={300}
            height={160}
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{branch.name}</h3>
          <div className="flex flex-col items-center text-center py-2">
            <p className="text-sm text-gray-500">{branch.address}</p>
          </div>
          <button
            className="mt-auto bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => window.open(branch.map, "_blank")}
          >
            {"Konum"}
          </button>
        </button>
      ))}
    </div>
  </section>
);

export default Subelerimiz;
