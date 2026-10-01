import Section from "./Section";
import { profile, stats } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineering with intent">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-slate-400">
          {profile.about.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.l} className="card p-6 text-center">
              <div className="grad text-3xl font-extrabold">{s.v}</div>
              <div className="mt-1 text-xs text-slate-500">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
