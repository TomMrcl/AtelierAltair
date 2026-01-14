import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "#home" },
    { label: "Galerie", href: "#gallery" },
    { label: "Artiste", href: "#artist" },
    { label: "Disponibilités", href: "#booking" },
    { label: "Tarifs & FAQ", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // bonus: fermer le menu mobile si on repasse en desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm"
      style={{
        backgroundColor: "rgba(229, 239, 232, 0.95)",
        borderColor: "#c5d4c7",
      }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <button
            type="button"
            onClick={() => scrollToSection("#home")}
            className="font-serif text-2xl tracking-wider text-[#2F5640]"
          >
            ATELIER ALTAÏR
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 ">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="font-light tracking-wide text-[#2F5640] transition-colors duration-200 hover:text-[#4C7A5A]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-[#2F5640] transition-colors hover:text-[#4C7A5A] hover:bg-black/5"
            aria-label="Ouvrir le menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t" style={{ borderColor: "#c5d4c7" }}>
            <nav className="py-3" style={{ backgroundColor: "#F4F8F5" }}>
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full px-4 py-3 text-left text-sm font-light tracking-wide text-[#2F5640] transition-colors hover:text-[#4C7A5A]"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#DCE7DD")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
