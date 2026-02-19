import React, { useContext } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Camera, Play, Video, Film } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";

export const Slide5 = () => {
  const { t } = useContext(LanguageContext);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-full flex flex-col justify-center py-12 px-8 md:px-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#D6001C] font-mono-web3 font-black tracking-[0.4em] mb-6 uppercase text-[10px]"
            >
              {t('production_label')}
            </motion.p>
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="font-display text-5xl md:text-8xl tracking-tighter uppercase leading-[0.85] mb-12 italic"
            >
              {t('production_title_1')} <br /> <span className="text-[#D6001C] not-italic">{t('production_title_2')}</span>
            </motion.h2>
            
            <div className="space-y-4">
              {[
                { icon: Camera, titleKey: "prod_photography_title", descKey: "prod_photography_desc" },
                { icon: Video, titleKey: "prod_cinematography_title", descKey: "prod_cinematography_desc" },
                { icon: Film, titleKey: "prod_post_production_title", descKey: "prod_post_production_desc" }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:border-white/10 transition-all group"
                >
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-zinc-900 flex items-center justify-center group-hover:bg-[#D6001C] transition-colors">
                    <item.icon className="w-5 h-5 text-[#D6001C] group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg uppercase tracking-tight mb-1 italic">{t(item.titleKey)}</h4>
                    <p className="text-zinc-500 text-sm font-sans">{t(item.descKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 h-auto lg:h-[600px] mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="h-[220px] sm:h-[260px] lg:h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800"
                alt="Photography"
                className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="h-[220px] sm:h-[260px] lg:h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 lg:translate-y-12"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
                alt="Video Production"
                className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
