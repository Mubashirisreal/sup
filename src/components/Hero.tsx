import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import IframeModal from './IframeModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen pt-32 pb-16 flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF0404]/30 via-[#0900FF]/20 to-[#ffffff]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9,0,255,0.15)_0%,rgba(0,0,0,0.8)_100%)]" />
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,4,4,0.3),rgba(255,255,255,0))]" />
        {/* Added black overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Chat with Your Management tools,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0900FF] via-[#0900FF]/80 to-[#FF0404]">
              Effortlessly
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-300 leading-relaxed mb-12">
            Seamlessly communicate with your Management tools using AI-powered chatbots. 
            Automate workflows, save time, and boost productivity.
          </p>

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0900FF] via-[#0900FF]/80 to-[#FF0404] text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-lg shadow-[#0900FF]/25"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      <IframeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}