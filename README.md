# Reposição de Pastilhas — Vertical Chão

Landing page estática para o serviço de reposição de pastilhas em fachadas da Vertical Chão Alpinismo Industrial.

## Desenvolvimento

```bash
npm run check
```

O comando recria `dist/`, valida conteúdo, contatos, tracking, SEO e links locais. O site não exige dependências em tempo de execução.

## Estrutura

- `src/index.html`: conteúdo, SEO, dados estruturados e tags de analytics.
- `src/styles.css`: sistema visual e layout responsivo.
- `src/main.js`: menu, formulário, WhatsApp e eventos de tracking.
- `src/assets/`: logo, favicon e fotografias locais.
- `scripts/`: build e validações automatizadas.
- `dist/`: saída gerada para publicação.

## Tracking

- Google Tag Manager: `GTM-M7GS29F`
- Google Analytics 4: `G-L2NNH9T18X`
- Google Ads: `AW-956995439`

Os eventos `cta_clicked` e `form_submitted` não recebem valores digitados pelo visitante. O plano completo está em `docs/tracking-plan.md`.

## Formulário

O formulário valida os campos no navegador, prepara uma mensagem e abre o atendimento comercial no WhatsApp. Nenhum dado é armazenado pelo site.

## Deploy

Cloudflare Pages deve executar `npm run build` e publicar o diretório `dist/` a partir da branch `main`.
