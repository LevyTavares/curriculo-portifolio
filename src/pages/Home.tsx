import Hero from '@components/Hero';
import ProjectCard from '@components/ProjectCard';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com sistema de pagamento integrado',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      title: 'Sistema de Gestão',
      description: 'Aplicação para gerenciamento de projetos e tarefas em tempo real',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      link: '#',
    },
    {
      title: 'API REST Profissional',
      description: 'API RESTful robusta para aplicações mobile e web',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
      link: '#',
    },
  ];

  return (
    <div>
      <Hero
        title="Olá! Eu sou um Desenvolvedor Full Stack"
        subtitle="Bem-vindo ao meu portfólio"
        description="Especializado em criar aplicações web modernas, escaláveis e com excelente experiência do usuário"
        showCTA
      />

      {/* Featured Projects */}
      <section className="py-16 px-4 bg-light">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-dark mb-4 text-center">Projetos em Destaque</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Confira alguns dos meus projetos recentes e conheça mais sobre meu trabalho
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projetos"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-semibold"
            >
              Ver Todos os Projetos →
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-dark mb-12 text-center">Habilidades</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="p-8 bg-light rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ React & React Native</li>
                <li>✓ TypeScript</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ Next.js</li>
                <li>✓ State Management (Redux, Zustand)</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="p-8 bg-light rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Node.js & Express</li>
                <li>✓ Python & Django</li>
                <li>✓ RESTful APIs</li>
                <li>✓ GraphQL</li>
                <li>✓ Autenticação & Segurança</li>
              </ul>
            </div>

            {/* Databases & Tools */}
            <div className="p-8 bg-light rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Banco de Dados & Ferramentas</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ PostgreSQL & MongoDB</li>
                <li>✓ Firebase</li>
                <li>✓ Docker & Docker Compose</li>
                <li>✓ Git & GitHub</li>
                <li>✓ CI/CD Pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para começar um projeto?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Estou disponível para discutir sua ideia e como posso ajudar seu negócio
          </p>
          <Link
            to="/contato"
            className="inline-block px-8 py-3 bg-primary hover:bg-secondary text-white rounded-lg transition-colors font-semibold"
          >
            Entre em Contato
          </Link>
        </div>
      </section>
    </div>
  );
}
