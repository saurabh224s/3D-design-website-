"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(textRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(cardsRef.current,
      { opacity: 0, y: 50, rotateX: 15 },
      { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" },
      "-=0.5"
    );

    return () => tl.kill();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden perspective-1000">
      <div ref={textRef} className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Redefining <span className="text-neon-cyan">Digital Real Estate</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          We blend spatial design with neural processing to create environments, not just websites. 
          Every pixel is calculated; every interaction has weight.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((item, index) => (
          <div 
            key={item}
            ref={el => cardsRef.current[index] = el}
            className="glass p-10 rounded-3xl h-64 flex flex-col justify-end relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            {/* Abstract Background for the cards */}
            <div className="absolute inset-0 bg-neon-purple/5 group-hover:scale-110 transition-transform duration-700 ease-out" />
            
            <div className="relative z-20">
              <h3 className="text-2xl font-bold mb-2 text-white">Vision {item}</h3>
              <p className="text-gray-300">Seamless integration of form and function.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
