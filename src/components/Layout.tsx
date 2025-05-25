import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
const Layout = () => {
  return <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <motion.main className="flex-grow" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: 20
    }} transition={{
      duration: 0.5
    }}>
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </motion.main>
      <Footer />
      <ScrollToTop />
    </div>;
};
export default Layout;