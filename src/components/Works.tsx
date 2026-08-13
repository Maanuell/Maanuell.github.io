import { motion } from "framer-motion";
import ProjectVisual from "./ProjectVisual";
import SectionHeader from "./SectionHeader";
import { alsoBuilt, featured, profile, type Project } from "../data/content";

const STATUS: Record<Project["status"], string> = {
  live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  wip: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  done: "border-sky-400/30 bg-sky-400/10 text-sky-300",
};

function Card({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className={`group relative overflow-hidden rounded-3xl border border-stroke bg-surface ${project.span}`}
    >
      <div className={`relative w-full ${project.aspect}`}>
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <ProjectVisual variant={project.visual} />
        </div>
        <div className="halftone pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6">
          <span className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${STATUS[project.status]}`}>
            {project.statusLabel}
          </span>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-bg via-bg/70 to-transparent p-6 md:p-8">
          <h3 className="mb-2 text-xl tracking-tight text-text-primary md:text-2xl">{project.title}</h3>
          <p className="font-mono text-[11px] leading-relaxed text-muted">{project.stack}</p>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center bg-bg/90 p-6 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 md:p-8">
          <h3 className="mb-3 text-xl tracking-tight text-text-primary md:text-2xl">
            <span className="font-display italic">{project.title}</span>
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-muted">{project.blurb}</p>
          {project.points && (
            <ul className="space-y-1.5">
              {project.points.map((p) => (
                <li key={p} className="flex gap-2 text-[13px] leading-relaxed text-muted">
                  <span className="text-[#89AACC]">▸</span>
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Works() {
  return (
    <section id="work" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected work"
          title="Featured"
          italic="projects"
          subtext="Hardware I have built, models I have run, and the research I am doing now. Energy and autonomy, mostly — they turn out to be the same problem seen from two directions."
          action={{ label: "See the CV", href: profile.cv }}
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {featured.map((p, i) => (
            <Card key={p.title} project={p} index={i} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {alsoBuilt.map((p, i) => (
            <Card key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
