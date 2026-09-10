# Hochburg — Landing Page

Landing page de página única da **Hochburg**. Não é só mais uma agência de site: o foco é
presença na era da IA — sites institucionais, landing pages e lojas virtuais rápidos
(PageSpeed 90%+), seguros e prontos para serem lidos e citados por Google AI Overviews
(Gemini), ChatGPT e Perplexity. Landing pages a partir de R$750, sites institucionais a
partir de R$1.200 e lojas virtuais a partir de R$2.500, todos com 1 ano de suporte.

Seções: Abordagem · Problema · Produtos · Padrão Hochburg · Busca com IA · Método ·
Segurança · Contato. Inclui parceria com a Origenow, links sociais (Instagram, Facebook,
WhatsApp, TikTok), botão flutuante de WhatsApp e formulário de contato que abre
WhatsApp + e-mail pré-preenchidos.

## Arquivos

- `index.html` — a página (HTML + CSS + JS inline, sem dependências além do Google Fonts).
- `robots.txt` — libera buscadores e crawlers de IA (GPTBot, ClaudeBot, PerplexityBot etc.) e aponta o sitemap.
- `llm.txt` — resumo da Hochburg (posicionamento, produtos, preços, parceria, trabalhos, contato) para modelos de IA.
- `sitemap.xml` — mapa do site (home).
- `CNAME` — domínio customizado `hochburg.com.br`.

Links sociais (Instagram, Facebook, TikTok) no rodapé estão com `href` provisório
(`https://instagram.com/` etc.) — trocar pelos perfis reais da Hochburg.

## Publicar no GitHub Pages

```bash
gh repo create landing-page-hochburg --public --source=. --remote=origin --push
gh api -X POST repos/:owner/landing-page-hochburg/pages -f "source[branch]=main" -f "source[path]=/"
```

O site fica em: `https://hochburg.com.br/` (ou `https://<seu-usuario>.github.io/landing-page-hochburg/` sem o CNAME).
