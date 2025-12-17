export default function ArtistSection() {
  return (
    <section id="artist" className="bg-[#E5EFE8] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: media card */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-[0_14px_30px_rgba(0,0,0,0.10)] border border-black/5 bg-white">
              {/* Image */}
              <div className="relative aspect-[4/3]">
                <img
                  src="/artist.jpg"
                  alt="L'artiste"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Play button overlay */}
                <button
                  type="button"
                  aria-label="Lire la vidéo"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                             h-16 w-16 rounded-full bg-[#3E6A4D]/90 hover:bg-[#3E6A4D]
                             shadow-md ring-1 ring-white/20 transition"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="mx-auto h-7 w-7 translate-x-[1px] text-white"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Bottom light area like the mock */}
              <div className="h-28 bg-[#eef2ef]" />
            </div>
          </div>

          {/* Right: text */}
          <div>
            <h2
              className="text-[#2F5640] text-center lg:text-left"
              style={{ fontFamily: "Cormorant, serif", letterSpacing: ".02em" }}
            >
              <span className="block text-[52px] md:text-[64px] leading-none">
                L'Artiste
              </span>
            </h2>

            <div className="mt-8 space-y-8 text-[#274735]/90 leading-relaxed text-[16px]">
              <p>
                Passionnée par l'art corporel depuis plus de 8 ans, je
                transforme chaque idée en une œuvre d'art unique et personnelle.
                Mon approche allie technique précise et créativité artistique
                pour donner vie à vos projets les plus ambitieux.
              </p>

              <p className="text-[#274735]/80">
                Spécialisée dans le réalisme noir et gris, les créations
                géométriques et les compositions florales, j'accorde une
                importance particulière à l'écoute et à la collaboration avec
                mes clients pour créer des pièces qui leur ressemblent.
              </p>

              <p className="text-[#274735]/90">
                Chaque tatouage est une aventure créative partagée, un moment
                privilégié où l'art rencontre l'émotion. Mon studio, situé dans
                le cœur artistique de la ville, offre un environnement
                chaleureux et professionnel pour vivre cette expérience en toute
                sérénité.
              </p>
            </div>

            {/* Quote block */}
            <div className="mt-10 grid grid-cols-[14px_1fr] gap-6">
              <div className="flex justify-center">
                <div className="w-[2px] bg-[#2F5640]/70" />
              </div>

              <div className="text-[#2F5640]/80">
                <p
                  className="italic leading-relaxed"
                  style={{ fontFamily: "Cormorant, serif" }}
                >
                  "L'art du tatouage, c'est graver l'éternité sur la peau, créer
                  du permanent dans un monde éphémère."
                </p>
                <p className="mt-4 text-[14px] text-[#274735]/70">
                  — Atelier Altaïr
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-14 h-px w-full bg-[#2F5640]/15" />

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <Stat value="8+" label="ANNÉES D'EXPÉRIENCE" />
              <Stat value="500+" label="CRÉATIONS RÉALISÉES" />
              <Stat value="100%" label="SATISFACTION CLIENT" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="text-[#2F5640] text-[34px] md:text-[40px] leading-none"
        style={{ fontFamily: "Cormorant, serif" }}
      >
        {value}
      </div>
      <div className="mt-2 text-[11px] md:text-[12px] tracking-[0.18em] text-[#274735]/70">
        {label}
      </div>
    </div>
  );
}
