import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Cliqo" },
      { name: "description", content: "Política de privacidade da Cliqo em conformidade com a LGPD." },
      { property: "og:title", content: "Política de Privacidade — Cliqo" },
      { property: "og:description", content: "Política de privacidade da Cliqo em conformidade com a LGPD." },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Política de Privacidade</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          <strong>Última atualização:</strong> 19 de maio de 2026
        </p>

        <div className="prose prose-slate mt-10 max-w-none text-[15px] leading-relaxed text-slate-700">
          <Section title="1. Identificação do Controlador">
            <p>
              A presente Política de Privacidade é aplicável à Cliqo, plataforma de automação de marketing digital operada por Eduardo Carlos Costa Teixeira, com sede no Brasil. Para dúvidas sobre esta política ou sobre o tratamento dos seus dados, entre em contato pelo e-mail:{" "}
              <a href="mailto:privacidade@cliqo.io" className="text-primary hover:underline">privacidade@cliqo.io</a>
            </p>
          </Section>

          <Section title="2. Quais dados coletamos">
            <p>Coletamos os seguintes dados pessoais:</p>
            <List items={[
              "Dados de identificação: nome, e-mail, telefone, nome da empresa",
              "Dados de uso: interações com emails enviados pela plataforma (abertura, cliques, respostas a formulários AMP)",
              "Dados de navegação: páginas visitadas no site, tempo de sessão, dispositivo",
              "Dados de cobrança: informações de pagamento (processadas por terceiros certificados PCI-DSS)",
            ]} />
          </Section>

          <Section title="3. Como utilizamos os dados">
            <p>Utilizamos os dados coletados para:</p>
            <List items={[
              "Operar e melhorar a plataforma Cliqo",
              "Enviar comunicações sobre o serviço contratado",
              "Processar pagamentos e emitir documentos fiscais",
              "Cumprir obrigações legais e regulatórias",
              "Personalizar a experiência do usuário",
              "Gerar relatórios de desempenho de campanhas",
            ]} />
          </Section>

          <Section title="4. Base legal (LGPD)">
            <p>O tratamento dos dados pessoais é realizado com base nas seguintes bases legais previstas na Lei 13.709/2018 (LGPD):</p>
            <List items={[
              "Execução de contrato (Art. 7º, V): para prestação do serviço contratado",
              "Consentimento (Art. 7º, I): para comunicações de marketing",
              "Legítimo interesse (Art. 7º, IX): para melhoria do serviço e segurança",
              "Cumprimento de obrigação legal (Art. 7º, II): quando exigido por lei",
            ]} />
          </Section>

          <Section title="5. Compartilhamento de dados">
            <p>Não vendemos dados pessoais a terceiros. Compartilhamos dados apenas com:</p>
            <List items={[
              "Provedores de infraestrutura (servidores, banco de dados) sob acordos de confidencialidade",
              "Processadores de pagamento para cobrança dos serviços",
              "Autoridades públicas, quando exigido por lei",
            ]} />
          </Section>

          <Section title="6. Dados de destinatários de email (clientes da Cliqo)">
            <p>
              A Cliqo atua como <strong>operadora</strong> de dados pessoais dos destinatários dos emails enviados pelos nossos clientes. Os nossos clientes são os <strong>controladores</strong> desses dados. Tratamos esses dados exclusivamente conforme instruções dos nossos clientes e de acordo com os termos de serviço.
            </p>
          </Section>

          <Section title="7. Tecnologia AMP for Email">
            <p>
              Os emails enviados pela plataforma Cliqo podem conter tecnologia AMP for Email do Google. As interações realizadas dentro dos emails (respostas a formulários, cliques em carrosséis, resgates de cashback) são registradas nos servidores da Cliqo e dos clientes contratantes, conforme a finalidade de cada campanha.
            </p>
          </Section>

          <Section title="8. Retenção de dados">
            <List items={[
              "Dados de conta: mantidos enquanto o contrato estiver ativo + 5 anos após encerramento",
              "Dados de campanha: mantidos por 2 anos",
              "Logs de acesso: mantidos por 6 meses (conforme Marco Civil da Internet)",
            ]} />
          </Section>

          <Section title="9. Direitos do titular (LGPD)">
            <p>Em conformidade com a LGPD, você tem direito a:</p>
            <List items={[
              "Confirmar a existência de tratamento dos seus dados",
              "Acessar os seus dados",
              "Corrigir dados incompletos ou desatualizados",
              "Solicitar anonimização, bloqueio ou eliminação de dados desnecessários",
              "Portabilidade dos seus dados",
              "Revogar consentimento a qualquer momento",
              "Opor-se ao tratamento",
            ]} />
            <p>Para exercer qualquer um desses direitos, envie e-mail para: <a href="mailto:privacidade@cliqo.io" className="text-primary hover:underline">privacidade@cliqo.io</a></p>
          </Section>

          <Section title="10. Cookies e rastreamento">
            <p>Nosso site utiliza cookies para:</p>
            <List items={[
              "Funcionamento técnico essencial",
              "Análise de navegação (analytics)",
              "Personalização da experiência",
            ]} />
            <p>Você pode gerenciar as preferências de cookies no seu navegador.</p>
          </Section>

          <Section title="11. Pixel de rastreamento">
            <p>
              A Cliqo oferece um pixel de rastreamento JavaScript que nossos clientes instalam em seus sites. Esse pixel captura dados comportamentais de navegação para alimentar a segmentação de campanhas. Os dados coletados pelo pixel são propriedade do cliente que o instalou.
            </p>
          </Section>

          <Section title="12. Segurança">
            <p>Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição, incluindo:</p>
            <List items={[
              "Criptografia TLS em trânsito",
              "Criptografia em repouso",
              "Controle de acesso baseado em função (RBAC)",
              "Monitoramento de segurança contínuo",
            ]} />
          </Section>

          <Section title="13. Alterações nesta política">
            <p>
              Podemos atualizar esta política periodicamente. Notificaremos usuários sobre mudanças significativas por e-mail ou aviso no painel da plataforma. A data da última atualização está indicada no topo desta página.
            </p>
          </Section>

          <Section title="14. Contato">
            <p>Para questões relacionadas a privacidade e proteção de dados:</p>
            <List items={[
              <><strong>E-mail:</strong> <a href="mailto:privacidade@cliqo.io" className="text-primary hover:underline">privacidade@cliqo.io</a></>,
              <><strong>Site:</strong> www.cliqo.io</>,
            ]} />
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="ml-5 list-disc space-y-1.5">
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
  );
}