import { PricingTier, FAQItem, Testimonial } from './types';

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "FREE AUDIT",
    price: "€0",
    description: "Manual expert analysis of your store",
    features: [
      "Website Performance Audit",
      "Cart Abandonment Report",
      "Opportunity Analysis",
      "No commitment required"
    ],
    cta: "Request Free Audit"
  },
  {
    name: "STARTER",
    price: "€99",
    description: "For growing stores (<€50K rev)",
    features: [
      "1,000 visitors/mo covered",
      "Done-for-you WhatsApp setup",
      "Website AI agent config",
      "Monthly performance report",
      "Product research insights",
      "10 videos/month created",
      "Priority email support"
    ],
    cta: "Get Started"
  },
  {
    name: "GROWTH",
    price: "€249",
    description: "Best for scaling stores (€50-200K)",
    features: [
      "5,000 visitors/mo covered",
      "Everything in Starter",
      "Deep Analytics Dashboard",
      "Unlimited video creation",
      "Monthly Strategy Call",
      "Priority 24/7 support",
      "Quarterly ROI reviews"
    ],
    cta: "Get Started",
    popular: true,
    savings: "Save €189/year prepay"
  },
  {
    name: "PRO",
    price: "€499",
    description: "For serious scaling (€200K+)",
    features: [
      "15,000 visitors/mo covered",
      "Everything in Growth",
      "Dedicated Account Manager",
      "Custom integration setup",
      "White-label options",
      "99.9% uptime SLA",
      "Direct Phone Access"
    ],
    cta: "Book Strategy Call",
    savings: "Save €599/year prepay"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What if customers don't use WhatsApp?",
    answer: "WhatsApp has 2.5 billion users globally. Chances are 80%+ of your customers already use it daily. Plus, our Website AI Agent covers customers who prefer chat on your site. You're covered either way."
  },
  {
    question: "Is this GDPR compliant?",
    answer: "Yes, 100% GDPR compliant. We are a Swiss company and take data privacy seriously. We only message customers who opt-in, and we handle all compliance automatically."
  },
  {
    question: "How accurate is the product research AI?",
    answer: "Our AI analyzes YOUR customer data (searches, questions, abandons) plus 10M+ external data points. It's not generic data; it's specific to your niche and audience."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Because we invest significant manual time setting up your AI agents and analyzing your data, we do not offer a free trial of the full service. However, we offer a Free Store Audit where we show you exactly how much revenue you're losing before you pay a cent."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. Month-to-month billing. You can cancel anytime. We believe our results will keep you, not a contract."
  },
  {
    question: "What makes you different from competitors?",
    answer: "Three things: (1) We are a Service + Software hybrid, not just a DIY tool. (2) We combine WhatsApp recovery + Product Research + Video Creation in one ecosystem. (3) We are built specifically for the European market (multilingual support)."
  },
  {
    question: "How long until I see results?",
    answer: "Most stores see their first cart recovery within 24-48 hours of going live. Product research insights are available immediately after setup. Our team typically completes full setup within 3-5 business days."
  },
  {
    question: "Do I need technical skills to use this?",
    answer: "Absolutely not. This is a fully managed service. We handle all setup, integration, and optimization. You just approve the configuration and watch the results. No coding, no complex dashboards to learn."
  },
  {
    question: "What platforms do you integrate with?",
    answer: "We integrate natively with Shopify and Shopify Plus. We also support WooCommerce and custom ecommerce platforms via API. WhatsApp Business API integration is included and managed by our team."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "João Silva",
    role: "CMO",
    company: "PortoBeauty.pt",
    quote: "Finally a WhatsApp solution that feels premium. We recovered €12K in our first month. The service team handled everything.",
    image: "https://picsum.photos/seed/joao/100/100"
  },
  {
    id: 2,
    name: "Anna Weber",
    role: "Founder",
    company: "HomeInnovate.de",
    quote: "The product research insights are worth the subscription alone. It told us to add 'smart home sensors' and we sold out in 3 days.",
    image: "https://picsum.photos/seed/anna/100/100"
  },
  {
    id: 3,
    name: "Luca Bernasconi",
    role: "Operations",
    company: "SwissElectro.ch",
    quote: "We replaced our customer service VA with Data Script. The AI handles 80% of tickets and never sleeps. Big savings.",
    image: "https://picsum.photos/seed/luca/100/100"
  }
];