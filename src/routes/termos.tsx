import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  component: TermosPage,
  head: () => ({
    meta: [
      { title: "Termos de Uso — Cliqo" },
      { name: "description", content: "Termos de uso da plataforma Cliqo de email marketing interativo." },
    ],
  }),
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-foreground mb-3">{title}</h2>
      <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

function TermosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-24">

        <p className="text-sm text-muted-foreground mb-4">Última atualização: 29 de maio de 2026</p>
        <h1 className="text-4xl font-bold tracking-tight">Termos de Uso</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Ao criar uma conta no <strong className="text-foreground">Cliqo</strong>, você concorda
          com estes Termos de Uso e com nossa{" "}
          <a href="/privacidade" className="text-primary underline underline-offset-4">
            Política de Privacidade
          </a>
          .
        </p>

        <Section title="1. Aceitação">
          <p>
            O uso da plataforma Cliqo implica a aceitação integral e irrestrita destes Termos.
            Caso não concorde com qualquer disposição, não utilize o serviço.
          </p>
        </Section>

        <Section title="2. Serviço">
          <p>
            Cliqo fornece infraestrutura para envio de emails marketing (incluindo AMP for Email)
            e mensagens WhatsApp Business. O serviço está em <strong className="text-foreground">acesso restrito</strong> —
            cadastros novos passam por aprovação manual durante o MVP.
          </p>
        </Section>

        <Section title="3. Uso aceitável">
          <p>Você concorda em <strong className="text-foreground">não</strong>:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Enviar spam (emails para listas sem consentimento prévio do destinatário);</li>
            <li>Enviar conteúdo ilegal, fraudulento, difamatório ou que viole direitos de terceiros;</li>
            <li>Disparar para listas compradas ou raspadas;</li>
            <li>Burlar sistemas anti-abuso (DKIM, SPF, DMARC, opt-out);</li>
            <li>Sobrecarregar nossa infraestrutura intencionalmente.</li>
          </ul>
          <p>
            Violar estas regras resulta em suspensão imediata sem reembolso e pode acarretar
            responsabilização civil e criminal conforme a LGPD (Lei 13.709/2018) e o Marco Civil
            da Internet (Lei 12.965/2014).
          </p>
        </Section>

        <Section title="4. Pagamento">
          <p>
            Durante o MVP, o serviço pode ser oferecido gratuitamente ou com pricing experimental.
            O pricing definitivo será comunicado com no mínimo <strong className="text-foreground">30 dias</strong> de
            antecedência antes de qualquer cobrança.
          </p>
        </Section>

        <Section title="5. Cancelamento">
          <p>
            Você pode cancelar a qualquer momento via <strong className="text-foreground">Settings → Cancelar conta</strong>.
            Os dados são mantidos por 30 dias após o cancelamento para eventual reativação e,
            em seguida, excluídos permanentemente — exceto os dados que devemos manter por
            obrigação legal ou fiscal.
          </p>
        </Section>

        <Section title="6. Limitação de responsabilidade">
          <p>
            Cliqo não se responsabiliza por: lucros cessantes, taxas de conversão de campanhas,
            quedas pontuais de plataformas terceiras (Gmail, WhatsApp, AWS), nem por conteúdo
            enviado por usuários. Nossa responsabilidade máxima é limitada ao valor pago nos
            últimos 12 meses.
          </p>
        </Section>

        <Section title="7. Propriedade intelectual">
          <p>
            Você mantém propriedade total sobre o conteúdo das suas campanhas e listas. Cliqo
            mantém propriedade sobre o software, design da plataforma e templates fornecidos.
          </p>
        </Section>

        <Section title="8. Foro">
          <p>
            Qualquer disputa será resolvida na comarca de São Paulo — SP, com renúncia expressa
            a qualquer outro, por mais privilegiado que seja.
          </p>
        </Section>

        <Section title="9. Contato">
          <p>
            Dúvidas:{" "}
            <a href="mailto:contato@cliqo.io" className="text-primary underline underline-offset-4">
              contato@cliqo.io
            </a>
          </p>
        </Section>

      </div>
    </main>
  );
}
