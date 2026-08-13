import { motion } from "framer-motion";
import { profile } from "../data/content";

export default function About() {
  return (
    <section id="about" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-5"
          >
            <div className="relative mx-auto max-w-[380px] md:mx-0">
              <div
                className="absolute -inset-6 opacity-50"
                style={{
                  background: "radial-gradient(circle at 50% 40%, rgba(78,133,191,0.28), transparent 68%)",
                  filter: "blur(28px)",
                }}
              />
              <div className="relative overflow-hidden rounded-[28px] border border-stroke">
                <img
                  src="portrait.jpg"
                  alt={`${profile.name}, electrical engineer, in Hangzhou`}
                  width={880}
                  height={1100}
                  loading="lazy"
                  className="block w-full"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
                <div className="halftone pointer-events-none absolute inset-0 opacity-10 mix-blend-multiply" />
              </div>

              <div className="absolute -bottom-4 left-4 right-4 flex items-center justify-between rounded-full border border-stroke bg-surface/90 px-5 py-3 backdrop-blur-md">
                <span className="font-mono text-[11px] text-muted">{profile.city}, China</span>
                <span className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-mono text-[11px] text-muted">Open to work</span>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-stroke" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted">About</span>
            </div>

            <h2 className="mb-6 text-3xl leading-tight tracking-tight text-text-primary md:text-4xl lg:text-5xl">
              The whole span of a <span className="font-display italic">project</span>.
            </h2>

            <div className="space-y-4 text-sm leading-relaxed text-muted md:text-base">
              <p>
                I am an electrical engineer who enjoys every part of a project — the site survey, the design, and
                the financial model that decides whether it goes ahead. I have done that work in Ghana and
                Nigeria, and I am now completing an MEng in Intelligent Manufacturing and Control Engineering
                in China.
              </p>
              <p>
                Outside the coursework I build things. There is an autonomous mower in my workshop that I
                designed, wired and assembled myself — the hardware runs, and I am building the navigation on top
                of it. It has taught me more about why outdoor autonomy is hard than any paper has.
              </p>
              <p>
                I use AI tools daily to handle the repetitive side of analysis and documentation, which leaves
                more time for the parts that need judgement. That is a large part of how I cover this much
                ground alongside a full-time master's.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Ghana", "Nigeria", "China"].map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-stroke px-4 py-1.5 font-mono text-[11px] text-muted"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
