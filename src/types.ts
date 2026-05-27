export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  features: string[];
  specs: Record<string, string>;
  category: "mattress" | "base" | "accessory";
}

export interface Review {
  id: string;
  userName: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "sizing" | "delivery" | "warranty" | "financing" | "sleep";
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}
