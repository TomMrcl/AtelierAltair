import { useEffect, useState } from "react";

const nav = [
  { label: "Accueil", href: "#home" },
  { label: "Galerie", href: "#gallery" },
  { label: "Artiste", href: "#artist" },
  { label: "Calendrier", href: "#booking" },
  { label: "Tarifs & FAQ", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled ? "backdrop-blur-sm bg-[#E5EFE8]/80 border-b border-[#c5d4c7]" : "bg-[#E5EFE8]/90",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-6 h-[64px] flex items-center justify-between">
        <a
          href="#home"
          className="tracking-wide"
          style={{ fontFamily: "Cormorant, serif", letterSpacing: ".06em" }}
        >
          <span className="text-[22px] text-[#2F5640]">ATELIER ALTAÏR</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14.5px] text-[#274735]/90 hover:text-[#274735] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
