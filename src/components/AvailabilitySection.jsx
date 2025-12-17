import React, { useMemo, useState } from "react";
import { Instagram } from "lucide-react";

// ---------- Helpers dates ----------
const pad2 = (n) => String(n).padStart(2, "0");
const toKey = (d) =>
  `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;

const monthsFR = [
  "Janvier","Février","Mars","Avril","Mai","Juin",
  "Juillet","Août","Septembre","Octobre","Novembre","Décembre",
];

// 0=Dimanche ... 6=Samedi (on affiche comme ton screen : SU MO TU WE TH FR SA)
const weekdays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

function startOfDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function getMonthGrid(year, month) {
  const first = new Date(year, month, 1);
  const startWeekday = first.getDay(); // 0..6
  const grid = [];
  // On part du dimanche de la semaine du 1er
  const start = new Date(year, month, 1 - startWeekday);

  for (let i = 0; i < 42; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    grid.push(d);
  }
  return grid;
}

// ---------- Component ----------
export default function BookingSection({
  instagramUrl = "https://instagram.com",
  onContactScrollId = "contact",

  // Passe tes dates dispo ici (format YYYY-MM-DD)
  availableKeys = [
    // Exemple comme ton screen
    "2025-12-18","2025-12-19","2025-12-20",
    "2025-12-22","2025-12-23","2025-12-24","2025-12-25","2025-12-26","2025-12-27",
    "2025-12-29","2025-12-30","2025-12-31",
  ],
}) {
  const today = startOfDay(new Date());

  // Par défaut, tu peux choisir un mois précis (ici: mois actuel)
  const [view, setView] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selected, setSelected] = useState(null);

  const availableSet = useMemo(() => new Set(availableKeys), [availableKeys]);

  const year = view.getFullYear();
  const month = view.getMonth();

  const grid = useMemo(() => getMonthGrid(year, month), [year, month]);

  const goPrev = () => setView(new Date(year, month - 1, 1));
  const goNext = () => setView(new Date(year, month + 1, 1));

  const isDisabled = (d) => {
    // désactivé si passé ou dimanche (comme le code Figma)
    if (startOfDay(d) < today) return true;
    if (d.getDay() === 0) return true;
    // si pas dans availableKeys : on le rend "indisponible" (mais pas forcément disabled)
    // Ici on choisit: cliquable seulement si dispo.
    return false;
  };

  const isInMonth = (d) => d.getMonth() === month;

  const isAvailable = (d) => availableSet.has(toKey(d));
  const isSelected = (d) => selected && toKey(d) === toKey(selected);

  const onPick = (d) => {
    if (!isInMonth(d)) return;
    if (isDisabled(d)) return;
    if (!isAvailable(d)) return;
    setSelected(d);
  };

  return (
    <section id="booking" className="bg-[#F4F8F5] border-t border-[#D7E2D7]">
      <div className="mx-auto max-w-5xl px-4 py-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-serif text-5xl md:text-6xl tracking-wide text-[#2F5640] font-[400]">
            Disponibilités
          </h2>
          <p className="mt-4 text-sm md:text-base font-light text-[#5a6e5a]">
            Consultez mes disponibilités et contactez-moi pour réserver votre session
          </p>
        </div>

        {/* Calendar card */}
        <div className="mt-12">
          <div className="rounded-2xl bg-white shadow-lg border border-black/5">
            <div className="px-6 pt-10 text-center">
              <div className="font-serif text-sm text-[#2F5640]">
                Calendrier des disponibilités
              </div>
              <div className="mt-2 text-sm font-light text-[#5a6e5a]">
                Les dates en vert sont disponibles pour une consultation
              </div>
            </div>

            <div className="px-6 pb-10 pt-10 flex justify-center">
              <div className="w-full max-w-2xl">
                {/* Month nav */}
                <div className="relative flex items-center justify-center mb-4">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-0 inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 transition"
                    aria-label="Mois précédent"
                    style={{ color: "#4C7A5A" }}
                  >
                    ‹
                  </button>

                  <div className="text-base sm:text-lg font-light tracking-wide text-[#2F5640]">
                    {monthsFR[month]} {year}
                  </div>

                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-0 inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 transition"
                    aria-label="Mois suivant"
                    style={{ color: "#4C7A5A" }}
                  >
                    ›
                  </button>
                </div>

                {/* Weekdays */}
                <div className="flex justify-between mb-2">
                  {weekdays.map((w) => (
                    <div
                      key={w}
                      className="flex-1 text-center text-[10px] sm:text-xs font-light tracking-wider uppercase opacity-60"
                      style={{ color: "#5a6e5a" }}
                    >
                      {w}
                    </div>
                  ))}
                </div>

                {/* Days */}
                <div className="space-y-1">
                  {Array.from({ length: 6 }).map((_, rowIdx) => {
                    const row = grid.slice(rowIdx * 7, rowIdx * 7 + 7);
                    return (
                      <div key={rowIdx} className="flex justify-between">
                        {row.map((d) => {
                          const inMonth = isInMonth(d);
                          const key = toKey(d);

                          const disabled = isDisabled(d);
                          const available = inMonth && isAvailable(d);
                          const selectedDay = inMonth && isSelected(d);

                          // style proche du screen
                          let cls =
                            "mx-auto flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-lg border text-sm md:text-base font-light transition";

                          // outside month
                          if (!inMonth) cls += " opacity-30";

                          // disabled (past / sunday)
                          if (disabled) {
                            cls += " opacity-20 cursor-not-allowed border-transparent";
                          } else if (selectedDay) {
                            cls += " bg-[#4C7A5A] text-white border-transparent shadow-md";
                          } else if (available) {
                            cls += " bg-transparent text-[#3a4e3a] border-[#c5d4c7] hover:bg-black/5 hover:shadow-sm";
                          } else {
                            // in month but not available => "indisponible"
                            cls += " text-[#3a4e3a] border-[#c5d4c7] opacity-30";
                          }

                          return (
                            <div key={key} className="flex-1 flex justify-center">
                              <button
                                type="button"
                                onClick={() => onPick(d)}
                                disabled={!inMonth || disabled || !available}
                                className={cls}
                                aria-label={key}
                              >
                                {d.getDate()}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>

                {/* Legend */}
                <div
                  className="mt-8 pt-6 border-t flex flex-wrap items-center justify-center gap-6"
                  style={{ borderColor: "#E5EFE8" }}
                >
                  <Legend label="Disponible" boxClass="bg-[#E5EFE8]" />
                  <Legend label="Indisponible" boxClass="bg-[#d1d5db]" />
                  <Legend label="Sélectionné" boxClass="bg-[#4C7A5A]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA + Infos */}
        <div className="mt-12 space-y-6">
          <div className="rounded-2xl border border-[#c5d4c7] bg-white px-8 py-8 text-center">
            <p className="text-sm md:text-base font-light text-[#3a4e3a]">
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
              <p className="text-sm font-light leading-relaxed text-[#5a6e5a]">
                Chaque projet commence par une consultation pour discuter de vos idées et définir ensemble votre tatouage.
              </p>
            </div>

            <div className="rounded-2xl border border-[#c5d4c7] bg-white px-6 py-6">
              <h4 className="font-serif mb-3 font-light tracking-wide text-[#2F5640]">
                Acompte requis
              </h4>
              <p className="text-sm font-light leading-relaxed text-[#5a6e5a]">
                Un acompte de 30% est demandé pour confirmer votre rendez-vous. Celui-ci est non remboursable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Legend({ label, boxClass }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-4 h-4 rounded ${boxClass}`} />
      <span className="text-xs font-light text-[#5a6e5a]">{label}</span>
    </div>
  );
}
