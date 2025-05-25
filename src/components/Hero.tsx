import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pétala Lacerda
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              Pedagoga, Psicopedagoga e Mestre em Desenvolvimento Humano
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Primeira mulher eleita prefeita de Caçapava (SP), dedicada a projetos de educação,
              inclusão e impacto social.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition-colors"
            >
              Saiba mais sobre mim <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="relative w-full h-80 md:h-96">
            <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg">
              <img
                src="assets/petala.jpg"
                alt="Pétala Lacerda"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
