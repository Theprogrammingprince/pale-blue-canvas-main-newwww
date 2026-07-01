import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseBailout from "@/components/WhyChooseBailout";
import WhatWeDo from "@/components/WhatWeDo";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import ValueProposition from "@/components/ValueProposition";
import MissionVision from "@/components/MissionVision";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import LoanApplicationModal from "@/components/LoanApplicationModal";

const Index = () => {
  const [showLoanModal, setShowLoanModal] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onGetStarted={() => setShowLoanModal(true)} />
      <WhyChooseBailout />
      <WhatWeDo />
      <ProblemSolution onGetStarted={() => setShowLoanModal(true)} />
      <Features />
      <ValueProposition />
      <MissionVision />
      <Team />
      <Footer />
      <LoanApplicationModal isOpen={showLoanModal} onClose={() => setShowLoanModal(false)} />
    </div>
  );
};

export default Index;
