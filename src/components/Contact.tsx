import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Lightbox from "./Lightbox";
import { profile, socials } from "../data/content";

export default function Contact() {
  const marquee = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", { xPercent: -50, duration: 40, ease: "none", repeat: -1 });
    }, marquee);
    return () => ctx.revert();
  }, []);

  const words = Array.from({ length: 10 }, () => "BUILDING THINGS THAT RUN THEMSELVES");

  return (
    <footer id="contact" className="relative overflow-hidden bg-bg pb-8 pt-16 md:pb-12 md:pt-20">
      {/* ambient circuit loop, heavily damped so it never competes with the text */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <video
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-[0.18]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="circuit.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-bg/60" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div ref={marquee} className="relative z-10 mb-16 overflow-hidden border-y border-stroke py-6">
        <div className="marquee-track flex whitespace-nowrap">
          {[...words, ...words].map((w, i) => (
            <span key={i} className="mx-6 font-display text-2xl italic text-muted/40 md:text-4xl">
              {w} <span className="text-[#4E85BF]">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <div className="mb-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">Contact</span>
            <span className="h-px w-8 bg-stroke" />
          </div>

          <h2 className="mb-6 text-4xl leading-tight tracking-tight text-text-primary md:text-6xl">
            Let's <span className="font-display italic">talk</span>.
          </h2>

          <p className="mx-auto mb-10 max-w-lg text-sm text-muted md:text-base">
            Open to remote and part-time work in energy analysis, financial modelling and automation — and always
            glad to talk to people building things that move.
          </p>

          <div className="inline-flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group relative rounded-full transition-transform duration-300 hover:scale-105"
            >
              <span className="accent-gradient-animated absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ inset: -2 }} />
              <span className="relative block rounded-full bg-text-primary px-7 py-3.5 text-sm text-bg transition-colors duration-300 group-hover:bg-bg group-hover:text-text-primary">
                {profile.email}
              </span>
            </a>

            <a
              href={profile.cv}
              className="group relative rounded-full transition-transform duration-300 hover:scale-105"
            >
              <span className="accent-gradient-animated absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ inset: -2 }} />
              <span className="relative block rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-sm text-text-primary transition-colors duration-300 group-hover:border-transparent">
                Download CV
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 border-t border-stroke pt-8 md:flex-row md:items-center md:justify-between">
          {/* identity block — portrait sits with the name and numbers */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setZoom("portrait.jpg")}
              className="group relative shrink-0 rounded-full"
              aria-label="Enlarge portrait"
            >
              <span className="accent-gradient-animated absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ inset: -2 }} />
              <img
                src="avatar.jpg"
                alt={profile.name}
                width={480}
                height={480}
                loading="lazy"
                className="relative block h-14 w-14 rounded-full border border-stroke object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>

            <div className="text-left">
              <p className="text-sm text-text-primary">{profile.name}</p>
              <p className="font-mono text-[11px] leading-relaxed text-muted">
                {profile.city}, China
                <br />
                {profile.phones.join(" · ")}
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="text-sm text-muted transition-colors hover:text-text-primary">
                {s.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-sm text-muted">Available for projects</span>
          </div>
        </div>
      </div>

      <Lightbox src={zoom} alt={profile.name} onClose={() => setZoom(null)} />
    </footer>
  );
}
