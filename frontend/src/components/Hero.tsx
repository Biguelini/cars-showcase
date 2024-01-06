"use client";

import Image from "next/image";

import { CustomButton } from "@src/components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Aluguel de veículos rápido e fácil
        </h1>

        <p className="hero__subtitle">
          Descomplicamos sua experiência de aluguel de carros com nosso processo de reserva fácil e eficiente.
        </p>

        <CustomButton
          title="Encontrar veículos"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;