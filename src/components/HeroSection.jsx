// components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative pt-32 md:pt-44 pb-24 md:pb-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Introducing</span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-gray-900 mt-4 leading-[1.05]">
            Horizon.
            <br />
            Beyond edge.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mt-6 leading-relaxed">
            The thinnest, lightest, and most powerful design ever. With breakthrough silicon and an all‑day battery life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
              Learn more
            </button>
            <button className="bg-gray-100 text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-all">
              View pricing →
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mt-20 md:mt-28 relative"
        >
          <div className="rounded-3xl overflow-hidden apple-shadow bg-gradient-to-b from-gray-100 to-white p-2">
            <img 
              src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=1600&auto=format" 
              alt="Hero product" 
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/70 backdrop-blur-md rounded-full px-6 py-3 shadow-md text-sm text-gray-600">
            ✨ All-new design. Available this fall.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;