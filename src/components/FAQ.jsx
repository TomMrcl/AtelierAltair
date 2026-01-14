import React, { useMemo, useState } from "react";

const PRICING = [
  { category: "Petit tatouage", description: "5-10cm, simple", price: "80-150€", duration: "1-2h" },
  { category: "Tatouage moyen", description: "10-20cm, détaillé", price: "150-300€", duration: "2-4h" },
  { category: "Grand tatouage", description: "+20cm, complexe", price: "300€+", duration: "4h+" },
  { category: "Tarif horaire", description: "Pour projets sur mesure", price: "80€/h", duration: "Variable" },
];

const FAQ = [
  {
    q: "Comment prendre rendez-vous ?",
    a: "Vous pouvez prendre rendez-vous via le calendrier ci-dessus ou en utilisant le formulaire de contact. Une consultation préalable est recommandée pour les projets importants.",
  },
  {
    q: "Quel est le processus de création ?",
    a: "Après notre première consultation, je crée un design personnalisé basé sur vos idées. Nous affinons ensemble le projet jusqu'à validation, puis nous planifions la session.",
  },
  {
    q: "Comment se déroule la séance ?",
    a: "Chaque séance commence par la préparation de la zone et l'application du transfert. Je vous explique chaque étape et m'assure de votre confort tout au long du processus.",
  },
  {
    q: "Quels sont les soins post-tatouage ?",
    a: "Je vous fournis une fiche de soins détaillée et les recommandations pour la cicatrisation (nettoyage doux, crème, éviter soleil/piscine).",
  },
  {
    q: "Puis-je apporter mes propres références ?",
    a: "Absolument ! Apporter des références visuelles aide à mieux comprendre votre vision et à créer un tatouage qui vous ressemble.",
  },
  {
    q: "Faites-vous des retouches ?",
    a: "Oui, les retouches peuvent être proposées selon le projet. Les conditions exactes sont précisées au moment de la réservation.",
  },
  {
    q: "Acceptez-vous les mineurs ?",
    a: "Je tatoue les mineurs de 16-18 ans uniquement avec autorisation parentale écrite et présence d'un parent lors de la séance.",
  },
  {
    q: "Quels sont vos styles de prédilection ?",
    a: "Réalisme noir & gris, créations géométriques, compositions florales et old school. Chaque style est adapté à votre projet.",
  },
];

function Chevron({ open }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="#2F5640"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PricingCard({ item }) {
  return (
    <div className="rounded-2xl border border-[#c5d4c7] bg-white">
      <div className="px-7 py-5">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="text-[15px] font-light tracking-wide text-[#2F5640]">
              {item.category}
            </div>
            <div className="mt-1 text-sm font-light text-[#5a6e5a]">
              {item.description}
            </div>
          </div>

          <div className="text-right">
            <div className="font-serif text-[16px] font-[400] text-[#4C7A5A]">
              {item.price}
            </div>
            <div className="mt-1 text-sm font-light text-[#5a6e5a]">
              {item.duration}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ q, a, isOpen, onToggle }) {
  const contentId = useMemo(
    () => `faq-${q.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "")}`,
    [q]
  );

  return (
    <div className="rounded-2xl border border-[#c5d4c7] bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="font-serif text-[13px] md:text-sm font-[400] text-[#2F5640]">
          {q}
        </span>
        <span className="opacity-70">
          <Chevron open={isOpen} />
        </span>
      </button>

      <div
        id={contentId}
        className={`grid overflow-hidden px-6 transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr] pb-0"
        }`}
      >
        <div className="min-h-0">
          <p className="text-sm font-light leading-relaxed text-[#5a6e5a]">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="pricing" className="border-t border-[#D7E2D7] bg-[#E5EFE8]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide text-[#2F5640] font-[400]">
            Tarifs & FAQ
          </h2>
          <p className="mt-4 text-sm md:text-base font-light text-[#5a6e5a]">
            Informations sur les tarifs et réponses aux questions fréquentes
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Pricing */}
          <div>
            <h3 className="font-serif text-2xl tracking-wide text-[#2F5640] font-[400]">
              Grille tarifaire
            </h3>

            <div className="mt-6 space-y-5">
              {PRICING.map((item) => (
                <PricingCard key={item.category} item={item} />
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#c5d4c7] bg-white px-7 py-6">
              <p className="text-sm font-light leading-relaxed text-[#3a4e3a]">
                <span className="font-medium text-[#2F5640]">Note importante :</span>{" "}
                Les tarifs sont indicatifs et peuvent varier selon la complexité du projet.
                Un acompte de 30% est demandé à la réservation. Les retouches incluses
                dans les 3 mois suivant la réalisation.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="font-serif text-2xl tracking-wide text-[#2F5640] font-[400]">
              Questions fréquentes
            </h3>

            <div className="mt-6 space-y-4">
              {FAQ.map((item, idx) => (
                <FAQItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Fiches de renseignements */}
        <div className="mt-14">
          <h3 className="text-center font-serif text-2xl tracking-wide text-[#2F5640] font-[400] mb-6">
            Fiches de renseignements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-[#c5d4c7] bg-white overflow-hidden">
              <img
                src="/fiches-renseignement1.jpg"
                alt="Fiche de renseignements 1"
                className="w-full h-62 object-cover"
              />
            </div>
            <div className="rounded-2xl border border-[#c5d4c7] bg-white overflow-hidden">
              <img
                src="/fiches-renseignement2.jpg"
                alt="Fiche de renseignements 2"
                className="w-full h-62 object-cover"
              />
            </div>
            <div className="rounded-2xl border border-[#c5d4c7] bg-white overflow-hidden">
              <img
                src="/fiches-renseignement3.jpg"
                alt="Fiche de renseignements 3"
                className="w-full h-62 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
