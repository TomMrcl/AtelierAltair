import React from "react";

export default function HeroSection() {
  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611324980068-0f4b88c92550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
          alt="Tattoo art background"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(47, 86, 64, 0.55)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="font-serif text-white font-[400] tracking-wider text-4xl md:text-6xl lg:text-8xl">
          ATELIER ALTAÏR
        </h1>

        <p className="mt-6 text-white/90 tracking-wide text-sm sm:text-base md:text-xl max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
          Artiste tatoueur • Créations uniques • Art corporel d&apos;exception
        </p>

        <p className="mt-8 font-serif italic font-light text-white/80 text-sm md:text-base max-w-xl mx-auto">
          &quot;Chaque tatouage raconte une histoire, laissez-moi donner vie à la vôtre&quot;
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            type="button"
            onClick={() => scrollToSection("#gallery")}
            className="h-12 px-8 rounded-xl text-sm md:text-base font-light tracking-wide text-white transition"
            style={{ backgroundColor: "#4C7A5A" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2F5640")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4C7A5A")}
          >
            Voir mes créations
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("#booking")}
            className="h-12 px-8 rounded-xl text-sm md:text-base font-light tracking-wide transition border-2"
            style={{ backgroundColor: "transparent", color: "white", borderColor: "white" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#2F5640";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "white";
            }}
          >
            Prendre rendez-vous
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div
            className="mx-auto mb-2 h-12 w-px"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          />
          <div
            className="mx-auto h-2 w-2 rounded-full"
            style={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
          />
        </div>
      </div>
    </section>
  );
}