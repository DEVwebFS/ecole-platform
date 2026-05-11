// CTASection.jsx
import React from 'react';
import { FaGraduationCap, FaBookOpen, FaRegClock, FaArrowRight } from 'react-icons/fa';
import './CTASection.css';

const CTASection = () => {
  return (
    <div className="cta">
      {/* Éléments décoratifs flottants */}
      <div className="cta-deco deco-cap">
        <FaGraduationCap />
      </div>
      <div className="cta-deco deco-book">
        <FaBookOpen />
      </div>
      <div className="cta-deco deco-clock">
        <FaRegClock />
      </div>
      <div className="cta-deco deco-circle-1"></div>
      <div className="cta-deco deco-circle-2"></div>

      <div className="cta-container">
        <div className="cta-content glass-card">
          <h2>
            Offrez un avenir meilleur <br />
            à votre enfant
          </h2>
          <p>Rejoignez une école d’excellence dès aujourd’hui.</p>
          <button className="cta-btn">
            S’inscrire maintenant <FaArrowRight className="btn-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;