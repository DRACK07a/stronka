import { motion } from "motion/react";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="snap-section relative flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Large background text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none">
        <span className="text-[25vw] font-bold text-outline uppercase tracking-tighter opacity-10">
          KONTAKT
        </span>
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-green-1 font-medium tracking-[0.3em] uppercase mb-6 text-sm"
          >
            Zacznijmy współpracę
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-8"
          >
            Nie bądź z problemami sam. <br />
            <span className="text-brand-green-2 italic">Porozmawiajmy.</span>
          </motion.h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="block text-xs uppercase tracking-widest text-gray-500 font-medium">
                Adres E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-green-1 h-5 w-5" />
                <input 
                  type="email" 
                  placeholder="twoj@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-green-1 transition-colors text-white"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-xs uppercase tracking-widest text-gray-500 font-medium">
                Numer Telefonu
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 h-5 w-5" />
                <input 
                  type="tel" 
                  placeholder="+48 000 000 000"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-green-2 transition-colors text-white"
                />
              </div>
            </div>

            <div className="md:col-span-2 mt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-red text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-brand-red/20 hover:shadow-brand-red/40 transition-all"
              >
                Wyślij wiadomość
                <Send className="h-5 w-5" />
              </motion.button>
            </div>
          </form>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-12 text-gray-500 text-sm uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-brand-green-1" />
            Warszawa
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-brand-green-2" />
            Kraków
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-brand-green-1" />
            Gdańsk
          </div>
        </div>
      </div>
    </section>
  );
}
