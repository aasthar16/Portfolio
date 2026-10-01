"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Featured Projects">
      <p className="-mt-8 mb-10 max-w-xl text-slate-500">
        A selection of 6 featured projects out of 25+ total repositories.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="card flex flex-col p-6"
          >
            <h3 className="text-xl font-bold text-white">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.blurb}</p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {p.metrics.map((m) => (
                <div key={m.l} className="rounded-xl bg-white/5 p-3">
                  <div className="grad text-lg font-extrabold">{m.v}</div>
                  <div className="text-[11px] leading-tight text-slate-500">{m.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
            </div>
            <div className="mt-auto flex gap-5 pt-6 text-sm font-medium">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-300 hover:text-white"><Github size={15} /> Code</a>
              {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-accent2 hover:text-white"><ExternalLink size={15} /> Live demo</a>}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
