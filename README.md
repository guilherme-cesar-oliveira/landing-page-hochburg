# Hochburg — Landing Page

Landing page de página única da **Hochburg**. Não é só mais uma agência de site: o foco é
presença na era da IA, com sites institucionais, landing pages e lojas virtuais rápidos
(PageSpeed 90%+), seguros e prontos para serem lidos e citados por Google AI Overviews
(Gemini), ChatGPT e Perplexity. Landing pages a partir de R$750, sites institucionais a
partir de R$1.200 e lojas virtuais a partir de R$2.500, todos com 1 ano de suporte.
Também oferece otimização de velocidade de site WordPress existente a partir de R$150,
com análise superficial gratuita.

Seções: Abordagem · Problema · Produtos · Padrão Hochburg · Leads/UX/Design/Layout ·
Busca com IA · Método · Segurança · FAQ · Contato. A seção de FAQ responde buscas
informacionais (o que é landing page, lead, UX, layout, tipos/exemplos de site etc.) e
tem marcação `FAQPage` em JSON-LD. Inclui parceria com a Origenow, links sociais no
rodapé (Facebook, LinkedIn e WhatsApp; Instagram e TikTok ainda não existem, por isso não
aparecem), botão flutuante de WhatsApp e formulário de contato que abre só o WhatsApp.

## Arquivos

- `index.html` — a página (HTML + CSS + JS inline, sem dependências externas — fontes autohospedadas em `fonts/`).
- `robots.txt` — libera buscadores e crawlers de IA (GPTBot, ClaudeBot, PerplexityBot etc.) e aponta o sitemap.
- `llm.txt` — resumo da Hochburg (posicionamento, produtos, preços, termos/conceitos, comparação com Google Sites/Lovable/RD Station, parceria, contato) para modelos de IA.
- `sitemap.xml` — mapa do site (home).
- `CNAME` — domínio customizado `hochburg.com.br`.

## Publicar no GitHub Pages

```bash
gh repo create landing-page-hochburg --public --source=. --remote=origin --push
gh api -X POST repos/:owner/landing-page-hochburg/pages -f "source[branch]=main" -f "source[path]=/"
```

O site fica em: `https://hochburg.com.br/` (ou `https://<seu-usuario>.github.io/landing-page-hochburg/` sem o CNAME).
