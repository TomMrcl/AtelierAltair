import siteContent from "../content/siteContent";

export default function ArtistSection() {
  return (
    <section id="artist" className="bg-[#E5EFE8] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: media card */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-[0_14px_30px_rgba(0,0,0,0.10)] border border-black/5 bg-white">
              {/* Video */}
              <div className="relative aspect-[4/3]">
                <video
                  src={siteContent.artist?.video?.src}
                  poster={siteContent.artist?.video?.poster}
                  controls
                  className="absolute inset-0 h-full w-full object-cover"
                  preload="metadata"
                >
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>

              {/* Bottom light area like the mock */}
              <div className="h-28 bg-[#eef2ef]" />
            </div>
          </div>

          {/* Right: text */}
          <div>
            <h2
              className="text-[#2F5640] text-center lg:text-left"
              style={{ fontFamily: "Cormorant, serif", letterSpacing: ".02em" }}
            >
              <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-none">
                {siteContent.artist?.heading}
              </span>
            </h2>

            <div className="mt-8 space-y-8 text-[#274735]/90 leading-relaxed text-[16px]">
              {siteContent.artist?.paragraphs?.map((p, idx) => (
                <p key={idx} style={{ fontFamily: "'Inter', sans-serif" }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Quote block */}
            <div className="mt-10 grid grid-cols-[14px_1fr] gap-6">
              <div className="flex justify-center">
                <div className="w-[2px] bg-[#2F5640]/70" />
              </div>

              <div className="text-[#2F5640]/80">
                <p
                  className="italic leading-relaxed"
                  style={{ fontFamily: "Cormorant, serif" }}
                >
                  {siteContent.artist?.quote}
                </p>
                <p className="mt-4 text-[14px] text-[#274735]/70">
                  {siteContent.artist?.quoteAuthor}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-14 h-px w-full bg-[#2F5640]/15" />

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              {siteContent.artist?.stats?.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="text-[#2F5640] text-[34px] md:text-[40px] leading-none"
        style={{ fontFamily: "Cormorant, serif" }}
      >
        {value}
      </div>
      <div className="mt-2 text-[11px] md:text-[12px] tracking-[0.18em] text-[#274735]/70">
        {label}
      </div>
    </div>
  );
}
