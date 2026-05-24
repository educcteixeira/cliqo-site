import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/roadmap")({
  component: RoadmapPage,
  head: () => ({ meta: [{ title: "Roadmap — Cliqo" }] }),
});

function RoadmapPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight">Roadmap</h1>
        <p className="mt-4 text-muted-foreground">Em breve.</p>
      </div>
    </main>
  );
}
