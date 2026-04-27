export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Desenvolvedor Full Stack com paixão por criar aplicações web modernas e eficientes.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <a href="#/" className="hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#/projetos" className="hover:text-primary transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#/contato" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <span className="text-xl">💻</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-xl">💼</span>
              </a>
              <a
                href="mailto:seu.email@example.com"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <span className="text-xl">✉️</span>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Portfólio Profissional. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
