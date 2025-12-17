export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center">
      {/* Background image */}
      <img
        src="/hero.jpg"
        alt="Tattoo background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Teinte verte sombre + léger blur pour matcher la maquette */}
      <div className="absolute inset-0 bg-[#113222]/85 backdrop-blur-[1px]" />

      {/* Contenu */}
      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <div className="flex flex-col items-center text-center mt-24">
          {/* Titre géant serif */}
          <h1
            className="text-white/95 leading-[1.05]"
            style={{ fontFamily: "Cormorant, serif", letterSpacing: ".06em" }}
          >
            <span className="block text-[42px] sm:text-[56px] md:text-[72px] lg:text-[92px]">
              ATELIER ALTAÏR
            </span>
          </h1>

          {/* Sous-titre à points séparateurs */}
          <p className="mt-6 text-[18px] md:text-[20px] text-white/90">
            <span className="mx-1">Artiste tatoueur</span>
            <span className="mx-2">•</span>
            <span className="mx-1">Créations uniques</span>
            <span className="mx-2">•</span>
            <span className="mx-1">Art corporel d'exception</span>
          </p>

          {/* Petite citation */}
          <p className="mt-6 text-[14px] md:text-[15px] text-white/80 italic">
            “Chaque tatouage raconte une histoire, laissez-moi donner vie à la vôtre”
          </p>

          {/* Boutons */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#gallery"
              className="rounded-lg px-5 py-3 text-white bg-[#4C7A5A] hover:bg-[#3E664A] border border-transparent transition-colors shadow-sm"
            >
              Voir mes créations
            </a>
            <a
              href="#booking"
              className="rounded-lg px-5 py-3 text-white/95 border border-white/40 hover:border-white/70 hover:bg-white/10 transition-colors"
            >
              Prendre rendez-vous
            </a>
          </div>

          {/* Indicateur scroll (petit cercle + trait comme sur ton screen) */}
          <div className="mt-20 md:mt-28 flex flex-col items-center gap-3">
            <div className="h-8 w-[1.5px] bg-white/50" />
            <div className="h-2.5 w-2.5 rounded-full border border-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
