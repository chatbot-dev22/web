import React from "react";
import HeroSection from "../components/HeroSection";
import SolutionSection from "../components/SolutionSection";
import ContactForm from "../components/ContactForm";
import LastDetails from "../components/LastDetails";

const Home = () => {
  return (
    <div className="page-container">
      <HeroSection />
      <div className="section-separator"></div>
      <SolutionSection />
      <div className="section-separator"></div>
      <ContactForm />
      <div className="section-separator"></div>
      <LastDetails />
    </div>
  );
};

export default Home;