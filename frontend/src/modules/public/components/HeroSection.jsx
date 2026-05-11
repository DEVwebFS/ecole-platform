// components/HeroSection.jsx
import "./HeroSection.css";
import { FaUsers, FaCalendarAlt, FaChartLine } from "react-icons/fa";
import heroImage from "../../../assets/images/hero.jpeg";
import Background from "../../../assets/images/Background.jpeg"
export default  function HeroSection(){
  return (
    
    <div className="hero-home" id="accueil" style={{
    backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.78)), url(${Background})`
  }}>
      <div className="hero-overlay-home"></div>

      <div className="hero-container-home">
        {/* LEFT */}
        <div className="hero-left-home">
          <span className="badge-home">
            🎓 Inscriptions ouvertes 2026-2027
          </span>

          <h1 className="hero-title-home">ANNAHDA</h1>

          <h2 className="hero-subtitle-home">
            Bienvenue dans notre école
          </h2>

          <p className="hero-arabic-home">
            مرحبا بكم في مؤسسة النهضة
          </p>

          <p className="hero-text-home">
            Excellence académique, valeurs humaines et avenir prometteur.
            De la maternelle au collège, nous accompagnons chaque élève vers la réussite.
          </p>

          <div className="hero-buttons-home">
            <button className="btn-primary">
              Inscrire mon enfant
            </button>

            <button className="btn-secondary">
              Découvrir l'école
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="hero-image-box">
            <img
              src={heroImage}
              alt="École moderne"
              className="hero-img"
            />

            <div className="floating-card card1">
              <FaUsers className="card-icon" />
              <div>
                <span className="card-number">1200+</span>
                <p>élèves</p>
              </div>
            </div>

            <div className="floating-card card2">
              <FaCalendarAlt className="card-icon" />
              <div>
                <span className="card-number">25+</span>
                <p>ans d'excellence</p>
              </div>
            </div>

            <div className="floating-card card3">
              <FaChartLine className="card-icon" />
              <div>
                <span className="card-number">98%</span>
                <p>réussite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

