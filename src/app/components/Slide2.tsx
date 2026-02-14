import React, { useContext } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { LanguageContext } from "../context/LanguageContext";

export const Slide2 = () => {
  const { t } = useContext(LanguageContext);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-full flex flex-col md:flex-row bg-transparent text-white py-12 md:py-0"
    >
      <div className="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center">
        <div className="overflow-hidden mb-4">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-[#D6001C] font-mono-web3 font-black tracking-[0.4em] uppercase text-[10px]"
          >
            {t('about_label')}
          </motion.p>
        </div>
        
        <div className="overflow-hidden mb-12">
          <motion.h2 
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="font-display text-5xl md:text-8xl leading-[0.85] tracking-tighter uppercase italic"
          >
            {t('about_title_1')} <br /> <span className="text-zinc-700 not-italic">{t('about_title_2')}</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-md space-y-6"
        >
          <p className="font-sans text-xl text-zinc-400 leading-relaxed">
            {t('about_desc')}
          </p>
          <div className="h-[1px] w-24 bg-[#D6001C]" />
          <p className="font-display text-2xl font-bold text-white uppercase tracking-tight">
            "We create stories that matter."
          </p>
        </motion.div>
      </div>
      
      <div className="w-full md:w-1/2 relative overflow-hidden p-8 md:p-12">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-full w-full rounded-[3rem] overflow-hidden border border-white/5"
        >
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1080"
            alt="Agency workspace"
            className="w-full h-full object-cover grayscale brightness-50 contrast-125"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
