# Reposição de Pastilhas Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir, verificar e publicar uma landing page estática de reposição de pastilhas com o design institucional da Vertical Chão, conteúdo revisado da página atual, contatos corrigidos e o mesmo tracking.

**Architecture:** O site terá arquivos-fonte em `src/` e um build Node.js que copia o conteúdo para `dist/`. HTML concentra conteúdo, SEO e tags; CSS implementa o sistema visual; JavaScript controla cabeçalho, menu, validação, geração da mensagem de WhatsApp e eventos de `dataLayer`. Scripts independentes validam requisitos e links antes de cada deploy.

**Tech Stack:** HTML5, CSS, JavaScript ES modules, Node.js, Playwright para QA, GitHub e Cloudflare Pages.

---

### Task 1: Estrutura e testes de requisitos

**Files:**
- Create: `.gitignore`
- Create: `package.json`
- Create: `scripts/build.mjs`
- Create: `scripts/validate-site.mjs`
- Create: `scripts/check-links.mjs`
- Create: `src/index.html`
- Create: `src/styles.css`
- Create: `src/main.js`

- [ ] **Step 1: Criar o manifesto e scripts**

```json
{
  "name": "reposicaodepastilhas-verticalchao",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "node scripts/build.mjs",
    "validate": "node scripts/validate-site.mjs && node scripts/check-links.mjs",
    "check": "npm run build && npm run validate"
  }
}
```

- [ ] **Step 2: Escrever a validação antes da página**

`scripts/validate-site.mjs` deve ler `src/index.html`, `src/styles.css` e `src/main.js`, verificar os três IDs de tracking, os dois telefones permitidos, o WhatsApp comercial, logo, favicon, schema e formulário; deve reconstruir em tempo de execução os fragmentos do terceiro contato removido e o nome de seu card, falhando se encontrá-los, assim como `Contact Form Demo` ou múltiplas chamadas `gtag('config', ...)` para o mesmo ID.

- [ ] **Step 3: Executar `npm run validate` e observar a falha por arquivos e requisitos ausentes**

Expected: saída diferente de zero listando os requisitos ainda não implementados.

- [ ] **Step 4: Criar build por cópia recursiva e validador de links relativos**

```js
import { cpSync, mkdirSync, rmSync } from "node:fs";

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });
cpSync("src", "dist", { recursive: true });
console.log("Build complete: dist/");
```

- [ ] **Step 5: Commit**

```bash
git add .gitignore package.json scripts src
git commit -m "test: define landing page requirements"
```

### Task 2: Ativos reais e identidade de marca

**Files:**
- Create: `src/assets/logo.webp`
- Create: `src/assets/favicon-32.png`
- Create: `src/assets/apple-touch-icon.png`
- Create: `src/assets/reposicao-pastilhas-01.jpg`
- Create: `src/assets/reposicao-pastilhas-02.jpg`
- Create: `src/assets/reposicao-pastilhas-03.jpg`
- Modify: `src/index.html`
- Modify: `src/styles.css`

- [ ] **Step 1: Copiar logo e ícones oficiais do projeto institucional irmão**

```powershell
Copy-Item ../verticalchao-institucional/src/assets/logo.webp src/assets/logo.webp
Copy-Item ../verticalchao-institucional/src/assets/favicon-32.png src/assets/favicon-32.png
Copy-Item ../verticalchao-institucional/src/assets/apple-touch-icon.png src/assets/apple-touch-icon.png
```

- [ ] **Step 2: Baixar as três fotografias específicas da página atual**

```powershell
curl.exe -fL -o src/assets/reposicao-pastilhas-01.jpg https://reposicaodepastilhas.verticalchao.com.br/wp-content/uploads/2023/02/r4-2-578x1024.jpg
curl.exe -fL -o src/assets/reposicao-pastilhas-02.jpg https://reposicaodepastilhas.verticalchao.com.br/wp-content/uploads/2023/02/r10-2-578x1024.jpg
curl.exe -fL -o src/assets/reposicao-pastilhas-03.jpg https://reposicaodepastilhas.verticalchao.com.br/wp-content/uploads/2023/02/r5-1-578x1024.jpg
```

- [ ] **Step 3: Criar tokens visuais idênticos ao sistema institucional**

```css
:root {
  --red: #e8333b;
  --red-dark: #c41f27;
  --red-soft: #ffd7d4;
  --paper: #fafaf8;
  --paper-2: #f4f1eb;
  --ink: #14171f;
  --ink-soft: #242834;
  --muted: #5b606c;
  --line: #e4e1db;
  --white-soft: #fff;
  --whatsapp: #25d366;
  --whatsapp-dark: #1da851;
}
```

- [ ] **Step 4: Implementar cabeçalho, hero, seções editoriais, processo, galeria, depoimentos, formulário, rodapé e widget responsivos**

A composição deve seguir a especificação: hero em tela cheia com fotografia real, planos grafite alternados com fundos claros, vermelho como ação, verde apenas no widget do WhatsApp e alvos móveis de pelo menos 44 px.

- [ ] **Step 5: Executar `npm run validate`**

Expected: requisitos visuais ainda passam; requisitos de conteúdo e interação podem permanecer falhando até as tarefas seguintes.

- [ ] **Step 6: Commit**

```bash
git add src
git commit -m "feat: build replacement tile landing page"
```

### Task 3: Copy, SEO e dados estruturados

**Files:**
- Modify: `src/index.html`
- Modify: `scripts/validate-site.mjs`

- [ ] **Step 1: Inserir copy revisada da oferta existente**

Usar como mensagem central: `Pastilhas soltas deixam de ser apenas um problema visual quando comprometem a segurança e a proteção da fachada.` Explicar vistoria, remoção controlada, preparação, reposição e acabamento em parágrafos curtos dirigidos a síndicos e administradoras.

- [ ] **Step 2: Inserir os três depoimentos uma única vez**

Preservar autores e sentido dos relatos de Luiz Augusto, Idalécio Gomes e Valéria Moreira, com correções apenas de pontuação, concordância e extensão para leitura na web.

- [ ] **Step 3: Adicionar metadados e schema**

```html
<title>Reposição de Pastilhas em Fachadas em BH | Vertical Chão</title>
<meta name="description" content="Reposição de pastilhas em fachadas com equipe especializada em trabalho em altura. Atendimento a condomínios e edifícios em Belo Horizonte e região.">
```

O JSON-LD deve usar `HomeAndConstructionBusiness`, telefone `+5531996848477`, e-mail `verticalchao@gmail.com`, endereço atual e área de atendimento em Belo Horizonte e região metropolitana.

- [ ] **Step 4: Rodar `npm run validate`**

Expected: conteúdo obrigatório presente, conteúdo removido ausente e schema válido como JSON.

- [ ] **Step 5: Commit**

```bash
git add src/index.html scripts/validate-site.mjs
git commit -m "feat: add service copy and structured data"
```

### Task 4: Tracking sem dados pessoais

**Files:**
- Modify: `src/index.html`
- Modify: `src/main.js`
- Modify: `scripts/validate-site.mjs`
- Test: `scripts/validate-site.mjs`

- [ ] **Step 1: Manter os testes de tracking falhando antes da implementação**

Confirmar que a validação exige exatamente uma configuração para `G-L2NNH9T18X` e `AW-956995439`, uma ocorrência do container `GTM-M7GS29F` no script e uma no `noscript`.

- [ ] **Step 2: Adicionar GTM, GA4 e Google Ads**

```html
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-L2NNH9T18X');
  gtag('config', 'AW-956995439');
</script>
```

Carregar `gtag/js?id=G-L2NNH9T18X`, inserir o snippet padrão de `GTM-M7GS29F` no `<head>` e seu `noscript` logo após `<body>`.

- [ ] **Step 3: Implementar eventos de CTA**

```js
function track(event, properties) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...properties });
}

document.querySelectorAll("[data-track-cta]").forEach((link) => {
  link.addEventListener("click", () => track("cta_clicked", {
    cta_text: link.textContent.trim(),
    cta_location: link.dataset.trackLocation,
    contact_method: link.href.startsWith("tel:") ? "phone" : "whatsapp"
  }));
});
```

- [ ] **Step 4: Implementar evento de formulário sem PII**

Após validação bem-sucedida e antes de `window.open`, executar:

```js
track("form_submitted", {
  form_name: "reposicao_pastilhas_orcamento",
  destination: "whatsapp"
});
```

- [ ] **Step 5: Rodar validação estática e teste no navegador**

Interceptar `window.dataLayer.push`, clicar em um CTA, preencher o formulário com valores sentinela e confirmar que os eventos existem e que o JSON serializado não contém os valores sentinela.

- [ ] **Step 6: Commit**

```bash
git add src scripts/validate-site.mjs docs/tracking-plan.md
git commit -m "feat: preserve analytics and conversion tracking"
```

### Task 5: QA, acessibilidade e desempenho

**Files:**
- Modify: `src/index.html`
- Modify: `src/styles.css`
- Modify: `src/main.js`

- [ ] **Step 1: Executar `npm run check` e `git diff --check`**

Expected: ambos terminam com código zero.

- [ ] **Step 2: Servir `dist/` localmente e verificar em 1440×1000 e 390×844**

Verificar visualmente hero, logo, menu, seções, galeria, formulário, rodapé e widget; nenhuma imagem pode estar quebrada nem haver rolagem horizontal.

- [ ] **Step 3: Testar teclado e movimento reduzido**

Confirmar ordem de foco, foco visível, abertura/fechamento do menu, mensagens de erro associadas aos campos e ausência de animação não essencial sob `prefers-reduced-motion: reduce`.

- [ ] **Step 4: Confirmar contatos e conteúdo removido**

```powershell
$removedLocal = '994' + '71'
$removedInternational = '553199' + '4711393'
$removedCard = 'Edv' + 'aldo'
rg -n "$removedLocal|$removedInternational|$removedCard|Contact Form Demo|63%" src
```

Expected: nenhuma ocorrência.

- [ ] **Step 5: Commit**

```bash
git add src scripts
git commit -m "fix: polish responsive landing page"
```

### Task 6: GitHub e Cloudflare Pages

**Files:**
- Create: `README.md`

- [ ] **Step 1: Documentar desenvolvimento, build, tracking e deploy**

O README deve listar `npm run check`, saída `dist/`, os três identificadores de tracking e informar que o formulário abre o WhatsApp sem armazenamento de dados.

- [ ] **Step 2: Verificar árvore e histórico antes de publicar**

```powershell
git status --short
$removedLocal = '994' + '71'
$removedInternational = '553199' + '4711393'
git log --all -S "$removedLocal" --oneline
git log --all -S "$removedInternational" --oneline
```

Expected: árvore limpa e nenhuma ocorrência dos contatos removidos no histórico. Antes da primeira publicação, consolidar os commits locais em um novo commit-raiz limpo para eliminar os valores que existiram apenas durante a documentação inicial.

- [ ] **Step 3: Criar e enviar repositório público**

```powershell
gh repo create trafegocomprado/reposicaodepastilhas-verticalchao --public --source . --remote origin --push
```

- [ ] **Step 4: Criar projeto Pages conectado ao GitHub**

Configurar branch de produção `main`, comando `npm run build` e diretório de saída `dist`. Se a integração Git ficar em fila, publicar o mesmo `dist` verificado diretamente com o hash do commit, mantendo a origem Git conectada.

- [ ] **Step 5: Verificar a implantação pública**

Confirmar HTTP 200, logo, favicon, CSS vermelho/grafite, ausência do contato removido e presença exata de `GTM-M7GS29F`, `G-L2NNH9T18X` e `AW-956995439` na URL `pages.dev`.
