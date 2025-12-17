import React from "react";
import { Instagram, Facebook } from "lucide-react";

function TikTokIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export default function Footer({
  brandName = "ATELIER ALTAÏR",
  city = "Lyon, France",
  addressLines = ["123 Rue de l'Art", "69000 Lyon, France"],
  phone = "+33 6 12 34 56 78",
  email = "contact@atelieraltair.fr",
  socials = {
    instagram: "#",
    facebook: "#",
    tiktok: "#",
  },
  legalLinks = {
    mentions: "#",
    privacy: "#",
    cgv: "#",
  },
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#c5d4c7] bg-[#E5EFE8]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl tracking-wider text-[#2F5640]">
              {brandName}
            </h3>
            <p className="text-sm font-light leading-relaxed text-[#5a6e5a]">
              Artiste tatoueur passionnée
              <br />
              Créations uniques et personnalisées
              <br />
              {city}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-light tracking-wide text-[#2F5640]">
              Contact
            </h4>
            <div className="space-y-2 text-sm font-light text-[#5a6e5a]">
              <p>
                {addressLines[0]}
                <br />
                {addressLines[1]}
              </p>
              <p>Téléphone: {phone}</p>
              <p>Email: {email}</p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-light tracking-wide text-[#2F5640]">
              Suivez-moi
            </h4>

            <div className="flex items-center gap-4">
              <a
                href={socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-[#4C7A5A] transition-colors duration-200 hover:text-[#2F5640]"
              >
                <Instagram size={22} />
              </a>

              <a
                href={socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-[#4C7A5A] transition-colors duration-200 hover:text-[#2F5640]"
              >
                <Facebook size={22} />
              </a>

              <a
                href={socials.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="text-[#4C7A5A] transition-colors duration-200 hover:text-[#2F5640]"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Divider + bottom */}
        <div className="mt-12 border-t border-[#c5d4c7] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm font-light text-[#7a8e7a]">
              © {year} Atelier Altaïr. Tous droits réservés.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-light text-[#7a8e7a]">
              <a
                href={legalLinks.mentions}
                className="transition-colors duration-200 hover:text-[#4C7A5A]"
              >
                Mentions légales
              </a>
              <a
                href={legalLinks.privacy}
                className="transition-colors duration-200 hover:text-[#4C7A5A]"
              >
                Politique de confidentialité
              </a>
              <a
                href={legalLinks.cgv}
                className="transition-colors duration-200 hover:text-[#4C7A5A]"
              >
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
