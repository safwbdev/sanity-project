import React from "react";
const imgUrl =
  "https://images.pexels.com/photos/2256259/pexels-photo-2256259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

export default function Home() {
  return (
    <main>
      <img
        src={imgUrl}
        alt="image"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Bonjour. Je m'apelle Steve.
        </h1>
      </section>
    </main>
  );
}
