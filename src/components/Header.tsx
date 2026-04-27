import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          Portfolio
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li>
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
              }`}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              className={`transition-colors ${
                isActive('/sobre')
                  ? 'text-primary font-semibold'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to="/projetos"
              className={`transition-colors ${
                isActive('/projetos')
                  ? 'text-primary font-semibold'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              to="/contato"
              className={`transition-colors ${
                isActive('/contato')
                  ? 'text-primary font-semibold'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Contato
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-200 py-4">
          <ul className="flex flex-col gap-4 px-4">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/projetos"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
