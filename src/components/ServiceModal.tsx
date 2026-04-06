import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2 } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: string | null;
}

const serviceContent: Record<string, { description: string; points: string[] }> = {
  "Arbitraż": {
    description: "Zapewniamy kompleksowe wsparcie w krajowych i międzynarodowych postępowaniach arbitrażowych. Nasze doświadczenie pozwala na skuteczne rozwiązywanie sporów gospodarczych poza sądownictwem powszechnym.",
    points: [
      "Reprezentacja przed stałymi sądami polubownymi",
      "Arbitraż ad hoc",
      "Opracowywanie klauzul arbitrażowych",
      "Uznawanie i wykonywanie wyroków sądów polubownych",
      "Doradztwo w sporach inwestycyjnych"
    ]
  },
  "Przetargi": {
    description: "Wspieramy zarówno wykonawców, jak i zamawiających na każdym etapie postępowania o udzielenie zamówienia publicznego. Dbamy o zgodność z przepisami i minimalizację ryzyka prawnego.",
    points: [
      "Analiza dokumentacji przetargowej (SWZ)",
      "Przygotowywanie ofert i zapytań",
      "Reprezentacja przed Krajową Izbą Odwoławczą (KIO)",
      "Obsługa prawna konsorcjów",
      "Audyt postępowań o udzielenie zamówienia"
    ]
  },
  "Podatki": {
    description: "Oferujemy strategiczne doradztwo podatkowe, pomagając optymalizować obciążenia i zapewniać pełne bezpieczeństwo rozliczeń w dynamicznie zmieniającym się otoczeniu prawnym.",
    points: [
      "Planowanie podatkowe i optymalizacja",
      "Reprezentacja w kontrolach i postępowaniach podatkowych",
      "Audyty podatkowe (due diligence)",
      "Doradztwo w zakresie cen transferowych",
      "Wsparcie w rozliczaniu transakcji międzynarodowych"
    ]
  }
};

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!service) return null;
  const content = serviceContent[service];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            className="relative w-full max-w-4xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 overflow-y-auto max-h-[90vh]"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-brand-green-1 font-medium tracking-[0.3em] uppercase mb-6 text-sm">
                  Szczegóły Usługi
                </h2>
                <h3 className="text-5xl md:text-7xl font-serif font-bold mb-8">
                  {service}
                </h3>
                <p className="text-xl text-gray-400 font-light leading-relaxed">
                  {content.description}
                </p>
              </div>

              <div className="space-y-8">
                <h4 className="text-xl font-bold font-serif mb-6">Zakres działań:</h4>
                <ul className="space-y-4">
                  {content.points.map((point, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 text-gray-300"
                    >
                      <CheckCircle2 className="h-6 w-6 text-brand-green-1 shrink-0 mt-1" />
                      <span className="text-lg">{point}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="pt-8">
                  <button 
                    onClick={onClose}
                    className="px-8 py-4 bg-brand-green-2 text-white rounded-xl font-bold hover:bg-brand-green-1 transition-colors"
                  >
                    Wróć do strony głównej
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
