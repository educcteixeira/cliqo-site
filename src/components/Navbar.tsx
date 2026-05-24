import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Produto", href: "#produto" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Clientes", href: "#clientes" },
  { label: "Blog", href: "#blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <svg width="24" height="24" viewBox="0 0 24 24" className="[animation:logo-pulse_2s_ease-in-out_infinite] origin-center">
            <circle cx="12" cy="12" r="10" fill="none" stroke="#f43f5e" strokeWidth="1.5" opacity="0.3" />
            <circle cx="12" cy="12" r="6.5" fill="none" stroke="#f43f5e" strokeWidth="2" opacity="0.6" />
            <circle cx="12" cy="12" r="3" fill="#f43f5e" />
          </svg>
          <span>cliqo</span>
        </Link>
        <style>{`@keyframes logo-pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }`}</style>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a href="https://app.cliqo.io/login" className="rounded-xl border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary">
            Entrar
          </a>
          <a href="#demo" className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90">
            Agendar demo
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="https://app.cliqo.io/login" className="mt-2 rounded-xl border border-border px-4 py-2 text-center text-sm font-medium">Entrar</a>
            <a href="#demo" className="rounded-xl bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground">Agendar demo</a>
          </nav>
        </div>
      )}
    </header>
  );
}