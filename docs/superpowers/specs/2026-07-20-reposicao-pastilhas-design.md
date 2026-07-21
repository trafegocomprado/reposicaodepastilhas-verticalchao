# Reposição de Pastilhas — Especificação de design

## Objetivo

Criar uma versão estática, mais leve e legível da página `reposicaodepastilhas.verticalchao.com.br`, preservando sua oferta, informações e funcionalidades essenciais. A nova página usará a identidade visual do site `verticalchao-institucional.pages.dev` e será publicada em um repositório e projeto Cloudflare Pages próprios.

## Referências e prioridade

1. Conteúdo, oferta, depoimentos, imagens e funcionalidades: página WordPress atual de reposição de pastilhas.
2. Sistema visual, componentes e comportamento responsivo: página institucional nova.
3. Contatos: especificação comercial atualizada abaixo, que substitui qualquer telefone encontrado nas referências.

## Contatos obrigatórios

- Telefone comercial no cabeçalho e nas chamadas: `(31) 99684-8477` com `tel:+5531996848477`.
- WhatsApp principal: `https://api.whatsapp.com/send?phone=5531996848477&text=Ol%C3%A1,%20preciso%20de%20um%20atendimento!`.
- Rodapé: `(31) 99684-8477` e `(31) 98712-2106`.
- O terceiro telefone removido, seu formato internacional e o card de atendimento associado não podem aparecer no site nem no histórico publicado do novo repositório.
- O widget flutuante terá apenas um atendimento comercial e apontará para o número `99684-8477`.

## Direção visual

**Tese visual:** uma página técnica e direta, com atmosfera de obra em altura, superfícies grafite, fotografia real e vermelho usado como sinal de ação e segurança.

- Reutilizar a paleta da página institucional: vermelho `#E8333B`, grafite `#14171F`, neutros claros e verde somente no WhatsApp.
- Reutilizar logo, favicon, hierarquia tipográfica, cabeçalho fixo, botões, grids, rodapé e comportamento mobile da página institucional.
- Manter um hero de imagem real em tela cheia, com sobreposição grafite, marca evidente, promessa específica e CTA de orçamento.
- Evitar aparência genérica de landing page: poucos contêineres decorativos, seções com funções distintas, imagens grandes e composição editorial.

## Estrutura e conteúdo

### 1. Cabeçalho

- Logo oficial da Vertical Chão.
- Navegação por âncoras: serviço, processo, resultados, depoimentos e orçamento.
- Telefone comercial e botão de WhatsApp.
- Menu acessível no celular.

### 2. Hero

- Tema: reposição de pastilhas em fachadas residenciais e comerciais.
- Explicar o benefício principal: corrigir áreas soltas ou danificadas antes que o problema comprometa segurança, vedação e aparência.
- CTA principal para orçamento pelo WhatsApp e CTA secundário para conhecer o processo.
- Provas curtas baseadas apenas em informações existentes e defensáveis; não reproduzir o indicador atual de `63% clientes satisfeitos`, pois ele enfraquece a confiança e não tem contexto.

### 3. Problema e experiência

- Adaptar o texto atual sobre conhecimento técnico, aplicação correta, segurança e prevenção do desgaste precoce.
- Explicar sinais observáveis: peças ocas, trincas, desprendimento, infiltração e diferenças de acabamento.
- Conectar cada problema à consequência para síndicos e administradoras, sem alarmismo.

### 4. Processo do serviço

- Vistoria da fachada.
- Identificação e remoção controlada das peças comprometidas.
- Preparação da base e correções necessárias.
- Reposição, alinhamento e acabamento.
- Vistoria final e orientação ao responsável pelo edifício.

O processo deve ser apresentado como explicação comercial, sem prometer procedimentos técnicos que não estejam confirmados pela empresa.

### 5. Resultados e imagens

- Baixar e servir localmente as fotografias reais da página atual.
- Usar imagens de reposição de pastilhas, fachadas e profissionais em altura; excluir imagens decorativas genéricas que não comprovem o serviço.
- Incluir uma galeria leve e responsiva. Ampliação em lightbox só será mantida se agregar clareza sem aumentar desnecessariamente o JavaScript.

### 6. Depoimentos

- Preservar os depoimentos atribuídos a Luiz Augusto, Idalécio Gomes e Valéria Moreira.
- Remover as repetições causadas pelo carrossel da página atual.
- Corrigir apenas pontuação, concordância e legibilidade, sem inventar resultados ou alterar o sentido dos relatos.

### 7. Serviços relacionados

- Apresentar limpeza de fachadas, pintura de fachadas e aplicação de Ecogranito como serviços complementares.
- A reposição de pastilhas aparece como serviço atual, sem link circular desnecessário.

### 8. Orçamento

- Formulário acessível com nome, telefone, e-mail opcional, assunto/serviço e mensagem.
- Validação no navegador com mensagens claras junto aos campos.
- Ao enviar, montar uma mensagem organizada e abrir o WhatsApp comercial em nova aba.
- Nenhum dado será armazenado ou enviado para servidor próprio.

### 9. Rodapé e widget

- Endereço, CNPJ, responsável técnico, e-mail e dois telefones conforme a especificação atualizada.
- Um único botão flutuante de WhatsApp, sem Ninja Team, nomes de atendentes ou dependências de WordPress.

## Copy e legibilidade

- Preservar os fatos da página existente, mas cortar repetição, frases vagas e linguagem de template como `Contact Form Demo`.
- Falar diretamente com síndicos, administradoras e responsáveis por edifícios.
- Usar títulos descritivos, parágrafos curtos e uma ideia principal por seção.
- Não manter números sem fonte clara. Informações como tempo de mercado e obras executadas só entram se forem consistentes com o site institucional e apresentadas sem exagero.
- CTAs devem indicar a ação seguinte: pedir orçamento, falar com atendimento ou solicitar avaliação.

## SEO e dados estruturados

- Título e descrição específicos para reposição de pastilhas em Belo Horizonte e região.
- HTML semântico com um único `h1`.
- Open Graph, favicon, canonical provisório e JSON-LD do tipo `HomeAndConstructionBusiness` ou equivalente apropriado.
- O canonical poderá ser ajustado quando o domínio personalizado for configurado.

## Tracking

- Preservar os identificadores encontrados na página atual:
  - Google Tag Manager: `GTM-M7GS29F`.
  - Google Analytics 4: `G-L2NNH9T18X`.
  - Google Ads: `AW-956995439`.
- Carregar cada integração uma única vez e manter o `noscript` do Google Tag Manager logo após a abertura de `<body>`.
- Enviar `cta_clicked` ao `dataLayer` nos links de ligação e WhatsApp, com as propriedades `cta_text`, `cta_location` e `contact_method`.
- Enviar `form_submitted` ao `dataLayer` após a validação bem-sucedida e antes de abrir o WhatsApp, com `form_name: reposicao_pastilhas_orcamento` e `destination: whatsapp`.
- Nunca enviar nome, telefone, e-mail, mensagem ou qualquer outro dado pessoal para o `dataLayer`.
- Preservar parâmetros UTM automaticamente pelo endereço da página; não os inserir na mensagem do WhatsApp.
- A validação deve garantir a presença de cada ID exatamente uma vez em sua chamada de configuração e impedir duplicação de eventos de envio.

## Implementação

- Site estático em HTML, CSS e JavaScript, sem WordPress, banco de dados ou dependências de execução.
- Build simples para copiar os arquivos de origem para `dist/`.
- Novo repositório público: `trafegocomprado/reposicaodepastilhas-verticalchao`.
- Novo projeto Cloudflare Pages conectado ao repositório, com produção a partir da branch `main`.
- O usuário configurará o domínio personalizado manualmente.

## Interações

- Entrada discreta do conteúdo do hero.
- Mudança de aparência do cabeçalho após rolagem.
- Estados de hover e foco coerentes com a página institucional.
- Menu móvel acessível e formulário com retorno de validação.
- Respeitar `prefers-reduced-motion`.

## Verificação e critérios de aceite

- Build e validações estáticas executam sem falhas.
- Nenhum vestígio do terceiro contato removido aparece em arquivos versionados.
- Logo, favicon e imagens carregam localmente sem links quebrados.
- Todos os links de telefone e WhatsApp apontam para os números corretos.
- Formulário gera a mensagem e abre o WhatsApp sem armazenar dados.
- GTM, GA4 e Google Ads carregam com os mesmos IDs da página atual; eventos de CTA e formulário não contêm dados pessoais.
- Menu, foco por teclado, contraste e layout são verificados em desktop e celular.
- URL `pages.dev` responde com HTTP 200 e contém o commit publicado.
