import Section from "./Section";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Technical skills">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="card p-6">
            <h3 className="mb-4 font-semibold text-white">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => <span key={s} className="chip">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
