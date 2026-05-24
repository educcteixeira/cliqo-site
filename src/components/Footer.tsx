import { Link } from "@tanstack/react-router";
import { Zap, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-1.5 text-lg font-bold text-white">
              <Zap className="h-5 w-5 fill-primary text-primary" />
              Cliqo
            </div>
            <p className="mt-3 text-sm leading-relaxed">A única plataforma brasileira com AMP for Email.</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="rounded-lg border border-slate-800 p-2 transition-colors hover:border-slate-600 hover:text-white"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="rounded-lg border border-slate-800 p-2 transition-colors hover:border-slate-600 hover:text-white"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Produto</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-white">Templates</a></li>
              <li><Link to="/roadmap" className="hover:text-white">Roadmap</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Recursos</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="https://docs.cliqo.io" target="_blank" rel="noopener noreferrer" className="hover:text-white">Documentação</a></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/status" className="hover:text-white">Status</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/privacidade" className="hover:text-white">Privacidade</Link></li>
              <li><Link to="/termos" className="hover:text-white">Termos de uso</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-900 pt-6 text-xs text-slate-500">
          © 2026 Cliqo. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
