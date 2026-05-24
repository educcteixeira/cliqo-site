import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  component: TermosPage,
  head: () => ({ meta: [{ title: "Termos de uso — Cliqo" }] }),
});

function TermosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight">Termos de uso</h1>
        <p className="mt-4 text-muted-foreground">Em breve.</p>
      </div>
    </main>
  );
}
