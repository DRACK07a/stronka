import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="snap-section relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green-2 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-green-1 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-5xl"
      >
        <h2 className="text-brand-red font-medium tracking-[0.3em] uppercase mb-6 text-sm md:text-base">
          Kancelaria Prawna
        </h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight mb-8">
          BLSK Legal
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
          Eksperckie doradztwo prawne w zakresie arbitrażu, przetargów publicznych oraz podatków.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500">Scrolluj dalej</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-brand-green-1 w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-[1px] bg-white/5 absolute left-1/4" />
        <div className="h-full w-[1px] bg-white/5 absolute left-2/4" />
        <div className="h-full w-[1px] bg-white/5 absolute left-3/4" />
      </div>
    </section>
  );
}
