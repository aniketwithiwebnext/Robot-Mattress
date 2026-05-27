import React, { useState, useEffect } from "react";
import { 
  Sparkles, Cpu, Layers, BedDouble, Activity, Gauge, 
  Thermometer, Heart, DollarSign, CheckCircle2, TrendingUp, 
  Percent, Truck, Trash2, Users, Check, ExternalLink, ShieldCheck, 
  ArrowRight, Clock, Settings, Radio, MapPin, Maximize2, 
  ChevronDown, ChevronUp, Star, Phone, Mail, Award, KeyRound 
} from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import ScrollToTop from "./components/ScrollToTop";
import QuoteRequestModal from "./components/QuoteRequestModal";

import { PRODUCTS, REVIEWS, FAQS } from "./data";
import { Product, FAQItem } from "./types";

export default function App() {
  const [currentTab, setCurrentTab] = useState("home");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  // Interactive Slumber Tester State
  const [testPosition, setTestPosition] = useState<"side" | "back">("back");
  const [selectedProductIdx, setSelectedProductIdx] = useState(0);
  const [testFirmness, setTestFirmness] = useState(65);

  // Financing Calculator State
  const [calcPrinciple, setCalcPrinciple] = useState(1899);
  const [calcMonths, setCalcMonths] = useState(24);

  // FAQ Expanded index state
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  // Active Category filter
  const [productCategory, setProductCategory] = useState<"all" | "mattress" | "base" | "accessory">("all");

  // Contact form active submission simulation
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactSubject, setContactSubject] = useState("Scheduler Smart Consultation");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const activeProduct = PRODUCTS[selectedProductIdx];

  // Align calculated principle when active product changes
  const handleProductSelect = (idx: number) => {
    setSelectedProductIdx(idx);
    setCalcPrinciple(PRODUCTS[idx].price);
  };

  // 0% interest monthly calculator
  const monthlyPaymentEstimate = (calcPrinciple / calcMonths).toFixed(2);

  // Get dynamic skeletal strain rating based on positions and firmness levels
  const getSkeletalStrainInfo = () => {
    if (testPosition === "back") {
      if (testFirmness < 35) return { rating: "High Strain (Lumbar Sagging)", color: "text-rose-400", desc: "Firmness indices are too low. Your lumbar pelvic structure is dipping, creating mechanical strain on the L4-L5 vertebrae." };
      if (testFirmness > 80) return { rating: "Comfort Pressure point issues", color: "text-amber-400", desc: "Excessive rigidity. Support modules are opposing muscle contours, raising direct pressure on the sacrum." };
      return { rating: "Optimal Spinal Alignment (Orthopedic Zone)", color: "text-emerald-400", desc: "Your spine matches perfectly to standard natural rest curvatures. Pneumatic cells have calibrated to support zero friction!" };
    } else {
      if (testFirmness < 55) return { rating: "Shoulder Compression / Lateral Bend", color: "text-amber-400", desc: "Your shoulders are dipping excessively relative to pelvic depths. Spine displays horizontal curvature." };
      if (testFirmness > 75) return { rating: "Heavy Shoulder joint pressure", color: "text-rose-400", desc: "The lateral profile is compressed. Ribcage pressure points are high. Best recommend lowering smart pneumatic resistance." };
      return { rating: "Perfect Lateral Spinal Horizontal Align", color: "text-emerald-400", desc: "Shoulder and dynamic hip offsets align horizontally in real-time. Organic cushioning alleviates neck pressure." };
    }
  };

  const strainInfo = getSkeletalStrainInfo();

  return (
    <div className="min-h-screen bg-[#0F1115] text-white font-sans selection:bg-[#0070FF]/30 selection:text-white relative">
      
      {/* Decorative cosmic background elements */}
      <div className="absolute top-0 left-0 w-full h-[120vh] sleep-grid pointer-events-none z-0 opacity-85" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0070FF]/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#0070FF]/3 blur-[200px] pointer-events-none rounded-full animate-pulse opacity-15" />

      {/* Header element */}
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        openQuoteModal={() => setIsQuoteModalOpen(true)} 
      />

      <main className="relative pt-[70px] z-10">
        
        {/* HOMEPAGE VIEW */}
        {currentTab === "home" && (
          <div className="space-y-24">
            
            {/* HERO SECTION */}
            <section id="hero-display-section" className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                
                {/* Hero Text */}
                <span className="hidden">Mattress store NJ Best mattresses in New Jersey Adjustable beds NJ Mattress deals NJ Sleep products New Jersey</span>
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="mb-4 inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0070FF] animate-pulse"></span>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#0070FF] font-mono">Now Serving Fairfield, New Jersey</span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-[0.9] font-black uppercase tracking-tighter text-white">
                    The Future <br />
                    Of Sleep<span className="text-[#0070FF]">.</span>
                  </h1>

                  <p className="text-sm sm:text-base text-gray-400 max-w-lg leading-relaxed font-medium">
                    Precision-engineered mattresses and adjustable bases designed for active recovery and smart-tech comfort. Factory direct prices in New Jersey.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      id="hero-get-quote"
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="bg-[#0000ff] bg-[#0070FF] px-10 py-5 text-xs font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all cursor-pointer rounded-none border border-transparent flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,112,255,0.35)]"
                    >
                      <Sparkles className="w-4 h-4 text-cyan-200 shrink-0" />
                      <span>Find Your Model</span>
                    </button>
                    
                    <button
                      id="hero-explore-catalog"
                      onClick={() => {
                        setCurrentTab("products");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="border border-white/20 px-10 py-5 text-xs font-black uppercase tracking-widest hover:bg-white/5 transition-all text-white cursor-pointer rounded-none flex items-center justify-center gap-1.5"
                    >
                      <span>Visit Showroom</span>
                      <ArrowRight className="w-4 h-4 text-[#0070FF] shrink-0" />
                    </button>
                  </div>

                  {/* NJ Trust Factors */}
                  <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-xs font-mono text-gray-500 font-bold">
                    <div>
                      <span className="block text-[#0070FF] font-black font-sans text-2xl tracking-tighter">973</span>
                      <span className="uppercase text-[9px] tracking-widest block mt-0.5">LOCAL SUPPORT</span>
                    </div>
                    <div>
                      <span className="block text-[#0070FF] font-black font-sans text-2xl tracking-tighter">101</span>
                      <span className="uppercase text-[9px] tracking-widest block mt-0.5">NIGHT TRIAL</span>
                    </div>
                    <div>
                      <span className="block text-[#0070FF] font-black font-sans text-2xl tracking-tighter">0%</span>
                      <span className="uppercase text-[9px] tracking-widest block mt-0.5">APR SECURE</span>
                    </div>
                  </div>
                </div>

                {/* Hero Feature 3D Visualizer Card */}
                <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                  <div className="absolute inset-0 bg-[#0070FF]/5 rounded-none blur-[120px] pointer-events-none animate-pulse" />
                  
                  <div className="relative bg-[#161920] p-8 w-full border border-white/10 shadow-3xl rounded-none">
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[8px] font-mono bg-[#0F1115] py-1 px-2.5 border border-white/10 rounded-none text-[#0070FF] font-bold">
                      <Radio className="w-2.5 h-2.5 animate-ping" />
                      <span>TELEMETRY ON</span>
                    </div>

                    <img
                      id="hero-generated-mattress-view"
                      src="/src/assets/images/robot_mattress_hero_1779913280901.png"
                      alt="Futuristic Robot Smart Mattress Render New Jersey"
                      className="w-full h-56 object-contain rounded-none drop-shadow-[0_0_35px_rgba(0,112,255,0.4)] hover:scale-105 transition-transform duration-500"
                    />

                    <div className="space-y-4 pt-6 border-t border-white/10">
                      <div className="flex justify-between items-center text-xs">
                        <div>
                          <strong className="text-white block font-display uppercase tracking-widest font-black text-[11px]">Robot Neo-Smart Specimen</strong>
                          <span className="text-[10px] font-mono text-[#0070FF] font-bold uppercase">Firmware V8.1 Active</span>
                        </div>
                        <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px]">$1,899 Standard</span>
                      </div>

                      <div className="mt-6 w-full">
                        <h3 className="text-[10px] uppercase tracking-widest font-black mb-4 text-gray-500 border-b border-white/10 pb-2">Product Specifications</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-[#0F1115] p-4 border-l-2 border-[#0070FF] rounded-none">
                            <div className="text-[9px] text-gray-500 uppercase font-black">Support</div>
                            <div className="text-sm font-black text-white uppercase tracking-wider mt-1">Hybrid 4.0</div>
                          </div>
                          <div className="bg-[#0F1115] p-4 border-l-2 border-white/20 rounded-none">
                            <div className="text-[9px] text-gray-500 uppercase font-black">Warranty</div>
                            <div className="text-sm font-black text-white uppercase tracking-wider mt-1">25 Years</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* INTRO ABOUT & JERSEY ROOTS */}
            <section id="jersey-roots-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="bg-[#161920] border border-white/10 rounded-none p-8 sm:p-12 relative overflow-hidden">
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#0070FF]/5 blur-[50px] rounded-full pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <span className="text-[10px] font-mono text-[#0070FF] uppercase tracking-widest block mb-1.5 font-bold">
                      Our New Jersey Base
                    </span>
                    <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tighter uppercase leading-tight">
                      Crafting New Jersey's Most Biomechanically Correct Sleep
                    </h2>
                    <p className="text-xs text-gray-400 mt-4 leading-relaxed font-semibold">
                      Based in Fairfield, New Jersey, Robot Mattress is not just a mattress store. We are a team of comfort physicists, spinal engineers, and rest scientists. We identified that static foam blocks fail to adapt as you shift during sleep cycles.
                    </p>
                    <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                      By designing beds with state-of-the-art diagnostic cell networks and silent electric pneumatic chambers, we enable mattresses that conform directly to your structural skeleton. No sagging, no painful joints, just perfect zero-gravity floating comfort.
                    </p>
                    
                    <div className="flex items-center gap-4 pt-6 text-xs font-black">
                      <button 
                        onClick={() => {
                          setCurrentTab("about");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="text-[#0070FF] hover:text-white flex items-center gap-1 transition-colors cursor-pointer uppercase tracking-widest text-[11px]"
                      >
                        Read Company Story <ArrowRight className="w-4 h-4 text-[#0070FF]" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0F1115] p-5 rounded-none border border-white/10 space-y-2">
                      <Award className="w-6 h-6 text-[#0070FF]" />
                      <strong className="block text-white text-xs uppercase font-black tracking-wide">Certified Orthopedics</strong>
                      <p className="text-[10px] text-gray-500 font-bold">Supports perfect lateral cervical posture alignments naturally.</p>
                    </div>
                    <div className="bg-[#0F1115] p-5 rounded-none border border-white/10 space-y-2">
                      <Truck className="w-6 h-6 text-[#0070FF]" />
                      <strong className="block text-white text-xs uppercase font-black tracking-wide">NJ White Glove Setup</strong>
                      <p className="text-[10px] text-gray-500 font-bold">Free physical in-home calibration and old mattress hauling.</p>
                    </div>
                    <div className="bg-[#0F1115] p-5 rounded-none border border-white/10 space-y-2">
                      <Settings className="w-6 h-6 text-[#0070FF] animate-spin-slow" />
                      <strong className="block text-white text-xs uppercase font-black tracking-wide">Pneumatic Core</strong>
                      <p className="text-[10px] text-gray-500 font-bold">Quiet pneumatic pumps adapt to movement instantly.</p>
                    </div>
                    <div className="bg-[#0F1115] p-5 rounded-none border border-white/10 space-y-2">
                      <KeyRound className="w-6 h-6 text-[#0070FF]" />
                      <strong className="block text-white text-xs uppercase font-black tracking-wide">Lifetime Cyber Warranty</strong>
                      <p className="text-[10px] text-gray-500 font-bold">Protection covering mechanical chambers, covers, and modules.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* INTERACTIVE POSITION TESTER */}
            <section id="interactive-tester-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center space-y-3 mb-10">
                <span className="text-[10px] font-mono text-[#0070FF] uppercase tracking-widest block font-bold">
                  Biomechanics sleep Lab Simulator
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-widest uppercase">
                  Calibrate Spine Pressure Offsets Live
                </h2>
                <p className="text-xs text-gray-400 max-w-md mx-auto font-medium">
                  Vary your sleeping posture and mattress firmness gauge below to observe how traditional setups compare to the Robot Smart Pneumatic Matrix!
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                {/* Simulator Controls */}
                <div className="bg-[#161920] border border-white/10 p-6 flex flex-col justify-between space-y-6 rounded-none">
                  <div className="space-y-4">
                    <strong className="block text-xs font-mono uppercase tracking-widest text-[#0070FF] border-b border-white/10 pb-2 font-bold">
                      Control Parameters:
                    </strong>

                    {/* Posture select */}
                    <div className="space-y-2">
                      <label className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Posture Orientation:</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          id="simulate-back-sleep"
                          onClick={() => setTestPosition("back")}
                          className={`py-2.5 rounded-none text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                            testPosition === "back"
                              ? "bg-[#0070FF] border border-[#0070FF] text-white shadow"
                              : "bg-white/5 text-slate-400 border border-transparent hover:border-white/10"
                          }`}
                        >
                          Supine (Back Sleeper)
                        </button>
                        <button
                          id="simulate-side-sleep"
                          onClick={() => setTestPosition("side")}
                          className={`py-2.5 rounded-none text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                            testPosition === "side"
                              ? "bg-[#0070FF] border border-[#0070FF] text-white shadow"
                              : "bg-white/5 text-slate-400 border border-transparent hover:border-white/10"
                          }`}
                        >
                          Lateral (Side Sleeper)
                        </button>
                      </div>
                    </div>

                    {/* Firmness Range Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[11px] uppercase tracking-wider font-bold">
                        <span className="text-gray-400">Firmness Power Level:</span>
                        <strong className="text-[#0070FF] font-mono font-black">{testFirmness}/100</strong>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="90"
                        value={testFirmness}
                        onChange={(e) => setTestFirmness(parseInt(e.target.value))}
                        className="w-full h-1 bg-slate-900 appearance-none cursor-pointer accent-[#0070FF] my-2"
                      />
                      <div className="flex justify-between text-[9px] text-[#0070FF] font-mono font-black uppercase tracking-widest">
                        <span>Plush Foam (10)</span>
                        <span>Rigid Wood (90)</span>
                      </div>
                    </div>
                  </div>

                  {/* Diagnoses Card */}
                  <div className="bg-[#0F1115] p-5 rounded-none border border-white/10 space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-black text-white uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-none bg-[#0070FF] animate-pulse" />
                      <span>Diagnostics Feedback:</span>
                    </div>
                    <div className={`font-mono text-xs font-black uppercase tracking-widest ${strainInfo.color}`}>
                      {strainInfo.rating}
                    </div>
                    <p className="text-[10.5px] text-gray-400 leading-relaxed">
                      {strainInfo.desc}
                    </p>
                  </div>
                </div>

                {/* Simulated Spine Orthopedic visualizer (Middle) */}
                <div className="lg:col-span-2 bg-[#161920] border border-white/10 p-6 flex flex-col justify-between items-center min-h-[300px] rounded-none">
                  <div className="w-full flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">
                      Live Kinematics Spine Density mapping
                    </span>
                    <span className="text-[9px] text-[#0070FF] font-mono flex items-center gap-1 bg-[#0070FF]/5 px-2.5 py-0.5 rounded-none border border-[#0070FF]/20 font-black uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-none bg-[#0070FF] animate-pulse" />
                      CALIBRATED
                    </span>
                  </div>

                  {/* Custom Graphic SVG rendering spine alignment offset */}
                  <div className="w-full py-8 flex flex-col items-center justify-center relative">
                    {/* Simulated Bed Frame Outline */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-white/[0.01] border-t-2 border-dashed border-[#0070FF]/10 rounded-none pointer-events-none" />

                    <svg className="w-full max-w-md h-32" viewBox="0 0 400 120">
                      {/* Bed Contour line */}
                      <path
                        d={
                          testPosition === "back"
                            // supine contour
                            ? `M 10 70 Q 100 ${70 + (testFirmness - 50) * -0.15} 200 ${85 + (testFirmness - 50) * -0.05} Q 300 ${75 + (testFirmness - 50) * -0.1} 390 70`
                            // lateral contour
                            : `M 10 70 M 10 70 Q 100 ${75 + (testFirmness - 50) * -0.22} 180 ${92 + (testFirmness - 50) * -0.05} Q 280 ${72 + (testFirmness - 50) * -0.18} 390 70`
                        }
                        fill="none"
                        stroke="#0070FF"
                        strokeWidth="3.5"
                        className="transition-all duration-300 drop-shadow-[0_0_8px_rgba(0,112,255,0.5)]"
                      />

                      {/* Spine skeleton node coordinates */}
                      {testPosition === "back" ? (
                        // Back alignment - natural S curve
                        <g>
                          {/* head */}
                          <circle cx="60" cy="55" r="7" fill="#64748b" />
                          {/* cervical neck - slight dip, should stay supported */}
                          <path d="M 60 55 C 90 55, 110 75, 140 75" fill="none" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="3,3" />
                          {/* thoracic chest curve */}
                          <path d="M 140 75 C 180 75, 200 85, 240 85" fill="none" stroke={testFirmness > 75 ? "#f43f5e" : "#0070FF"} strokeWidth="4" />
                          {/* lumbar lower spine - dangerous dip if saggy */}
                          <path d="M 240 85 C 280 85, 300 75, 340 75" fill="none" stroke={testFirmness < 35 ? "#f43f5e" : "#0070FF"} strokeWidth="4" />
                          
                          {/* Sleep nodes tracking */}
                          {[60, 100, 140, 180, 220, 260, 300, 340].map((cx, i) => (
                            <circle
                              key={i}
                              cx={cx}
                              cy={65 + 10 * Math.sin(cx / 40) + (testFirmness - 45) * 0.08}
                              r="3.5"
                              fill="#0070FF"
                              className="animate-pulse"
                              style={{ animationDelay: `${i * 200}ms` }}
                            />
                          ))}
                        </g>
                      ) : (
                        // Lateral alignment - straight line ideal
                        <g>
                          {/* head */}
                          <circle cx="60" cy="55" r="7" fill="#64748b" />
                          {/* lateral spine - straight line indicator */}
                          <line
                            x1="60"
                            y1="55"
                            x2="350"
                            y2={55 + (testFirmness - 65) * 0.2}
                            stroke={Math.abs(testFirmness - 65) > 15 ? "#fbbf24" : "#0070FF"}
                            strokeWidth="3.5"
                            className="transition-all duration-300"
                          />
                          
                          {/* lateral nodes targeting shoulder (100) and hip (220) */}
                          <circle cx="100" cy="65" r="5.5" fill={testFirmness > 75 ? "#f43f5e" : "#0070FF"} />
                          <circle cx="220" cy="74" r="5.5" fill={testFirmness < 55 ? "#f43f5e" : "#0070FF"} />
                        </g>
                      )}
                    </svg>

                    <span className="text-[10px] text-gray-500 font-mono text-center font-bold uppercase tracking-wider mt-4">
                      Colored nodes indicate active pressure spots. Adjust firmness to neutralize localized strain!
                    </span>
                  </div>

                  <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10 text-xs">
                    <span className="text-gray-400 font-bold uppercase tracking-wide text-[10px]">Interested in customized bio-pressure assessments?</span>
                    <button
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="px-5 py-2.5 bg-[#0070FF] text-white rounded-none hover:bg-white hover:text-black transition-all text-[11px] font-black uppercase tracking-widest cursor-pointer border border-transparent"
                    >
                      Calibrate My Spine Profile Now
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* FEATURED MATTRESS CATEGORIES (BENTO GRID) */}
            <section id="categories-bento-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center space-y-3 mb-10">
                <span className="text-[10px] font-mono text-[#0070FF] uppercase tracking-widest block font-bold">
                  Product Core Catalogue Preview
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-widest uppercase">
                  Featured Smart Slumber Modules
                </h2>
                <p className="text-xs text-gray-400 max-w-md mx-auto font-medium">
                  Engineered with specialized purposes to optimize skeletal recovery, ventilation dynamics, and snoring control.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PRODUCTS.slice(0, 3).map((prod) => (
                  <div 
                    key={prod.id} 
                    className="bg-[#161920] border border-white/10 rounded-none overflow-hidden flex flex-col h-full hover:border-[#0070FF]/50 hover:-translate-y-1 transition-all duration-300 relative group"
                  >
                    <div className="aspect-video w-full relative bg-[#0F1115] flex items-center justify-center p-4">
                      <div className="absolute inset-0 bg-[#0070FF]/5 group-hover:bg-[#0070FF]/15 transition-colors" />
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] font-mono font-bold text-[#0070FF] bg-white/5 border border-white/10 px-2 py-0.5 rounded-none uppercase tracking-wider">
                            {prod.category}
                          </span>
                          <span className="flex items-center gap-0.5 text-xs text-amber-400 font-bold">
                            <Star className="w-3 h-3 fill-amber-400" />
                            <span>{prod.rating}</span>
                          </span>
                        </div>
                        <h3 className="font-display font-black text-sm text-white mt-3 uppercase tracking-wide group-hover:text-[#0070FF] transition-colors">
                          {prod.name}
                        </h3>
                        <p className="text-[11px] text-gray-400 font-medium italic mt-1">{prod.tagline}</p>
                        <p className="text-xs text-gray-500 mt-2 line-clamp-3 leading-relaxed font-semibold">{prod.description}</p>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-gray-500 block uppercase font-mono font-bold">Retail Base:</span>
                          <strong className="text-white text-sm font-display font-black">${prod.price} <span className="text-[10px] text-gray-500 font-mono font-normal">USD</span></strong>
                        </div>

                        <button
                          onClick={() => {
                            setCurrentTab("products");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="px-4 py-2.5 rounded-none bg-[#0070FF] text-white hover:bg-white hover:text-black transition-all text-[11px] font-black uppercase tracking-widest cursor-pointer border border-transparent"
                        >
                          View Diagnostics
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* TESTIMONIAL PREVIEW */}
            <section id="testimonials-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="bg-[#161920] border border-white/10 rounded-none p-8 sm:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#0070FF]/5 blur-[120px] pointer-events-none rounded-full" />
                
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="space-y-4 text-left lg:w-1/3">
                    <span className="text-[10px] font-mono text-[#0070FF] uppercase tracking-widest block font-bold">
                      NJ Customer Diagnostics
                    </span>
                    <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tighter uppercase leading-tight">
                      Over 10,000 New Jersey Spine Alignments Corrected
                    </h2>
                    <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                      Hear how families, chronic neck achievers, and local NJ sleep trialists regained painless sleep cycles via Robot Mattress engineering cells.
                    </p>
                    <button 
                      onClick={() => {
                        setCurrentTab("reviews");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="px-5 py-3 border border-white/20 hover:border-[#0070FF] text-[11px] text-white hover:text-[#0070FF] rounded-none transition-all cursor-pointer inline-flex items-center gap-1.5 uppercase tracking-widest font-black"
                    >
                      <span>Read All Live Logs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                    {REVIEWS.slice(0, 2).map((rev) => (
                      <div key={rev.id} className="bg-[#0F1115] border border-white/10 p-6 rounded-none space-y-4 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex gap-0.5 text-amber-500">
                              {[...Array(rev.rating)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                              ))}
                            </div>
                            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 bg-emerald-500/5 border border-emerald-500/20 px-2 py-0.5 rounded-none font-bold uppercase tracking-wider">
                              <Check className="w-3 h-3" /> VERIFIED
                            </span>
                          </div>
                          <p className="text-xs text-gray-300 leading-relaxed italic">
                            "{rev.text}"
                          </p>
                        </div>

                        <div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-2">
                          <img
                            src={rev.avatar}
                            alt={rev.userName}
                            className="w-10 h-10 rounded-none object-cover border border-white/10"
                          />
                          <div>
                            <span className="block text-xs font-black text-white uppercase tracking-wide">{rev.userName}</span>
                            <span className="text-[10px] text-gray-500 flex items-center gap-1 font-bold uppercase tracking-wider">
                              <MapPin className="w-3 h-3 text-[#0070FF]" />
                              {rev.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}


        {/* PRODUCTS / CATALOG MATRIX */}
        {currentTab === "products" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
            
            {/* Page Title */}
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0070FF] animate-pulse"></span>
                <span className="text-[10px] font-mono text-[#0070FF] uppercase tracking-[0.25em] font-bold">Diagnostics Catalog Range</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-widest uppercase mb-1">
                Our Smart Sleep Systems
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Filter our premium collections of mattresses, adjustable bed cyber-bases, and hex cooling pillows. Every system includes local NJ White-Glove delivery and lifetime support.
              </p>
            </div>

            {/* Filtering category buttons */}
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              {[
                { id: "all", label: "Full Diagnostics Core" },
                { id: "mattress", label: "Neo & Ortho Mattresses" },
                { id: "base", label: "Adjustable Base" },
                { id: "accessory", label: "Sleep Accessories" }
              ].map((cat) => (
                <button
                  key={cat.id}
                  id={`filter-cat-${cat.id}`}
                  onClick={() => setProductCategory(cat.id as any)}
                  className={`py-2 px-5 rounded-none text-[10.5px] font-black uppercase tracking-wider border transition-all cursor-pointer ${
                    productCategory === cat.id
                      ? "bg-[#0070FF] border-[#0070FF] text-white shadow-[0_4px_15px_rgba(0,112,255,0.3)]"
                      : "bg-[#161920] border-transparent text-slate-400 hover:border-white/10 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Catalog Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
              {PRODUCTS
                .filter((p) => productCategory === "all" || p.category === productCategory)
                .map((prod) => (
                  <div key={prod.id} className="bg-[#161920] border border-white/10 rounded-none overflow-hidden flex flex-col md:flex-row items-stretch group relative hover:border-[#0070FF]/50 transition-colors">
                    
                    {/* Visual box */}
                    <div className="md:w-2/5 md:min-h-full bg-[#0F1115] flex items-center justify-center p-6 relative">
                      <div className="absolute inset-0 bg-[#0070FF]/5 group-hover:bg-[#0070FF]/15 transition-colors" />
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="h-44 object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_0_20px_rgba(0,112,255,0.35)]"
                      />
                    </div>

                    {/* Specifications Details */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                      <div>
                        <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 font-bold uppercase">
                          <span className="text-[#0070FF] border border-white/10 bg-[#0F1115] px-2.5 py-0.5 rounded-none">{prod.category}</span>
                          <span className="flex items-center gap-0.5 font-bold text-amber-500">
                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                            {prod.rating}
                          </span>
                        </div>

                        <h3 className="font-display font-black text-base text-white mt-3 uppercase tracking-wide group-hover:text-[#0070FF] transition-colors">
                          {prod.name}
                        </h3>
                        <p className="text-[11px] font-medium text-gray-400 italic mb-3">{prod.tagline}</p>
                        
                        <p className="text-xs text-gray-400 leading-relaxed mb-4">{prod.description}</p>
                        
                        {/* Features list bullet points */}
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block font-bold">Key Biomechanical Elements:</span>
                          {prod.features.slice(0, 3).map((f, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-[11px] text-gray-300 font-medium">
                              <Check className="w-3.5 h-3.5 text-[#0070FF] shrink-0 mt-0.5" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technical specifications table */}
                      <div className="bg-[#0F1115] p-4 rounded-none border border-white/10 space-y-1.5 text-[10.5px]">
                        {Object.entries(prod.specs).slice(0, 3).map(([key, val]) => (
                          <div key={key} className="flex justify-between text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                            <span className="font-mono text-gray-500">{key}:</span>
                            <span className="text-slate-300 font-medium">{val}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <div>
                          <span className="text-[9px] text-gray-500 block uppercase font-mono font-bold">NJ Direct Base:</span>
                          <strong className="text-white text-base font-display font-black">${prod.price} <span className="text-[10px] text-gray-500 font-mono font-normal">USD</span></strong>
                        </div>

                        <button
                          onClick={() => {
                            setCalcPrinciple(prod.price);
                            setIsQuoteModalOpen(true);
                          }}
                          className="px-6 py-3.5 bg-[#0070FF] hover:bg-white hover:text-black text-white text-xs font-black rounded-none uppercase tracking-widest transition-all cursor-pointer border border-transparent shadow-[0_4px_15px_rgba(0,112,255,0.3)]"
                        >
                          Calibrate Now
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
            </div>

            {/* DYNAMIC FINANCING SECTION */}
            <section id="financing-calculator-preview" className="bg-[#161920] border border-white/10 p-8 sm:p-12 relative overflow-hidden rounded-none">
              <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#0070FF]/5 blur-[120px] pointer-events-none rounded-full" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none bg-emerald-500/5 border border-emerald-500/25 text-emerald-400 font-mono text-[10px] uppercase font-bold tracking-wider">
                    <Percent className="w-3.5 h-3.5" />
                    <span>0% APR Comfort Financing</span>
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-widest uppercase mb-1">
                    Premium Slumber, Budgeted Smartly
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                    We believe back relief should not cause financial headaches. Partnering with top comfort financing systems, we offer fully accessible zero-interest monthly plans. Zero down, instant approval in New Jersey counties, and absolute transparency.
                  </p>
                  
                  {/* Financial Perks list */}
                  <div className="grid grid-cols-2 gap-y-3.5 gap-x-6 text-xs text-gray-300 pt-3">
                    <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[10px]">
                      <div className="p-1 rounded-none bg-emerald-500/10 text-emerald-400">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>No Compound Interest</span>
                    </div>
                    <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[10px]">
                      <div className="p-1 rounded-none bg-emerald-500/10 text-emerald-400">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>6 to 36 Months Selection</span>
                    </div>
                    <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[10px]">
                      <div className="p-1 rounded-none bg-emerald-500/10 text-emerald-400">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Instant Smart Approvals</span>
                    </div>
                    <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[10px]">
                      <div className="p-1 rounded-none bg-emerald-500/10 text-emerald-400">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Direct Essex Showroom Billing</span>
                    </div>
                  </div>
                </div>

                {/* Live Monthly Calculator block */}
                <div className="bg-[#0F1115] border border-white/10 rounded-none p-6 shadow-xl space-y-4">
                  <span className="text-[10px] font-mono text-[#0070FF] block uppercase tracking-widest border-b border-white/10 pb-2 font-bold">
                    Telemetry Cost Estimate matrix:
                  </span>

                  {/* Config slider for pricing */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-gray-400 uppercase tracking-wider font-bold">
                      <span>Sleep rig value:</span>
                      <strong className="text-white font-mono font-black">${calcPrinciple} USD</strong>
                    </div>
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => setCalcPrinciple(129)}
                        className={`px-3 py-1.5 text-[10px] font-mono rounded-none border font-black uppercase tracking-wider transition-all cursor-pointer ${
                          calcPrinciple === 129 ? "bg-[#0070FF] border-[#0070FF] text-white" : "bg-white/5 text-slate-500 border-transparent hover:border-white/10"
                        }`}
                      >
                        Pillow
                      </button>
                      <button
                        onClick={() => setCalcPrinciple(1199)}
                        className={`px-3 py-1.5 text-[10px] font-mono rounded-none border font-black uppercase tracking-wider transition-all cursor-pointer ${
                          calcPrinciple === 1199 ? "bg-[#0070FF] border-[#0070FF] text-white" : "bg-white/5 text-slate-500 border-transparent hover:border-white/10"
                        }`}
                      >
                        Comfort Base
                      </button>
                      <button
                        onClick={() => setCalcPrinciple(1899)}
                        className={`px-3 py-1.5 text-[10px] font-mono rounded-none border font-black uppercase tracking-wider transition-all cursor-pointer ${
                          calcPrinciple === 1899 ? "bg-[#0070FF] border-[#0070FF] text-white" : "bg-white/5 text-slate-500 border-transparent hover:border-white/10"
                        }`}
                      >
                        Neo Mattress
                      </button>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="4000"
                      step="50"
                      value={calcPrinciple}
                      onChange={(e) => setCalcPrinciple(parseInt(e.target.value))}
                      className="w-full h-1 bg-slate-950 appearance-none cursor-pointer accent-emerald-500 my-2"
                    />
                  </div>

                  {/* Duration picker buttons */}
                  <div className="space-y-1.5">
                    <label className="text-gray-400 text-xs block uppercase tracking-wider font-bold">Financing Terms:</label>
                    <div className="grid grid-cols-5 gap-2">
                      {[6, 12, 18, 24, 36].map((m) => (
                        <button
                          key={m}
                          onClick={() => setCalcMonths(m)}
                          className={`py-2 rounded-none font-mono text-[11px] font-black uppercase transition-all cursor-pointer border ${
                            calcMonths === m
                              ? "bg-emerald-600 border-emerald-500 text-white shadow"
                              : "bg-white/5 text-slate-400 border-transparent hover:border-white/10"
                          }`}
                        >
                          {m} Mo
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pricing feedback element */}
                  <div className="bg-emerald-500/[0.02] p-5 rounded-none border border-emerald-500/20 flex items-center justify-between">
                    <div>
                      <strong className="text-white block text-xs uppercase font-black tracking-wider">Estimated Payment:</strong>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">At 0% Fixed APR</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-display font-black text-emerald-400">${monthlyPaymentEstimate}</span>
                      <span className="text-[10px] block font-mono text-gray-500 font-bold uppercase tracking-wider">/ Monthly</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="w-full py-4 bg-emerald-600 hover:bg-white hover:text-black text-white rounded-none text-xs font-black uppercase tracking-widest transition-all cursor-pointer text-center block border border-transparent shadow-[0_4px_15px_rgba(16,185,129,0.3)]"
                  >
                    Apply Instantly (Secure)
                  </button>
                </div>
              </div>
            </section>

          </div>
        )}


        {/* ABOUT US BIOLOGY SECTION */}
        {currentTab === "about" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
            
            {/* Introductory Titles */}
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <span className="text-[10px] font-mono text-[#0070FF] uppercase tracking-widest block font-bold">
                The Robot Sleep Story
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-widest uppercase mb-1">
                Our Biomechanical Mission
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                By pairing orthopedic posture science with quiet modern engineering, Robot Mattress aims to banish back strain and promote deep regenerative sleep cycles.
              </p>
            </div>

            {/* Structured 3 Column Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              <div className="bg-[#161920] border border-white/10 p-6 rounded-none space-y-3">
                <Activity className="w-8 h-8 text-[#0070FF]" />
                <h4 className="font-display font-black text-sm text-white uppercase tracking-wider">Active Biomapping</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                  Postures evolve dynamically as you sleep. Traditional mattresses remain static, creating pain. Our active pneumatic air-chambers continuously inflate and deflate to maintain pristine orthopedic lateral support index ranges.
                </p>
              </div>

              <div className="bg-[#161920] border border-white/10 p-6 rounded-none space-y-3">
                <Thermometer className="w-8 h-8 text-[#0070FF]" />
                <h4 className="font-display font-black text-sm text-white uppercase tracking-wider">Climate Integration</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                  Fluctuating human skin temperatures trigger nighttime micro-wakings. To mitigate this, our dual climate grids deliver localized thermal micro-currents. Sleep perfectly cooled or gently warmed across seasons dynamically.
                </p>
              </div>

              <div className="bg-[#161920] border border-white/10 p-6 rounded-none space-y-3">
                <Award className="w-8 h-8 text-[#0070FF]" />
                <h4 className="font-display font-black text-sm text-white uppercase tracking-wider">Lifetime Essex Support</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                  Robot Mattress stands strictly behind our work. Your investment is protected by our lifetime cyber warranty, covering electronic cell controllers, memory materials, and micro-motors, with dedicated New Jersey service specialists.
                </p>
              </div>
            </div>

            {/* Our Story Timeline */}
            <div className="bg-[#161920] border border-white/10 rounded-none p-8 sm:p-12">
              <h3 className="font-display font-black text-xl text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-3">
                Company Milestones
              </h3>

              <div className="space-y-8 text-xs relative before:absolute before:top-2 before:left-3 before:bottom-0 before:w-0.5 before:bg-[#0070FF]/25">
                <div className="relative pl-10">
                  <div className="absolute top-1 left-2 w-2.5 h-2.5 bg-[#0070FF] rounded-none ring-4 ring-[#0070FF]/15" />
                  <strong className="block text-white text-xs mb-1 uppercase tracking-wide">2021: Synthesizing Comfort Mechanics</strong>
                  <span className="text-slate-400 block max-w-2xl leading-relaxed font-semibold">
                    A team of Essex County custom programmers and orthopedic therapists partner in New Jersey to prototype active air-chamber supportive cushions, realizing static foam results were unsatisfactory.
                  </span>
                </div>

                <div className="relative pl-10">
                  <div className="absolute top-1 left-2 w-2.5 h-2.5 bg-[#0070FF] rounded-none ring-4 ring-[#0070FF]/15" />
                  <strong className="block text-white text-xs mb-1 uppercase tracking-wide">2023: Launching the Neo-Smart Series</strong>
                  <span className="text-slate-400 block max-w-2xl leading-relaxed font-semibold">
                    After strict trials, the Neo-Smart pneumatic mattress is patented. We establish our Fairfield, New Jersey sleep-lab headquarters and begin northern and southern NJ deliveries on site.
                  </span>
                </div>

                <div className="relative pl-10">
                  <div className="absolute top-1 left-2 w-2.5 h-2.5 bg-[#0070FF] rounded-none ring-4 ring-[#0070FF]/15" />
                  <strong className="block text-white text-xs mb-1 uppercase tracking-wide">Today: Smarter sleep than ever list</strong>
                  <span className="text-slate-400 block max-w-2xl leading-relaxed font-semibold">
                    Now featuring sound-filtering automated neck-elevation adjustable bases, carbon charcoal organic latex models, and responsive cooling gel pillows, shipping statewide.
                  </span>
                </div>
              </div>
            </div>

          </div>
        )}


        {/* TESTIMONIALS / LABORATORY REVIEWS */}
        {currentTab === "reviews" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
            
            {/* Intro Header */}
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <span className="text-[10px] font-mono text-[#0070FF] uppercase tracking-widest block font-bold">
                Approved sleep Diagnostics
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-widest uppercase mb-1">
                Verified Comfort Records
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Nothing constructs real trust better than genuine customer stories. Meet some of our New Jersey neighbors whose sleep has been permanently calibrated.
              </p>
            </div>

            {/* Multi Reviews grids */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {REVIEWS.map((rev) => (
                <div key={rev.id} className="bg-[#161920] border border-white/10 p-6 rounded-none flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-0.5 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 px-2.5 py-0.5 rounded-none uppercase font-bold tracking-wider">
                        Sleeplab Verified
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed italic">
                      "{rev.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                    <img
                      src={rev.avatar}
                      alt={rev.userName}
                      className="w-10 h-10 rounded-none object-cover border border-white/10 shrink-0"
                    />
                    <div>
                      <strong className="block text-xs font-black text-white uppercase tracking-wider">{rev.userName}</strong>
                      <span className="text-[10.5px] text-slate-500 flex items-center gap-1 font-bold uppercase tracking-wider">
                        <MapPin className="w-3.5 h-3.5 text-[#0070FF]" />
                        {rev.location}
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Review Trust Stats display */}
            <section className="bg-[#161920] border border-white/10 rounded-none p-8">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center uppercase tracking-widest font-black">
                <div className="space-y-1">
                  <span className="block text-3xl font-display font-black text-[#0070FF]">4.92 / 5</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-bold">Average Comfort rating</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-3xl font-display font-black text-[#0070FF]">98.4%</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-bold">Spinal Posture correction</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-3xl font-display font-black text-[#0070FF]">101</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-bold">NIGHTS TRIAL TEST PERIOD</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-3xl font-display font-black text-[#0070FF]">973</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-bold">Active NJ County Codes</span>
                </div>
              </div>
            </section>

          </div>
        )}


        {/* TECHNICAL FAQ PAGE */}
        {currentTab === "faq" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
            
            {/* Titles */}
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <span className="text-[10px] font-mono text-[#0070FF] uppercase tracking-widest block font-bold">
                Technical Diagnostics FAQ
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-widest uppercase mb-1">
                System FAQs & Inquiries
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                Review the core operational details covering mattress firmware, pneumatic air adaptive cells, localized NJ delivery, and financing.
              </p>
            </div>

            {/* Accordion panel */}
            <div className="max-w-3xl mx-auto space-y-4">
              {FAQS.map((faq) => {
                const isOpen = expandedFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-[#161920] rounded-none border border-white/10 overflow-hidden transition-all duration-300"
                  >
                    <button
                      id={`faq-btn-${faq.id}`}
                      onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                      className="w-full p-5 text-left flex justify-between items-center gap-4 text-xs font-black text-white hover:text-[#0070FF] uppercase tracking-wider transition-colors focus:outline-none cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#0070FF] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-3.5 text-xs text-slate-300 leading-relaxed border-t border-white/10 bg-slate-950/40 font-semibold">
                        <p>{faq.answer}</p>
                        <div className="flex gap-2 items-center mt-3 pt-3 border-t border-white/10 text-[9px] font-mono text-gray-500 uppercase font-bold tracking-wider">
                          <span>Metadata Category Index:</span>
                          <span className="text-[#0070FF] font-black">{faq.category}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Custom Support Banner */}
            <div className="bg-[#161920] rounded-none p-6 max-w-3xl mx-auto border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-mono text-[#0070FF] uppercase tracking-widest block font-bold">Have subsequent questions?</span>
                <strong className="block text-xs text-white uppercase tracking-wider font-black">Contact our New Jersey sleeping helpdesk immediately</strong>
              </div>
              
              <div className="flex gap-3">
                <a
                  href="tel:973-227-7200"
                  className="px-5 py-3 shrink-0 bg-[#0070FF] hover:bg-white hover:text-black text-white rounded-none text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 border border-transparent shadow-[0_4px_12px_rgba(0,112,255,0.3)]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>973-227-7200</span>
                </a>
              </div>
            </div>

          </div>
        )}


        {/* HEADQUARTERS / CONTACT PAGE */}
        {currentTab === "contact" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
            
            {/* Page Header */}
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <span className="text-[10px] font-mono text-[#0070FF] uppercase tracking-widest block font-bold">
                Fairfield Headquarters Command
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-widest uppercase mb-1">
                Establish Direct Contact
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                Submit an instant configuration request or contact our local Essex County showroom coordinates for live test sessions and catalog pricing maps.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
              
              {/* HQ details and Stylized Map */}
              <div className="space-y-8 flex flex-col justify-between">
                <div className="bg-[#161920] border border-white/10 p-6 rounded-none space-y-4">
                  <h3 className="font-display font-black text-sm text-white uppercase tracking-widest border-b border-white/10 pb-3">
                    Showroom Physical Coordinates
                  </h3>
                  
                  <div className="space-y-3.5 text-xs text-slate-350">
                    <p className="leading-relaxed text-slate-400 font-semibold">
                      Robot Mattress's state-of-the-art diagnostic bedding theater is based physically in New Jersey. Stop by to lay down on the Neo-Smart pneumatic rigs in person under zero-g tests.
                    </p>

                    <div className="flex items-start gap-2.5 font-bold uppercase tracking-wider text-[10px]">
                      <MapPin className="w-4 h-4 text-[#0070FF] shrink-0 mt-0.5" />
                      <span>
                        Fairfield, New Jersey Showcase<br />
                        Essex County, New Jersey
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 font-bold uppercase tracking-wider text-[10px]">
                      <Phone className="w-4 h-4 text-[#0070FF]" />
                      <span>Mainline: <a href="tel:973-227-7200" className="text-[#0070FF] hover:underline font-black">973-227-7200</a></span>
                    </div>

                    <div className="flex items-center gap-2.5 font-bold uppercase tracking-wider text-[10px]">
                      <Mail className="w-4 h-4 text-[#0070FF]" />
                      <span>Internet Packet Index: <a href="mailto:ejks600@aol.com" className="text-[#0070FF] hover:underline font-black">ejks600@aol.com</a></span>
                    </div>

                    <div className="flex items-center gap-2.5 font-bold uppercase tracking-wider text-[10px]">
                      <Clock className="w-4 h-4 text-[#0070FF]" />
                      <span>Sleeplab Hours: <strong className="text-white font-black uppercase">Mon-Sat: 10:00 AM - 7:00 PM | Sun: Closed</strong></span>
                    </div>
                  </div>
                </div>

                {/* Stylized Simulated New Jersey Interactive county map SVG */}
                <div className="bg-[#161920] border border-white/10 p-6 rounded-none flex-1 flex flex-col justify-between min-h-[250px]">
                  <div>
                    <span className="text-[9px] font-mono text-[#0070FF] block uppercase tracking-widest font-black">
                      Dynamic State Shipping coverage map (NJ)
                    </span>
                    <strong className="block text-xs text-white mt-1 uppercase tracking-wider font-black">Essex County Hub & Neighbour Area Delivery</strong>
                  </div>

                  <div className="py-2 flex items-center justify-center relative">
                    {/* SVG graphic of NJ schematic */}
                    <svg className="w-full max-w-[150px] h-32 text-blue-600/10" viewBox="0 0 100 200" fill="currentColor">
                      {/* Abstract jersey block shape */}
                      <path d="M 40 10 Q 55 20 60 40 T 70 70 T 80 110 T 60 140 T 50 180 T 35 150 T 25 100 T 30 50 T 40 10" stroke="#0070FF" strokeWidth="2.5" strokeDasharray="3,3" />
                      
                      {/* Fairfield Essex county coordinates marker */}
                      <circle cx="50" cy="55" r="5" fill="#0070FF" className="animate-ping" />
                      <circle cx="50" cy="55" r="3.5" fill="white" />
                      
                      {/* Text node overlay */}
                      <text x="58" y="58" fill="#f1f5f9" fontSize="6.5" fontFamily="var(--font-mono)" fontWeight="bold">Fairfield Hub</text>
                    </svg>

                    <div className="absolute top-2 right-2 bg-[#0F1115] border border-white/10 p-3 rounded-none space-y-1 text-[9px] uppercase tracking-wider max-w-[150px] font-bold">
                      <span className="block font-black text-[#0070FF]">Coverage Info:</span>
                      <p className="text-slate-400 leading-tight font-semibold">Same-day setup for Newark, Wayne, Montclair, Morris & Bergen regions.</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-gray-500 text-center uppercase tracking-wider font-bold">
                    Fairfield base coordinate: Lat 40.8858° N, Lon 74.2982° W | Delivery Grid Online
                  </span>
                </div>

              </div>

              {/* Inquiry form section */}
              <div className="bg-[#161920] border border-white/10 p-6 rounded-none flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="font-display font-black text-sm text-white uppercase tracking-widest border-b border-white/10 pb-3">
                    Submit Interactive Consultation Request
                  </h3>

                  {!contactSubmitted ? (
                    <form 
                      id="contact-hq-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (contactName && contactPhone) setContactSubmitted(true);
                      }}
                      className="space-y-3.5 text-xs text-left"
                    >
                      <div>
                        <label className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block mb-1 font-bold">Full Name:</label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full p-2.5 rounded-none bg-slate-950/70 border border-white/10 text-white placeholder-slate-600 focus:border-[#0070FF] focus:outline-none uppercase text-[10px] tracking-wider font-bold"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block mb-1 font-bold">Telephone Coordinate:</label>
                        <input
                          type="tel"
                          required
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="973-555-0123"
                          className="w-full p-2.5 rounded-none bg-slate-950/70 border border-white/10 text-white placeholder-slate-600 focus:border-[#0070FF] focus:outline-none uppercase text-[10px] tracking-wider font-bold"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block mb-1 font-bold">Subject Matter:</label>
                        <select
                          value={contactSubject}
                          onChange={(e) => setContactSubject(e.target.value)}
                          className="w-full p-2.5 rounded-none bg-slate-950/70 border border-white/10 text-slate-300 focus:border-[#0070FF] focus:outline-none capitalize text-[10px] tracking-wider font-bold"
                        >
                          <option value="Scheduler Smart Consultation">Schedule Showcase Trial Session</option>
                          <option value="Calculate 0% Financing">Financing Application Inquiry</option>
                          <option value="NJ Free Setup">Pneumatic Assembly Logistics</option>
                          <option value="General Mattress Specs">Custom Size Requirements</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block mb-1 font-bold">Telemetry Notes (Optional):</label>
                        <textarea
                          rows={3}
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                          placeholder="Describe spinal goals, lumbar pain points, or customizable parameters..."
                          className="w-full p-2.5 rounded-none bg-slate-950/70 border border-white/10 text-white placeholder-slate-600 focus:border-[#0070FF] focus:outline-none resize-none text-[10px]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-[#0070FF] hover:bg-white hover:text-black text-white rounded-none font-black uppercase tracking-widest shadow-[0_4px_15px_rgba(0,112,255,0.35)] transition-all cursor-pointer text-center border border-transparent"
                      >
                        Transmit Comfort Request
                      </button>
                    </form>
                  ) : (
                    <div className="py-10 text-center space-y-4">
                      <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-none inline-flex animate-bounce">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-display font-black text-base text-white uppercase tracking-wider">Fulfillment Received!</h4>
                        <p className="text-xs text-slate-400 mt-2 font-semibold leading-relaxed">
                          Thank you, <strong className="text-white">{contactName}</strong>. Your consultation file subject: <span className="text-[#0070FF] font-black">"{contactSubject}"</span> has been registered instantly inside our Fairfield queue.
                        </p>
                        <div className="bg-[#0F1115] p-5 rounded-none border border-white/10 text-left text-[10px] uppercase font-bold tracking-wider text-slate-400 max-w-sm mx-auto mt-4 space-y-2">
                          <div className="flex justify-between">
                            <span>Essex HQ status:</span>
                            <span className="text-emerald-400 font-extrabold">Consultant Assigned</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Phone Callback to:</span>
                            <strong className="text-white">{contactPhone}</strong>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setContactSubmitted(false);
                            setContactName("");
                            setContactPhone("");
                            setContactMessage("");
                          }}
                          className="text-[10px] text-[#0070FF] hover:text-white mt-4 font-black uppercase tracking-widest underline cursor-pointer"
                        >
                          Submit secondary packet
                        </button>
                      </div>
                    </div>
                  )}

                </div>

                <div className="border-t border-white/10 pt-4 mt-4 text-[10.5px] text-slate-500 text-center font-mono font-bold uppercase tracking-wider">
                  For immediate assistance call 973-227-7200 directly!
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* FOOTER SECTION */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* FLOATING CHATBOT WIDGET */}
      <Chatbot />

      {/* SCROLL TO TOP UTILITY */}
      <ScrollToTop />

      {/* FLOATING CONTACT MODAL TRIGGERABLE FROM ANY CTA */}
      <QuoteRequestModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />

    </div>
  );
}
