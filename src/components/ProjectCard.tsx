interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  image,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {image && (
        <div className="h-48 bg-gradient-to-br from-primary to-secondary overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>

        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-700 mb-2">Tecnologias:</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-medium text-sm"
          >
            Ver Projeto →
          </a>
        )}
      </div>
    </div>
  );
}
