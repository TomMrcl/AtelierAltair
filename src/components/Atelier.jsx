import React from "react";
import siteContent from "../content/siteContent";

export default function AtelierSection() {
  return (
    <section className="bg-[#E5EFE8] border-t border-[#D7E2D7]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl border border-[#c5d4c7]">
            <img
              src="https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&w=1400&q=80"
              alt="Atelier de tatouage privé"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* léger overlay */}
            <div className="absolute inset-0 bg-[#2F5640]/10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-[400] tracking-wide text-[#2F5640]">
                {siteContent.atelier?.heading || "L’atelier"}
              </h2>

              {siteContent.atelier?.paragraphs?.map((p, idx) => (
                <p key={idx} className="mt-6 text-sm md:text-base leading-relaxed text-[#5a6e5a] max-w-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {p}
                </p>
              ))}

            {/* Important notice */}
            <div className="mt-8 rounded-xl border border-[#c5d4c7] bg-white p-6">
              <h3 className="font-serif text-lg font-light tracking-wide text-[#2F5640] mb-2">
                {siteContent.atelier?.notice?.title || "Atelier privé – sur rendez-vous uniquement"}
              </h3>
              <p className="text-sm font-light text-[#5a6e5a] leading-relaxed">
                {siteContent.atelier?.notice?.text || "L’atelier n’est pas ouvert au public. Merci de ne pas vous présenter sans rendez-vous préalable. Toute prise de contact se fait via le formulaire ou Instagram."}
              </p>
            </div>

            {/* Optional reassurance */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-light text-[#5a6e5a]">
              {siteContent.atelier?.badges?.map((b) => (
                <div key={b} className="rounded-lg bg-white border border-[#c5d4c7] p-4 text-center">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
