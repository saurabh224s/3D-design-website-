"use client";
import { motion } from 'framer-motion';

export default function HeroOverlay() {
  return (
    <div className="relative z-10 flex h-screen flex-col items-center justify-center px-4 text-center pointer-events-none">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-bold tracking-tighter"
      >
        The Future is <span className="bg-premium-gradient bg-clip-text text-transparent">Immersive</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="mt-6 max-w-xl text-lg text-gray-400"
      >
        Experience a new dimension of web design. Powered by WebGL, optimized for performance, and built for luxury.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 pointer-events-auto"
      >
        <button className="glass px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors duration-300 border-neon-cyan/30 border">
          Explore the Void
        </button>
      </motion.div>
    </div>
  );
}

