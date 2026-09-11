# Plano de tracking — Reposição de Pastilhas

## Ferramentas

- Google Tag Manager: `GTM-M7GS29F`
- Google Analytics 4: `G-L2NNH9T18X`
- Google Ads: `AW-956995439`

## Eventos

| Evento | Finalidade | Propriedades | Disparo |
|---|---|---|---|
| `cta_clicked` | Medir intenção de contato | `cta_text`, `cta_location`, `contact_method` | Clique em telefone ou WhatsApp |
| `form_submitted` | Medir solicitação recebida pelo Worker para envio | `form_name`, `contact_method` | Após HTTP de sucesso com `ok: true` e `requestId`; `contact_method: email` |

## Privacidade

Os eventos não devem receber nome, telefone, e-mail, mensagem, endereço ou qualquer campo preenchido pelo visitante. A mensagem completa é enviada por POST JSON ao Worker, nunca pela URL nem pelo `dataLayer`. O evento confirma aceite para envio e não comprova entrega na caixa do Gmail. Erros, timeout, ausência de configuração e falhas do Turnstile não disparam conversão.

## Validação

A configuração pública usa o Worker `https://verticalchao-contato.mpxedl.workers.dev/api/contato` e a sitekey de produção do Turnstile. Os testes locais simulam as respostas e mantêm cobertura de configuração ausente. A entrega real ao Gmail continua sujeita à validação final; `form_submitted` não deve ser usado como prova de chegada à caixa de entrada.

- Confirmar `GTM-M7GS29F`, `G-L2NNH9T18X` e `AW-956995439` no HTML gerado.
- Confirmar uma única configuração de GA4 e uma única configuração de Google Ads.
- Interceptar `dataLayer.push` no navegador e verificar os eventos de CTA e formulário.
- Confirmar que nenhuma propriedade dos eventos contém os valores digitados no formulário.
