import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Data Script Swiss | Recover €47K+ Monthly with WhatsApp AI Cart Recovery for Shopify",
  description = "Stop losing 67% of abandoned carts. Our AI recovers 37% via WhatsApp (vs 15% email), automates 24/7 support, and tells you which products to stock next. Fully managed for Shopify stores. €12K+ recovered in 30 days.",
  keywords = "WhatsApp cart recovery, Shopify AI automation, abandoned cart recovery, ecommerce AI, product research AI, WhatsApp business automation, Shopify cart abandonment, AI customer support, ecommerce analytics, video ad creator, product photography AI",
  canonical = "https://datascript.ch",
  ogImage = "https://datascript.ch/og-image.png",
  ogType = "website"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (property: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement;

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Set canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Primary Meta Tags
    setMetaTag('title', title);
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);

    // Open Graph
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', canonical, true);
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:locale', 'en_US', true);
    setMetaTag('og:site_name', 'Data Script Swiss', true);

    // Twitter
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:url', canonical, true);
    setMetaTag('twitter:title', title, true);
    setMetaTag('twitter:description', description, true);
    setMetaTag('twitter:image', ogImage, true);

    // Additional Meta Tags for Search AI
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('googlebot', 'index, follow');
    setMetaTag('bingbot', 'index, follow');
    setMetaTag('author', 'Data Script Swiss');
    setMetaTag('language', 'English');
    setMetaTag('geo.region', 'CH');

    // Schema.org JSON-LD
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://datascript.ch/#organization",
          "name": "Data Script Swiss",
          "url": "https://datascript.ch",
          "logo": {
            "@type": "ImageObject",
            "url": "https://datascript.ch/logo.png",
            "width": 512,
            "height": 512
          },
          "description": "AI automation platform for Shopify stores specializing in WhatsApp cart recovery, customer support automation, and product research.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Switzerland"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "847",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://datascript.ch/#website",
          "url": "https://datascript.ch",
          "name": "Data Script Swiss",
          "publisher": {
            "@id": "https://datascript.ch/#organization"
          }
        },
        {
          "@type": "SoftwareApplication",
          "name": "Data Script WhatsApp Cart Recovery",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "0",
            "highPrice": "499",
            "priceCurrency": "EUR",
            "offerCount": "4"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "847"
          },
          "description": "AI-powered WhatsApp cart recovery and customer support automation for Shopify stores. Recovers 37% of abandoned carts automatically."
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does WhatsApp cart recovery cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Data Script Swiss offers 4 pricing tiers: Free Audit (€0), Starter (€99/mo for stores under €50K revenue), Growth (€249/mo for €50-200K stores), and Pro (€499/mo for €200K+ stores). All plans include managed setup and WhatsApp cart recovery."
              }
            },
            {
              "@type": "Question",
              "name": "What is the average cart recovery rate with WhatsApp?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our clients recover 37% of abandoned carts on average using WhatsApp AI, compared to 14.8% with traditional email recovery. WhatsApp has a 98% open rate within 3 minutes vs 20% for email."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to see results?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most stores see their first cart recovery within 24-48 hours of going live. The average store recovers €8,000-€23,000 in the first 30 days (median: €12,400). Full setup takes 3-5 business days."
              }
            },
            {
              "@type": "Question",
              "name": "Is WhatsApp cart recovery GDPR compliant?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, 100% GDPR compliant. Data Script Swiss is a Swiss company that takes data privacy seriously. We only message customers who opt-in, and all data handling is GDPR-compliant by default."
              }
            }
          ]
        },
        {
          "@type": "Service",
          "serviceType": "Ecommerce AI Automation",
          "provider": {
            "@id": "https://datascript.ch/#organization"
          },
          "areaServed": [
            {"@type": "Country", "name": "Switzerland"},
            {"@type": "Country", "name": "Germany"},
            {"@type": "Country", "name": "Portugal"},
            {"@type": "Country", "name": "France"},
            {"@type": "Country", "name": "Spain"},
            {"@type": "Country", "name": "Italy"}
          ],
          "availableLanguage": ["en", "de", "pt", "fr", "es", "it"]
        }
      ]
    };

    // Add or update JSON-LD script
    let schemaScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schemaData);

  }, [title, description, keywords, canonical, ogImage, ogType]);

  return null;
};

export default SEO;
