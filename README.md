# Portfolio Profissional

Um portfólio profissional moderno desenvolvido com React, TypeScript e Tailwind CSS, otimizado para Cloudflare Pages.

## 🚀 Características

- ⚡ **Vite** - Build tool ultra-rápido e moderno
- ⚛️ **React 18** - Última versão do React com novas features
- 📘 **TypeScript** - Segurança de tipo em todo o código
- 🎨 **Tailwind CSS** - Estilização utilitária e responsiva
- 📱 **Responsivo** - Layout perfeito em todos os dispositivos
- 🚀 **Otimizado** - Pronto para Cloudflare Pages
- 📊 **SEO Friendly** - Estrutura adequada para buscadores
- 🔧 **Configuração Profissional** - ESLint, Prettier, TypeScript strict

## 📋 Pré-requisitos

- Node.js 16+
- npm ou yarn
- Conta na Cloudflare

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone <seu-repositorio>
cd curriculo-portifolio
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## 📚 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria o build de produção
- `npm run preview` - Visualiza o build de produção localmente
- `npm run lint` - Verifica o código com ESLint
- `npm run lint:fix` - Corrige problemas de linting automaticamente
- `npm run format` - Formata o código com Prettier

## 📁 Estrutura do Projeto

```
src/
├── components/       # Componentes reutilizáveis (Header, Footer, etc)
├── pages/           # Páginas da aplicação (Home, About, Projects, etc)
├── layouts/         # Layouts da aplicação
├── styles/          # Estilos CSS globais
├── hooks/           # Hooks customizados (futura expansão)
├── utils/           # Funções utilitárias (futura expansão)
├── types/           # Tipos TypeScript
├── App.tsx          # Componente raiz
└── main.tsx         # Entrada da aplicação
public/
└── _redirects       # Configuração para SPA routing
```

## 🌐 Deploy na Cloudflare Pages

### Opção 1: Usando Wrangler CLI

1. Instale o Wrangler:

```bash
npm install -g wrangler
```

2. Autentique-se na Cloudflare:

```bash
wrangler login
```

3. Faça o build do projeto:

```bash
npm run build
```

4. Deploy:

```bash
wrangler pages deploy dist
```

### Opção 2: Conectando Repositório GitHub (Recomendado)

1. Faça push do seu projeto para GitHub
2. Acesse [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Vá para **Pages** > **Create a project** > **Connect to Git**
4. Selecione seu repositório GitHub
5. Configure as Build settings:
   - **Framework**: None
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment variables**: Configure se necessário
6. Clique em **Save and Deploy**

### Opção 3: Usando GitHub Actions

Crie um arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: cloudflare/pages-action@1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: portfolio-profissional
          directory: dist
          productionBranch: main
```

## 🎨 Customização

### Cores

Edite `tailwind.config.ts` para alterar o esquema de cores:

```typescript
colors: {
  primary: '#3b82f6',      // Altere para sua cor primária
  secondary: '#1e40af',    // Altere para sua cor secundária
  dark: '#0f172a',
  light: '#f8fafc',
}
```

### Conteúdo

- `src/pages/Home.tsx` - Página inicial
- `src/pages/About.tsx` - Página sobre
- `src/pages/Projects.tsx` - Página de projetos
- `src/pages/Contact.tsx` - Página de contato

### Dados

Substitua os dados fictícios pelos seus reais:

- Informações pessoais em `Contact.tsx`
- Projetos em `Home.tsx` e `Projects.tsx`
- Habilidades em `Home.tsx`
- Experiência em `About.tsx`

## 📝 Adicionar suas Informações

1. **Header/Footer**: Edite links de redes sociais em `Header.tsx` e `Footer.tsx`
2. **Projetos**: Atualize os arrays de projetos nas páginas
3. **Contato**: Configure seu email e telefone em `Contact.tsx`
4. **Sobre**: Reescreva sua história em `About.tsx`

## 🔒 Variáveis de Ambiente

Se precisar usar variáveis de ambiente, crie um arquivo `.env.local`:

```env
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=seu.email@example.com
```

E acesse em seu código:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🧹 Manutenção de Código

### Verificar tipos

```bash
npx tsc --noEmit
```

### Lint

```bash
npm run lint
npm run lint:fix
```

### Formatar

```bash
npm run format
```

## 📈 Performance

O projeto está otimizado para performance:

- ✅ Code splitting automático do Vite
- ✅ Lazy loading de rotas
- ✅ Assets otimizados
- ✅ CSS minificado

Para melhorar ainda mais:

1. Implemente lazy loading de componentes grandes
2. Otimize imagens
3. Use Service Workers para cache

## 🐛 Troubleshooting

### Erro ao fazer deploy

- Verifique se `build` gera a pasta `dist`
- Confirme se `npm run build` funciona localmente
- Verifique as dependências no `package.json`

### Rotas não funcionam após deploy

- Confirme que `_redirects` está em `public/`
- Verifique se está siendo deployed para o `dist`

### Estilos não aparecem

- Limpe o cache do navegador
- Execute `npm run build` novamente
- Verifique se `tailwind.config.ts` está correto

## 📚 Recursos Úteis

- [Documentação React](https://react.dev)
- [Documentação TypeScript](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuições

Sinta-se livre para fazer fork, fazer alterações e criar pull requests!

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no repositório.

---

**Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS**
