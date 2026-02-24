import React from "react";
import { Instagram } from "lucide-react";
import siteContent from "../content/siteContent";

export default function ContactSection() {
  const instagramUrl = siteContent.availability?.instagramUrl || siteContent.footer?.socials?.instagram;
  const instagramHandle = siteContent.contact?.info?.instagramHandle || "@atelieraltair";

  return (
    <section id="contact" className="bg-[#F4F8F5] border-t border-[#D7E2D7]">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide text-[#2F5640] font-[400]">
            Discutons de votre projet
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#5a6e5a]" style={{ fontFamily: "'Inter', sans-serif" }}>
            {siteContent.contact?.subtitle || "Parlons de votre projet de tatouage"}
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-10">
          <div className="rounded-2xl border border-[#c5d4c7] bg-white px-8 py-12 text-center shadow-sm max-w-xl w-full">
            <p className="text-lg md:text-xl text-[#3a4e3a] font-serif mb-6">
              Pour toute demande, contactez-moi directement sur Instagram&nbsp;:
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#4C7A5A] px-8 h-14 text-base font-light tracking-wide text-white transition hover:bg-[#2F5640] shadow-md"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Instagram size={22} />
              <span className="px-6 font-medium">{instagramHandle}</span>
            </a>
            <div className="mt-8 text-sm text-[#5a6e5a] font-light">
              <span>Réponse rapide, échanges personnalisés et réservation en direct&nbsp;!</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {siteContent.availability?.cards?.map((c) => (
              <div key={c.title} className="rounded-2xl border border-[#c5d4c7] bg-white px-6 py-6">
                <h4 className="font-serif mb-3 font-light tracking-wide text-[#2F5640]">
                  {c.title}
                </h4>
                <p className="text-sm leading-relaxed text-[#5a6e5a]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}