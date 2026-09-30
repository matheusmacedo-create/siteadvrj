# MBL Advocacia — Landing Page

Landing page estática (HTML + CSS + JS, sem dependências) para a MBL Advocacia,
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
