import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    emailjs
      .send(
        'service_dz16ngb', 
        'template_qsqjsjo', 
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message
        },
        '-Lde133KBoyVDdwxs' 
      )
      .then(() => {
        setSubmitting(false);
        setSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error(err);
        setSubmitting(false);
        setError('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
      });
  };

  return (
    <div className="bg-white w-full">
      <div className="py-16 bg-gradient-to-r from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Contato</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Entre em contato para colaborações, palestras, informações sobre a
            Associação Conviver ou qualquer outra questão.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Info de Contato */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Informações de Contato
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-pink-500 mr-4 mt-1" size={22} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <a
                    href="mailto:sitepetala9@gmail.com"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    sitepetala9@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-pink-500 mr-4 mt-1" size={22} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Telefone</h3>
                  <p className="text-gray-600">(12) 99752-6401</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-pink-500 mr-4 mt-1" size={22} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Associação Conviver
                  </h3>
                  <p className="text-gray-600">
                    R. Ângelo Augusto Lacerda Gonçalves, 21
                    <br />
                    Res. Esperança
                    <br />
                    Caçapava - SP
                    <br />
                    CEP: 12285-461
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Envie uma Mensagem
            </h2>

            {submitted ? (
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-md">
                <div className="flex">
                  <CheckCircle className="text-green-500 mr-3" size={24} />
                  <div>
                    <h3 className="text-lg font-medium text-green-800">
                      Mensagem enviada com sucesso!
                    </h3>
                    <p className="text-green-700 mt-2">
                      Obrigado por entrar em contato. Retornaremos sua mensagem
                      em breve.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-green-700 font-medium hover:text-green-900"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
                    <p>{error}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="podcast">Podcast Cá Entre Nós</option>
                    <option value="associacao">Associação Conviver</option>
                    <option value="palestras">Palestras e Eventos</option>
                    <option value="colaboracao">Propostas de Colaboração</option>
                    <option value="outro">Outro Assunto</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {submitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send size={18} className="mr-2" />
                        Enviar mensagem
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
            Onde Estamos
          </h2>
<div className="bg-white p-1 rounded-lg shadow-md overflow-hidden rounded-md">
  <iframe
    title="Onde estamos"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0937823738695!2d-45.7169519!3d-23.5287616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccaa7e007f07c1%3A0xe98f30ad53e4f0b2!2sR.%20Ângelo%20Augusto%20Lacerda%20Gonçalves%2C%2021%20-%20Residencial%20Esperan%C3%A7a%2C%20Ca%C3%A7apava%20-%20SP%2C%2012285-461%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1716649113123!5m2!1spt-BR!2sus"
    width="100%"
    height="384" // h-96
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full h-96"
  ></iframe>
</div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
