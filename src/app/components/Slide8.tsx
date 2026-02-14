import React, { useContext } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Instagram, Linkedin, Send } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";

export const Slide8 = () => {
  const { t } = useContext(LanguageContext);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-full flex flex-col justify-center py-12 px-8 md:px-24"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#D6001C] font-mono-web3 font-black tracking-[0.4em] mb-6 uppercase text-[10px]"
          >
            CONTACT
          </motion.p>
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="font-display text-5xl md:text-9xl tracking-tighter uppercase leading-[0.8] mb-12 italic"
          >
            {t('contact_title_1')} <br /> <span className="text-[#D6001C] not-italic">{t('contact_title_2')}</span>
          </motion.h2>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:border-[#D6001C] transition-colors">
                <Mail className="w-5 h-5 text-zinc-500 group-hover:text-[#D6001C]" />
              </div>
              <div>
                <p className="text-zinc-600 text-[9px] font-mono-web3 uppercase tracking-widest mb-1">Email Us</p>
                <p className="text-xl font-display font-bold uppercase tracking-tight italic">hello@miosmedia.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:border-[#D6001C] transition-colors">
                <MapPin className="w-5 h-5 text-zinc-500 group-hover:text-[#D6001C]" />
              </div>
              <div>
                <p className="text-zinc-600 text-[9px] font-mono-web3 uppercase tracking-widest mb-1">Location</p>
                <p className="text-xl font-display font-bold uppercase tracking-tight italic">Banja Luka, BiH</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/5 rounded-[3rem] p-12">
           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                 <label className="text-[9px] font-mono-web3 uppercase tracking-widest text-zinc-500 ml-4">Full Name</label>
                 <input type="text" placeholder="John Doe" className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 font-sans text-sm focus:outline-none focus:border-[#D6001C] transition-colors" />
              </div>
              <div className="space-y-2">
                 <label className="text-[9px] font-mono-web3 uppercase tracking-widest text-zinc-500 ml-4">Service Required</label>
                 <select className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 font-sans text-sm focus:outline-none focus:border-[#D6001C] transition-colors appearance-none text-zinc-400">
                    <option>Social Media Management</option>
                    <option>Video Production</option>
                    <option>Graphic Design & AI</option>
                    <option>Web Development</option>
                 </select>
              </div>
              <div className="space-y-2">
                 <label className="text-[9px] font-mono-web3 uppercase tracking-widest text-zinc-500 ml-4">Message</label>
                 <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 font-sans text-sm focus:outline-none focus:border-[#D6001C] transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-[#D6001C] py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#b50018] transition-all group">
                 <span className="font-mono-web3 font-black text-[10px] uppercase tracking-widest">{t('btn_inquiry')}</span>
                 <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
           </form>
        </div>
      </div>

      <div className="mt-20 flex justify-between items-center border-t border-white/5 pt-12">
         <p className="text-zinc-600 text-[9px] font-mono-web3 uppercase tracking-widest">© 2026 MIOS MEDIA AGENCY • {t('footer_rights')}</p>
         <div className="flex gap-6">
            <Instagram className="w-5 h-5 text-zinc-500 hover:text-white transition-colors cursor-pointer" />
            <Linkedin className="w-5 h-5 text-zinc-500 hover:text-white transition-colors cursor-pointer" />
         </div>
      </div>
    </motion.div>
  );
};
