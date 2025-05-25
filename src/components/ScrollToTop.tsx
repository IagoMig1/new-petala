import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <AnimatePresence>
      {isVisible && <motion.button initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: 20
    }} onClick={scrollToTop} className="fixed bottom-8 right-8 p-3 bg-white shadow-lg rounded-full text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all z-50" whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }}>
          <ArrowUp size={24} />
        </motion.button>}
    </AnimatePresence>;
};
export default ScrollToTop;