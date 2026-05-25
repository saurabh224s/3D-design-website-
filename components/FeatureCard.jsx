"use client";
import { motion } from 'framer-motion';

export default function FeatureCard({ title, description, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ y: -10, rotateX: 5, rotateY: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass p-8 rounded-2xl flex flex-col gap-4 relative overflow-hidden group cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Subtle hover gradient reveal */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-neon-cyan">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
