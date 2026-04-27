import Hero from '@components/Hero';

export default function About() {
  return (
    <div>
      <Hero
        title="Sobre Mim"
        description="Conheça mais sobre minha história e experiência"
        showCTA={false}
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-primary to-secondary rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-dark mb-4">Quem sou eu?</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sou um desenvolvedor full stack apaixonado por tecnologia e inovação. Com
                experiência em desenvolvimento web moderno, tenho trabalhado em projetos
                desafiadores que me permitiram crescer profissionalmente e adquirir conhecimentos
                sólidos em diferentes tecnologias.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Minha abordagem é focada em criar soluções de alta qualidade, mantendo a melhor
                experiência do usuário em mente. Valorizo a comunicação clara, a documentação bem
                feita e o trabalho em equipe.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Quando não estou codificando, gosto de aprender novas tecnologias, contribuir para
                projetos open source e compartilhar conhecimento com a comunidade.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-dark mb-8 text-center">Experiência</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-2xl font-bold text-dark mb-1">
                  Desenvolvedor Full Stack Senior
                </h3>
                <p className="text-primary font-semibold mb-2">2022 - Atualmente</p>
                <p className="text-gray-700">
                  Atuação em projetos de grande escala, liderança de pequenas equipes e mentoria de
                  desenvolvedores juniores.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-2xl font-bold text-dark mb-1">
                  Desenvolvedor Full Stack Pleno
                </h3>
                <p className="text-primary font-semibold mb-2">2020 - 2022</p>
                <p className="text-gray-700">
                  Desenvolvimento de aplicações web completas, otimização de performance e
                  implementação de boas práticas.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-2xl font-bold text-dark mb-1">
                  Desenvolvedor Front-end Junior
                </h3>
                <p className="text-primary font-semibold mb-2">2019 - 2020</p>
                <p className="text-gray-700">
                  Desenvolvimento de interfaces com React, aprendizado de boas práticas e integração
                  com APIs.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold text-dark mb-8 text-center">Educação</h2>
            <div className="space-y-6">
              <div className="p-6 bg-light rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-dark mb-1">
                  Bacharelado em Ciência da Computação
                </h3>
                <p className="text-primary font-semibold">Universidade XYZ • 2018 - 2022</p>
              </div>

              <div className="p-6 bg-light rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-dark mb-1">Certificações Profissionais</h3>
                <p className="text-primary font-semibold mb-2">2020 - 2024</p>
                <ul className="text-gray-700 space-y-1">
                  <li>✓ AWS Certified Solutions Architect</li>
                  <li>✓ Google Cloud Professional</li>
                  <li>✓ Scrum Master Certified</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
