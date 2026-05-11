// HorairesSection.jsx
import React from 'react';
import { FaClock, FaSun, FaMoon, FaBookOpen } from 'react-icons/fa';
import './HorairesSection.css';

const HorairesSection = () => {
  const horaires = [
    {
      niveau: 'Maternelle',
      heures: '8h00 - 15h00',
      icone: <FaSun />,
      couleur: '#9ED3DC',
      description: 'Accueil doux et progressif'
    },
    {
      niveau: 'Primaire',
      heures: '8h00 - 16h00',
      icone: <FaBookOpen />,
      couleur: '#FFA95A',
      description: 'Rythme adapté aux apprentissages'
    },
    {
      niveau: 'Collège',
      heures: '8h00 - 17h00',
      icone: <FaMoon />,
      couleur: '#E87F24',
      description: 'Préparation à l’excellence'
    }
  ];

  return (
    <div className="horaires">
      {/* Éléments décoratifs de fond */}
      <div className="bg-clock decor-1">⏰</div>
      <div className="bg-clock decor-2">⌛</div>
      <div className="bg-clock decor-3">🕒</div>

      <div className="section-header">
        <h2>Nos Horaires</h2>
        <div className="underline"></div>
        <p className="subtitle">Un emploi du temps pensé pour l’épanouissement de chaque niveau</p>
      </div>

      <div className="horaires-grid">
        {horaires.map((h, idx) => (
          <div
            className="horaire-card"
            key={idx}
            style={{ '--card-color': h.couleur }}
          >
            <div className="card-glow"></div>
            <div className="icon-circle" style={{ backgroundColor: h.couleur }}>
              {h.icone}
            </div>
            <h3>{h.niveau}</h3>
            <p className="heure">{h.heures}</p>
            <p className="description">{h.description}</p>
            <div className="clock-footer">
              <FaClock className="small-clock" />
              <span>Journée continue</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorairesSection;