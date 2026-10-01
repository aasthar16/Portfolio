"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Code2, FileText, ArrowDown, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const socials = [
    { h: profile.github, i: Github, l: "GitHub" },
    { h: profile.linkedin, i: Linkedin, l: "LinkedIn" },
    { h: profile.leetcode, i: Code2, l: "LeetCode" },
  ];
  return (
    <header id="top" className="relative overflow-hidden px-6 pb-20 pt-36">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl text-center md:text-left">
          <span className="chip inline-flex items-center gap-1.5"><MapPin size={12} /> {profile.location}</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Hi, I'm <span className="grad">{profile.name}</span>
          </h1>
          <p className="mt-3 text-xl font-semibold text-slate-200 md:text-2xl">{profile.role}</p>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn bg-gradient-to-r from-accent to-accent2 text-white hover:opacity-90">
              <FileText size={16} /> View Resume
            </a>
            <a href="#projects" className="btn border border-white/15 text-white hover:bg-white/10">
              See projects <ArrowDown size={16} />
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-4 md:justify-start">
            {socials.map(({ h, i: Icon, l }) => (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer" aria-label={l} className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-accent hover:text-white">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="rounded-full bg-gradient-to-br from-accent to-accent2 p-1">
          {imgOk ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/profile.jpeg" alt={profile.name} onError={() => setImgOk(false)} className="h-60 w-60 rounded-full bg-[#0a0a12] object-cover md:h-80 md:w-80" />
          ) : (
            <div className="flex h-60 w-60 items-center justify-center rounded-full bg-[#0a0a12] text-6xl font-bold text-white md:h-80 md:w-80">AR</div>
          )}
        </motion.div>
      </div>
    </header>
  );
}
