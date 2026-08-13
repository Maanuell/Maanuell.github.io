import { useEffect, useState } from "react";
import { profile } from "../data/content";

const LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <div
        className={`inline-flex items-center rounded-full border border-white/10 bg-surface/90 px-2 py-2 backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-md shadow-black/40" : ""
        }`}
      >
        <a href="#home" onClick={go("home")} className="group relative mr-1" aria-label="Home">
          <span className="accent-gradient-animated flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
            <span className="flex h-[calc(100%-2px)] w-[calc(100%-2px)] items-center justify-center rounded-full bg-bg font-display text-[13px] italic text-text-primary">
              {profile.initials}
            </span>
          </span>
        </a>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        {LINKS.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={go(id)}
            className={`rounded-full px-3 py-1.5 text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm ${
              active === id
                ? "bg-stroke/50 text-text-primary"
                : "text-muted hover:bg-stroke/50 hover:text-text-primary"
            }`}
          >
            {label}
          </a>
        ))}

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        <a href={`mailto:${profile.email}`} className="group relative rounded-full">
          <span className="accent-gradient-animated absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ inset: -2 }} />
          <span className="relative flex items-center gap-1 rounded-full bg-surface px-3 py-1.5 text-xs text-text-primary backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm">
            Say hi <span aria-hidden="true">↗</span>
          </span>
        </a>
      </div>
    </nav>
  );
}
