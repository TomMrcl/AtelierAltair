import React, { useMemo, useState } from "react";

// Helpers date
const pad2 = (n) => String(n).padStart(2, "0");
const toKey = (y, m, d) => `${y}-${pad2(m + 1)}-${pad2(d)}`; // m: 0-11
const monthsFR = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
const weekdays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"]; // comme sur ton screen

function getMonthMatrix(year, month) {
  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay(); // 0=Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // On génère 6 semaines * 7 jours (style calendrier classique)
  const cells = [];
  let day = 1 - startWeekday;

  for (let i = 0; i < 42; i++) {
    const date = new Date(year, month, day);
    const inMonth = date.getMonth() === month;
    cells.push({
      y: date.getFullYear(),
      m: date.getMonth(),
      d: date.getDate(),
      inMonth,
    });
    day++;
  }
  return { cells, daysInMonth };
}

export default function AvailabilitySection({
  instagramUrl = "#",
  onContactClick,
}) {
  // Mois affiché (par défaut: mois actuel)
  const now = new Date();
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());
  const [selectedKey, setSelectedKey] = useState(null);

  /**
   * Dispos: mets ici tes dates dispo.
   * Tu peux les charger d'un JSON plus tard.
   * Format: "YYYY-MM-DD"
   */
  const availableDates = useMemo(
    () =>
      new Set([
        // exemple
        `${viewYear}-${pad2(viewMonth + 1)}-17`,
        `${viewYear}-${pad2(viewMonth + 1)}-18`,
        `${viewYear}-${pad2(viewMonth + 1)}-19`,
        `${viewYear}-${pad2(viewMonth + 1)}-20`,
        `${viewYear}-${pad2(viewMonth + 1)}-22`,
        `${viewYear}-${pad2(viewMonth + 1)}-23`,
        `${viewYear}-${pad2(viewMonth + 1)}-24`,
        `${viewYear}-${pad2(viewMonth + 1)}-25`,
        `${viewYear}-${pad2(viewMonth + 1)}-26`,
        `${viewYear}-${pad2(viewMonth + 1)}-27`,
        `${viewYear}-${pad2(viewMonth + 1)}-29`,
        `${viewYear}-${pad2(viewMonth + 1)}-30`,
        `${viewYear}-${pad2(viewMonth + 1)}-31`,
      ]),
    [viewYear, viewMonth]
  );

  const { cells } = useMemo(
    () => getMonthMatrix(viewYear, viewMonth),
    [viewYear, viewMonth]
  );

  const goPrev = () => {
    const d = new Date(viewYear, viewMonth - 1, 1);
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
    setSelectedKey(null);
  };

  const goNext = () => {
    const d = new Date(viewYear, viewMonth + 1, 1);
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
    setSelectedKey(null);
  };

  const isAvailable = (key) => availableDates.has(key);

  return (
    <section className="bg-[#F5F7F5] border-t border-[#D7E2D7]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-serif text-5xl tracking-wide text-[#2F3A2F]">
            Disponibilités
          </h2>
          <p className="mt-3 text-sm text-[#5A665A]">
            Consultez mes disponibilités et contactez-moi pour réserver votre
            session
          </p>
        </div>

        {/* Calendar Card */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-3xl rounded-2xl bg-white shadow-sm border border-black/5 px-10 py-10">
            <div className="text-center">
              <p className="font-serif text-sm text-[#2F3A2F]">
                Calendrier des disponibilités
              </p>
              <p className="mt-1 text-xs text-[#6E7A6E]">
                Les dates en vert sont disponibles pour une consultation
              </p>
            </div>

            {/* Month nav */}
            <div className="mt-8 flex items-center justify-center gap-6 text-[#2F3A2F]">
              <button
                onClick={goPrev}
                className="h-9 w-9 rounded-full border border-black/10 hover:bg-black/5 transition"
                aria-label="Mois précédent"
              >
                ‹
              </button>

              <div className="min-w-[180px] text-center text-sm tracking-wide text-[#2F3A2F]">
                {monthsFR[viewMonth]} {viewYear}
              </div>

              <button
                onClick={goNext}
                className="h-9 w-9 rounded-full border border-black/10 hover:bg-black/5 transition"
                aria-label="Mois suivant"
              >
                ›
              </button>
            </div>

            {/* Weekdays */}
            <div className="mt-6 grid grid-cols-7 gap-4 px-2 text-[10px] text-[#9AA39A]">
              {weekdays.map((d) => (
                <div key={d} className="text-center tracking-widest">
                  {d}
                </div>
              ))}
            </div>

            {/* Days grid */}
            <div className="mt-3 grid grid-cols-7 gap-4 px-2">
              {cells.map((c, idx) => {
                const key = toKey(c.y, c.m, c.d);
                const available = c.inMonth && isAvailable(key);
                const selected = selectedKey === key;

                const base =
                  "h-12 w-12 rounded-xl flex items-center justify-center text-sm transition select-none";
                const outMonth = !c.inMonth ? "opacity-30" : "opacity-100";

                // Styles like screen: grey for disabled, green outline for available, green filled for selected
                const style = !c.inMonth
                  ? "border border-black/5 text-[#8A958A] bg-white"
                  : selected
                  ? "bg-[#2F5B3B] text-white border border-[#2F5B3B]"
                  : available
                  ? "bg-white text-[#2F3A2F] border border-[#6E8F76] hover:bg-[#EAF2EB]"
                  : "bg-white text-[#9AA39A] border border-black/5";

                const canClick = c.inMonth && available;

                return (
                  <button
                    key={`${key}-${idx}`}
                    type="button"
                    disabled={!canClick}
                    onClick={() => setSelectedKey(key)}
                    className={`${base} ${style} ${outMonth} ${
                      !canClick ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    aria-label={key}
                  >
                    {c.d}
                  </button>
                );
              })}
            </div>

            {/* Divider */}
            <div className="mt-8 h-px w-full bg-[#E6ECE6]" />

            {/* Legend */}
            <div className="mt-5 flex items-center justify-center gap-6 text-xs text-[#6E7A6E]">
              <LegendDot
                label="Disponible"
                className="bg-[#EAF2EB] border border-[#6E8F76]"
              />
              <LegendDot
                label="Indisponible"
                className="bg-[#E6E6E6] border border-black/10"
              />
              <LegendDot
                label="Sélectionné"
                className="bg-[#2F5B3B] border border-[#2F5B3B]"
              />
            </div>
          </div>
        </div>

        {/* CTA box */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-4xl rounded-2xl border border-[#AFC3AF] bg-[#F5F7F5] px-6 py-7">
            <p className="text-center text-sm text-[#2F3A2F]">
              Pour réserver, contactez-moi directement via Instagram ou par
              message
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2F5B3B] px-5 py-3 text-sm text-white hover:opacity-90 transition"
              >
                {/* icône simple */}
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/15">
                  ☐
                </span>
                Me contacter sur Instagram
              </a>

              <button
                type="button"
                onClick={onContactClick}
                className="rounded-xl border border-[#2F5B3B] bg-white px-6 py-3 text-sm text-[#2F5B3B] hover:bg-[#EAF2EB] transition"
              >
                Formulaire de contact
              </button>
            </div>
          </div>
        </div>

        {/* Info cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <InfoCard
            title="Consultation gratuite"
            text="Chaque projet commence par une consultation pour discuter de vos idées et définir ensemble votre tatouage."
          />
          <InfoCard
            title="Acompte requis"
            text="Un acompte de 30% est demandé pour confirmer votre rendez-vous. Celui-ci est non remboursable."
          />
        </div>
      </div>
    </section>
  );
}

function LegendDot({ label, className }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-3 w-3 rounded-sm ${className}`} />
      <span>{label}</span>
    </div>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-[#AFC3AF] bg-white px-6 py-6">
      <h3 className="font-serif text-sm text-[#2F3A2F]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#6E7A6E]">{text}</p>
    </div>
  );
}