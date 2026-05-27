import React, { useState } from "react";
import { X, Send, Sliders, CheckCircle2, BedDouble, AlertCircle, Phone, MapPin } from "lucide-react";

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteRequestModal({ isOpen, onClose }: QuoteRequestModalProps) {
  const [size, setSize] = useState("Queen");
  const [firmness, setFirmness] = useState(60); // 1-100 scalar
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !location) {
      setError("Please complete Name, Phone, and New Jersey Location indices.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const getFirmnessLabel = (val: number) => {
    if (val < 25) return "Pneumatic Plush (Ultra Soft)";
    if (val < 50) return "Cushion Comfort Level";
    if (val < 75) return "Adaptive Balanced Support (Optimal)";
    return "Rigid Orthopedic Base (Sub-Firm)";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07080a]/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-none border border-white/10 bg-[#0F1115] shadow-[0_10px_50px_rgba(0,112,255,0.4)] overflow-hidden">
        {/* Glow corner */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#0070FF]/25 blur-[40px] rounded-none pointer-events-none" />

        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#0070FF] rounded-none text-white shrink-0">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-black text-sm text-white uppercase tracking-wider">Interactive Sleep Configuration</h3>
              <p className="text-[10px] font-mono text-[#0070FF] font-bold uppercase tracking-widest">FAIRFIELD NJ SPEC MATRIX GENERATOR</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-none bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Sizing choosing */}
              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2 font-bold">
                  1. Choose Target Size:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Twin XL", "Full", "Queen", "California King", "King", "Split King"].map((sz) => (
                    <button
                      type="button"
                      key={sz}
                      onClick={() => setSize(sz)}
                      className={`py-2 rounded-none font-bold border transition-all truncate text-center text-[10px] uppercase tracking-wider cursor-pointer ${
                        size === sz
                          ? "bg-[#0070FF] border-[#0070FF] text-white shadow-[0_4px_10px_rgba(0,112,255,0.3)] font-black"
                          : "bg-white/5 border-transparent text-slate-300 hover:border-white/10"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Firmness Config Slider */}
              <div className="bg-[#161920] rounded-none p-4 border border-white/10">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">
                    2. Dynamic Posture Bed Firmness:
                  </span>
                  <span className="text-[11px] font-mono text-[#0070FF] font-black">{firmness}/100</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="95"
                  value={firmness}
                  onChange={(e) => setFirmness(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-900 rounded-none appearance-none cursor-pointer accent-[#0070FF] my-3"
                />
                <div className="text-[10.5px] font-bold uppercase tracking-wider text-slate-250">
                  Selected State: <span className="text-[#0070FF] font-black">{getFirmnessLabel(firmness)}</span>
                </div>
              </div>

              {/* User indices fields */}
              <div className="space-y-3 pt-1">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block font-bold">
                  3. Telecom Contact Indication (Essex County Delivery):
                </span>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[9px] text-gray-500 uppercase block mb-1 font-bold tracking-wider">Applicant Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full p-2.5 rounded-none bg-[#161920] border border-white/10 text-white placeholder-slate-600 focus:border-[#0070FF] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] text-gray-500 uppercase block mb-1 font-bold tracking-wider">New Jersey Home Town</label>
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Fairfield, NJ"
                      className="w-full p-2.5 rounded-none bg-[#161920] border border-white/10 text-white placeholder-slate-600 focus:border-[#0070FF] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[9px] text-gray-500 uppercase block mb-1 font-bold tracking-wider">Telephone Index</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="973-555-0123"
                      className="w-full p-2.5 rounded-none bg-[#161920] border border-white/10 text-white placeholder-slate-600 focus:border-[#0070FF] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] text-gray-500 uppercase block mb-1 font-bold tracking-wider">Electronic Mail (Optional)</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@domain.com"
                      className="w-full p-2.5 rounded-none bg-[#161920] border border-white/10 text-white placeholder-slate-600 focus:border-[#0070FF] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-rose-400 bg-rose-500/5 p-2.5 rounded-none border border-rose-500/20 text-[10.5px] uppercase font-bold tracking-wider">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-[#0070FF] hover:bg-white hover:text-black text-white rounded-none font-black uppercase tracking-widest shadow-[0_4px_15px_rgba(0,112,255,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2 border border-transparent"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmit Comfort Telemetry</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="inline-flex p-3.5 rounded-none bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-display font-black text-lg text-white uppercase tracking-wider">Comfort Telemetry Received!</h4>
                <p className="text-xs text-slate-400 mt-2 max-w-sm mx-auto font-semibold leading-relaxed">
                  Thank you, <strong className="text-white">{name}</strong>. Your customized sleep plan indexes (Size: {size}, Firmness: {firmness}/100) are securely registered at our NJ lab.
                </p>
                <div className="bg-[#161920] max-w-sm mx-auto p-5 rounded-none border border-white/10 text-left text-[11px] text-slate-350 mt-4 space-y-2 uppercase tracking-wider font-semibold">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Service Base:</span>
                    <span className="font-mono text-cyan-300">Fairfield Headquarters (Essex County)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Instant Estimate:</span>
                    <strong className="text-emerald-400 text-xs">$35 - $64/month (0% APR Eligible)</strong>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-2 mt-2">
                    <span className="text-slate-400">Next Step:</span>
                    <span className="text-[#0070FF] font-black">NJ Consultant calling {phone}!</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2 max-w-xs mx-auto">
                <a
                  href="tel:973-227-7200"
                  className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-none bg-[#0070FF]/5 border border-[#0070FF]/25 hover:bg-[#0070FF]/15 text-[#0070FF] text-[11px] font-black uppercase tracking-wider"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Store Hotline (973-227-7200)</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setPhone("");
                    setEmail("");
                    setLocation("");
                    onClose();
                  }}
                  className="py-2 text-[10px] text-slate-500 hover:text-white transition-colors cursor-pointer uppercase font-bold tracking-widest"
                >
                  Configure another specimen
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
