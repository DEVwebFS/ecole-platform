// components/CTASection.jsx
import React from 'react';

const CTASection = () => {
  return (
    <>
      <style>
        {`
/* ANNAHDA CTA SECTION */

.annahdaCtaWrapper {
  background: linear-gradient(125deg, #2F2FE4, #9ED3DC);
  margin: 2rem 0 0;
  padding: 4rem 2rem;
  border-radius: 48px 48px 0 0;
  text-align: center;
}

.annahdaCtaContainer {
  max-width: 800px;
  margin: 0 auto;
}

.annahdaCtaTitle {
  font-size: 2.2rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
}

.annahdaCtaDescription {
  font-size: 1.2rem;
  color: #FFFBF1;
  margin-bottom: 2rem;
  line-height: 1.4;
}

.annahdaCtaButtons {
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.annahdaPrimaryBtn {
  background: #E87F24;
  border: none;
  padding: 0.9rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 48px;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.annahdaPrimaryBtn:hover {
  background: #c96e1a;
  transform: scale(1.02);
}

.annahdaSecondaryBtn {
  background: transparent;
  border: 2px solid white;
  padding: 0.9rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 48px;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}

.annahdaSecondaryBtn:hover {
  background: white;
  color: #2F2FE4;
}

@media (max-width: 640px) {

  .annahdaCtaTitle {
    font-size: 1.8rem;
  }

}
`}
      </style>

      <div className="annahdaCtaWrapper">

        <div className="annahdaCtaContainer">

          <h2 className="annahdaCtaTitle">
            Choisissez le niveau idéal pour votre enfant
          </h2>

          <p className="annahdaCtaDescription">
            Rejoignez <strong>ANNAHDA</strong> et offrez un avenir brillant à votre enfant.
          </p>

          <div className="annahdaCtaButtons">

            <button className="annahdaPrimaryBtn">
              📝 Inscrire maintenant
            </button>

            <button className="annahdaSecondaryBtn">
              📞 Nous contacter
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default CTASection;