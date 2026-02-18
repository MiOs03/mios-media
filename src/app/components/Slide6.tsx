import React, { useContext } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Palette, PenTool, Layout, Layers, Box, Maximize } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";

export const Slide6 = () => {
  const { t } = useContext(LanguageContext);

  const designFeatures = [
    { icon: PenTool, titleKey: "design_logo_brand_title", descKey: "design_logo_brand_desc" },
    { icon: Layout, titleKey: "design_ui_title", descKey: "design_ui_desc" },
    { icon: Box, titleKey: "design_packaging_title", descKey: "design_packaging_desc" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-full flex flex-col justify-center py-12 px-8 md:px-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#D6001C] font-mono-web3 font-black tracking-[0.4em] mb-6 uppercase text-[10px]"
            >
              {t('design_label')}
            </motion.p>
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="font-display text-5xl md:text-8xl tracking-tighter uppercase leading-[0.85] mb-8 italic"
            >
              {t('design_title_1')} <br /> <span className="text-[#D6001C] not-italic">{t('design_title_2')}</span>
            </motion.h2>
            <p className="text-zinc-500 text-xl font-sans mb-12 leading-relaxed max-w-xl">
              {t('design_desc')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {designFeatures.map((f, i) => (
                  <motion.div 
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="space-y-4"
                  >
                     <f.icon className="w-6 h-6 text-[#D6001C]" />
                     <h4 className="font-display font-bold text-lg uppercase tracking-tight italic">{t(f.titleKey)}</h4>
                     <p className="text-zinc-600 text-sm leading-relaxed">{t(f.descKey)}</p>
                  </motion.div>
               ))}
            </div>
          </div>

          <div className="relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative rounded-[3rem] overflow-hidden border border-white/5 aspect-square"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000"
                alt="Graphic Design"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                    <Maximize className="w-4 h-4 text-white" />
                 </div>
                 <span className="font-mono-web3 text-[8px] uppercase tracking-widest font-black text-white/50">High Fidelity Deliverables</span>
              </div>
            </motion.div>
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-[#D6001C]/5 blur-[120px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
