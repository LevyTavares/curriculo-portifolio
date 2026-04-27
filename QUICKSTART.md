# ⚡ Guia Rápido - Começar em 5 Minutos

## 1️⃣ Instalação

```bash
cd curriculo-portifolio
npm install
```

## 2️⃣ Iniciar Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 3️⃣ Editar seu Portfólio

### Seu Nome e Título

Edite `src/pages/Home.tsx`:

```typescript
<Hero
  title="Olá! Eu sou SEU_NOME"
  subtitle="Bem-vindo ao meu portfólio"
  description="Sua descrição aqui"
/>
```

### Adicionar seus Projetos

Em `src/pages/Home.tsx` e `src/pages/Projects.tsx`:

```typescript
const projects = [
  {
    title: 'Seu Projeto',
    description: 'Descrição do projeto',
    technologies: ['React', 'TypeScript'],
    link: 'https://seu-projeto.com',
  },
  // Adicione mais...
];
```

### Informações de Contato

Em `src/pages/Contact.tsx`:

```typescript
<a href="mailto:seu.email@example.com">seu.email@example.com</a>
<a href="tel:+5511999999999">+55 (11) 99999-9999</a>
```

### Redes Sociais

Em `src/components/Header.tsx` e `Footer.tsx`:

```typescript
<a href="https://github.com/seu-usuario">GitHub</a>
<a href="https://linkedin.com/in/seu-perfil">LinkedIn</a>
```

### Cores do Tema

Edite `tailwind.config.ts`:

```typescript
colors: {
  primary: '#sua-cor-principal',
  secondary: '#sua-cor-secundaria',
}
```

## 4️⃣ Testes Locais

```bash
npm run build
npm run preview
```

Acesse [http://localhost:4173](http://localhost:4173)

## 5️⃣ Fazer Deploy na Cloudflare Pages

### Opção A: GitHub (Mais Simples)

1. Push seu código para GitHub
2. Acesse [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Pages → Create a project → Connect to Git
4. Selecione seu repositório
5. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
6. Deploy!

### Opção B: Wrangler CLI

```bash
npm run build
wrangler pages deploy dist
```

## 📝 Estrutura Importante

```
src/
├── pages/          ← Edite aqui suas páginas
├── components/     ← Componentes reutilizáveis
└── styles/         ← Estilos CSS
```

## 🎨 Cores Tailwind

```html
<!-- Primary (seu azul) -->
<div class="bg-primary text-white">
  <!-- Secondary (azul escuro) -->
  <div class="bg-secondary text-white">
    <!-- Dark (quase preto) -->
    <div class="bg-dark text-white">
      <!-- Light (quase branco) -->
      <div class="bg-light text-dark"></div>
    </div>
  </div>
</div>
```

## 🚀 Comandos Úteis

```bash
npm run dev          # Iniciar desenvolvimento
npm run build        # Build para produção
npm run preview      # Visualizar build local
npm run lint         # Verificar código
npm run lint:fix     # Corrigir automaticamente
npm run format       # Formatar código
```

## 📚 Estrutura de Pastas Rápida

- **pages/** - Cada arquivo é uma página da sua aplicação
- **components/** - Partes reutilizáveis (Header, Footer, Buttons)
- **layouts/** - Estrutura comum das páginas
- **styles/** - CSS global e Tailwind
- **utils/** - Funções auxiliares
- **types/** - Tipos TypeScript

## ❓ Precisa de Ajuda?

- 📖 Leia [README.md](README.md)
- 🏗️ Veja [ARCHITECTURE.md](ARCHITECTURE.md)
- 🚀 Deploy: [DEPLOYMENT.md](DEPLOYMENT.md)

## ✅ Checklist Antes de Deploy

- [ ] Editou seu nome e título
- [ ] Adicionou seus projetos
- [ ] Atualizou email/telefone
- [ ] Testou localmente (`npm run preview`)
- [ ] Verificou em mobile
- [ ] Conectou repositório Git

---

**Pronto para começar? Edite `src/pages/Home.tsx` e veja as mudanças em tempo real! 🎉**
