export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  savings?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureCardProps {
  title: string;
  headline: string;
  description: string[];
  metric: string;
  imageAlt: string;
}