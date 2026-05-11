// components/NiveauxCards.jsx
import React from 'react';

const NiveauxCards = ({ niveaux, onSelectNiveau }) => {
  return (
    <>
    <style>
{`
.cardsSection{
  padding: 80px 20px;
  background: linear-gradient(180deg,#FFFBF1 0%,#ffffff 100%);
}

.container{
  max-width: 1400px;
  margin: auto;
}

.sectionTitle{
  text-align: center;
  font-size: 2.4rem;
  font-weight: 800;
  color: #1e1e1e;
  margin-bottom: 55px;
  position: relative;
}

.sectionTitle::after{
  content:"";
  width: 90px;
  height: 5px;
  border-radius: 20px;
  background: linear-gradient(90deg,#2F2FE4,#E87F24);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -15px;
}

/* أفقي */
.cardsGrid{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 28px;
}

.card{
  background: #fff;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: .35s ease;
  position: relative;
}

.card:hover{
  transform: translateY(-12px);
  box-shadow: 0 25px 45px rgba(0,0,0,0.12);
}

.card::before{
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:6px;
  background: var(--accent-color);
  z-index: 5;
}

.imageWrapper{
  height: 240px;
  overflow: hidden;
  position: relative;
}

.cardImage{
  width:100%;
  height:100%;
  object-fit: cover;
  transition: .6s ease;
}

.card:hover .cardImage{
  transform: scale(1.08);
}

.overlay{
  position:absolute;
  inset:0;
  background: linear-gradient(to top,rgba(0,0,0,.35),transparent);
}

.cardContent{
  padding: 25px;
}

.cardTitle{
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 12px;
}

.cardDesc{
  color:#666;
  line-height:1.7;
  min-height: 80px;
}

.discoverBtn{
  margin-top: 20px;
  border:none;
  padding:13px 22px;
  border-radius:14px;
  color:white;
  font-weight:700;
  cursor:pointer;
  width:100%;
  transition:.3s;
}

.discoverBtn:hover{
  transform: scale(1.03);
  opacity:.92;
}

/* tablette */
@media(max-width:992px){
  .cardsGrid{
    grid-template-columns: repeat(2,1fr);
  }
}

/* mobile */
@media(max-width:768px){
  .cardsGrid{
    grid-template-columns: 1fr;
  }

  .sectionTitle{
    font-size:2rem;
  }
}
`}
</style>
    <div className="cardsSection">
      <div className="container">
        <h2 className="sectionTitle">Découvrez nos cycles</h2>
        <div className="cardsGrid">
          {niveaux.map((niveau) => (
            <div
              key={niveau.id}
              className="card"
              style={{ '--accent-color': niveau.color }}
              onClick={() => onSelectNiveau(niveau.id)}
            >
              <div className="imageWrapper">
                <img src={niveau.image} alt={niveau.title} className="cardImage" />
                <div className="overlay"></div>
              </div>
              <div className="cardContent">
                <h3 className="cardTitle" style={{ color: niveau.color }}>
                  {niveau.title}
                </h3>
                <p className="cardDesc">{niveau.description}</p>
                <button className="discoverBtn" style={{ background: niveau.color }}>
                  Découvrir →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default NiveauxCards;