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
- `src/main.js`: cabeçalho e eventos dos CTAs independentes.
- `src/contact-form.js`: formulário por e-mail e integração com Turnstile.
- `src/contact-config.js`: endpoint público do Worker e sitekey pública do Turnstile.
- `src/assets/`: logo, favicon e fotografias locais.
- `scripts/`: build e validações automatizadas.
- `dist/`: saída gerada para publicação.

## Tracking

- Google Tag Manager: `GTM-M7GS29F`
- Google Analytics 4: `G-L2NNH9T18X`
- Google Ads: `AW-956995439`

Os eventos `cta_clicked` e `form_submitted` não recebem valores digitados pelo visitante. O plano completo está em `docs/tracking-plan.md`.

## Formulário

O formulário envia a solicitação ao Worker para encaminhamento a `verticalchao@gmail.com`. A configuração pública em `src/contact-config.js` já aponta para `https://verticalchao-contato.mpxedl.workers.dev/api/contato` e contém a sitekey de produção do Turnstile. A entrega real na caixa do Gmail ainda depende da validação final de publicação. Os CTAs de WhatsApp continuam funcionando de forma independente.

Nunca inclua credenciais ou a chave secreta do Turnstile nesse arquivo público. Os domínios publicados devem estar autorizados no widget e no Worker, com a ação Turnstile `contact`. O cliente recusa as chaves oficiais de teste. Se a configuração estiver ausente, mantém o envio desabilitado, mostra um aviso e oferece contato manual por e-mail.

O POST JSON contém `nome`, `email`, `telefone`, `servico`, `mensagem`, `website` (honeypot), `turnstileToken` e `pageUrl` (origem e caminho, sem query ou fragmento). Nome tem 2–120 caracteres; e-mail é obrigatório, até 254; telefone é opcional, 10–15 dígitos quando preenchido; assunto tem até 120; mensagem é obrigatória, até 5.000. O Worker fixa o destinatário.

Somente uma resposta HTTP de sucesso com `{ "ok": true, "requestId": "..." }` confirma recebimento para envio. Isso não comprova entrega na caixa do Gmail. Erros 400/403/429/502/503 preservam os campos. O cliente limita a espera a 15 segundos, evita duplo envio e renova o Turnstile após a tentativa. `form_submitted` dispara somente após confirmação, sem dados pessoais.

Sem JavaScript, o botão permanece desabilitado e há um link de e-mail. O HTML usa POST para não colocar os campos na URL. Nenhum campo é salvo em `localStorage` ou enviado ao analytics; a mensagem completa é transmitida ao Worker.

`npm run check` valida o código e o build com respostas simuladas, incluindo o caso de configuração ausente, sem enviar pedidos reais. A configuração preenchida não comprova a entrega: a validação final deve confirmar Turnstile, CORS e o recebimento de um envio identificado como teste.

## Deploy

Cloudflare Pages deve executar `npm run build` e publicar o diretório `dist/` a partir da branch `main`.
