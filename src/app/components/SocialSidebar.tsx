import React from "react";
import { motion } from "motion/react";
import { socialLinks, SocialIcon } from "./SocialLinks";

export const SocialSidebar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[180] hidden md:flex flex-col items-center pointer-events-auto"
      aria-label="Social media links"
    >
      <motion.div
        animate={{ boxShadow: ["0 0 0px rgba(214,0,28,0)", "0 0 20px rgba(214,0,28,0.15)", "0 0 0px rgba(214,0,28,0)"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col gap-1 py-3 px-2 bg-black/80 backdrop-blur-xl border border-[#D6001C]/30 border-r-0 rounded-l-2xl"
      >
        {socialLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
            whileHover={{ scale: 1.12, x: -4 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative flex items-center justify-center w-11 h-11 rounded-xl text-zinc-400 transition-colors duration-300 ${link.hoverColor}`}
          >
            <span className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
            <SocialIcon icon={link.icon} className="w-5 h-5 relative z-10" />
          </motion.a>
        ))}
      </motion.div>
    </motion.aside>
  );
};
