// components/ProductCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product, isFavorite, onToggleFavorite, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.1, 1] }}
      className="group bg-white rounded-3xl apple-card overflow-hidden"
    >
      <div className={`relative h-80 overflow-hidden bg-gradient-to-br ${product.color}`}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover mix-blend-overlay opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <button 
          onClick={() => onToggleFavorite(product.id)}
          className="absolute top-5 right-5 bg-white/80 backdrop-blur-sm p-2.5 rounded-full shadow-md transition-all hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill={isFavorite ? "red" : "none"} viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-5 h-5 text-gray-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>
      <div className="p-7 md:p-8">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">{product.category}</span>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mt-1">{product.name}</h3>
          </div>
          <span className="text-2xl font-semibold">{product.price}</span>
        </div>
        <p className="text-gray-500 mt-3 leading-relaxed">{product.description}</p>
        <div className="mt-6 flex gap-4">
          <button className="text-sm font-medium text-gray-900 border-b border-gray-300 pb-0.5 hover:border-gray-900 transition-all">More details →</button>
          <button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-all">Add to cart</button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;