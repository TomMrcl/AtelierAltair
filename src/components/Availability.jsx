import React from "react";
import { Instagram } from "lucide-react";

// ---------- Component ----------
export default function BookingSection({
  instagramUrl = "https://instagram.com",
  onContactScrollId = "contact",
}) {

  return (
    <section id="booking" className="bg-[#F4F8F5] border-t border-[#D7E2D7]">
      <div className="mx-auto max-w-5xl px-4 py-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide text-[#2F5640] font-[400]">
            Disponibilités
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#5a6e5a]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Consultez mes disponibilités et contactez-moi pour réserver votre session
          </p>
        </div>

        {/* CTA + Infos */}
        <div className="mt-12 space-y-6">
          <div className="rounded-2xl border border-[#c5d4c7] bg-white px-8 py-8 text-center">
            <p className="text-sm md:text-base text-[#3a4e3a]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Pour réserver, contactez-moi directement via Instagram ou par message
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#4C7A5A] px-6 h-12 text-sm font-light tracking-wide text-white transition hover:bg-[#2F5640]"
              >
                <Instagram size={18} />
                Me contacter sur Instagram
              </a>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById(onContactScrollId);
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-xl h-12 px-6 text-sm font-light tracking-wide transition border-2"
                style={{ borderColor: "#4C7A5A", color: "#2F5640" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#4C7A5A";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#2F5640";
                }}
              >
                Formulaire de contact
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="rounded-2xl border border-[#c5d4c7] bg-white px-6 py-6">
              <h4 className="font-serif mb-3 font-light tracking-wide text-[#2F5640]">
                Consultation gratuite
              </h4>
              <p className="text-sm leading-relaxed text-[#5a6e5a]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Chaque projet commence par une consultation pour discuter de vos idées et définir ensemble votre tatouage.
              </p>
            </div>

            <div className="rounded-2xl border border-[#c5d4c7] bg-white px-6 py-6">
              <h4 className="font-serif mb-3 font-light tracking-wide text-[#2F5640]">
                Acompte requis
              </h4>
              <p className="text-sm leading-relaxed text-[#5a6e5a]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Un acompte de 30% est demandé pour confirmer votre rendez-vous. Celui-ci est non remboursable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
