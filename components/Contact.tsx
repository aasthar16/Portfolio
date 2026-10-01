"use client";
import { useState, FormEvent } from "react";
import { Mail, Phone, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Section from "./Section";
import { profile } from "@/lib/data";



   const WEB3FORMS_ACCESS_KEY = "0fa3de3f-625e-4347-aeab-4707df61510c";
const ENDPOINT = "https://api.web3forms.com/submit";

type Form = { name: string; email: string; phone: string; message: string };
type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "submitting" | "success" | "error";

const empty: Form = { name: "", email: "", phone: "", message: "" };
const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

const checkEmail = (v: string) =>
  !v.trim() ? "Please enter your email address." : EMAIL_RE.test(v.trim()) ? undefined : "Please enter a valid email address, for example name@example.com.";

function validate(f: Form): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Please enter your name.";
  const em = checkEmail(f.email);
  if (em) e.email = em;
  if (f.message.trim().length < 10) e.message = "Please write a message of at least 10 characters.";
  return e;
}

export default function Contact() {
  const [f, setF] = useState<Form>(empty);
  const [err, setErr] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [bot, setBot] = useState(false); // honeypot: real users never tick this

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setF({ ...f, [k]: e.target.value });
    if (k !== "phone" && err[k]) setErr({ ...err, [k]: undefined });
    if (status !== "submitting" && status !== "idle") setStatus("idle");
  };

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;

    const errors = validate(f);
    setErr(errors);
    if (Object.keys(errors).length) return; // invalid: do not submit

    

    setStatus("submitting");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio message from ${f.name.trim()}`,
          from_name: "Portfolio Contact Form",
          name: f.name.trim(),
          email: f.email.trim(),
         
          message: f.message.trim(),
          botcheck: bot,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setF(empty);
        setErr({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const base = "w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500";
  const cls = (bad?: string) => `${base} ${bad ? "border-rose-500/70 focus:border-rose-400" : "border-white/10 focus:border-accent"}`;
  const Err = ({ id, msg }: { id: string; msg?: string }) =>
    msg ? <p id={id} role="alert" className="mt-1.5 text-xs text-rose-400">{msg}</p> : null;

  return (
    <Section id="contact" eyebrow="Contact" title="Connect with me">
      <div className="grid gap-8 md:grid-cols-5">
        <div className="space-y-4 md:col-span-2">
          <p className="text-slate-400">
            Whether it's a role, a project, or a conversation about backend and AI engineering, I'd be glad to hear from you.
          </p>
          {[
            { i: Mail, l: "Email", v: profile.email, h: `mailto:${profile.email}` },
            { i: Phone, l: "Phone", v: profile.phone, h: `tel:${profile.phone.replace(/\s/g, "")}` },
          ].map(({ i: Icon, l, v, h }) => (
            <a key={l} href={h} className="card flex items-center gap-4 p-4">
              <span className="rounded-full bg-accent/20 p-3 text-accent"><Icon size={18} /></span>
              <span><span className="block text-xs text-slate-500">{l}</span><span className="text-white">{v}</span></span>
            </a>
          ))}
        </div>

        <form onSubmit={submit} noValidate className="card space-y-4 p-6 md:col-span-3">
          <input type="checkbox" className="hidden" tabIndex={-1} autoComplete="off" checked={bot} onChange={(e) => setBot(e.target.checked)} aria-hidden="true" />
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <input className={cls(err.name)} placeholder="Your name" value={f.name} onChange={set("name")} aria-label="Name" aria-invalid={!!err.name} aria-describedby="err-name" disabled={status === "submitting"} />
              <Err id="err-name" msg={err.name} />
            </div>
            <div>
              <input
                className={cls(err.email)} placeholder="Email address" type="email" inputMode="email" autoComplete="email"
                value={f.email} onChange={set("email")}
                onBlur={() => f.email && setErr((p) => ({ ...p, email: checkEmail(f.email) }))}
                aria-label="Email" aria-invalid={!!err.email} aria-describedby="err-email" disabled={status === "submitting"}
              />
              <Err id="err-email" msg={err.email} />
            </div>
          </div>
          <input className={cls()} placeholder="Phone number (optional)" type="tel" autoComplete="tel" value={f.phone} onChange={set("phone")} aria-label="Phone (optional)" disabled={status === "submitting"} />
          <div>
            <textarea className={`${cls(err.message)} min-h-[140px] resize-y`} placeholder="Your message" value={f.message} onChange={set("message")} aria-label="Message" aria-invalid={!!err.message} aria-describedby="err-message" disabled={status === "submitting"} />
            <Err id="err-message" msg={err.message} />
          </div>

          <button type="submit" disabled={status === "submitting"} className="btn bg-gradient-to-r from-accent to-accent2 text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">
            {status === "submitting" ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : <><Send size={16} /> Send message</>}
          </button>

          {status === "success" && (
            <p role="status" className="flex items-center gap-2 text-sm text-emerald-400"><CheckCircle2 size={16} /> Message sent successfully! I will get back to you soon.</p>
          )}
          {status === "error" && (
            <p role="alert" className="flex items-center gap-2 text-sm text-rose-400"><AlertCircle size={16} /> Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </Section>
  );
}
