import React, { useEffect, useMemo, useState } from "react";

const ARTWORKS = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1596952895609-43ad513b46c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Tableau abstrait",
    description: "Peinture acrylique sur toile",
    medium: "Acrylique",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1734548775981-a1add95a5a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Illustration aquarelle",
    description: "Aquarelle délicate",
    medium: "Aquarelle",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1689478817953-ae664a714cc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Sculpture moderne",
    description: "Création tridimensionnelle",
    medium: "Sculpture",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1758521232750-909a8b065963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Dessin artistique",
    description: "Crayon et encre",
    medium: "Dessin",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1740508905751-0e6573f7216c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Mixed media",
    description: "Techniques mixtes",
    medium: "Mixte",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1646936190308-6faef1ac893c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Décoration murale",
    description: "Art moderne décoratif",
    medium: "Décoration",
  },
];

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="#2F5640"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}

export default function CreationsSection({ artworks = ARTWORKS }) {
  const [active, setActive] = useState(null);
  useLockBodyScroll(Boolean(active));

  // ESC pour fermer
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const activeData = useMemo(
    () => (active ? artworks.find((a) => a.id === active) : null),
    [active, artworks]
  );

  return (
    <section id="creations" className="bg-[#F4F8F5] border-t border-[#D7E2D7]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide text-[#2F5640] font-[400]">
            Créations
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-[#5a6e5a]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Découvrez mes œuvres artistiques, réalisées en parallèle de mon travail de tatoueuse
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {artworks.map((art) => (
              <button
                key={art.id}
                type="button"
                onClick={() => setActive(art.id)}
                className="group w-full overflow-hidden rounded-xl border border-[#c5d4c7] bg-white text-left"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-transparent transition-all duration-300 group-hover:bg-[#4C7A5A]/50">
                    <div className="px-5 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <h3 className="font-serif text-lg font-light tracking-wide text-white">
                        {art.title}
                      </h3>
                      <p className="mt-2 text-sm font-light text-white/90">
                        {art.description}
                      </p>
                      <div className="mt-3 inline-flex rounded-full bg-white/20 px-4 py-1 text-xs font-light text-white">
                        {art.medium}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={activeData.title}
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            onClick={() => setActive(null)}
            aria-label="Fermer"
          />

          {/* Panel */}
          <div className="relative z-10 w-[min(980px,92vw)] overflow-hidden rounded-2xl border border-[#c5d4c7] bg-[#F4F8F5]">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 hover:bg-white transition"
              aria-label="Fermer la fenêtre"
            >
              <CloseIcon />
            </button>

            {/* Image */}
            <div className="bg-white">
              <img
                src={activeData.image}
                alt={activeData.title}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>

            {/* Infos */}
            <div className="px-6 py-6">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-serif text-xl font-light tracking-wide text-[#2F5640]">
                    {activeData.title}
                  </h3>
                  <p className="mt-2 text-sm font-light text-[#5a6e5a]">
                    {activeData.description}
                  </p>
                </div>

                <div className="shrink-0 rounded-full bg-[#DCE7DD] px-4 py-2 text-sm font-light text-[#2F5640]">
                  {activeData.medium}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
