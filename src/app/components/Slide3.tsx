import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Palette, Zap, Target, BarChart3, Globe, Smartphone, X, ArrowRight } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";

const services = [
  { icon: Smartphone, title: "Social Content", key: "social" },
  { icon: Target, title: "Ads Strategy", key: "ads" },
  { icon: Palette, title: "Graphic Design", key: "graphic" },
  { icon: Zap, title: "Viral Growth", key: "viral" },
  { icon: Globe, title: "Web Dev", key: "web" },
  { icon: BarChart3, title: "Analytics", key: "analytics" },
];

export const Slide3 = () => {
  const { t } = useContext(LanguageContext);
  const [selectedService, setSelectedService] = useState<null | typeof services[0]>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-full flex flex-col justify-center py-12 px-8 md:px-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8 md:mb-16 overflow-hidden">
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-[#D6001C] font-mono-web3 font-black tracking-[0.4em] uppercase text-[10px] mb-4"
          >
            {t('services_label')}
          </motion.p>
          <motion.h2 
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="font-display text-5xl md:text-8xl tracking-tighter uppercase leading-[0.9] italic"
          >
            {t('services_title_1')} <br /> <span className="text-zinc-800 not-italic">{t('services_title_2')}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {services.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedService(s)}
              className="group border-l border-zinc-900 pl-8 hover:border-[#D6001C] transition-all duration-500 cursor-pointer py-4"
            >
              <s.icon className="w-8 h-8 text-[#D6001C] mb-6 transition-all group-hover:scale-110" />
              <h3 className="text-3xl font-display font-bold mb-3 tracking-tight flex items-center gap-2 uppercase italic">
                {s.title}
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all text-[#D6001C] group-hover:translate-x-2" />
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-2xl"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-zinc-900 border border-white/5 rounded-2xl md:rounded-[3rem] p-6 sm:p-8 md:p-12 relative shadow-2xl text-center max-h-[90vh] overflow-y-auto"
            >
              <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors z-10">
                 <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <selectedService.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#D6001C] mx-auto mb-4 sm:mb-6 md:mb-8" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black mb-3 sm:mb-4 uppercase italic tracking-tighter break-words px-2">{selectedService.title}</h3>
              <p className="text-zinc-400 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg leading-relaxed font-sans px-2">{t('service_modal_desc')}</p>
              <button onClick={() => setSelectedService(null)} className="w-full py-3 sm:py-4 md:py-5 rounded-xl md:rounded-2xl bg-[#D6001C] text-white font-mono-web3 font-black text-[9px] sm:text-[10px] tracking-widest uppercase hover:bg-[#b50018] transition-all">
                {t('btn_details')}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
