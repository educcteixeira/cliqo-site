import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  component: PrivacidadePage,
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Cliqo" },
      { name: "description", content: "Como a Cliqo coleta, usa e protege seus dados pessoais." },
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

function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-24">

        <p className="text-sm text-muted-foreground mb-4">Última atualização: maio de 2026</p>
        <h1 className="text-4xl font-bold tracking-tight">Política de Privacidade</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Esta Política de Privacidade descreve como a <strong className="text-foreground">Cliqo</strong> coleta,
          usa, armazena e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados
          Pessoais (LGPD — Lei nº 13.709/2018) e demais normas aplicáveis.
        </p>

        <Section title="1. Quem somos">
          <p>
            A Cliqo é uma plataforma brasileira de email marketing interativo com AMP for Email, operada por
            Eduardo Teixeira (CNPJ em constituição), com sede no Brasil. Para fins da LGPD, a Cliqo atua como
            <strong className="text-foreground"> controladora</strong> dos dados de seus clientes (pessoas que
            contratam a plataforma) e como <strong className="text-foreground">operadora</strong> dos dados dos
            destinatários das campanhas enviadas por esses clientes.
          </p>
          <p>
            Contato do encarregado de dados (DPO):{" "}
            <a href="mailto:privacidade@cliqo.io" className="text-primary underline underline-offset-4">
              privacidade@cliqo.io
            </a>
          </p>
        </Section>

        <Section title="2. Dados que coletamos">
          <p><strong className="text-foreground">2.1 Dados de cadastro e conta</strong></p>
          <p>Ao criar uma conta na Cliqo, coletamos: nome, endereço de e-mail, nome da empresa, senha
          (armazenada com hash) e informações de faturamento quando aplicável.</p>

          <p><strong className="text-foreground">2.2 Dados de uso da plataforma</strong></p>
          <p>Registramos logs de acesso, ações realizadas no editor de emails, templates criados, campanhas
          configuradas e interações com a interface. Esses dados são usados para melhoria do serviço e suporte.</p>

          <p><strong className="text-foreground">2.3 Dados de envio de campanhas</strong></p>
          <p>Para enviar campanhas, os clientes nos fornecem listas de destinatários (endereços de e-mail e
          atributos de personalização). Tratamos esses dados exclusivamente em nome do cliente e conforme
          suas instruções, atuando como operadores.</p>

          <p><strong className="text-foreground">2.4 Dados de desempenho de campanhas</strong></p>
          <p>Coletamos métricas como entregas, cliques, respostas em formulários AMP e descadastros, associadas
          às campanhas de cada cliente.</p>

          <p><strong className="text-foreground">2.5 Dados técnicos</strong></p>
          <p>Endereço IP, tipo de navegador, sistema operacional e dados de sessão coletados automaticamente
          para segurança e diagnóstico.</p>
        </Section>

        <Section title="3. Como usamos seus dados">
          <p>Utilizamos seus dados para:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Criar e gerenciar sua conta na plataforma;</li>
            <li>Processar e entregar campanhas de email em seu nome;</li>
            <li>Fornecer suporte técnico e atendimento ao cliente;</li>
            <li>Melhorar funcionalidades e corrigir problemas da plataforma;</li>
            <li>Enviar comunicações sobre o serviço (atualizações, alertas de conta);</li>
            <li>Cumprir obrigações legais e regulatórias;</li>
            <li>Prevenir fraudes e garantir a segurança da plataforma.</li>
          </ul>
        </Section>

        <Section title="4. Base legal (LGPD)">
          <p>O tratamento dos seus dados é fundamentado nas seguintes bases legais:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li><strong className="text-foreground">Execução de contrato</strong> — para prestação dos serviços contratados (art. 7º, V);</li>
            <li><strong className="text-foreground">Legítimo interesse</strong> — para segurança, prevenção de fraudes e melhoria do serviço (art. 7º, IX);</li>
            <li><strong className="text-foreground">Cumprimento de obrigação legal</strong> — quando exigido por lei (art. 7º, II);</li>
            <li><strong className="text-foreground">Consentimento</strong> — para comunicações de marketing sobre a Cliqo, quando aplicável (art. 7º, I).</li>
          </ul>
        </Section>

        <Section title="5. Compartilhamento de dados">
          <p>
            Não vendemos seus dados. Compartilhamos informações apenas com prestadores de serviço essenciais
            à operação da plataforma, sempre sob contrato e com obrigações de confidencialidade:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li><strong className="text-foreground">Amazon Web Services (AWS / SES)</strong> — infraestrutura de cloud e envio de emails, servidores na região sa-east-1 (São Paulo);</li>
            <li><strong className="text-foreground">Supabase</strong> — banco de dados e autenticação;</li>
            <li><strong className="text-foreground">Vercel</strong> — hospedagem da plataforma web.</li>
          </ul>
          <p>
            Poderemos divulgar dados quando exigido por ordem judicial, autoridade competente ou obrigação
            legal, notificando o titular sempre que legalmente permitido.
          </p>
        </Section>

        <Section title="6. Retenção de dados">
          <p>
            Mantemos seus dados pelo tempo necessário à prestação dos serviços e pelo prazo legal aplicável.
            Após o encerramento da conta:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Dados de conta e campanhas: excluídos em até <strong className="text-foreground">90 dias</strong>;</li>
            <li>Logs de acesso: retidos por <strong className="text-foreground">6 meses</strong> conforme o Marco Civil da Internet (Lei 12.965/2014);</li>
            <li>Dados fiscais e de faturamento: retidos por <strong className="text-foreground">5 anos</strong> conforme legislação tributária.</li>
          </ul>
        </Section>

        <Section title="7. Seus direitos (LGPD)">
          <p>Como titular de dados, você tem direito a:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Confirmar a existência de tratamento dos seus dados;</li>
            <li>Acessar os dados que temos sobre você;</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
            <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>Portabilidade dos seus dados para outro fornecedor;</li>
            <li>Revogar consentimento a qualquer momento;</li>
            <li>Obter informações sobre com quem compartilhamos seus dados.</li>
          </ul>
          <p>
            Para exercer qualquer desses direitos, entre em contato pelo e-mail{" "}
            <a href="mailto:privacidade@cliqo.io" className="text-primary underline underline-offset-4">
              privacidade@cliqo.io
            </a>
            . Responderemos em até 15 dias úteis.
          </p>
        </Section>

        <Section title="8. Cookies e rastreamento">
          <p>
            Utilizamos cookies essenciais para autenticação e funcionamento da plataforma. Não utilizamos
            cookies de rastreamento de terceiros para fins publicitários. Você pode configurar seu navegador
            para recusar cookies, mas isso pode afetar funcionalidades da plataforma.
          </p>
        </Section>

        <Section title="9. Segurança">
          <p>
            Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não
            autorizado, perda ou divulgação indevida, incluindo: criptografia em trânsito (TLS), autenticação
            segura, controle de acesso por função e monitoramento de atividades suspeitas.
          </p>
        </Section>

        <Section title="10. Alterações nesta política">
          <p>
            Podemos atualizar esta política periodicamente. Alterações relevantes serão comunicadas por
            e-mail com antecedência mínima de 15 dias. O uso continuado da plataforma após a vigência das
            alterações implica aceitação da nova versão.
          </p>
        </Section>

        <Section title="11. Contato e reclamações">
          <p>
            Para dúvidas, solicitações ou reclamações sobre privacidade, entre em contato:{" "}
            <a href="mailto:privacidade@cliqo.io" className="text-primary underline underline-offset-4">
              privacidade@cliqo.io
            </a>
          </p>
          <p>
            Você também pode registrar reclamações perante a Autoridade Nacional de Proteção de Dados (ANPD)
            em{" "}
            <a
              href="https://www.gov.br/anpd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4"
            >
              www.gov.br/anpd
            </a>
            .
          </p>
        </Section>

      </div>
    </main>
  );
}
