import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { posts } from "@/lib/blog-posts";

type PostContent = {
  title: string;
  date: string;
  dateISO: string;
  author: string;
  category: string;
  body: React.ReactNode;
};

const content: Record<string, PostContent> = {
  "amp-email-mini-app": {
    title: "O email virou mini-app. Sua marca ainda não sabe disso.",
    date: "20 de maio de 2026",
    dateISO: "2026-05-20",
    author: "Eduardo Teixeira",
    category: "Educação",
    body: (
      <>
        <p>
          Empresas que já adotam AMP for Email estão registrando até 5x mais conversões do que com emails
          tradicionais. No Brasil, quase ninguém ainda usa. Isso não é problema — é uma janela aberta.
        </p>

        <h2>O email que você conhece está travado em 1999</h2>
        <p>
          Pense em como funciona um email de e-commerce hoje. Você recebe uma oferta, se interessa, clica no
          botão, abre o navegador, espera a página carregar, encontra o produto (ou não), e aí decide se compra.
        </p>
        <p>
          Cada etapa desse caminho é uma oportunidade de perda. O cliente esquece o que queria. A página demora
          a abrir. O Wi-Fi trava. A vida acontece.
        </p>
        <p>
          O email de hoje é estático: imagem, texto, botão. Funciona como um outdoor — bonito, mas só aponta
          para outro lugar. Toda a ação real acontece fora dele.
        </p>
        <p>Isso nunca foi uma escolha de design. Era uma limitação técnica. E essa limitação acabou.</p>

        <h2>AMP for Email: o email que age, não só aponta</h2>
        <p>
          AMP for Email é uma tecnologia desenvolvida pelo Google, disponível desde 2019, que transforma o email
          em uma experiência dinâmica e interativa — sem precisar sair da caixa de entrada.
        </p>
        <p>Com AMP, o email deixa de ser um outdoor e vira um mini-app. O cliente pode:</p>
        <ul>
          <li>Responder um quiz de recomendação de produto e receber a sugestão certa sem abrir o navegador</li>
          <li>Girar uma roleta de desconto e resgatar o cupom ali mesmo</li>
          <li>Navegar por um carrossel de produtos com preços atualizados em tempo real</li>
          <li>Confirmar cashback ou resgatar giftback sem nenhum redirect</li>
          <li>Votar em uma enquete ou dar uma nota NPS direto no email</li>
        </ul>
        <p>Tudo dentro do Gmail. Sem clique para fora. Sem nova aba.</p>

        <h2>Como funciona na prática</h2>
        <p>
          O AMP for Email usa componentes especiais que funcionam como blocos de interação dentro do código do
          email. Quando o Gmail recebe um email AMP, ele renderiza esses componentes como se fosse uma página
          web leve.
        </p>
        <p>O resultado: o assinante vê um email que responde às ações dele em tempo real.</p>
        <p>
          Clicou na opção "Vinho tinto"? O email mostra as garrafas de vinho tinto. Girou a roleta? O prêmio
          aparece e o botão de resgate fica ativo. Preencheu o formulário? A tela de confirmação aparece — sem
          recarregar nada.
        </p>
        <p>
          Hoje, Gmail, Yahoo Mail e Mail.ru suportam AMP for Email. Para quem ainda abre o email em um cliente
          não compatível, o email exibe automaticamente uma versão HTML tradicional — sem quebrar nada.
        </p>

        <h2>O que os dados dizem</h2>
        <p>Os resultados de quem já adota AMP for Email no mundo são consistentes:</p>
        <ul>
          <li><strong>Preplaced</strong> (ed-tech): 5x mais conversões com roleta de desconto</li>
          <li><strong>foundit</strong> (jobs): +400% em cadastros com formulário no email</li>
          <li><strong>Razorpay</strong> (fintech): +257% de respostas em pesquisas</li>
          <li><strong>BluSmart</strong> (mobilidade): +35% de engajamento com quiz interativo</li>
          <li><strong>bigbasket</strong> (supermercado): 6x mais participação em enquetes</li>
        </ul>
        <p>
          O padrão é o mesmo em todos os casos: quando você elimina o atrito entre o interesse e a ação, as
          pessoas agem.
        </p>

        <h2>Por que quase ninguém no Brasil usa ainda</h2>
        <p>Existem dois motivos principais para a baixa adoção no Brasil.</p>
        <p>
          O primeiro é técnico: para enviar emails AMP, a empresa precisa ter o domínio aprovado na whitelist
          do Google. O processo existe, é gratuito, mas exige configuração de DNS (DKIM, SPF, DMARC) e o envio
          de um email de teste. Muitas empresas travam exatamente aqui.
        </p>
        <p>
          O segundo é de conhecimento: boa parte dos profissionais de marketing brasileiro simplesmente não
          sabe que AMP for Email existe. A tecnologia é pouco discutida nos eventos e conteúdos do setor no
          país.
        </p>
        <p>Esse cenário vai mudar. A pergunta é quem vai estar na frente quando mudar.</p>

        <h2>O cliente decide dentro do email</h2>
        <p>
          A premissa do AMP for Email é simples: o melhor momento para o cliente agir é agora, enquanto está
          lendo o email. Cada redirecionamento é uma saída do contexto. Cada nova aba aberta é uma chance de
          distração.
        </p>
        <p>
          Quando a ação acontece dentro do email — a escolha, o resgate, a resposta — a decisão já foi tomada.
          O que vem depois é só a consequência.
        </p>
        <p>
          Esse é o princípio que guia tudo que a Cliqo faz. Se você quer entender como isso funciona na prática
          para o seu negócio, fale com a gente em{" "}
          <a href="https://cliqo.io" className="text-primary underline-offset-4 hover:underline">cliqo.io</a>.
        </p>
      </>
    ),
  },
};

export const Route = createFileRoute("/blog/$slug")({
  component: PostPage,
  loader: ({ params }) => {
    const post = content[params.slug];
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Post — Cliqo" }] };
    const desc =
      "Empresas que já adotam AMP for Email estão registrando até 5x mais conversões do que com emails tradicionais.";
    return {
      meta: [
        { title: `${post.title} — Cliqo` },
        { name: "description", content: desc },
        { property: "og:title", content: post.title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">Post não encontrado</h1>
        <p className="mt-3 text-muted-foreground">Esse post não existe ou foi movido.</p>
        <Link to="/blog" className="mt-6 inline-block text-primary hover:underline">
          ← Voltar para o blog
        </Link>
      </main>
      <Footer />
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">Algo deu errado</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
          Tentar novamente
        </button>
      </main>
      <Footer />
    </div>
  ),
});

function PostPage() {
  const { post } = Route.useLoaderData();
  void posts;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <article className="mx-auto max-w-3xl px-6 pt-16 pb-24">
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">
            ← Blog
          </Link>
          <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-foreground">{post.category}</span>
            <time dateTime={post.dateISO}>{post.date}</time>
            <span>·</span>
            <span>{post.author}</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">{post.title}</h1>
          <div className="post-body mt-10 text-[1.05rem] leading-relaxed text-foreground/85 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_p]:mt-5 [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul>li]:mt-2 [&_strong]:font-semibold [&_strong]:text-foreground">
            {post.body}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}