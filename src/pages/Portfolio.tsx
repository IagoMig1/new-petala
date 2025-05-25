import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// Simulating portfolio data since we haven't implemented it in Supabase yet
const portfolioItems = [{
  id: 1,
  title: 'Podcast Cá Entre Nós',
  category: 'Podcast',
  description: 'Um espaço de diálogo aberto e sincero sobre temas relevantes da sociedade, com convidados especiais e discussões que vão te fazer refletir.',
  image_url: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
}, {
  id: 2,
  title: 'Associação Conviver',
  category: 'Projeto Social',
  description: 'Uma iniciativa dedicada ao apoio e desenvolvimento de crianças com necessidades especiais, oferecendo suporte, recursos e um ambiente acolhedor.',
  image_url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
}, {
  id: 3,
  title: 'Palestras e Workshops',
  category: 'Eventos',
  description: 'Palestras inspiradoras sobre inclusão, comunicação e impacto social, compartilhando experiências e conhecimentos para transformar realidades.',
  image_url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
}, {
  id: 4,
  title: 'Comunicação Inclusiva',
  category: 'Consultoria',
  description: 'Serviços de consultoria para empresas e organizações que desejam desenvolver uma comunicação mais inclusiva e acessível para todos os públicos.',
  image_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
}, {
  id: 5,
  title: 'Programa de TV "Além do Olhar"',
  category: 'Mídia',
  description: 'Participação como apresentadora em programa de TV que aborda temas relacionados à inclusão e diversidade, com entrevistas e reportagens especiais.',
  image_url: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
}, {
  id: 6,
  title: 'Livro "Novos Caminhos"',
  category: 'Publicação',
  description: 'Obra literária que reúne histórias inspiradoras de famílias e crianças que superaram desafios relacionados a necessidades especiais.',
  image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
}];
const categories = ['Todos', ...Array.from(new Set(portfolioItems.map(item => item.category)))];
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const filteredItems = activeCategory === 'Todos' ? portfolioItems : portfolioItems.filter(item => item.category === activeCategory);
  return <div className="bg-white w-full">
      <div className="py-16 bg-gradient-to-r from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Conheça os projetos, iniciativas e trabalhos desenvolvidos por
            Pétala Lacerda ao longo de sua carreira como comunicadora e ativista
            social.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === category ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}>
              {category}
            </button>)}
        </div>
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => <div key={item.id} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-60">
                <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link to={`/about#${item.id}`} className="inline-flex items-center text-pink-500 hover:text-pink-700 font-medium">
                  Saiba mais <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>)}
        </div>
      </div>
      {/* Call to Action */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Interessado em colaborar?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Pétala está sempre aberta a novas parcerias, projetos e iniciativas
            que compartilhem valores de inclusão e transformação social.
          </p>
          <Link to="/contact" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:opacity-90 transition-opacity">
            Entre em contato
          </Link>
        </div>
      </div>
    </div>;
};
export default Portfolio;