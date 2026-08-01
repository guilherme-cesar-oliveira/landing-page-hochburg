# Hochburg — Landing Page

Landing page de página única para a Hochburg Cybersecurity, com âncoras de navegação (Sobre, Serviços, Método, Conduta, Certificações, Contato), botão flutuante de WhatsApp e formulário de contato que abre WhatsApp + e-mail.

Arquivo único: `index.html` (HTML + CSS + JS inline, sem dependências além das fontes do Google Fonts).

## Publicar no GitHub Pages

```bash
gh repo create landing-page-hochburg --public --source=. --remote=origin --push
gh api -X POST repos/:owner/landing-page-hochburg/pages -f "source[branch]=main" -f "source[path]=/"
```

O site fica em: `https://<seu-usuario>.github.io/landing-page-hochburg/`
