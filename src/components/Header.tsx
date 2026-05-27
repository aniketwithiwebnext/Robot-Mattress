import React, { useState, useEffect } from "react";
import { Phone, Mail, Sparkles, Menu, X, BedDouble } from "lucide-react";

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  openQuoteModal: () => void;
}

export default function Header({ currentTab, setCurrentTab, openQuoteModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Smart Home" },
    { id: "products", label: "Cyber-Sleep Pods" },
    { id: "about", label: "Our Biology" },
    { id: "reviews", label: "Testimonials" },
    { id: "faq", label: "Technical FAQs" },
    { id: "contact", label: "Headquarters" },
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      id="header-nav-bar"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F1115]/95 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/10 py-3"
          : "bg-transparent py-4 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="header-logo-click"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 bg-[#0070FF] flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
              <BedDouble className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-display font-black tracking-tighter uppercase text-xl text-white">
                Robot Mattress
              </span>
              <div className="flex items-center gap-1">
                <span className="text-[9px] font-mono tracking-widest text-[#0070FF] uppercase font-bold">
                  v8.1 Quantum Sleep
                </span>
                <Sparkles className="w-2 h-2 text-[#0070FF] animate-pulse" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold border transition-all duration-200 cursor-pointer ${
                  currentTab === item.id
                    ? "bg-[#0070FF] border-[#0070FF] text-white"
                    : "border-transparent text-gray-400 hover:text-white hover:border-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contacts & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              id="top-phone-link"
              href="tel:973-227-7200"
              className="flex items-center gap-2 text-xs font-bold text-white tracking-widest"
            >
              <div className="py-2 px-3 bg-[#161920] border border-white/10 flex items-center gap-1.5 rounded-none">
                <Phone className="w-3.5 h-3.5 text-[#0070FF] animate-bounce" />
                <span>973-227-7200</span>
              </div>
            </a>
            
            <button
              id="header-cta-instant-quote"
              onClick={openQuoteModal}
              className="bg-white text-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-[#0070FF] hover:text-white transition-all cursor-pointer rounded-none border border-transparent"
            >
              Shop Technology
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              id="mobile-phone-shortcut"
              href="tel:973-227-7200"
              className="p-2 bg-[#161920] border border-white/10 rounded-none text-[#0070FF]"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-[#0F1115]/98 backdrop-blur-xl z-30 md:hidden flex flex-col p-6 animate-fade-in border-t border-white/10">
          <div className="space-y-3 flex-1">
            <span className="text-[10px] font-mono tracking-widest text-[#0070FF] uppercase block mb-3 font-bold">
              System Interface Directory
            </span>
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left py-3 px-4 text-xs uppercase tracking-wider font-bold transition-all border ${
                  currentTab === item.id
                    ? "bg-[#0070FF] border-[#0070FF] text-white"
                    : "border-white/5 bg-white/[0.02] text-slate-300 hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-auto space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between text-xs tracking-wider font-bold">
              <span className="text-gray-500 uppercase">NJ Showroom</span>
              <a href="tel:973-227-7200" className="text-[#0070FF]">973-227-7200</a>
            </div>
            <button
              id="mobile-nav-cta-quote"
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full text-center py-4 bg-white text-black hover:bg-[#0070FF] hover:text-white transition-all text-xs font-bold uppercase tracking-widest rounded-none"
            >
              Shop Technology
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
