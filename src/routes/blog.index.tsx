import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { posts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog — Cliqo" },
      { name: "description", content: "Conteúdo sobre AMP for Email, email marketing interativo e o futuro da caixa de entrada." },
      { property: "og:title", content: "Blog — Cliqo" },
      { property: "og:description", content: "Conteúdo sobre AMP for Email, email marketing interativo e o futuro da caixa de entrada." },
    ],
  }),
});

function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-12">
          <p className="text-sm font-medium text-primary">Blog</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Ideias sobre o email do futuro</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            AMP for Email, casos reais e o que está mudando na caixa de entrada.
          </p>
        </div>
        <div className="mx-auto max-w-3xl px-6 pb-24">
          <ul className="divide-y divide-border border-y border-border">
            {posts.map((p) => (
              <li key={p.slug} className="py-8">
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-foreground">{p.category}</span>
                    <time dateTime={p.dateISO}>{p.date}</time>
                    <span>·</span>
                    <span>{p.author}</span>
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-primary">Ler post →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}