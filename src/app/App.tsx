import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Slide1 } from "./components/Slide1";
import { Slide2 } from "./components/Slide2";
import { Slide3 } from "./components/Slide3";
import { Slide4 } from "./components/Slide4";
import { Slide5 } from "./components/Slide5";
import { Slide6 } from "./components/Slide6";
import { Slide7 } from "./components/Slide7";
import { Slide8 } from "./components/Slide8";
import { CurrencyContext } from "./context/CurrencyContext";
import { LanguageContext, translations, Language } from "./context/LanguageContext";
import logo from "../assets/6725b585f15935842ec833c425216b873e445e32.png";
import { Menu, X as CloseIcon } from "lucide-react";

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];

export default function App() {
  const [currency, setCurrency] = useState("KM");
  const [language, setLanguage] = useState<Language>("BS");
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const convert = (kmValue: number) => {
    if (currency === "KM") return kmValue.toLocaleString();
    return Math.round(kmValue * 0.51).toLocaleString();
  };

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  useEffect(() => {
    const container = document.querySelector('.snap-container');
    const handleScroll = () => {
      if (container) {
        const index = Math.round(container.scrollTop / window.innerHeight);
        setActiveSlide(index);
      }
    };
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    document.getElementById(`slide-${index}`)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <CurrencyContext.Provider value={{ currency, setCurrency, convert }}>
        <div className="relative w-full h-screen bg-[#000000] text-white overflow-hidden font-sans">
          <style>
            {`
              html, body { 
                background-color: #000000; 
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                text-rendering: optimizeLegibility;
              }
              * {
                -webkit-tap-highlight-color: transparent;
              }
              .font-display { font-family: 'Syne', sans-serif; font-style: normal !important; }
              .font-mono-web3 { font-family: 'Space Grotesk', sans-serif; }
              .snap-container { 
                scroll-behavior: smooth; 
                overflow-y: auto; 
                scroll-snap-type: y mandatory; 
                height: 100vh; 
                height: 100dvh;
                overflow-x: hidden;
                -webkit-overflow-scrolling: touch;
                will-change: transform;
                backface-visibility: hidden;
                touch-action: pan-y;
                overscroll-behavior-y: contain;
              }
              .snap-slide { 
                scroll-snap-align: start; 
                scroll-snap-stop: always;
                height: 100vh; 
                height: 100dvh;
                width: 100%; 
                position: relative; 
                display: flex; 
                align-items: center; 
                overflow-x: hidden;
                background: #000000;
                will-change: transform;
                backface-visibility: hidden;
                contain: layout style paint;
              }
              ::-webkit-scrollbar { display: none; }
              .no-scrollbar::-webkit-scrollbar { display: none; }
              .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
              
              @media (max-width: 768px) {
                .snap-container { 
                  scroll-snap-type: y proximity;
                }
                .snap-slide { 
                  height: auto; 
                  min-height: 100vh; 
                  min-height: 100dvh;
                  padding-top: 70px; 
                  padding-bottom: 40px; 
                }
                img {
                  max-width: 100%;
                  height: auto;
                }
              }
              @media (prefers-reduced-motion: reduce) {
                *, *::before, *::after {
                  animation-duration: 0.01ms !important;
                  animation-iteration-count: 1 !important;
                  transition-duration: 0.01ms !important;
                }
              }
            `}
          </style>

          {/* Minimal Floating Navbar */}
          <header className="fixed top-2 sm:top-4 md:top-8 left-1/2 -translate-x-1/2 z-[200] w-[95%] sm:w-[98%] max-w-7xl">
            <nav className="bg-black/40 backdrop-blur-3xl border border-white/5 rounded-full px-3 sm:px-4 md:px-6 lg:px-10 py-2 sm:py-2.5 md:py-3 lg:py-4 flex justify-between items-center shadow-2xl">
              <div className="flex items-center gap-4 sm:gap-8 md:gap-16">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src={logo} alt="Mios Media" className="h-3 sm:h-4 md:h-5 lg:h-6 w-auto max-h-10 cursor-pointer object-contain" 
                  onClick={() => scrollToSlide(0)}
                  loading="eager"
                />
                <div className="hidden lg:flex items-center gap-10 font-mono-web3 text-[8px] uppercase font-black tracking-[0.3em] text-zinc-500">
                  {(['nav_about', 'nav_services', 'nav_pricing', 'nav_contact'] as const).map((key, i) => {
                    const slideIndices = [1, 2, 3, 7];
                    const targetIdx = slideIndices[i];
                    const isActive = activeSlide === targetIdx || (i === 2 && activeSlide === 3);
                    return (
                      <button 
                        key={key}
                        onClick={() => scrollToSlide(targetIdx)} 
                        className={`uppercase hover:text-white transition-all duration-500 relative py-2 ${isActive ? "text-[#D6001C]" : ""}`}
                      >
                        {t(key)}
                        {isActive && <motion.div layoutId="nav-dot" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D6001C] rounded-full" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 md:gap-6">
                <div className="flex bg-white/5 rounded-full p-0.5 sm:p-1 border border-white/5 h-7 sm:h-8">
                  {(["BS", "EN", "DE"] as Language[]).map(l => (
                    <button key={l} onClick={() => setLanguage(l)} className={`px-2 sm:px-2.5 md:px-3 lg:px-4 h-full rounded-full text-[7px] sm:text-[8px] font-black transition-all ${language === l ? "bg-white text-black shadow-lg" : "text-zinc-500 hover:text-white"}`}>{l}</button>
                  ))}
                </div>
                <button 
                  onClick={() => setCurrency(currency === "KM" ? "EUR" : "KM")}
                  className="hidden md:flex px-6 h-8 rounded-full bg-[#D6001C] text-white text-[8px] font-black tracking-widest uppercase hover:bg-[#b50018] transition-all items-center gap-2 shadow-lg"
                >
                  {currency}
                </button>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 active:bg-white/10 transition-colors"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <CloseIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                </button>
              </div>
            </nav>
          </header>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center p-6 sm:p-8"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex flex-col gap-6 sm:gap-8 text-center w-full max-w-xs">
                  {(['nav_about', 'nav_services', 'nav_pricing', 'nav_contact'] as const).map((key, i) => {
                    const slideIndices = [1, 2, 3, 7];
                    return (
                      <button 
                        key={key}
                        onClick={() => scrollToSlide(slideIndices[i])}
                        className="text-3xl sm:text-4xl font-display font-black italic uppercase tracking-tighter hover:text-[#D6001C] transition-colors py-2"
                      >
                        {t(key)}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs">
                  <button 
                    onClick={() => { setCurrency(currency === "KM" ? "EUR" : "KM"); setMobileMenuOpen(false); }}
                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 font-mono-web3 text-[9px] sm:text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors"
                  >
                    {t('label_currency')}: {currency}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <main className="snap-container">
            {slides.map((Slide, index) => (
              <section key={index} id={`slide-${index}`} className="snap-slide">
                <Slide />
              </section>
            ))}
          </main>

          {/* Progress Tracker (Hidden on Mobile) */}
          <div className="fixed bottom-12 right-12 z-[100] hidden md:flex flex-col items-center gap-6">
            <div className="flex flex-col gap-3">
              {slides.map((_, i) => (
                <div 
                  key={i} 
                  className="group relative flex items-center"
                  onClick={() => scrollToSlide(i)}
                >
                  <span className={`absolute right-8 font-mono-web3 text-[8px] font-black uppercase tracking-widest text-white transition-all duration-500 opacity-0 group-hover:opacity-100 ${activeSlide === i ? "text-[#D6001C]" : ""}`}>
                    0{i+1}
                  </span>
                  <div className={`w-1 transition-all duration-700 cursor-pointer ${activeSlide === i ? "h-10 bg-[#D6001C]" : "h-1.5 bg-zinc-800 hover:bg-zinc-600"}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
            <motion.div animate={{ x: [0, 30, 0], y: [0, 20, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D6001C]/10 via-transparent to-zinc-900/20 blur-[120px]" />
          </div>
          <div className="fixed inset-0 z-[60] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>
      </CurrencyContext.Provider>
    </LanguageContext.Provider>
  );
}
