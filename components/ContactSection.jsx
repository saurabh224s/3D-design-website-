"use client";
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="relative py-32 px-6 w-full flex justify-center overflow-hidden">
      {/* Ambient background glow for the contact section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-neon-blue/20 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass p-12 rounded-[2.5rem] w-full max-w-2xl relative z-10"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Initiate <span className="text-neon-cyan">Sequence</span></h2>
          <p className="text-gray-400">Secure transmission line to our engineering team.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <input 
                type="text" 
                required 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-neon-cyan focus:bg-white/10 transition-all peer" 
                id="name"
                placeholder="Name"
              />
              <label htmlFor="name" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-neon-cyan peer-focus:text-sm">Name</label>
            </div>
            
            <div className="relative group">
              <input 
                type="email" 
                required 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-neon-purple focus:bg-white/10 transition-all peer" 
                id="email"
                placeholder="Email"
              />
              <label htmlFor="email" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-neon-purple peer-focus:text-sm">Email</label>
            </div>
          </div>

          <div className="relative group mt-8">
            <textarea 
              required 
              rows="4"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-neon-cyan focus:bg-white/10 transition-all peer resize-none" 
              id="message"
              placeholder="Message"
            ></textarea>
            <label htmlFor="message" className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-neon-cyan peer-focus:text-sm">Transmission Details</label>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 mt-6 rounded-xl bg-premium-gradient text-white font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(183,0,255,0.5)] transition-shadow duration-300"
          >
            <span>Transmit Data</span>
            <Send size={18} />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
              }
          
