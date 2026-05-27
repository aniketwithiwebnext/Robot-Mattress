import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, RefreshCw, Sparkles, HelpCircle, Phone, ArrowUpRight } from "lucide-react";
import { ChatMessage } from "../types";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewMessageAlert, setHasNewMessageAlert] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with a welcoming message
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        role: "model",
        text: "System Online. Welcome to Robot Mattress intelligence grid. I am Morpheus, your AI Sleep Architect. How can I assist you with standard sizing, active adaptive firmness, or local NJ scheduling?",
        timestamp: new Date()
      }
    ]);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: "user",
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    setHasNewMessageAlert(false);

    try {
      // Map existing messages format to chat history (omitting current)
      const chatHistory = messages.map(m => ({
        role: m.role,
        text: m.text
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: chatHistory
        })
      });

      if (!res.ok) {
        throw new Error("Telemetry channel offline.");
      }

      const data = await res.json();
      
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: "model",
        text: data.text,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err: any) {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: "model",
        text: "I cannot connect to the primary sleep matrix server right now. To discuss our mattresses immediately, please contact our physical showroom at 973-227-7200!",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickChips = [
    { text: "Smart Trial Mode?", prompt: "Tell me about your 101-night sleep trial." },
    { text: "NJ Free Setup?", prompt: "Is delivery and mattress installation free in New Jersey?" },
    { text: "Calculate 0% Financing", prompt: "What are your 0% APR financing plans?" },
    { text: "Adjustable beds cost?", prompt: "How much is the adjustable cyber-base bed?" }
  ];

  return (
    <div id="ai-chatbot-widget" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans">
      {/* Pulse button trigger */}
      {!isOpen && (
        <button
          id="chatbot-trigger-btn"
          onClick={() => {
            setIsOpen(true);
            setHasNewMessageAlert(false);
          }}
          className="relative p-4 rounded-none bg-[#0070FF] text-white shadow-[0_4px_25px_rgba(0,112,255,0.4)] hover:shadow-[0_4px_35px_rgba(0,112,255,0.6)] cursor-pointer hover:scale-105 active:scale-95 transition-all outline-none border border-white/10 flex items-center justify-center group"
        >
          {hasNewMessageAlert && (
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-none h-4 w-4 bg-emerald-500 text-[9px] text-white font-bold justify-center items-center">1</span>
            </span>
          )}
          <MessageSquare className="w-5 h-5 group-hover:rotate-6 transition-transform" />
          <span className="absolute right-14 bg-[#161920] border border-white/10 text-white text-[10px] py-1.5 px-3 rounded-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none tracking-widest font-bold uppercase font-sans">
            Chat Specialist
          </span>
        </button>
      )}

      {/* Floating Panel Widget */}
      {isOpen && (
        <div
          id="chatbot-floating-window"
          className="w-[320px] sm:w-[400px] h-[460px] sm:h-[540px] max-h-[calc(100vh-110px)] sm:max-h-[calc(100vh-125px)] rounded-none border border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.7)] bg-[#0F1115] flex flex-col overflow-hidden animate-fade-in-up"
        >
          {/* Header */}
          <div className="p-4 bg-[#161920] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-none bg-[#0070FF]/10 border border-white/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#0070FF]" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-950 rounded-none animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h3 className="font-display font-black text-sm text-white tracking-widest uppercase">Morpheus</h3>
                  <Sparkles className="w-3 h-3 text-[#0070FF] animate-pulse" />
                </div>
                <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase flex items-center gap-1 font-bold">
                  Sleep Architect V8.1
                </span>
              </div>
            </div>

            <button
              id="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-none bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer border border-white/5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Stats bar */}
          <div className="px-4 py-1.5 bg-[#0F1115] border-b border-white/10 text-[9px] font-mono text-[#0070FF] flex items-center justify-between font-bold">
            <span>SHOWROOM: NJ 973-227-7200</span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-none bg-emerald-400 animate-ping" />
              SPECIALISTS LIVE
            </span>
          </div>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.role !== "user" && (
                  <div className="w-7 h-7 rounded-none bg-white/5 border border-white/10 flex items-center justify-center self-end">
                    <Bot className="w-4 h-4 text-[#0070FF]" />
                  </div>
                )}
                
                <div className="max-w-[80%] flex flex-col">
                  <div
                    className={`p-3 rounded-none text-xs leading-relaxed ${
                      m.role === "user"
                        ? "bg-[#0070FF] text-white border border-white/10"
                        : "bg-[#161920] text-slate-200 border border-white/10"
                    }`}
                  >
                    {m.text}
                  </div>
                  <span className={`text-[9px] font-mono mt-1 text-slate-500 ${m.role === "user" ? "text-right" : "text-left"}`}>
                    {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-none bg-white/5 border border-white/10 flex items-center justify-center self-end animate-spin">
                  <RefreshCw className="w-3.5 h-3.5 text-[#0070FF]" />
                </div>
                <div className="p-3 rounded-none text-xs bg-[#161920] border border-white/10 text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#0070FF] animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-none bg-[#0070FF] animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-none bg-[#0070FF] animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <span className="text-[9px] font-mono text-gray-500 block mb-1.5 uppercase tracking-widest font-bold">
                Tap Quick Query:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(chip.prompt)}
                    className="text-[10px] bg-[#161920] border border-white/10 hover:border-[#0070FF] text-slate-300 hover:text-white px-2 py-1.5 rounded-none transition-all text-left truncate max-w-full cursor-pointer flex items-center gap-0.5 uppercase tracking-wider font-bold"
                  >
                    <span>{chip.text}</span>
                    <ArrowUpRight className="w-2.5 h-2.5 shrink-0 text-[#0070FF]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Form */}
          <form
            id="chatbot-input-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="p-3 border-t border-white/10 bg-[#0A0C0E]"
          >
            <div className="flex items-center gap-2 bg-[#161920] rounded-none border border-white/10 p-1 px-3 focus-within:border-[#0070FF] transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Query mattress size, warranties..."
                className="flex-1 bg-transparent border-none text-xs text-white placeholder-slate-500 focus:outline-none py-1.5"
                disabled={isLoading}
              />
              <button
                type="submit"
                id="chatbot-text-submit"
                disabled={!input.trim() || isLoading}
                className="p-1.5 rounded-none bg-[#0070FF] hover:bg-[#3b82f6] text-white transition-all disabled:opacity-40 disabled:hover:bg-[#0070FF] cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            
            <div className="flex items-center justify-between text-[8px] font-mono text-gray-500 mt-2 font-bold uppercase">
              <span>NJ Hotline: 973-227-7200</span>
              <span className="flex items-center gap-1">
                <HelpCircle className="w-2.5 h-2.5 text-gray-500" />
                AES-256 Slumber Secure
              </span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
