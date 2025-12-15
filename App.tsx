import React from 'react';
import SEO from './components/SEO';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FeaturesDeepDive from './components/FeaturesDeepDive';
import SocialProof from './components/SocialProof';
import StatsBar from './components/StatsBar';
import ComparisonTable from './components/ComparisonTable';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-white bg-brand-dark selection:bg-brand-gold selection:text-black">
      <SEO />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <SolutionSection />
        <FeaturesDeepDive />
        <SocialProof />
        <StatsBar />
        <ComparisonTable />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;