// App.jsx
import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import ProductCard from './components/ProductCard';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const products = [
    {
      id: 1,
      name: 'Horizon Pro',
      category: 'Laptop',
      price: '$1,999',
      description: 'Supercharged by M3 Ultra. 36hr battery life.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format',
      color: 'from-gray-900 to-gray-700',
    },
    {
      id: 2,
      name: 'Eclipse Buds',
      category: 'Audio',
      price: '$249',
      description: 'Adaptive ANC. Spatial audio with dynamic head tracking.',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format',
      color: 'from-slate-800 to-slate-600',
    },
    {
      id: 3,
      name: 'Aether Watch',
      category: 'Wearable',
      price: '$449',
      description: 'Advanced health sensors. Always-on Retina display.',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format',
      color: 'from-zinc-800 to-zinc-600',
    },
    {
      id: 4,
      name: 'Lumina Display',
      category: 'Monitor',
      price: '$1,599',
      description: '32" 6K XDR. ProMotion 120Hz. Reference mode.',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format',
      color: 'from-neutral-800 to-neutral-600',
    },
  ];

  return (
    <div className="bg-white font-sans antialiased overflow-x-hidden">
      <Navbar favoritesCount={favorites.length} />
      <HeroSection />
      
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-sm uppercase tracking-widest text-gray-400 font-medium">Showcase</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mt-3 leading-[1.1]">
            Exceptional craft.
            <br />
            Radical performance.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {products.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={toggleFavorite}
              index={idx}
            />
          ))}
        </div>
      </section>

      {/* Feature section with soft shadows & reveal */}
      <section className="bg-gray-50/80 py-24 md:py-32 mt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              { title: 'Sublime display', desc: 'Extreme dynamic range and pro reference modes.', icon: '✨' },
              { title: 'Silicon power', desc: 'Next‑gen neural engine, unified memory architecture.', icon: '⚡' },
              { title: 'Privacy by design', desc: 'On‑device intelligence, encrypted by default.', icon: '🔒' },
            ].map((feat, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 apple-card">
                <div className="text-4xl mb-4">{feat.icon}</div>
                <h3 className="text-2xl font-semibold tracking-tight">{feat.title}</h3>
                <p className="text-gray-500 mt-2 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;