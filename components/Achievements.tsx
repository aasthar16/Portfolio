import { Trophy, Medal, Code2, ShieldCheck, type LucideIcon } from "lucide-react";
import Section from "./Section";
import { achievements } from "@/lib/data";

const icons: Record<string, LucideIcon> = { trophy: Trophy, medal: Medal, code: Code2, shield: ShieldCheck };

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Recognition" title="Achievements & Leadership">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a) => {
          const Icon = icons[a.icon];
          return (
            <div key={a.label} className="card group relative flex flex-col overflow-hidden p-6 hover:-translate-y-1">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent2/20" />
              <span className="relative inline-flex w-fit rounded-xl bg-gradient-to-br from-accent to-accent2 p-3 text-white shadow-lg shadow-accent/20">
                <Icon size={22} />
              </span>
              <p className="relative mt-5 text-xs font-semibold uppercase tracking-wider text-accent2">{a.label}</p>
              <h3 className="relative mt-1 text-lg font-bold leading-snug text-white">{a.title}</h3>
              <span className="chip relative mt-auto w-fit self-start" style={{ marginTop: "1.25rem" }}>{a.tag}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
