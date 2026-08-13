import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { experience, toolkit } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Experience"
          title="Where I have"
          italic="worked"
          subtext="Four years across engineering and operations in Ghana, Nigeria and China."
        />

        <div className="space-y-4">
          {experience.map((job, i) => (
            <motion.div
              key={job.role + job.org}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative overflow-hidden rounded-[32px] border border-stroke bg-surface/30 p-6 transition-colors duration-500 hover:bg-surface md:rounded-full md:p-8"
            >
              <span className="accent-gradient absolute left-0 top-0 h-full w-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
                <div className="flex shrink-0 items-center gap-4 md:w-[38%]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stroke font-mono text-[11px] text-muted">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-base tracking-tight text-text-primary md:text-lg">{job.role}</h3>
                    <p className="font-mono text-[11px] text-muted">
                      {job.org} · {job.place}
                    </p>
                  </div>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-muted">{job.blurb}</p>

                <span className="shrink-0 font-mono text-[11px] text-muted md:text-right">{job.period}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-stroke bg-stroke sm:grid-cols-2 lg:grid-cols-3">
          {toolkit.map((t, i) => (
            <motion.div
              key={t.group}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-bg p-6"
            >
              <h4 className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#89AACC]">{t.group}</h4>
              <p className="text-sm leading-relaxed text-muted">{t.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
