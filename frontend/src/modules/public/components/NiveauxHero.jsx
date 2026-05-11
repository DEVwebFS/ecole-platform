// components/NiveauxHero.jsx
import React from 'react';

import maternelle from '../../../assets/images/maternelle.png';
import primaireGirls from '../../../assets/images/primaireGirls.png';
import CollegeBoy from '../../../assets/images/CollegeBoy.png';


const niveaux = [
  {
    title: 'Maternelle',
    desc: 'Éveil, créativité et autonomie.',
    color: '#E87F24',
  },
  {
    title: 'Primaire',
    desc: 'Bases solides et apprentissage moderne.',
    color: '#9ED3DC',
  },
  {
    title: 'Collège',
    desc: 'Préparation académique et excellence.',
    color: '#2F2FE4',
  },
];

const NiveauxHero = () => {
  return (
    <>
      <style>
        {`
/* =========================
   ANNAHDA NIVEAUX HERO
========================= */

.annahdaHeroSection {
  position: relative;
  overflow: hidden;
  padding: 5rem 2rem;
  background:
    linear-gradient(
      135deg,
      #FFFBF1 0%,
      #ffffff 45%,
      #f8fbff 100%
    );
}

.annahdaHeroContainer {
  max-width: 1300px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

/* LEFT SIDE */

.annahdaHeroContent {
  flex: 1;
  min-width: 320px;
}

.annahdaHeroBadge {
  display: inline-block;
  padding: 0.55rem 1.2rem;
  border-radius: 999px;
  background: rgba(47,47,228,0.08);
  color: #2F2FE4;
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.annahdaHeroTitle {
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 900;
  color: #111827;
  margin-bottom: 1.3rem;
}

.annahdaHeroGradient {
  background: linear-gradient(
    135deg,
    #2F2FE4,
    #9ED3DC,
    #E87F24
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.annahdaHeroText {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #475569;
  max-width: 580px;
  margin-bottom: 2rem;
}

/* LEVELS */

.annahdaLevelsWrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.annahdaLevelCard {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  border-radius: 22px;
  background: white;
  box-shadow: 0 10px 25px rgba(0,0,0,0.06);
  transition: 0.3s ease;
}

.annahdaLevelCard:hover {
  transform: translateX(8px);
}

.annahdaLevelCircle {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  flex-shrink: 0;
}

.annahdaLevelTitle {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.2rem;
}

.annahdaLevelDesc {
  color: #64748b;
  font-size: 0.96rem;
}

/* BUTTON */

.annahdaHeroBtn {
  border: none;
  background: linear-gradient(
    135deg,
    #2F2FE4,
    #5b5bf5
  );
  color: white;
  padding: 1rem 2rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 10px 25px rgba(47,47,228,0.2);
}

.annahdaHeroBtn:hover {
  transform: translateY(-4px);
}

/* RIGHT SIDE */

.annahdaHeroImages {
  flex: 1;
  min-width: 320px;
  position: relative;
  height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* IMAGES */

.annahdaFloatingImage {
  position: absolute;
  object-fit: contain;
  transition: 0.4s ease;
  filter: drop-shadow(0 20px 35px rgba(0,0,0,0.12));
}

.annahdaFloatingImage:hover {
  transform: translateY(-10px) scale(1.03);
}

/* MATERNELLE */

.annahdaImgOne {
  width: 310px;
  left: 0;
  top: 70px;
  z-index: 2;
}

/* PRIMAIRE */

.annahdaImgTwo {
  width: 320px;
  right: 0;
  top: 0;
  z-index: 3;
}

/* COLLEGE */

.annahdaImgThree {
  width: 340px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
}

/* DECORATIONS */

.annahdaShapeOne {
  position: absolute;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: #9ED3DC;
  opacity: 0.13;
  top: -80px;
  right: -100px;
}

.annahdaShapeTwo {
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: #FFA95A;
  opacity: 0.12;
  bottom: -80px;
  left: -80px;
}

/* RESPONSIVE */

@media (max-width: 992px) {

  .annahdaHeroContainer {
    flex-direction: column;
  }

  .annahdaHeroContent {
    text-align: center;
  }

  .annahdaHeroText {
    margin-inline: auto;
  }

  .annahdaHeroTitle {
    font-size: 3rem;
  }

  .annahdaHeroImages {
    width: 100%;
    height: 520px;
  }

  .annahdaImgOne {
    width: 230px;
    left: 10px;
  }

  .annahdaImgTwo {
    width: 240px;
    right: 10px;
  }

  .annahdaImgThree {
    width: 260px;
  }
}

@media (max-width: 640px) {

  .annahdaHeroSection {
    padding: 3rem 1rem;
  }

  .annahdaHeroTitle {
    font-size: 2.3rem;
  }

  .annahdaHeroImages {
    height: 420px;
  }

  .annahdaImgOne {
    width: 170px;
  }

  .annahdaImgTwo {
    width: 180px;
  }

  .annahdaImgThree {
    width: 200px;
  }

  .annahdaLevelCard {
    text-align: left;
  }
}
  
`}
      </style>

      <div className="annahdaHeroSection">

        <div className="annahdaShapeOne"></div>
        <div className="annahdaShapeTwo"></div>

        <div className="annahdaHeroContainer">

          {/* LEFT */}
          <div className="annahdaHeroContent">

            <div className="annahdaHeroBadge">
              ✨ Excellence éducative
            </div>

            <h1 className="annahdaHeroTitle">
              Nos
              <br />
              <span className="annahdaHeroGradient">
                Niveaux Scolaires
              </span>
            </h1>

            <p className="annahdaHeroText">
              Un parcours éducatif moderne et équilibré,
              conçu pour accompagner chaque enfant
              vers la réussite et l’épanouissement.
            </p>

            <div className="annahdaLevelsWrapper">

              {niveaux.map((item, index) => (
                <div
                  key={index}
                  className="annahdaLevelCard"
                >
                  <div
                    className="annahdaLevelCircle"
                    style={{
                      background: item.color
                    }}
                  ></div>

                  <div>
                    <div className="annahdaLevelTitle">
                      {item.title}
                    </div>

                    <div className="annahdaLevelDesc">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}

            </div>

            <button className="annahdaHeroBtn">
              Découvrir les programmes
            </button>

          </div>

          {/* RIGHT */}
          <div className="annahdaHeroImages">

            <img
              src={maternelle}
              alt="Maternelle"
              className="annahdaFloatingImage annahdaImgOne"
            />

            <img 
              src={primaireGirls}
              alt="Primaire"
              className="annahdaFloatingImage annahdaImgTwo"
            />

            <img
              src={CollegeBoy}
              alt="Collège"
              className="annahdaFloatingImage annahdaImgThree"
            />

          </div>

        </div>
      </div>
    </>
  );
};

export default NiveauxHero;