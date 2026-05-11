// components/NiveauDetails.jsx
import React, { useEffect } from 'react';
import {
  FaTimes,
  FaClock,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaBook,
  FaRobot,
  FaSchool,
  FaGraduationCap,
} from 'react-icons/fa';
import { GiClassicalKnowledge } from 'react-icons/gi';

const NiveauDetails = ({ niveau, onClose }) => {
  // Extraction unique des matières
  const allMatieres = [...new Set(niveau.classes.flatMap(c => c.matieres))].sort();

  // Empêcher le scroll du body quand la modal est ouverte
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Fermeture avec la touche Echap
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <>
    <style>
        {
            `/* components/NiveauDetails.module.css */

/* Overlay fixe avec fond sombre flouté */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: fadeIn 0.2s ease;
}

/* Modal centrale */
.modal {
  position: relative;
  background: white;
  max-width: 1100px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 32px;
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.3);
  animation: scaleIn 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  scrollbar-width: thin;
}

.modal::-webkit-scrollbar {
  width: 6px;
}

.modal::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.modal::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}

/* Bouton fermeture */
.closeBtn {
  position: sticky;
  top: 1rem;
  right: 1rem;
  float: right;
  width: 40px;
  height: 40px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.2s ease;
  z-index: 10;
  margin: 1rem 1rem 0 0;
}

.closeBtn:hover {
  background: #f1f5f9;
  transform: scale(1.05);
}

/* Header avec image et badge */
.header {
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 0 1.5rem;
}

.imageWrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.detailImage {
  width: 100%;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 15px 25px -10px rgba(0, 0, 0, 0.15);
  display: block;
}

.levelBadge {
  position: absolute;
  bottom: 12px;
  right: 12px;
  padding: 0.3rem 1rem;
  border-radius: 40px;
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  backdrop-filter: blur(2px);
}

.detailTitle {
  font-size: 2.4rem;
  font-weight: 800;
  margin-top: 1rem;
  background: linear-gradient(135deg, var(--accent-color), #2F2FE4);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: -0.01em;
}

/* Grille des cards */
.detailsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
}

.infoCard {
  background: #ffffff;
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid rgba(0, 0, 0, 0.03);
}

.infoCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
}

.infoCard h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #0f172a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-left: 3px solid var(--accent-color);
  padding-left: 12px;
}

.cardIcon {
  color: var(--accent-color);
  font-size: 1.3rem;
}

.secondaryTitle {
  margin-top: 1.2rem;
  font-size: 1.1rem !important;
}

/* Classes */
.classesList {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.classItem {
  background: #f8fafc;
  padding: 0.7rem 1rem;
  border-radius: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  transition: background 0.2s;
}

.classItem:hover {
  background: #f1f5f9;
}

.className {
  font-size: 0.95rem;
}

.horaireBadge {
  background: #e2e8f0;
  padding: 0.25rem 0.9rem;
  border-radius: 40px;
  font-size: 0.75rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: #1e293b;
}

.smallIcon {
  font-size: 0.7rem;
}

/* Matières tags */
.matieresGrid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.matiereTag {
  background: #eef2ff;
  padding: 0.4rem 1rem;
  border-radius: 40px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #1e293b;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.matiereTag:hover {
  background: var(--accent-color);
  color: white;
  transform: scale(1.02);
}

.horaireText {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--accent-color);
  background: #f1f5f9;
  display: inline-block;
  padding: 0.4rem 1.2rem;
  border-radius: 40px;
}

/* Listes salles / enseignants */
.list {
  list-style: none;
  padding-left: 0;
}

.list li {
  margin-bottom: 0.6rem;
  padding-left: 1.5rem;
  position: relative;
  font-size: 0.95rem;
}

.list li:before {
  content: "✨";
  position: absolute;
  left: 0;
  color: var(--accent-color);
}

/* Footer */
.footerNote {
  text-align: center;
  padding: 1rem 1.5rem;
  border-top: 1px solid #eef2ff;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .modal {
    max-height: 95vh;
    border-radius: 24px;
  }
  .detailTitle {
    font-size: 1.8rem;
  }
  .detailsGrid {
    padding: 1rem;
    gap: 1rem;
  }
  .infoCard {
    padding: 1.2rem;
  }
  .classItem {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }
  .closeBtn {
    top: 0.5rem;
    right: 0.5rem;
    width: 34px;
    height: 34px;
  }
} `
           
        }
    </style>
    <div className="overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        style={{ '--accent-color': niveau.color }}
      >
        <button className="closeBtn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="header">
          <div className="imageWrapper">
            <img src={niveau.image} alt={niveau.title} className="detailImage"/>
            <div className="levelBadge" style={{ backgroundColor: niveau.color }}>
              {niveau.title}
            </div>
          </div>
          <h2 className="detailTitle">{niveau.title}</h2>
        </div>

        <div className="detailsGrid">
          {/* Classes disponibles */}
          <div className="infoCard">
            <h3>
              <GiClassicalKnowledge className="cardIcon" />
              Classes disponibles
            </h3>
            <div className="classesList">
              {niveau.classes.map((cls, idx) => (
                <div key={idx} className="classItem">
                  <span className="className">
                    <strong>{cls.name}</strong> {cls.age && <span>({cls.age})</span>}
                  </span>
                  <span className="horaireBadge">
                    <FaClock className="smallIcon" /> {cls.horaire || niveau.horaireGeneral}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Matières enseignées */}
          <div className="infoCard">
            <h3>
              <FaBook className="cardIcon"/>
              Matières enseignées
            </h3>
            <div className="matieresGrid">
              {allMatieres.map((mat, idx) => (
                <span key={idx} className="matiereTag">
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Horaires + Salles */}
          <div className="infoCard">
            <h3>
              <FaClock className="cardIcon" />
              Horaires
            </h3>
            <p className="horaireText">{niveau.horaireGeneral}</p>

            <h3 className="secondaryTitle">
              <FaSchool className="cardIcon" />
              Salles équipées
            </h3>
            <ul className="list">
              {niveau.salles.map((salle, i) => (
                <li key={i}>{salle}</li>
              ))}
            </ul>
          </div>

          {/* Enseignants + Méthode */}
          <div className="infoCard">
            <h3>
              <FaChalkboardTeacher className="cardIcon" />
              Enseignants spécialisés
            </h3>
            <p>{niveau.enseignants}</p>

            <h3 className="secondaryTitle">
              <FaRobot className="cardIcon" />
              Méthode pédagogique
            </h3>
            <p>{niveau.methode}</p>
          </div>
        </div>

        <div className="footerNote">
          <FaGraduationCap /> Une éducation d’excellence pour chaque niveau
        </div>
      </div>
    </div>
     </>
  );
};

export default NiveauDetails;