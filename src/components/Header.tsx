import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-3xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#0900FF] via-[#0900FF]/80 to-[#FF0404] font-montserrat italic tracking-wide">
            superbuddy
          </span>
        </motion.div>
        
        <motion.div 
          className="hidden md:flex items-center space-x-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {['Home', 'Features', 'FAQ', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-xl text-white/80 hover:text-[#FF0404] transition-colors font-light"
            >
              {item}
            </a>
          ))}
        </motion.div>
      </nav>
    </header>
  );
}