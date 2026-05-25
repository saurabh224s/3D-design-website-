"use client";
import { motion, useMotionValue, useTransform } from 'framer-motion';

const projects = [
  { 
    id: 1, 
    title: "Spatial Streaming", 
    category: "3D Movie Interface", 
    gradient: "from-[#00f3ff] to-[#0055ff]"
  },
  { 
    id: 2, 
    title: "Neural Summarizer", 
    category: "AI Document Analysis", 
    gradient: "from-[#b700ff] to-[#ff0055]"
  },
  { 
    id: 3, 
    title: "Optics & Light", 
    category: "Interactive Photography", 
    gradient: "from-[#0055ff] to-[#b700ff]"
  }
];

const ProjectCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Calculate 3D rotation based on mouse position
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`glass h-96 rounded-3xl p-8 cursor-pointer relative overflow-hidden group bg-gradient-to-br ${project.gradient} bg-opacity-10`}
    >
      <div 
        style={{ transform: "translateZ(50px)" }} 
        className="absolute bottom-8 left-8 right-8 pointer-events-none"
      >
        <p className="text-sm uppercase tracking-widest text-white/70 mb-2">{project.category}</p>
        <h3 className="text-3xl font-bold text-white">{project.title}</h3>
      </div>
      
      {/* Glare effect on hover */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default function PortfolioGallery() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">Selected <span className="bg-premium-gradient bg-clip-text text-transparent">Works</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
  }
          
