import Hero from '@components/Hero';
import ProjectCard from '@components/ProjectCard';
import { useState } from 'react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com sistema de pagamento integrado',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      link: '#',
    },
    {
      title: 'Sistema de Gestão',
      description: 'Aplicação para gerenciamento de projetos e tarefas em tempo real',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      category: 'web',
      link: '#',
    },
    {
      title: 'API REST Profissional',
      description: 'API RESTful robusta para aplicações mobile e web',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
      category: 'backend',
      link: '#',
    },
    {
      title: 'Aplicativo Mobile de Fitness',
      description: 'App mobile com rastreamento de exercícios e análise de performance',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      category: 'mobile',
      link: '#',
    },
    {
      title: 'Dashboard Analítico',
      description: 'Dashboard executivo com gráficos interativos e dados em tempo real',
      technologies: ['React', 'D3.js', 'WebSocket', 'Node.js'],
      category: 'web',
      link: '#',
    },
    {
      title: 'Plataforma de Cursos Online',
      description: 'Sistema completo de ensino online com transmissão de vídeo ao vivo',
      technologies: ['Next.js', 'Python', 'PostgreSQL', 'WebRTC'],
      category: 'web',
      link: '#',
    },
  ];

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'backend', label: 'Backend' },
  ];

  const filteredProjects =
    selectedCategory === 'all' ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <Hero
        title="Meus Projetos"
        description="Confira alguns dos projetos em que trabalhei"
        showCTA={false}
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-light text-dark hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Nenhum projeto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-light py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-gray-700">Projetos Concluídos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">30+</p>
              <p className="text-gray-700">Clientes Satisfeitos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-gray-700">Qualidade Garantida</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">5+</p>
              <p className="text-gray-700">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
