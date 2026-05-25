// app/page.jsx (Continuation)
import AboutSection from '@/components/AboutSection';
import PortfolioGallery from '@/components/PortfolioGallery';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="relative bg-background w-full min-h-screen">
      {/* ... Hero and Features Sections from Phase 5 ... */}

      <AboutSection />
      
      {/* Visual Divider / Spacer */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
      
      <PortfolioGallery />
      <ContactSection />
    </main>
  );
}

