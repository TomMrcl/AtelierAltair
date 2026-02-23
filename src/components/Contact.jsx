import React, { useRef, useState } from "react";
import { Upload, Mail, Clock, Instagram } from "lucide-react";
import siteContent from "../content/siteContent";

export default function ContactSection() {
  const fileInputRef = useRef(null);

  const FORMSPREE_ENDPOINT =
    siteContent?.contact?.formspreeEndpoint || "https://formspree.io/f/mpqjolop";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    files: [],
  });

  const [status, setStatus] = useState({
    state: "idle", // idle | sending | success | error
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const pickFiles = (fileList) => {
    const files = Array.from(fileList || []).slice(0, 5);
    setFormData((p) => ({ ...p, files }));
  };

  const handleFileUpload = (e) => pickFiles(e.target.files);

  // Drag & drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    pickFiles(e.dataTransfer.files);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "", files: [] });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    try {
      if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT === "YOUR_FORMSPREE_ENDPOINT") {
        throw new Error("Endpoint Formspree manquant. Ajoute-le dans siteContent.contact.formspreeEndpoint.");
      }

      // FormData => support texte + fichiers
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);

      // Optionnel : meta utile côté réception
      data.append("_subject", `Nouveau message - ${formData.name}`);
      data.append("_replyto", formData.email);

      // Honeypot anti-spam (champ caché)
      data.append("_gotcha", "");

      // Fichiers
      formData.files.forEach((file) => {
        data.append("files_names", formData.files.map(f => f.name).join(", "));
      });

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      const json = await res.json().catch(() => null);

      if (!res.ok) {
        const msg =
          json?.errors?.[0]?.message ||
          "Une erreur est survenue. Réessaie ou contacte-moi sur Instagram.";
        throw new Error(msg);
      }

      setStatus({
        state: "success",
        message: "Votre message a été envoyé ! Je vous répondrai au plus vite.",
      });
      resetForm();
    } catch (err) {
      setStatus({
        state: "error",
        message: err?.message || "Impossible d’envoyer le message pour le moment.",
      });
    }
  };

  return (
    <section id="contact" className="bg-[#F4F8F5] border-t border-[#D7E2D7]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide text-[#2F5640] font-[400]">
            {siteContent.contact?.heading}
          </h2>
          <p
            className="mt-4 text-sm md:text-base text-[#5a6e5a]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {siteContent.contact?.subtitle}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            <div className="rounded-2xl border border-[#c5d4c7] bg-white shadow-sm">
              <div className="px-7 pt-7">
                <div className="font-serif text-sm text-[#2F5640]">Envoyer un message</div>
                <div className="mt-2 text-sm font-light text-[#5a6e5a]">
                  Décrivez votre projet et je vous répondrai dans les plus brefs délais
                </div>
              </div>

              <div className="px-7 pb-7 pt-6">
                {/* Status messages */}
                {status.state !== "idle" && status.message && (
                  <div
                    className={`mb-5 rounded-xl border px-4 py-3 text-sm font-light ${
                      status.state === "success"
                        ? "border-[#c5d4c7] bg-[#F4F8F5] text-[#2F5640]"
                        : status.state === "error"
                        ? "border-red-200 bg-red-50 text-red-700"
                        : "border-[#c5d4c7] bg-white text-[#5a6e5a]"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot (anti-spam) */}
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                  />

                  {/* Nom */}
                  <div className="space-y-2">
                    <label
                      className="text-xs text-[#2F5640]"
                      htmlFor="name"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre nom et prénom"
                      className="h-11 w-full rounded-lg border border-[#c5d4c7] bg-[#F4F8F5] px-4 text-sm font-light text-[#2F5640] outline-none focus:ring-2 focus:ring-[#4C7A5A]/20"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      className="text-xs text-[#2F5640]"
                      htmlFor="email"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="votre.email@exemple.com"
                      className="h-11 w-full rounded-lg border border-[#c5d4c7] bg-[#F4F8F5] px-4 text-sm font-light text-[#2F5640] outline-none focus:ring-2 focus:ring-[#4C7A5A]/20"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      className="text-xs text-[#2F5640]"
                      htmlFor="message"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Décrivez votre projet : style souhaité, taille, emplacement, vos idées..."
                      className="w-full resize-none rounded-lg border border-[#c5d4c7] bg-[#F4F8F5] px-4 py-3 text-sm font-light text-[#2F5640] outline-none focus:ring-2 focus:ring-[#4C7A5A]/20"
                    />
                  </div>

                  {/* Upload */}
                  <div className="space-y-2">
                    <div className="text-xs font-light text-[#2F5640]">
                      Références visuelles (optionnel)
                    </div>

                    <div
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#c5d4c7] bg-[#F4F8F5] px-4 py-10 text-center transition hover:bg-[#EEF5F0]"
                      role="button"
                      tabIndex={0}
                    >
                      <Upload className="h-8 w-8 text-[#5a6e5a]" />
                      <p className="mt-3 text-sm font-light text-[#3a4e3a]">
                        <span className="font-medium">Cliquez pour télécharger</span> ou glissez-déposez
                      </p>
                      <p className="mt-1 text-xs font-light text-[#5a6e5a]">
                        PNG, JPG, GIF jusqu&apos;à 10MB
                      </p>

                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        multiple
                        accept="image/*"
                        onChange={handleFileUpload}
                      />
                    </div>

                    {formData.files.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {formData.files.map((f) => (
                          <p key={f.name} className="text-sm font-light text-[#3a4e3a]">
                            ✓ {f.name}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status.state === "sending"}
                    className={`h-12 w-full rounded-xl text-sm font-light tracking-wide text-white transition ${
                      status.state === "sending"
                        ? "bg-[#4C7A5A]/70 cursor-not-allowed"
                        : "bg-[#4C7A5A] hover:bg-[#2F5640]"
                    }`}
                  >
                    {status.state === "sending" ? "Envoi en cours..." : "Envoyer le message"}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl tracking-wide text-[#2F5640] font-[400]">
                Informations de contact
              </h3>

              <div className="mt-8 space-y-7">
                <div className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 text-[#4C7A5A]" />
                  <div>
                    <div className="text-sm font-light text-[#2F5640]">Email</div>
                    <div className="mt-1 text-sm font-light text-[#5a6e5a]">
                      {siteContent.contact?.info?.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="mt-0.5 h-5 w-5 text-[#4C7A5A]" />
                  <div>
                    <div className="text-sm font-light text-[#2F5640]">Instagram</div>
                    <div className="mt-1 text-sm font-light text-[#5a6e5a]">
                      {siteContent.contact?.info?.instagramHandle}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="mt-0.5 h-5 w-5 text-[#4C7A5A]" />
                  <div>
                    <div className="text-sm font-light text-[#2F5640]">Horaires</div>
                    <div className="mt-2 space-y-1 text-sm font-light text-[#5a6e5a]">
                      {siteContent.contact?.info?.hours?.map((h) => (
                        <div key={h}>{h}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}