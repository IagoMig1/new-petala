import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Mic, Heart, Calendar } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <div className="py-16 bg-gradient-to-r from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Sobre Pétala Lacerda
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Comunicadora, podcaster e ativista social dedicada a fazer a
            diferença na vida de crianças com necessidades especiais.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <div className="bg-gradient-to-br from-purple-200 to-pink-100 p-2 rounded-lg shadow-lg">
              <img
                src="assets/sobre.jpg"
                alt="Pétala Lacerda"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Quem é Pétala Lacerda
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Pétala Gonçalves Lacerda é pedagoga, psicopedagoga e mestre em
                Desenvolvimento Humano. Natural de Caratinga (MG), foi eleita a
                primeira mulher prefeita de Caçapava (SP), onde atuou entre 2021
                e 2024, com forte atuação em políticas públicas voltadas à
                inclusão, educação e cidadania.
              </p>
              <p>
                Fundadora da <strong>Associação Conviver</strong>, uma
                organização filantrópica criada em 1996, inspirada em sua
                experiência como mãe de Augusto, uma criança com paralisia
                vertebral. A instituição atende mais de 120 crianças com
                deficiência, além de oferecer suporte familiar e ações
                domiciliares com o projeto "Conviver: Sol da Vida".
              </p>
              <p>
                Idealizadora de ações como <strong>Desapega Conviver</strong>{' '}
                e <strong>Mimo Solidário</strong>, que visam a sustentabilidade
                da instituição, Pétala tem o empreendedorismo social como
                marca de sua trajetória. Sua atuação inspira por unir
                sensibilidade, gestão e impacto social real.
              </p>
              <p>
                É também idealizadora do podcast <strong>"Cá Entre Nós"</strong>
                , um espaço de escuta ativa e reflexões sobre temas sociais. Atua
                como embaixadora do Instituto Mulheres Solidárias e ocupa cargos
                de liderança como diretora da{' '}
                <strong>APVPESP</strong> (Associação de Prefeitas e
                Vice-Prefeitas do Estado de São Paulo) e da{' '}
                <strong>APDESP</strong> (Associação das Primeiras-Damas do
                Estado).
              </p>
              <p>
                Pétala acredita no poder das redes, da escuta e de parcerias que
                realmente transformam. Sua história é sinônimo de superação,
                solidariedade e dedicação à construção de um Brasil mais justo.
              </p>
            </div>
          </div>
        </div>
      </div>

    {/* Timeline */}
<div className="bg-gray-50 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
      Trajetória
    </h2>
    <div className="relative max-w-3xl mx-auto">
      {/* Linha central */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
      {/* Itens da timeline */}
      <div className="space-y-16">
        {/* Fundação Associação Conviver */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 border-white bg-purple-500"></div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8"></div>
            <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Calendar size={16} className="text-purple-500 mr-2" />
                  <span className="text-sm text-gray-500">1996</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Fundação da Associação Conviver
                </h3>
                <p className="text-gray-600">
                  Criada por Pétala Lacerda para apoiar crianças com
                  deficiência, inspirada pela experiência como mãe de Augusto.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formação Acadêmica */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 border-white bg-pink-500"></div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center justify-end mb-2">
                  <span className="text-sm text-gray-500 mr-2">Data(s) Variadas</span>
                  <Calendar size={16} className="text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Formação Acadêmica
                </h3>
                <p className="text-gray-600">
                  Pedagogia, Psicopedagogia e Mestrado em Desenvolvimento Humano.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8"></div>
          </div>
        </div>

        {/* Primeira mulher prefeita de Caçapava */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 border-white bg-purple-500"></div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8"></div>
            <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Calendar size={16} className="text-purple-500 mr-2" />
                  <span className="text-sm text-gray-500">2021 - 2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Primeira mulher prefeita de Caçapava
                </h3>
                <p className="text-gray-600">
                  Atuação com foco em políticas públicas de inclusão, educação e cidadania.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projetos Sociais */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 border-white bg-pink-500"></div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center justify-end mb-2">
                  <span className="text-sm text-gray-500 mr-2">Anos 2000 - presente</span>
                  <Calendar size={16} className="text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Projetos Sociais e Empreendedorismo Solidário
                </h3>
                <p className="text-gray-600">
                  Idealizadora do "Desapega Conviver" e "Mimo Solidário" para
                  sustentabilidade da Associação Conviver.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8"></div>
          </div>
        </div>

        {/* Podcast */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 border-white bg-purple-500"></div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8"></div>
            <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Calendar size={16} className="text-purple-500 mr-2" />
                  <span className="text-sm text-gray-500">2019 - Presente</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Podcast "Cá Entre Nós"
                </h3>
                <p className="text-gray-600">
                  Espaço de escuta ativa e reflexão social com convidados especiais.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lideranças e Embaixadora */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 border-white bg-pink-500"></div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center justify-end mb-2">
                  <span className="text-sm text-gray-500 mr-2">Atual</span>
                  <Calendar size={16} className="text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Liderança e Atuação Social
                </h3>
                <p className="text-gray-600">
                  Embaixadora do Instituto Mulheres Solidárias e diretora da APVPESP e APDESP.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Podcast Section */}
      <div className="py-16 bg-white" id="podcast">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="bg-gray-100 p-1 rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Podcast Cá Entre Nós"
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Podcast Cá Entre Nós
              </h2>
              <p className="text-gray-700 mb-6">
                Um espaço de escuta ativa, histórias de vida e reflexões
                importantes para quem acredita no poder da transformação social.
                Pétala Lacerda recebe convidados especiais e aborda temas atuais
                com sensibilidade e profundidade.
              </p>
              <a
                href="https://www.youtube.com/@CáEntreNósPodcast-s1z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-pink-500 px-6 py-3 font-semibold text-pink-600 hover:bg-pink-600 hover:text-white transition-colors"
              >
                Ouvir no YouTube
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
