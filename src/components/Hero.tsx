import { Link } from 'react-router-dom';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  showCTA?: boolean;
}

export default function Hero({ title, subtitle, description, showCTA = true }: HeroProps) {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-4">
      <div className="container mx-auto text-center fade-in">
        {subtitle && <p className="text-lg font-semibold mb-2 opacity-90">{subtitle}</p>}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
        {description && <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">{description}</p>}

        {showCTA && (
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contato">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Vamos Trabalhar Juntos
              </Button>
            </Link>
            <Link to="/projetos">
              <Button variant="secondary" size="lg">
                Ver Meus Projetos
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
