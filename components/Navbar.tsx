const links = ["about", "skills", "background", "projects", "achievements", "contact"];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a12]/70 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-bold text-white">AR<span className="grad">.</span></a>
        <ul className="hidden gap-8 text-sm md:flex">
          {links.map((l) => (
            <li key={l}><a href={`#${l}`} className="capitalize text-slate-400 transition hover:text-white">{l}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
