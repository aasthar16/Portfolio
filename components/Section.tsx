"use client";
import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, children }: {
  id: string; eyebrow: string; title: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-accent2">{eyebrow}</p>
        <h2 className="mb-12 mt-2 text-3xl font-bold text-white md:text-4xl">{title}</h2>
        {children}
      </motion.div>
    </section>
  );
}
