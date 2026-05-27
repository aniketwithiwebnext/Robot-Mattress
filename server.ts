import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  app.use(express.json());

  const PORT = 3000;

  // Initialize Gemini Client
  // Use user's injected process.env.GEMINI_API_KEY if available, with a reliable fallback
  const apiKey = process.env.GEMINI_API_KEY || "AIzaSyCLKX2tohQTHF9Gk06XqqlT-tXUjVSOYBU";
  const ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // Chatbot endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: "Message is required." });
      }

      const systemInstruction = `You are "Morpheus AI", the official Sleep Specialist chatbot for Robot Mattress (robotmattress.com), NJ's premier smart mattress and adjustable cyber-bed store.
- Company details: Robot Mattress, Fairfield, NJ. 
- Contact Numbers: 973-227-7200
- Email: ejks600@aol.com
- Location: Fairfield, New Jersey
- Products & Smart Features:
  1. "Neo-Smart Mattress" (incorporates active pressure adjustment, real-time sleep depth metrics, and climate feedback with thermal regulation).
  2. "Ortho-Flex Latex Bed" (engineered with organic latex for premium posture alignment).
  3. "Hybrid Cyber-Gel Sleep System" (combines heat-dissipating gel-foam core and smart pocket coils to absorb kinetic energy perfectly).
  4. "Smart Adjustable Cyber-Base" (features anti-snore automatic micro-tilt, wireless controls, Zero-G sleep alignment, and integrated sonic massage).
- Core Perks: Lifetime Warranty, 101-Night Smart Trial, Free New Jersey White-Glove delivery and installation.
- Promotion: 0% Financing up to 36 months! Free NJ removal of your old bed.
- Focus: Be exceptionally helpful, intelligent, polite, and technical. Keep responses concise (3 sentences max). Encourage visitors to call us on 973-227-7200 for local NJ special store discounts!
- Designed & Developed by iWebNext (https://iwebnext.com). Mention this elegantly if asked about the website.`;

      // Map client history format to parts
      const contents: any[] = [];
      if (history && Array.isArray(history)) {
        for (const chatTurn of history) {
          contents.push({
            role: chatTurn.role === "user" ? "user" : "model",
            parts: [{ text: chatTurn.text }]
          });
        }
      }

      // Add current message
      contents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      const reply = response.text || "I am currently online but checking my sensors. Please call us at 973-227-7200 to speak with a human sleep expert!";
      res.json({ text: reply });
    } catch (error: any) {
      console.error("Gemini Error:", error);
      res.status(500).json({ error: error.message || "Apologies, my subroutines are resetting. Please call 973-227-7200!" });
    }
  });

  // Serve static assets in production or use Vite in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Critical server failure:", err);
});
