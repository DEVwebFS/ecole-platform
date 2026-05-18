// pages/Niveaux.jsx
import React, { useState } from 'react';
import { niveauxData } from '../data/niveauxData';
import NiveauxHero from '../components/NiveauxHero';
import NiveauxCards from '../components/NiveauxCards';
import NiveauDetails from '../components/NiveauDetails';
import MatieresSection from '../components/MatieresSection';
import CTASection from '../components/CTANiveaux';

const Niveaux = () => {
  const [selectedNiveau, setSelectedNiveau] = useState(null);

  const handleSelectNiveau = (niveauId) => {
    const found = niveauxData.find(n => n.id === niveauId);
    setSelectedNiveau(found);
    // Scroll smoothly to details
    setTimeout(() => {
      const detailsEl = document.getElementById('niveau-details');
      if (detailsEl) detailsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleCloseDetails = () => {
    setSelectedNiveau(null);
  };

  return (
    <div className="niveaux-page">
      <NiveauxHero />
      <NiveauxCards niveaux={niveauxData} onSelectNiveau={handleSelectNiveau} />

      {selectedNiveau && (
        <div id="niveau-details">
          <NiveauDetails niveau={selectedNiveau} onClose={handleCloseDetails} />

        </div>
      )}
                 <MatieresSection />
                  <CTASection />


    </div>
  );
};

export default Niveaux;