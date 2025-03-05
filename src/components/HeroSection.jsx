import React from "react";
import "/src/assets/styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h2>
          High cost and the practical limitations of prospective clinical
          trials are key reasons for inefficiencies in the medical
          research-practice-delivery information flow
        </h2>
        <p>
          We bring together deep expertise in clinical data-management workflows, life
          sciences research, and AI to address some of these limitations, enabling
          clinical trial sponsors to design trials that are easier to execute and entail lower risk.
        </p>
        <img src="/images/logo.jpg" alt="Company Logo" className="hero-img" />
      </div>
    </section>
  );
};

export default HeroSection;