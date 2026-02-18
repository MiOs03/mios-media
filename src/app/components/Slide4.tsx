import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, Smartphone, Layout, Video } from "lucide-react";
import { CurrencyContext } from "../context/CurrencyContext";
import { LanguageContext } from "../context/LanguageContext";

const categories = [
  { id: "social", label: "Social", icon: Smartphone },
  { id: "web", label: "Web", icon: Layout },
  { id: "production", label: "Design", icon: Video }
];

const pricingData = {
  social: [
    { name: "START", price: 1200, features: ["feat_2_platforms", "feat_12_posts_monthly", "feat_community_management", "feat_basic_report", "feat_story_design"] },
    { name: "GROWTH", price: 1500, features: ["feat_3_platforms", "feat_20_posts_monthly", "feat_copywriting", "feat_paid_ads_setup", "feat_monthly_analytics"], popular: true },
    { name: "ELITE", price: 1900, features: ["feat_all_platforms", "feat_daily_posting", "feat_video_reels", "feat_advanced_ads_strategy", "feat_dedicated_manager"] }
  ],
  web: [
    { name: "LANDING", price: 800, features: ["feat_single_page_site", "feat_conversion_focus", "feat_mobile_responsive", "feat_seo_setup", "feat_1_year_support"] },
    { name: "BUSINESS", price: 1500, features: ["feat_multi_page_site", "feat_custom_cms", "feat_blog_integration", "feat_advanced_seo", "feat_copywriting_included"], popular: true },
    { name: "E-COM", price: 2500, features: ["feat_online_store", "feat_payment_gateway", "feat_inventory_management", "feat_sales_automation", "feat_work_instructions"] }
  ],
  production: [
    { name: "VISUAL", price: 400, features: ["feat_logo_design", "feat_brand_guidelines", "feat_business_cards", "feat_banners_pack", "feat_print_prep"] },
    { name: "CONTENT", price: 600, features: ["feat_professional_photo", "feat_10_processed_images", "feat_short_form_video", "feat_editing_included", "feat_commercial_rights"], popular: true },
    { name: "FULL CAMPAIGN", price: 1200, features: ["feat_quarterly_strategy", "feat_full_video_ad", "feat_photo_session", "feat_billboard_design", "feat_pr_release"] }
  ]
};

export const Slide4 = () => {
  const { convert, currency } = useContext(CurrencyContext);
  const { t } = useContext(LanguageContext);
  const [activeCategory, setActiveCategory] = useState("social");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full min-h-full flex flex-col justify-center py-12 px-6 md:px-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 md:mb-12 gap-6">
          <div>
            <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="text-[#D6001C] font-mono-web3 font-black tracking-[0.4em] mb-4 uppercase text-[10px]">
              {t('pricing_label')}
            </motion.p>
            <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="font-display text-4xl md:text-7xl tracking-tighter uppercase leading-[0.9] italic">
              {t('pricing_title_1')} <br /> <span className="text-zinc-700 not-italic">{t('pricing_title_2')}</span>
            </motion.h2>
          </div>

          <div className="flex bg-zinc-900/50 p-1 rounded-2xl border border-white/5 backdrop-blur-xl overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 rounded-xl text-[9px] md:text-[10px] font-mono-web3 font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeCategory === cat.id ? "bg-[#D6001C] text-white shadow-lg" : "text-zinc-500 hover:text-zinc-300"}`}
              >
                <cat.icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {pricingData[activeCategory as keyof typeof pricingData].map((pkg, i) => (
                <div
                  key={pkg.name}
                  className={`relative p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border ${pkg.popular ? "bg-[#D6001C]/5 border-[#D6001C]/30" : "bg-white/5 border-white/5"} flex flex-col h-full group hover:border-white/10 transition-all`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D6001C] text-white text-[7px] md:text-[8px] font-mono-web3 font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-xl whitespace-nowrap">
                      {t('label_most_popular')}
                    </div>
                  )}
                  
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-zinc-500 font-mono-web3 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black mb-2">{pkg.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-display font-black italic">{convert(pkg.price)}</span>
                      <span className="text-zinc-500 font-mono-web3 text-[9px] md:text-[10px] uppercase font-bold">{currency}</span>
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center mt-0.5 shrink-0 group-hover:border-[#D6001C] transition-colors">
                          <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#D6001C]" />
                        </div>
                        <span className="text-zinc-400 text-xs md:text-sm font-sans leading-tight">{t(feat)}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-mono-web3 font-black text-[9px] md:text-[10px] tracking-widest uppercase transition-all flex items-center justify-center gap-2 md:gap-3 ${pkg.popular ? "bg-[#D6001C] text-white" : "bg-white/5 text-zinc-400 hover:bg-white/10"}`}>
                    {t('btn_select_package')}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
