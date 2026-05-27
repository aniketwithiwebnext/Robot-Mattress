import { Product, Review, FAQItem } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "neo-smart",
    name: "Robot Neo-Smart Mattress",
    tagline: "Active Firmness Adaptation & Bio-Metric Sensors",
    description: "The ultimate peak of sleep technology. Incorporates active pneumatic posture support chambers that calibrate automatically to your movement 100 times per second, integrated dual climate controls for personalized thermal zone dynamics, and a bio-feedback telemetry engine.",
    price: 1899,
    rating: 4.9,
    image: "/src/assets/images/robot_mattress_hero_1779913280901.png",
    features: [
      "Dynamic Automation Firmness Calibration",
      "Dual-Zone Smart Climate Control (Heating/Cooling Range: 60°F - 100°F)",
      "Pneumatic Air-Chamber Micro-Pumps",
      "Bio-Telemetry Real-Time Deep Sleep Metrics (iOS/Android Client Integration)",
      "Premium Silver-Infused Anti-Pathogen Adaptive Outer Cover"
    ],
    specs: {
      "Thickness": "13.5 Inches",
      "Comfort Level": "Fully Adjustable (Sub-Firm, Plush, Extreme comfort)",
      "Trial Period": "101-Night Smart Sleep Trial",
      "Warranty": "Lifetime Cyber Warranty",
      "Sensor Grid": "96,000 Conductive Sleep Nodes"
    },
    category: "mattress"
  },
  {
    id: "adjustable-cyber",
    name: "Smart Adjustable Cyber-Base",
    tagline: "Zero-Gravity Bedframe with Sound-Filtering Anti-Snore Automation",
    description: "Upgrade your sleep alignment. Built with an aerospace-grade lightweight alloy frame and Whisper-Quiet dual linear actuators. Detects snore sound patterns to gently micro-tilt the neck panel by 7 degrees, immediately opening breathing airways without waking you.",
    price: 1199,
    rating: 4.97,
    image: "/src/assets/images/robot_adjustable_bed_1779913300680.png",
    features: [
      "Automated Acoustic Anti-Snore Micro-Elevation",
      "One-Touch Zero-Gravity Skeletal Relief Alignment",
      "Sonic Bed Massage (Combines Sound Wave and Kinetic Relieving Vibrations)",
      "Intelligent Ambient Under-bed Blue LED Motion Tracking Lights",
      "Integrated High-Speed USB-C Telemetry Chargers"
    ],
    specs: {
      "Weight Capacity": "850 lbs (Heavy Duty Linear Steel)",
      "Motors": "Dual Whisper-Quiet Actuators (45dB limit)",
      "Controls": "Ergonomic Backlit Wireless Controller & Bluetooth App Controls",
      "Heights": "Modular Adjustable Leg Clearances (6, 9, or 12 Inches)",
      "USB Ports": "Dual Multi-protocol Fast Charge 35W"
    },
    category: "base"
  },
  {
    id: "ortho-flex",
    name: "Ortho-Flex Latex Bed",
    tagline: "Organic Latex with Quantum Orthopedic Alignment zones",
    description: "Harnesses natural organic latex, harvested responsibly and infused with activated carbon layers. Configured with 7 distinct ergonomic zones to support lateral spine compression for side sleepers and lumbar pressure relief for back sleepers.",
    price: 1499,
    rating: 4.85,
    image: "/src/assets/images/robot_mattress_hero_1779913280901.png", // fallback with fallback styling
    features: [
      "100% Certified Organic Natural Biodegradable Latex",
      "Activated Charcoal Odor-Microbe Trapping Core Layers",
      "7-Point Interconnected Skeletal Pressure Density Zones",
      "High Durability Natural Tensile Rebound Retention",
      "Hypoallergenic Breathable Merino Fiber Cover Layer"
    ],
    specs: {
      "Thickness": "11 Inches",
      "Comfort Level": "Medium-Firm (Orthopedic Support Balance)",
      "Support Core": "Multi-density Aerated Latex Modules",
      "Certification": "OEKO-TEX Class 1, GOLS Certified Rubber",
      "Heat Retention": "Near Zero (Open Airway Latent Vapor Holes)"
    },
    category: "mattress"
  },
  {
    id: "gel-space-pillow",
    name: "Cooling Gel Space Pillow",
    tagline: "Decompression Memory Foam with Hex Cooling Mesh",
    description: "An incredible ergonomic sleep-tech pillow. Uses high-density custom response memory foam layered with a dynamic hexagonal liquid cooling gel film. Keeps your head 4.5 degrees cooler compared to standard premium goose pillows.",
    price: 129,
    rating: 4.8,
    image: "/src/assets/images/robot_sleep_accessories_1779913320332.png",
    features: [
      "Thermoregulating Hexagonal Liquid-Gel Surface System",
      "Decompression Responsive Contour Memory Foam Core",
      "Double-Side Sleep Choice Profile (High-warm / Cool-gel)",
      "Washable High-yarn Bamboo Mesh Cover Layer",
      "Targeted Lateral Cervical Spine Support Curve"
    ],
    specs: {
      "Height Options": "5 Inches High / 4 Inches Low (Rotational Fit)",
      "Fill Material": "Custom Dense Visco-Elastic Foam",
      "Cooling Tech": "Hex-Gel Direct Contact Layer",
      "Standard Fit": "King / Queen Comfort Profile Fits",
      "Weight": "3.2 lbs Stable Core Head Placement"
    },
    category: "accessory"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev1",
    userName: "Garrett V.",
    location: "Fairfield, New Jersey",
    rating: 5,
    text: "The Robot Neo-Smart mattress completely converted my back pain. The air chambers adjust automatically when I roll over, and my sleep tracker results have gone up from 62 to 91! Absolute game-changer, and New Jersey shipping was super fast.",
    date: "2026-05-12",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "rev2",
    userName: "Elena R.",
    location: "Wayne, New Jersey",
    rating: 5,
    text: "My husband's loud snoring was keeping me up forever. We ordered the Smart Adjustable Cyber-Base, and the automatic micro-elevation elevation works like absolute magic! Literally tilts him just enough to stop snoring without waking him up. Worth every single penny.",
    date: "2026-05-20",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "rev3",
    userName: "Marcus K.",
    location: "Montclair, New Jersey",
    rating: 5,
    text: "Excellent experience dealing with Robot Mattress NJ. I called them at 973-227-7200, they gave me a fantastic package discount on the Neo-Smart Mattress + cyber base setup. The White-Glove team had it installed in our bedroom in under 30 minutes. 10/10 level of service!",
    date: "2026-05-24",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "How does the 'Active Firmness Adaptation' work?",
    answer: "Our Neo-Smart mattress has state-of-the-art conductive sensor nodes and air supporters. It tracks your neck and lumbar alignment 100 times per second. When you shift your sleeping posture, the silent micro-pumps dynamically adjust the air chambers to keep your spine in comfortable balance.",
    category: "sleep"
  },
  {
    id: "faq2",
    question: "Do you deliver to NJ locations, and is checkout assembly free?",
    answer: "Yes! We specialize in white-glove delivery across physical NJ residences. Our professional team will deliver, unpack, fully assemble your new smart mattress setup, and completely haul away your old mattress free of charge.",
    category: "delivery"
  },
  {
    id: "faq3",
    question: "How long is the smart sleeping trial and warranty coverage?",
    answer: "We offer a 101-Night Smart Sleep trial. If you are not fully satisfied, we will provide a full refund with free home pickup. Every Robot Mattress includes our lifetime warranty, protecting the physical design, air pumps, smart modules, and support systems.",
    category: "warranty"
  },
  {
    id: "faq4",
    question: "Do you offer financing options?",
    answer: "Absolutely! We provide fully accessible 0% APR smart financing option streams up to 36 months in cooperation with leading platforms. You can apply instantly during checkout or contact our New Jersey store specialists directly at 973-227-7200.",
    category: "financing"
  },
  {
    id: "faq5",
    question: "What sizing options are available for mattresses?",
    answer: "We manufacture standard industry alignments including California King, Eastern King, Queen, Full, Twin XL, and Twin sizes to fit any bedroom frame neatly.",
    category: "sizing"
  }
];
