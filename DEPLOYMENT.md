# 🚀 Guia de Deploy - Cloudflare Pages

Este documento fornece instruções passo-a-passo para fazer deploy do seu portfólio na Cloudflare Pages.

## Prerequisites

- Repositório Git (GitHub, GitLab ou Gitea) com o código
- Conta Cloudflare
- Node.js 16+

## Opção 1: Deploy com GitHub (Recomendado)

### Passo 1: Prepare seu Repositório no GitHub

1. Crie um repositório no GitHub
2. Faça push do seu código:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-repo.git
git push -u origin main
```

### Passo 2: Conecte ao Cloudflare Pages

1. Acesse [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Selecione sua conta e clique em **Pages**
3. Clique em **Create a project**
4. Escolha **Connect to Git**
5. Selecione **GitHub** e autorize a Cloudflare
6. Escolha seu repositório

### Passo 3: Configure Build Settings

Na tela de configuração do projeto:

- **Project name**: `portfolio-profissional` (ou seu nome de escolha)
- **Production branch**: `main`
- **Framework preset**: None (deixe em branco)
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Environment variables**: (deixe em branco por enquanto)

### Passo 4: Deploy

Clique em **Save and Deploy**. Cloudflare começará a construir seu projeto automaticamente.

Após alguns minutos, você receberá uma URL como:

```
https://seu-projeto.pages.dev
```

## Opção 2: Deploy com Wrangler CLI

### Passo 1: Instale o Wrangler

```bash
npm install -g wrangler
# ou
npm install -D wrangler
```

### Passo 2: Autentique

```bash
wrangler login
```

Isso abrirá seu navegador para fazer login na Cloudflare.

### Passo 3: Build do Projeto

```bash
npm install
npm run build
```

### Passo 4: Deploy

```bash
wrangler pages deploy dist
```

Você receberá uma URL de deployment como:

```
https://seu-projeto-123.pages.dev
```

## Opção 3: Automação com GitHub Actions

### Passo 1: Configure Secrets no GitHub

1. Vá para **Settings** > **Secrets and variables** > **Actions**
2. Clique em **New repository secret**
3. Adicione:
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: [Obtenha em Cloudflare Dashboard > Account > API Tokens]
4. Adicione outro secret:
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: [Obtenha em Cloudflare Dashboard > Account > API Tokens]

### Passo 2: Crie o Workflow

Crie um arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: portfolio-profissional
          directory: dist
          productionBranch: main
```

### Passo 3: Commit e Push

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deploy workflow"
git push origin main
```

Agora, cada push para `main` disparará um deploy automático!

## Configurar Domínio Personalizado

### Com Cloudflare Pages

1. Vá para seu projeto Pages
2. Clique em **Custom domains**
3. Clique em **Connect custom domain**
4. Digite seu domínio (ex: portfolio.com.br)
5. Siga as instruções para configurar o DNS

### Com Registrar Externo

Se seu domínio está registrado em outro lugar:

1. Vá para **DNS** no Cloudflare
2. Adicione um registro CNAME:
   - Nome: www (ou seu subdomínio)
   - Conteúdo: seu-projeto.pages.dev
   - TTL: Auto

3. Configure DNS no seu registrar para apontar para nameservers da Cloudflare

## Variáveis de Ambiente

Se precisar usar variáveis de ambiente:

### No GitHub Actions

Adicione no arquivo `deploy.yml`:

```yaml
- name: Deploy to Cloudflare Pages
  uses: cloudflare/pages-action@1
  with:
    apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
    accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
    projectName: portfolio-profissional
    directory: dist
    productionBranch: main
    envs: |
      VITE_API_URL
      VITE_CONTACT_EMAIL
  env:
    VITE_API_URL: https://api.example.com
    VITE_CONTACT_EMAIL: seu.email@example.com
```

### No Dashboard Cloudflare

1. Vá para seu projeto Pages
2. Clique em **Settings** > **Environment variables**
3. Adicione as variáveis necessárias
4. Defina para Production e Preview conforme necessário

## Testing Antes de Deploy

```bash
# Build local
npm run build

# Visualize o build
npm run preview

# Abra em http://localhost:4173
```

## Troubleshooting

### Build falha com "npm not found"

- Certifique-se de que `package.json` está no raiz do projeto
- Verifique se Node.js version é 16+

### Rotas retornam 404

- Confirme que `public/_redirects` existe
- Conteúdo deve ser: `/* /index.html 200`

### Estilos não aparecem após deploy

- Verifique se `npm run build` funciona localmente
- Confirme que `dist/` contém arquivos CSS
- Limpe cache do navegador (Ctrl+Shift+Delete)

### Deploy rápido mas site não atualiza

- Aguarde cache da Cloudflare expirar (até 24h)
- Ou use Purge Cache no Dashboard Cloudflare

## Monitoramento

### Logs de Build

Para GitHub:

1. Vá para Actions no seu repositório
2. Selecione o workflow
3. Clique para ver detalhes do build

Para Wrangler:

```bash
wrangler pages deployment list
wrangler pages deployment tail
```

### Analytics

No Dashboard Cloudflare Pages:

- Veja visualizações de página
- Taxas de sucesso
- Performance

## Updates e Manutenção

### Fazer Update do Projeto

```bash
git pull origin main
npm install
npm run build
# Deploy automático se usar GitHub Actions
# Ou faça: wrangler pages deploy dist
```

### Rollback

Se algo deu errado:

1. **Com GitHub**: Faça push de uma versão anterior
2. **Com Wrangler**: Deploy uma versão anterior manualmente

## Segurança

- ✅ Cloudflare Pages fornece HTTPS automático
- ✅ Proteção DDoS incluída
- ✅ WAF básico disponível
- ✅ Backups automáticos de deployments anteriores

Para mais segurança:

1. Habilite Cloudflare Web Application Firewall
2. Configure rate limiting
3. Use transformações de cache

## Recursos Adicionais

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)
- [Cloudflare Dashboard](https://dash.cloudflare.com)
- [Wrangler Documentation](https://developers.cloudflare.com/workers/wrangler)
- [GitHub Actions](https://docs.github.com/en/actions)

---

**Dúvidas?** Verifique os logs ou acesse a documentação da Cloudflare!
