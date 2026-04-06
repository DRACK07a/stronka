import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Scale, FileText, Landmark } from "lucide-react";

interface ServiceProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
  index: number;
  key?: string;
}

function ServiceTile({ title, icon, color, onClick, index }: ServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      whileHover={{ y: -20 }}
      onClick={onClick}
      className={`group relative h-[400px] md:h-[500px] w-full max-w-sm cursor-pointer overflow-hidden rounded-2xl border border-white/10 p-8 transition-colors hover:border-white/20 bg-white/5 backdrop-blur-sm`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: color }} />
      
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="rounded-xl bg-white/10 p-4 transition-colors group-hover:bg-white/20">
            {icon}
          </div>
          <ArrowUpRight className="h-6 w-6 text-white/30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
        </div>
        
        <div>
          <h3 className="mb-4 font-serif text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h3>
          <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-200 transition-colors">
            Profesjonalne wsparcie prawne i strategiczne doradztwo w obszarze {title.toLowerCase()}.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services({ onOpenService }: { onOpenService: (service: string) => void }) {
  const services = [
    {
      title: "Arbitraż",
      icon: <Scale className="h-8 w-8 text-brand-green-1" />,
      color: "#339966",
    },
    {
      title: "Przetargi",
      icon: <FileText className="h-8 w-8 text-brand-green-2" />,
      color: "#4A766E",
    },
    {
      title: "Podatki",
      icon: <Landmark className="h-8 w-8 text-brand-green-1" />,
      color: "#339966",
    },
  ];

  return (
    <section className="snap-section relative flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <span className="text-[20vw] font-bold text-outline uppercase tracking-tighter opacity-10">
          USŁUGI
        </span>
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-red font-medium tracking-[0.3em] uppercase mb-4 text-sm"
          >
            Nasze Specjalizacje
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold"
          >
            W czym możemy pomóc?
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <ServiceTile
              key={service.title}
              index={index}
              title={service.title}
              icon={service.icon}
              color={service.color}
              onClick={() => onOpenService(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
