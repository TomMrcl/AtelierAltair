import React, { useEffect, useMemo, useState } from "react";

const TATTOO_WORKS = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1623792085620-1f3160a255e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    title: "Portrait réaliste",
    description: "Tatouage portrait noir et gris",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1628969454009-843d2369e964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    title: "Géométrie sacrée",
    description: "Motifs géométriques minimalistes",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1616315615552-698be1341774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    title: "Traditional",
    description: "Style old school classique",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1571855618158-f2ea615c339a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    title: "Fleurs colorées",
    description: "Tatouage floral en couleur",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1566644447159-3a93334d2b6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    title: "Mandala",
    description: "Mandala intricate noir",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1662524520209-b5af0398a8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    title: "Blackwork détaillé",
    description: "Travail à l'encre noire",
  },
];

function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = original);
  }, [locked]);
}

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

export default function GallerySection({ works = TATTOO_WORKS }) {
  const [activeId, setActiveId] = useState(null);
  useLockBodyScroll(Boolean(activeId));

  useEffect(() => {
    if (!activeId) return;
    const onKey = (e) => e.key === "Escape" && setActiveId(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeId]);

  const active = useMemo(
    () => (activeId ? works.find((w) => w.id === activeId) : null),
    [activeId, works]
  );

  return (
    <section id="gallery" className="bg-[#F4F8F5] border-t border-[#D7E2D7]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide text-[#2F5640] font-[400]">
            Galerie
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-[#5a6e5a]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Découvrez une sélection de mes créations, chaque œuvre étant unique et personnalisée
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <button
              key={work.id}
              type="button"
              onClick={() => setActiveId(work.id)}
              className="group w-full overflow-hidden rounded-xl border border-[#c5d4c7] bg-white text-left transition"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <img
                  src={work.image}
                  alt={work.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-transparent transition-all duration-300 group-hover:bg-[#2F5640]/40">
                  <div className="text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-white text-lg font-light tracking-wide">
                      {work.title}
                    </h3>
                    <p className="mt-2 text-white/90 text-sm font-light">
                      {work.description}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            onClick={() => setActiveId(null)}
            aria-label="Fermer"
          />

          {/* Panel */}
          <div className="relative z-10 w-[min(980px,92vw)] overflow-hidden rounded-2xl border border-[#c5d4c7] bg-[#F4F8F5]">
            <button
              type="button"
              onClick={() => setActiveId(null)}
              className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 hover:bg-white transition"
              aria-label="Fermer la fenêtre"
            >
              <CloseIcon />
            </button>

            <div className="bg-white">
              <img
                src={active.image}
                alt={active.title}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>

            <div className="p-6">
              <h3 className="font-serif text-xl font-light tracking-wide text-[#2F5640]">
                {active.title}
              </h3>
              <p className="mt-2 text-sm text-[#5a6e5a]" style={{ fontFamily: "'Inter', sans-serif" }}>
                {active.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
