import Hero from '@components/Hero';
import Button from '@components/Button';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      <Hero
        title="Vamos Conversar!"
        description="Tem uma ideia ou projeto em mente? Gostaria de saber mais sobre como posso ajudar você"
        showCTA={false}
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Envie uma Mensagem</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Obrigado! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="seu.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-dark mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Assunto da sua mensagem"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Informações de Contato</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
                  <a
                    href="mailto:seu.email@example.com"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    seu.email@example.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Telefone</h3>
                  <a
                    href="tel:+5511999999999"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    +55 (11) 99999-9999
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Localização</h3>
                  <p className="text-gray-700">São Paulo, Brasil</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">Redes Sociais</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-dark text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                      aria-label="GitHub"
                    >
                      💻
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-dark text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      💼
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-dark text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                      aria-label="Twitter"
                    >
                      🐦
                    </a>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-light rounded-lg">
                  <h3 className="text-lg font-semibold text-dark mb-2">Horário de Atendimento</h3>
                  <p className="text-gray-700 text-sm">
                    Seg - Sex: 09:00 - 18:00
                    <br />
                    Sábado: 10:00 - 14:00
                    <br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
