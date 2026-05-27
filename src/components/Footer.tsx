import React from "react";
import { BedDouble, Phone, Mail, MapPin, ExternalLink, ShieldCheck, HeartPulse, Recycle } from "lucide-react";

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export default function Footer({ setCurrentTab }: FooterProps) {
  const handleTabClick = (id: string) => {
    setCurrentTab(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="main-footer-section" className="relative bg-[#0A0C0E] border-t border-white/10 pt-16 pb-8 overflow-hidden text-slate-400">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-48 bg-[#0070FF]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleTabClick("home")}>
              <div className="w-9 h-9 bg-[#0070FF] flex items-center justify-center rounded-sm shadow-md">
                <BedDouble className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-black tracking-tighter uppercase text-lg text-white">
                Robot Mattress
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              New Jersey's premier engineering lab for adaptive slumber metrics. Synthesizing sensory bio-telemetry, variable pressure chambers, and luxury materials to cure restless slumber.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 px-2 py-0.5 rounded-none font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>101-Night Trial</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#0070FF] bg-blue-500/5 border border-[#0070FF]/25 px-2 py-0.5 rounded-none font-bold">
                <Recycle className="w-3.5 h-3.5" />
                <span>Free Removal</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-black text-xs text-white uppercase tracking-widest mb-4 border-l-2 border-[#0070FF] pl-3">
              Slumber Controls
            </h4>
            <ul className="space-y-2.5 text-xs font-bold">
              {[
                { id: "home", label: "Smart Home System" },
                { id: "products", label: "Cyber-Sleep Matrix" },
                { id: "about", label: "Skeletal Biology" },
                { id: "reviews", label: "Laboratory Reviews" },
                { id: "faq", label: "Diagnostic FAQ" },
                { id: "contact", label: "NJ Headquarters" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleTabClick(item.id)}
                    className="hover:text-[#0070FF] transition-colors cursor-pointer text-left text-gray-400 uppercase tracking-wider text-[11px]"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sleep Specs */}
          <div>
            <h4 className="font-display font-black text-xs text-white uppercase tracking-widest mb-4 border-l-2 border-[#0070FF] pl-3">
              NJ Service Areas
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Providing premium white-glove smart bed setups across northern & southern New Jersey (Fairfield, Montclair, Wayne, Paterson, Hoboken, Newark, Morristown, and neighboring counties).
            </p>
            <div className="flex items-center gap-2 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-[#0070FF] animate-pulse" />
              <span className="text-gray-400">NJ Delivery Team Status: <strong className="text-emerald-400 font-bold uppercase">Active</strong></span>
            </div>
          </div>

          {/* Direct Support Contacts */}
          <div>
            <h4 className="font-display font-black text-xs text-white uppercase tracking-widest mb-4 border-l-2 border-[#0070FF] pl-3">
              Fulfillment Command
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0070FF] shrink-0 mt-0.5" />
                <span className="text-slate-300 font-bold text-[11px]">
                  Fairfield Headquarters<br />
                  Essex County, New Jersey
                </span>
              </li>
              <li>
                <a
                  id="footer-call"
                  href="tel:973-227-7200"
                  className="flex items-center gap-2.5 hover:text-[#0070FF] transition-colors group"
                >
                  <MapPin className="hidden" />
                  <Phone className="w-4 h-4 text-[#0070FF] group-hover:scale-110 transition-transform" />
                  <span className="text-slate-300 font-black group-hover:text-[#0070FF] tracking-wider">973-227-7200</span>
                </a>
              </li>
              <li>
                <a
                  id="footer-email"
                  href="mailto:ejks600@aol.com"
                  className="flex items-center gap-2.5 hover:text-[#0070FF] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#0070FF] group-hover:scale-110 transition-transform" />
                  <span className="text-slate-300 break-all group-hover:text-[#0070FF] font-bold">ejks600@aol.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 font-bold">
          <div>
            &copy; {new Date().getFullYear()} Robot Mattress. All sleep metrics compiled.
          </div>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
            <span>Developed by iWebNext</span>
          </div>
          {/* Compulsory Requirement */}
          <div id="iwebnext-backlink" className="flex items-center gap-1 bg-white/[0.02] px-3 py-1.5 rounded-none border border-white/10 hover:border-[#0070FF]/40 transition-colors">
            <span className="text-gray-500 font-sans font-normal">Developed by</span>
            <a
              href="https://iwebnext.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0070FF] hover:glow-text-blue font-black flex items-center gap-1 transition-all uppercase tracking-widest text-[10px]"
            >
              iWebNext <ExternalLink className="w-3 h-3 text-[#0070FF]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
