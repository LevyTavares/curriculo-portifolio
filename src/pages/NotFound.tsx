import { Link } from 'react-router-dom';
import Button from '@components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-primary to-secondary">
      <div className="text-center text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Página Não Encontrada</h2>
        <p className="text-xl mb-8 opacity-90 max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe. Ela pode ter sido movida ou
          removida.
        </p>
        <Link to="/">
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Voltar para Início
          </Button>
        </Link>
      </div>
    </div>
  );
}
