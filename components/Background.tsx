import { Briefcase, GraduationCap } from "lucide-react";
import Section from "./Section";
import { experience as x, education } from "@/lib/data";

function Entry({ title, sub, meta, note }: { title: string; sub: string; meta?: string; note?: string }) {
  return (
    <div className="card p-6">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="grad mt-0.5 font-medium">{sub}</p>
      {(meta || note) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {meta && <span className="chip">{meta}</span>}
          {note && <span className="chip">{note}</span>}
        </div>
      )}
    </div>
  );
}

export default function Background() {
  return (
    <Section id="background" eyebrow="Background" title="Experience & Education">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-4 flex items-center gap-2 font-semibold text-white">
            <Briefcase size={18} className="text-accent2" /> Experience
          </h3>
          <Entry title={x.role} sub={x.org} meta={x.period} />
        </div>
        <div>
          <h3 className="mb-4 flex items-center gap-2 font-semibold text-white">
            <GraduationCap size={18} className="text-accent2" /> Education
          </h3>
          <div className="space-y-4">
            {education.map((e) => (
              <Entry key={e.t} title={e.t} sub={e.s} meta={e.d} note={e.n} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
