# 📦 Documentação da Estrutura do Projeto

## Visão Geral

Este é um projeto React com TypeScript otimizado para Cloudflare Pages. A estrutura foi projetada para ser escalável, mantível e seguir best practices.

## Arquitetura

```
curriculo-portifolio/
├── src/                      # Código-fonte principal
│   ├── components/           # Componentes reutilizáveis
│   ├── pages/               # Componentes de página (rotas)
│   ├── layouts/             # Layouts compartilhados
│   ├── styles/              # Estilos CSS globais
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Funções utilitárias
│   ├── types/               # Tipos TypeScript globais
│   ├── App.tsx              # Componente raiz com rotas
│   └── main.tsx             # Ponto de entrada
├── public/                   # Arquivos estáticos
│   └── _redirects           # Configuração de SPA para Cloudflare
├── index.html               # HTML principal
├── package.json             # Dependências e scripts
├── tsconfig.json            # Configuração TypeScript
├── vite.config.ts           # Configuração Vite
├── tailwind.config.ts       # Configuração Tailwind CSS
├── wrangler.toml            # Configuração Cloudflare
├── .eslintrc.json           # Regras ESLint
└── .prettierrc.json         # Configuração Prettier
```

## Descrição dos Diretórios

### `/src/components`

Componentes reutilizáveis em toda a aplicação.

**Componentes atuais:**

- `Header.tsx` - Barra de navegação com menu responsivo
- `Footer.tsx` - Rodapé com informações de contato
- `Hero.tsx` - Seção hero/banner
- `ProjectCard.tsx` - Card para exibir projetos
- `Button.tsx` - Componente de botão customizado

**Quando criar um novo componente:**

- Se é reutilizável em múltiplas páginas
- Se é uma unidade UI completa e independente
- Se pode ser testado isoladamente

### `/src/pages`

Componentes que representam páginas/rotas da aplicação.

**Páginas atuais:**

- `Home.tsx` - Página inicial
- `About.tsx` - Sobre mim
- `Projects.tsx` - Galeria de projetos
- `Contact.tsx` - Formulário de contato
- `NotFound.tsx` - Página 404

**Estrutura esperada:**
Cada página deve ser um componente de nível superior que integramos em `App.tsx`.

### `/src/layouts`

Layouts compartilhados para estruturar páginas.

**Layouts atuais:**

- `MainLayout.tsx` - Layout padrão com Header + Footer

**Uso:**

```typescript
<MainLayout>
  {children}
</MainLayout>
```

### `/src/styles`

Estilos CSS globais e utilitários.

**Arquivo:**

- `index.css` - Imports de Tailwind e estilos globais customizados

### `/src/hooks`

Custom React hooks para lógica reutilizável.

**Exemplo de hook a implementar:**

```typescript
// src/hooks/useMediaQuery.ts
export function useMediaQuery(query: string): boolean {
  // Implementação
}
```

### `/src/utils`

Funções utilitárias puras.

**Exemplos de funções úteis:**

```typescript
// src/utils/formatting.ts
export const formatDate = (date: Date): string => {
  // ...
};

// src/utils/validation.ts
export const isValidEmail = (email: string): boolean => {
  // ...
};
```

### `/src/types`

Tipos e interfaces TypeScript globais.

**Arquivo:**

- `index.ts` - Tipos globais como `Project`, `FormData`, etc.

### `/public`

Arquivos estáticos servidos como-são.

**Arquivos importantes:**

- `_redirects` - Configuração crítica para SPA routing no Cloudflare Pages

## Padrões de Código

### Componentes Funcionais

Sempre use componentes funcionais com hooks:

```typescript
interface ComponentProps {
  title: string
  onClick?: () => void
}

export default function MyComponent({ title, onClick }: ComponentProps) {
  const [state, setState] = useState(false)

  return <div onClick={onClick}>{title}</div>
}
```

### Tipos TypeScript

Sempre defina tipos para props:

```typescript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}
```

### Imports com Alias

Use aliases para imports mais limpos:

```typescript
// ❌ Evitar
import Hero from '../../../components/Hero';

// ✅ Preferir
import Hero from '@components/Hero';
```

Os aliases estão configurados em `vite.config.ts` e `tsconfig.json`.

### Estilos com Tailwind

Prefira classes Tailwind em vez de CSS customizado:

```typescript
// ✅ Preferir
<div className="flex gap-4 mb-8 p-6 bg-light rounded-lg">

// ❌ Evitar
<div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
```

## Fluxo de Roteamento

O roteamento é definido em `App.tsx` usando React Router:

```typescript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/sobre" element={<About />} />
  <Route path="/projetos" element={<Projects />} />
  <Route path="/contato" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

## Adicionando Novas Páginas

1. Crie um novo arquivo em `src/pages/`
2. Crie o componente React
3. Adicione a rota em `App.tsx`
4. Atualize a navegação em `Header.tsx`

**Exemplo:**

```typescript
// src/pages/Blog.tsx
export default function Blog() {
  return <div>Blog Page</div>
}

// App.tsx - adicione:
<Route path="/blog" element={<Blog />} />

// Header.tsx - adicione:
<Link to="/blog" className="...">Blog</Link>
```

## Variáveis de Ambiente

Arquivo: `.env.local` (não versionado)

```env
VITE_API_URL=https://api.example.com
```

Acesso no código:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

Todas as variáveis devem começar com `VITE_` para serem expostas ao navegador.

## Cores e Tema

Configurado em `tailwind.config.ts`:

```typescript
colors: {
  primary: '#3b82f6',     // Azul
  secondary: '#1e40af',   // Azul escuro
  dark: '#0f172a',        // Cinza muito escuro
  light: '#f8fafc',       // Cinza muito claro
}
```

Use no código:

```typescript
className = 'bg-primary text-white';
```

## Build e Deploy

### Build Local

```bash
npm run build
```

Gera pasta `dist/` pronta para deployment.

### Preview Local

```bash
npm run preview
```

Simula o build de produção localmente.

### Deploy

```bash
npm run build
wrangler pages deploy dist
```

## Performance

Otimizações implementadas:

- ✅ Code splitting automático do Vite
- ✅ Tree-shaking de código unused
- ✅ Assets minificados e otimizados
- ✅ CSS purgado (Tailwind)
- ✅ Compressão gzip

Para melhorar ainda mais:

1. **Lazy Loading de Componentes:**

```typescript
const About = React.lazy(() => import('@pages/About'));
```

2. **Image Optimization:**

```typescript
import img from '@assets/image.webp';
```

3. **Service Workers** para cache offline

## Extensões Futuras

Sugestões para expandir o projeto:

1. **Blog System**
   - Adicione `src/pages/Blog.tsx`
   - Integre com CMS (Notion, Sanity, etc)

2. **Newsletter**
   - Formulário de subscrição
   - Integração com serviço de email

3. **Dark Mode**
   - Adicione hook `useDarkMode`
   - Configure em `tailwind.config.ts`

4. **Analytics**
   - Integre Google Analytics
   - Use `import.meta.env.VITE_GA_ID`

5. **PWA**
   - Adicione manifest.json
   - Implemente Service Worker

## Testing

Para adicionar testes:

1. Instale dependências:

```bash
npm install -D vitest @testing-library/react
```

2. Crie testes em `src/__tests__/`

3. Configure em `vite.config.ts`

## Deployment Checklist

Antes de fazer deploy:

- [ ] `npm run build` funciona sem erros
- [ ] `npm run lint` não retorna problemas
- [ ] Testar em `npm run preview`
- [ ] Atualizar conteúdo com suas informações
- [ ] Testar em dispositivo móvel
- [ ] Verificar SEO (meta tags, title, description)
- [ ] Testar formulário de contato
- [ ] Verificar links internos
- [ ] Otimizar imagens

## Troubleshooting

### Erro: "Cannot find module"

- Verificar se o caminho está correto
- Usar alias definidos em `vite.config.ts`

### Estilos não aparecem

- Executar `npm run build` novamente
- Verificar `tailwind.config.ts`
- Limpar cache do navegador

### TypeScript errors

- Executar `npx tsc --noEmit`
- Verificar tipos de props

## Recursos Adicionais

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide)
- [React Router](https://reactrouter.com)

---

**Última atualização:** Abril 2026
