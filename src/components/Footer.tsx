import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Pétala Lacerda
            </h3>
            <p className="text-gray-600 mb-4">
              Comunicadora, podcaster e ativista social dedicada a fazer a
              diferença na vida de crianças com necessidades especiais.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/petalalacerda10/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/@CáEntreNósPodcast-s1z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-600 transition-colors"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-500" />
                <a
                  href="mailto:contato@petalacacerda.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  sitepetala9@gmail.com
                </a>
              </div>
              <p className="text-gray-600">
                Para colaborações, palestras ou informações sobre a Associação
                Conviver, entre em contato.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Pétala Lacerda. Todos os direitos
            reservados.
          </p>
          <p className="mt-2">
            Desenvolvido por{' '}
            <a
              href="https://www.itslunaris.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              Lunaris
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
