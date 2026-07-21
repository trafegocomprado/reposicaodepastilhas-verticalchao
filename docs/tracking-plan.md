# Plano de tracking — Reposição de Pastilhas

## Ferramentas

- Google Tag Manager: `GTM-M7GS29F`
- Google Analytics 4: `G-L2NNH9T18X`
- Google Ads: `AW-956995439`

## Eventos

| Evento | Finalidade | Propriedades | Disparo |
|---|---|---|---|
| `cta_clicked` | Medir intenção de contato | `cta_text`, `cta_location`, `contact_method` | Clique em telefone ou WhatsApp |
| `form_submitted` | Medir pedido de orçamento iniciado | `form_name`, `destination` | Formulário válido, imediatamente antes de abrir o WhatsApp |

## Privacidade

Os eventos não devem receber nome, telefone, e-mail, mensagem, endereço ou qualquer campo preenchido pelo visitante. A mensagem completa existe apenas no endereço que abre o WhatsApp no navegador do usuário.

## Validação

- Confirmar `GTM-M7GS29F`, `G-L2NNH9T18X` e `AW-956995439` no HTML gerado.
- Confirmar uma única configuração de GA4 e uma única configuração de Google Ads.
- Interceptar `dataLayer.push` no navegador e verificar os eventos de CTA e formulário.
- Confirmar que nenhuma propriedade dos eventos contém os valores digitados no formulário.

