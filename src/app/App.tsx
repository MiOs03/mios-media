import React, { useState, useEffect, useRef } from "react";
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

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);
  const pos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const moveCursor = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;

      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${pos.current.x}px,${pos.current.y}px,0) translate(-50%,-50%)`;
        rafId.current = 0;
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none rounded-full hidden md:block"
      style={{
        transform: "translate3d(-100px,-100px,0) translate(-50%,-50%)",
        backgroundColor: "#ffffff",
        willChange: "transform",
        zIndex: 2147483647,
      }}
    />
  );
};

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
        <div className="relative w-full h-screen bg-[#000000] text-white overflow-hidden font-sans cursor-none">
          <style>
            {`
              html, body { background-color: #000000; }
              @media (min-width: 768px) {
                html, body, *, *::before, *::after { cursor: none !important; }
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
                  padding-top: 80px; 
                  padding-bottom: 40px; 
                }
              }
            `}
          </style>
          
          <CustomCursor />

          {/* Minimal Floating Navbar */}
          <header className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[200] w-[95%] max-w-7xl">
            <nav className="bg-black/40 backdrop-blur-3xl border border-white/5 rounded-full px-6 md:px-10 py-3 md:py-4 flex justify-between items-center shadow-2xl">
              <div className="flex items-center gap-16">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src={logo} alt="Mios Media" className="h-5 md:h-6 w-auto cursor-pointer" 
                  onClick={() => scrollToSlide(0)} 
                />
                <div className="hidden lg:flex items-center gap-10 font-mono-web3 text-[8px] uppercase font-black tracking-[0.3em] text-zinc-500">
                  {['O NAMA', 'USLUGE', 'CIJENE', 'KONTAKT'].map((label, i) => {
                    const slideIndices = [1, 2, 3, 7];
                    const targetIdx = slideIndices[i];
                    const isActive = activeSlide === targetIdx || (i === 2 && activeSlide === 3);
                    return (
                      <button 
                        key={label}
                        onClick={() => scrollToSlide(targetIdx)} 
                        className={`hover:text-white transition-all duration-500 relative py-2 ${isActive ? "text-[#D6001C]" : ""}`}
                      >
                        {label}
                        {isActive && <motion.div layoutId="nav-dot" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D6001C] rounded-full" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-6">
                <div className="flex bg-white/5 rounded-full p-1 border border-white/5 h-8">
                  {(["BS", "EN"] as Language[]).map(l => (
                    <button key={l} onClick={() => setLanguage(l)} className={`px-3 md:px-4 h-full rounded-full text-[8px] font-black transition-all ${language === l ? "bg-white text-black shadow-lg" : "text-zinc-500 hover:text-white"}`}>{l}</button>
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
                  className="lg:hidden w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10"
                >
                  {mobileMenuOpen ? <CloseIcon className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
                className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center p-8"
              >
                <div className="flex flex-col gap-8 text-center">
                  {['O NAMA', 'USLUGE', 'CIJENE', 'KONTAKT'].map((label, i) => {
                    const slideIndices = [1, 2, 3, 7];
                    return (
                      <button 
                        key={label}
                        onClick={() => scrollToSlide(slideIndices[i])}
                        className="text-4xl font-display font-black italic uppercase tracking-tighter hover:text-[#D6001C] transition-colors"
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-16 flex gap-4">
                  <button 
                    onClick={() => { setCurrency(currency === "KM" ? "EUR" : "KM"); setMobileMenuOpen(false); }}
                    className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 font-mono-web3 text-[10px] font-black uppercase tracking-widest"
                  >
                    Valuta: {currency}
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
