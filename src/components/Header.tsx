import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { motion } from 'framer-motion';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Blog',
    path: '/blog'
  },  {
    name: 'Sobre',
    path: '/about'
  }, {
    name: 'Contato',
    path: '/contact'
  }];
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div whileHover={{
        scale: 1.02
      }} transition={{
        type: 'spring',
        stiffness: 400,
        damping: 10
      }}>
          <Link to="/" className="flex items-center">
            <motion.span className="text-2xl font-bold text-gray-900" whileHover={{
            color: '#374151'
          }}>
              Pétala Lacerda
            </motion.span>
          </Link>
        </motion.div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => <motion.div key={link.path} whileHover={{
          y: -2
        }} transition={{
          type: 'spring',
          stiffness: 400,
          damping: 17
        }}>
              <NavLink to={link.path} className={({
            isActive
          }) => `text-gray-600 hover:text-gray-900 transition-colors relative ${isActive ? 'text-gray-900 font-medium' : ''}`}>
                {link.name}
              </NavLink>
            </motion.div>)}
        </nav>
        {/* Mobile Menu Button */}
        <motion.button whileTap={{
        scale: 0.95
      }} className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </motion.button>
      </div>
      {/* Mobile Navigation */}
      <motion.div initial={false} animate={{
      height: isMenuOpen ? 'auto' : 0,
      opacity: isMenuOpen ? 1 : 0
    }} className="md:hidden overflow-hidden bg-white border-t border-gray-200">
        <motion.nav initial={{
        opacity: 0
      }} animate={{
        opacity: isMenuOpen ? 1 : 0
      }} className="container mx-auto px-4 py-3">
          <div className="flex flex-col space-y-3">
            {navLinks.map(link => <NavLink key={link.path} to={link.path} className={({
            isActive
          }) => `block py-2 px-3 rounded-md ${isActive ? 'bg-gray-50 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </NavLink>)}
          </div>
        </motion.nav>
      </motion.div>
    </motion.header>;
};
export default Header;