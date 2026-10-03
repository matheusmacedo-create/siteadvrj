# LMB Advocacia Estratégica — Landing Page

Site estático (HTML + CSS + JS, sem dependências nem etapa de build) da LMB
Advocacia Estratégica, escritório no Rio de Janeiro com atuação em consultoria
e contencioso. Identidade visual preto e dourado.

## Como visualizar

```bash
python3 -m http.server 8000
```

Depois acesse http://localhost:8000.

## Estrutura

- `index.html` — página principal, com todo o CSS embutido em `<style>` (sem requisição que bloqueie a renderização)
- `script.js` — animação de entrada, menu mobile e envio do formulário pelo WhatsApp
- `404.html` e `privacidade.html` — páginas secundárias, estilizadas por `assets/pagina.css`
- `fonts/` — Cinzel e Montserrat auto-hospedadas (subset latin, variáveis; licença SIL OFL em `fonts/OFL.txt`)
- `assets/` — favicon, ícones (apple-touch-icon, 192, 512) e `og-image.jpg` (prévia de compartilhamento 1200×630)
- `robots.txt`, `sitemap.xml`, `site.webmanifest` — SEO e ícones
- `vercel.json` (Vercel) e `.htaccess` (Hostinger/Apache) — redirecionamento `/index.html` → `/`, cache e cabeçalhos
- `.vercelignore` — impede que `README.md` e `.htaccess` sejam publicados na Vercel

## Antes de publicar (obrigatório)

Todos os dados abaixo são provisórios. A identificação com nome e número de
inscrição na OAB é exigida pelo Código de Ética (art. 44).

| Item | Onde |
|------|------|
| WhatsApp (`5521900000000`) | `index.html`: os 4 links `wa.me` (botão do topo, CTA "Falar com a LMB", lista de `#contato` e botão flutuante `.wa-float`). O `script.js` lê o número do botão flutuante, não há constante a editar |
| Telefone visível `(21) 90000-0000` | `index.html`: lista de `#contato`, link `tel:` do rodapé (`.footer__nap`) e `"telephone"` no JSON-LD |
| E-mail | `index.html`: `#contato` (`mailto:`) e `"email"` no JSON-LD; `privacidade.html` (direitos do titular) |
| Endereço e CEP | `index.html`: `<address>` em `#contato`, `.footer__nap` e `"address"` no JSON-LD. Se o escritório não for no Centro, ajuste também a resposta 1 do FAQ, o texto de `#contato` e o JSON-LD |
| Horário | `index.html`: lista de `#contato` e `"openingHoursSpecification"` no JSON-LD |
| Razão social e nº da OAB/RJ (`000.000`) | `index.html`: `.footer__legal`, `"legalName"` e `"identifier"` no JSON-LD; rodapé (`.foot`) de `404.html` e `privacidade.html`; 1º parágrafo de `privacidade.html` (com CNPJ). Se não houver sociedade registrada, use o nome completo do advogado responsável |
| Domínio (`www.lmbadvocacia.com.br`, **ainda não registrado**) | `index.html`: `canonical`, `og:url`, `og:image` e todos os `@id`/`url` do JSON-LD; canonical de `privacidade.html`; `robots.txt`; `sitemap.xml`; regra comentada de `www` no `.htaccess` |

Para conferir se sobrou algum dado provisório:

```bash
grep -rnE "5521900000000|90000-0000|000\.000|Rio Branco, 000|20000-000|00\.000\.000|Razão social registrada|lmbadvocacia" --exclude=README.md --exclude-dir=.git .
```

Ao editar textos, mantenha sincronizados:

- Títulos das áreas em `#atuacao`, as opções do campo "Assunto" do formulário e `"knowsAbout"` no JSON-LD
- Perguntas e respostas de `#faq` e o `FAQPage` do JSON-LD (o texto precisa ser idêntico)

## Publicidade (Provimento OAB 205/2021)

Os textos foram revisados para manter tom informativo: sem autoelogio
("eficiência reconhecida"), sem promessa de rapidez ou de resultado e sem a
palavra "especialista". Mantenha esse cuidado em novos textos e peça a revisão
de compliance do escritório antes de publicar.

## Deploy

- **Vercel:** importe o repositório; `vercel.json` e `.vercelignore` já estão configurados. Defina o domínio principal (www ou sem www) e redirecione o outro.
- **Hostinger:** envie os arquivos da raiz, **exceto** `README.md`, `.git`, `.vercelignore` e `vercel.json`. Ative "Forçar HTTPS" no hPanel e, depois que o domínio apontar para a hospedagem, descomente a regra de `www` no `.htaccess`.
- Depois do lançamento: envie o `sitemap.xml` ao Google Search Console, crie o Perfil da Empresa no Google com exatamente o mesmo nome, endereço e telefone, e teste a prévia de compartilhamento no Facebook Sharing Debugger. Se trocar a `og-image.jpg`, renomeie o arquivo para atualizar o cache das redes.
- Não incorpore mapas ou widgets de terceiros (Google Maps etc.): eles derrubam o desempenho. Prefira um link "Ver no mapa".

## Identidade visual

- Logo "LMB" com curva dourada, em SVG com as letras em contorno (`<symbol id="logo">` em `index.html`, `404.html` e `privacidade.html`; o favicon, os ícones e a `og-image.jpg` são exportações dele)
- Fontes: Cinzel (títulos) e Montserrat (texto)
- Assinatura: "Experiência a favor do seu futuro" · Soluções | Negócios | Resultados
- Ilustração do Pão de Açúcar ao pôr do sol em SVG (`<symbol id="rio">`); pode ser trocada por foto real
- Ornamentos clássicos discretos: pórtico de duas colunas (seção Visão), ícones de nível, esquadro e prumo (Método) e vinheta de três pontos no rodapé
