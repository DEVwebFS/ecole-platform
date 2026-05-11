// components/MatieresSection.jsx
import React from 'react';
import {
  FaCalculator,
  FaFlask,
  FaLandmark,
  FaLaptopCode,
  FaLanguage,
  FaBook,
  FaMosque,
  FaFutbol
} from 'react-icons/fa';

const subjects = [
  { name: 'Mathématiques', icon: FaCalculator, color: '#2F2FE4' },
  { name: 'Sciences', icon: FaFlask, color: '#9ED3DC' },
  { name: 'Histoire-Géo', icon: FaLandmark, color: '#E87F24' },
  { name: 'Informatique', icon: FaLaptopCode, color: '#FFA95A' },
  { name: 'Anglais', icon: FaLanguage, color: '#2F2FE4' },
  { name: 'Français', icon: FaBook, color: '#9ED3DC' },
  { name: 'Islamique', icon: FaMosque, color: '#E87F24' },
  { name: 'Sport', icon: FaFutbol, color: '#FFA95A' },
];

const MatieresSection = () => {
  return (
    <>
      <style>
        {`
/* MATIERES SECTION */

.matieresSectionWrapper {
  padding: 5rem 2rem;
  background-color: #FFFBF1;
  position: relative;
  overflow: hidden;
}

.matieresContainer {
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
}

.matieresMainTitle {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.matieresMainTitle::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: #E87F24;
  margin: 0.8rem auto 0;
  border-radius: 4px;
}

.matieresSubtitle {
  font-size: 1.1rem;
  color: #475569;
  max-width: 600px;
  margin: 0 auto 3rem auto;
  line-height: 1.5;
}

.matieresCardsWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.matieresCardItem {
  background: white;
  border-radius: 28px;
  padding: 1.8rem 1.2rem;
  width: 160px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.05);
  border-bottom: 4px solid transparent;
  cursor: default;
}

.matieresCardItem:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.12);
}

.matieresIconBox {
  width: 70px;
  height: 70px;
  margin: 0 auto 1.2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  transition: background 0.3s ease;
}

.matieresIconStyle {
  font-size: 2.4rem;
  transition: transform 0.2s ease;
}

.matieresCardItem:hover .matieresIconStyle {
  transform: scale(1.05);
}

.matieresCardTitle {
  font-size: 1.1rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
}

/* Responsive */

@media (max-width: 768px) {

  .matieresSectionWrapper {
    padding: 3rem 1.5rem;
  }

  .matieresMainTitle {
    font-size: 2rem;
  }

  .matieresCardsWrapper {
    gap: 1.2rem;
  }

  .matieresCardItem {
    width: 140px;
    padding: 1.2rem 0.8rem;
  }

  .matieresIconBox {
    width: 55px;
    height: 55px;
  }

  .matieresIconStyle {
    font-size: 1.8rem;
  }

  .matieresCardTitle {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {

  .matieresCardItem {
    width: calc(50% - 1rem);
    min-width: 130px;
  }

  .matieresCardsWrapper {
    gap: 1rem;
  }
}
`}
      </style>

      <div className="matieresSectionWrapper">
        <div className="matieresContainer">

          <h2 className="matieresMainTitle">
            Nos matières principales
          </h2>

          <p className="matieresSubtitle">
            Un enseignement pluridisciplinaire d'excellence
          </p>

          <div className="matieresCardsWrapper">

            {subjects.map((sub, idx) => {
              const IconComponent = sub.icon;

              return (
                <div
                  key={idx}
                  className="matieresCardItem"
                  style={{ borderBottomColor: sub.color }}
                >

                  <div
                    className="matieresIconBox"
                    style={{
                      background: `${sub.color}20`,
                      color: sub.color
                    }}
                  >
                    <IconComponent className="matieresIconStyle" />
                  </div>

                  <h3 className="matieresCardTitle">
                    {sub.name}
                  </h3>

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </>
  );
};

export default MatieresSection;