import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ServiceModal from "./components/ServiceModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  
  // Parallax and vibration effects
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.4, 1.1]);
  
  // Noticeable vibration/jitter effect
  const rotate = useTransform(scrollYProgress, 
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 
    [0, 2, -2, 2, -2, 2, -2, 2, -2, 2, 0]
  );
  
  const xJitter = useTransform(scrollYProgress,
    [0, 0.05, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.95, 1],
    [0, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 0]
  );

  const yJitter = useTransform(scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0, -5, 5, -5, 5, -5, 5, -5, 5, -5, 0]
  );

  // Combine parallax and jitter for the Y axis
  const y = useTransform(
    [yParallax, yJitter],
    ([p, j]) => `calc(${p} + ${j}px)`
  );

  const handleOpenService = (service: string) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseService = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        <motion.div 
          style={{ 
            y, 
            scale, 
            rotate,
            x: xJitter
          }}
          className="absolute inset-[-30%]"
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-80 blur-[2px]"
          >
            <source src="/video.mp4" type="video/mp4" />
            Twoja przeglądarka nie wspiera formatu wideo.
          </video>
        </motion.div>
      </div>

      <main className="snap-container h-screen relative z-10">
        <Hero />
        <Services onOpenService={handleOpenService} />
        <Contact />
      </main>
      
      <ServiceModal 
        isOpen={isModalOpen} 
        onClose={handleCloseService} 
        service={selectedService} 
      />
    </div>
  );
}


