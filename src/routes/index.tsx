import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Zap,
  Smartphone,
  MessageCircle,
  ArrowRight,
  Check,
  Star,
  ShoppingCart,
  HelpCircle,
  Gift,
  Layers,
  ClipboardList,
  Dices,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PulseRings, PulseRingsStatic } from "@/components/PulseRings";

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Templates />
      <Audience />
      <Founder />
      
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="absolute inset-0 opacity-40">
        <PulseRings className="absolute left-[15%] top-1/2 h-[400px] w-[400px]" />
        <PulseRings className="absolute right-[10%] top-[20%] h-[300px] w-[300px]" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-10 md:pb-16 pt-10 md:pt-16 lg:grid-cols-2 lg:gap-8 ">
        <div className="flex flex-col justify-center">
          <motion.div {...fadeUp} className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200">
            <Zap className="h-3.5 w-3.5 fill-primary text-primary" />
            A única plataforma brasileira com AMP for Email
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            O cliente decide
            <br />
            <span className="text-primary">dentro do email.</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Emails interativos que funcionam dentro do Gmail. Sem redirect. Sem perder o cliente no caminho. Sem depender do site para converter.
          </motion.p>
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#demo" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:opacity-90">
              Agendar demo gratuita <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#templates" className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-white">
              Ver templates <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Animation mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl w-full bg-[#0a0a0a]" style={{ aspectRatio: "8/5" }}>
            <iframe
              src="/animacao/index.html"
              className="w-full h-full border-0 outline-none"
              title="Cliqo — Email AMP interativo"
              tabIndex={-1}
              allowTransparency={true}
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-emerald-500/95 px-4 py-2 text-xs font-semibold text-white shadow-xl">
            <Check className="h-3.5 w-3.5" /> Funcionando dentro do Gmail
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- PROBLEM ---------- */
function Problem() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-10 md:py-16 lg:grid-cols-2 lg:gap-16">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Taxa de abertura
            <br />
            <span className="text-primary">mentiu para você.</span>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
            <p>
              Em setembro de 2021, a Apple lançou o Mail Privacy Protection. O iPhone passou a pré-carregar todas as imagens de rastreamento — incluindo o pixel que registra "abertura" — antes mesmo do usuário abrir o email.
            </p>
            <p>
              Da noite pro dia, taxas de abertura subiram 20 a 40% em todas as contas do mundo. Sem nenhuma mudança de estratégia.
            </p>
            <p>
              Hoje, parte do "68% de abertura" que aparece no seu relatório são iPhones que nunca foram lidos por nenhum ser humano.
            </p>
            <p className="font-semibold text-foreground">
              A única métrica que não mente: o que o cliente <em>fez</em> dentro do email.
            </p>
          </div>
        </motion.div>
        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="flex items-center justify-center">
          <FakeChart />
        </motion.div>
      </div>
    </section>
  );
}

function FakeChart() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xs font-semibold text-slate-900">Abertura vs. conversão real</div>
        <div className="text-[10px] text-slate-500">2020 — 2024</div>
      </div>
      <svg viewBox="0 0 320 180" className="w-full">
        {/* grid */}
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1="0" x2="320" y1={40 + i * 35} y2={40 + i * 35} stroke="#f1f5f9" />
        ))}
        {/* MPP line */}
        <line x1="180" x2="180" y1="20" y2="170" stroke="#cbd5e1" strokeDasharray="3 3" />
        <text x="184" y="32" fontSize="9" fill="#64748b">Set 2021 — Apple MPP</text>
        {/* Aberturas (dashed rising) */}
        <polyline
          points="10,120 60,115 110,110 160,108 180,90 220,60 270,45 310,30"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2.5"
          strokeDasharray="5 4"
        />
        {/* Conversão real (flat) */}
        <polyline
          points="10,140 60,138 110,142 160,139 210,141 260,138 310,140"
          fill="none"
          stroke="#0f172a"
          strokeWidth="2.5"
        />
        <circle cx="310" cy="30" r="3" fill="var(--primary)" />
        <circle cx="310" cy="140" r="3" fill="#0f172a" />
      </svg>
      <div className="mt-4 flex items-center gap-4 text-[11px]">
        <div className="flex items-center gap-1.5"><span className="h-0.5 w-4 border-t-2 border-dashed border-primary" /> Taxa de abertura (falsa)</div>
        <div className="flex items-center gap-1.5"><span className="h-0.5 w-4 bg-slate-900" /> Conversão real</div>
      </div>
    </div>
  );
}

/* ---------- SOLUTION ---------- */
function Solution() {
  const features = [
    { icon: Zap, title: "Emails interativos no Gmail", desc: "Quizzes, roletas, pesquisas, cashback e carrosséis que funcionam dentro do Gmail. O cliente age sem abrir nenhuma nova aba." },
    { icon: Smartphone, title: "Fallback HTML automático", desc: "Clientes sem suporte AMP recebem automaticamente a versão HTML responsiva. Nenhum email quebrado. Nunca." },
    { icon: MessageCircle, title: "Email + WhatsApp no mesmo fluxo", desc: "O que o cliente fez no email dispara automaticamente o WhatsApp certo, na hora certa, para a pessoa certa." },
  ];
  return (
    <section id="produto" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">O email que fica.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Enquanto todo ESP manda o cliente embora, a Cliqo faz do email o destino.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const products = [
    { name: "Camiseta Premium", price: "R$ 129", color: "bg-rose-200" },
    { name: "Tênis Runner", price: "R$ 389", color: "bg-slate-800" },
    { name: "Mochila Urbana", price: "R$ 259", color: "bg-amber-200" },
  ];
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl"
        >
          {/* macOS chrome */}
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <div className="ml-4 flex-1 rounded-md bg-white px-3 py-1 text-[11px] text-slate-500">
              mail.google.com/u/0/#inbox
            </div>
          </div>

          {/* Inbox */}
          <div className="bg-white text-slate-900">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 border-b border-slate-100 px-5 py-3 text-sm"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">A</div>
              <span className="font-semibold">Sua Loja</span>
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="rounded-md bg-yellow-300 px-1.5 py-0.5 text-[10px] font-bold text-slate-900"
              >
                ⚡ AMP
              </motion.span>
              <span className="flex-1 truncate text-slate-700">Novidades desta semana</span>
              <span className="text-[11px] text-slate-400">agora</span>
            </motion.div>

            {/* Opened email */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="px-5 py-6"
            >
              <h3 className="text-base font-semibold">Novidades desta semana</h3>
              <p className="mt-1 text-xs text-slate-500">Navegue pelo catálogo sem sair do email →</p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {products.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                    className="rounded-lg border border-slate-200 p-2"
                  >
                    <div className={`mb-2 h-20 rounded-md ${p.color}`} />
                    <div className="text-[11px] font-medium leading-tight">{p.name}</div>
                    <div className="mt-1 text-[11px] font-bold text-primary">{p.price}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex gap-1">
                  <span className="h-1.5 w-5 rounded-full bg-primary" />
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                </div>
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.3 }}
                  className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white shadow-md shadow-primary/30"
                >
                  Tenho interesse
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-10 max-w-2xl text-center text-2xl font-bold tracking-tight text-white md:text-3xl"
        >
          Isso está acontecendo dentro do Gmail. Não em uma landing page.
        </motion.p>
      </div>
    </section>
  );
}

/* ---------- TEMPLATES ---------- */
function Templates() {
  const templates = [
    { icon: HelpCircle, title: "Quiz de Recomendação", tag: "Alto engajamento", desc: "3 perguntas → produto ideal recomendado pelo algoritmo" },
    { icon: Dices, title: "Roleta de Desconto", tag: "Gamificação", desc: "Gira e ganha: frete, desconto ou brinde" },
    { icon: Gift, title: "Cashback / Giftback", tag: "🌍 Exclusivo Cliqo", desc: "Resgate de cashback dentro do email — sem redirect" },
    { icon: ClipboardList, title: "Pesquisa de Satisfação", tag: "NPS & CSAT", desc: "NPS e CSAT com chips clicáveis — sem sair do email" },
    { icon: Layers, title: "Catálogo Interativo", tag: "Mais usado", desc: "Categorias e produtos navegáveis dentro do email" },
    { icon: ShoppingCart, title: "Carrinho Abandonado", tag: "Automação", desc: "Email AMP + WhatsApp no fluxo de recuperação" },
  ];
  return (
    <section id="templates" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Templates que convertem dentro do email.</h2>
          <p className="mt-4 text-lg text-muted-foreground">Todos com AMP interativo + fallback HTML automático.</p>
        </motion.div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((t, i) => (
            <motion.div
              key={t.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <t.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600">{t.tag}</span>
              </div>
              <h3 className="mt-5 text-base font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#templates" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Ver todos os templates <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- AUDIENCE ---------- */
function Audience() {
  const cards = [
    { title: "E-commerce que desistiu do email", desc: "Você tem uma lista de 10, 20, 50 mil contatos que não usa porque nunca conseguiu provar que email funciona. A Cliqo muda o benchmark — não taxa de abertura, mas receita atribuída por campanha." },
    { title: "B2B com produto complexo", desc: "Seu produto precisa ser explicado, não apenas mostrado. Um quiz que recomenda o equipamento certo no email elimina 80% das perguntas que sua equipe responde hoje no WhatsApp." },
    { title: "Cursos, eventos e serviços", desc: "Sua conversão é uma inscrição, não uma compra. Formulários AMP dentro do email eliminam o passo que faz sua audiência desistir — a nova aba." },
  ];
  return (
    <section id="clientes" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <motion.h2 {...fadeUp} className="max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
          Cliqo é para quem sabe que tem <span className="text-primary">mais a extrair</span> do email.
        </motion.h2>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-white p-7"
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FOUNDER ---------- */
function Founder() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 opacity-20">
        <PulseRingsStatic className="h-[600px] w-[600px] text-primary" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 py-10 md:py-16">
        <motion.h2 {...fadeUp} className="text-3xl font-bold tracking-tight md:text-5xl">
          Por que a Cliqo existe.
        </motion.h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-300 md:text-lg">
          <motion.p {...fadeUp}>
            Durante anos gerenciamos email marketing para empresas brasileiras. A rotina: disparar, esperar, comemorar taxa de abertura, checar vendas, repetir. Um dia um cliente perguntou: "As vendas subiram também?" Não tinham.
          </motion.p>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.08 }}>
            Em 2021 descobrimos que parte das aberturas que reportávamos eram iPhones que nem leram o email. A métrica que usávamos para provar ROI era, em parte, fabricada.
          </motion.p>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.16 }}>
            Encontramos o AMP for Email — disponível desde 2019, ignorado por todo o mercado brasileiro. Mandamos o primeiro teste. Vinte minutos depois: "Como vocês fizeram o email ter carrossel?" Essa ligação foi a Cliqo.
          </motion.p>
        </div>
      </div>
    </section>
  );
}


/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  const [form, setForm] = useState({ nome: "", email: "", empresa: "" });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.nome || !form.email || !form.empresa) {
      toast.error("Preencha todos os campos.");
      return;
    }
    const subject = encodeURIComponent("Nova solicitação de demo — Cliqo");
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nEmail: ${form.email}\nEmpresa: ${form.empresa}`
    );
    window.location.href = `mailto:contato@cliqo.io?subject=${subject}&body=${body}`;
    toast.success("Demo agendada! Entraremos em contato em até 24h.");
    setForm({ nome: "", email: "", empresa: "" });
  }

  return (
    <section id="demo" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <PulseRingsStatic className="absolute -right-20 -top-20 h-[400px] w-[400px] text-white" />
        <PulseRingsStatic className="absolute -bottom-32 -left-20 h-[400px] w-[400px] text-white" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-10 md:py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            O cliente já está no email. Falta só a ferramenta certa.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/85">
            Agende uma demo de 30 minutos e veja um email AMP funcionando no seu Gmail em tempo real.
          </p>
        </div>
        <form onSubmit={onSubmit} className="rounded-2xl bg-white p-7 text-foreground shadow-2xl">
          <div className="space-y-4">
            <Field label="Nome" value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} />
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <Field label="Empresa" value={form.empresa} onChange={(v) => setForm({ ...form, empresa: v })} />
            <button type="submit" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90">
              Agendar demo gratuita <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-slate-700">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}
