import React, { useContext } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Code, Globe, Layout, Search, Server, Smartphone } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";

export const Slide7 = () => {
  const { t } = useContext(LanguageContext);

  const stats = [
    { label: "Performance", value: "99%" },
    { label: "Uptime", value: "99.9%" },
    { label: "Security", value: "Lvl 5" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-full flex flex-col justify-center py-12 px-8 md:px-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 h-auto lg:h-[500px]">
            <div className="col-span-1 md:row-span-2 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-900/50 p-8 md:p-12 flex flex-col justify-between group min-h-[400px] md:min-h-0">
               <div className="space-y-6 md:space-y-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1.2rem] md:rounded-[1.5rem] bg-zinc-800 flex items-center justify-center border border-white/5 group-hover:bg-[#D6001C] transition-colors duration-500">
                     <Code className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-black uppercase italic tracking-tighter leading-none">
                    MODERN <br /> <span className="text-[#D6001C]">STACK</span>
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-full md:max-w-[200px]">{t('web_stack_desc')}</p>
               </div>
               <div className="flex flex-wrap gap-4 md:gap-6 mt-8 md:mt-0">
                  {stats.map(s => (
                    <div key={s.label} className="min-w-[60px]">
                       <p className="text-[#D6001C] font-mono-web3 font-black text-[12px] md:text-[14px]">{s.value}</p>
                       <p className="text-zinc-600 font-mono-web3 text-[8px] md:text-[9px] uppercase tracking-wider">{s.label}</p>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="col-span-1 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 relative h-[240px] md:h-auto">
               <ImageWithFallback 
                 src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
                 alt="Web Dev 1"
                 className="w-full h-full object-cover grayscale brightness-50"
               />
               <div className="absolute top-6 left-6 md:top-8 md:left-8">
                  <Globe className="w-5 h-5 md:w-6 md:h-6 text-[#D6001C]" />
               </div>
            </div>

            <div className="col-span-1 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 relative bg-zinc-900 p-8 flex items-center justify-center group h-[180px] md:h-auto">
               <div className="text-center space-y-4">
                  <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-zinc-500 mx-auto group-hover:text-[#D6001C] transition-colors" />
                  <p className="font-mono-web3 text-[8px] md:text-[9px] uppercase font-black text-zinc-500 tracking-widest">Mobile First</p>
               </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#D6001C] font-mono-web3 font-black tracking-[0.4em] mb-6 uppercase text-[10px]"
            >
              {t('web_label')}
            </motion.p>
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="font-display text-5xl md:text-8xl tracking-tighter uppercase leading-[0.85] mb-8 italic"
            >
              {t('web_title_1')} <br /> <span className="text-white not-italic">{t('web_title_2')}</span>
            </motion.h2>
            <p className="text-zinc-400 text-lg font-sans mb-10 leading-relaxed">
              {t('web_desc')}
            </p>

            <div className="space-y-6">
              {[
                { icon: Search, title: "SEO Optimized", desc: "Sajtovi koji se rangiraju visoko na Google pretrazi." },
                { icon: Server, title: "Hosting & Support", desc: "Besplatno održavanje i premium hosting podrška." }
              ].map((item, i) => (
                <div key={item.title} className="flex gap-6 items-center group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-[#D6001C] transition-colors">
                    <item.icon className="w-4 h-4 text-zinc-500 group-hover:text-[#D6001C]" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold uppercase italic text-sm tracking-tight">{item.title}</h5>
                    <p className="text-zinc-600 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
