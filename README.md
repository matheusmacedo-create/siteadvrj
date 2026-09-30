# MBL Advocacia Estratégica — Landing Page

Landing page estática (HTML + CSS + JS, sem dependências) para a MBL Advocacia Estratégica,
escritório no Rio de Janeiro especializado em consultoria e contencioso.
Identidade visual preto e dourado.

## Como visualizar

Abra `index.html` no navegador, ou rode um servidor local:

```bash
python3 -m http.server 8000
```

## O que personalizar antes de publicar

| Item | Onde |
|------|------|
| Número do WhatsApp (`5521900000000`) | `script.js` (constante `WHATSAPP`) e links `wa.me` no `index.html` |
| E-mail, endereço e horário | Seção `#contato` no `index.html` |
| Número da OAB/RJ | Rodapé no `index.html` |
| Textos das áreas de atuação | Seção `#areas` no `index.html` |

> Lembrete: a publicidade na advocacia segue o Provimento 205/2021 da OAB —
> evite promessas de resultado e mantenha o tom informativo.

## Deploy

Por ser um site estático, pode ser publicado em Vercel, Netlify, GitHub Pages
ou Hostinger, bastando enviar os arquivos da raiz.

## Identidade visual

Baseada no protótipo aprovado (nome corrigido de "MLB" para **MBL**):

- Logo "MBL" com curva dourada, desenhado em SVG (`#logo` no topo do `index.html`)
- Fontes: Cinzel (títulos) e Montserrat (texto), via Google Fonts
- Assinatura: "Experiência a favor do seu futuro" · Soluções | Negócios | Resultados
- Ilustração do Pão de Açúcar ao pôr do sol em SVG (`#rio`); pode ser trocada por foto real
