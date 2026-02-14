import React, { useContext } from "react";
import { motion } from "motion/react";
import logo from "../../assets/6725b585f15935842ec833c425216b873e445e32.png";
import { LanguageContext } from "../context/LanguageContext";

export const Slide1 = () => {
  const { t } = useContext(LanguageContext);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex flex-col items-center justify-center bg-transparent text-white p-8 relative overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            src={logo} 
            alt="Mios Media" 
            className="h-20 md:h-28 mb-12 drop-shadow-[0_0_30px_rgba(214,0,28,0.2)]"
          />

          <motion.span 
            className="font-mono-web3 font-black text-[#D6001C] text-[10px] md:text-xs mb-8 block uppercase tracking-[0.5em]"
          >
            {t('hero_subtitle')}
          </motion.span>
          
          <div className="relative mb-8 md:mb-12 w-full px-4 text-center">
            <h1 className="font-display text-4xl sm:text-7xl md:text-[10vw] font-black leading-[0.9] tracking-tighter uppercase italic break-words">
              {t('hero_title_1')} <br />
              <span className="text-[#D6001C] not-italic">{t('hero_title_2')}</span>
            </h1>
          </div>

          <p className="font-sans text-lg md:text-2xl max-w-xl mx-auto font-light text-zinc-400 leading-relaxed tracking-wide">
            {t('hero_desc')}
          </p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-20 flex flex-col items-center gap-4 group"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#D6001C] to-transparent" />
          <span className="text-[9px] tracking-[0.3em] font-black text-zinc-600 uppercase font-mono-web3">{t('scroll_down')}</span>
        </motion.div>
      </div>
    </motion.div>
  );
};
