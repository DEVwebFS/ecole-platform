// EcolePage.jsx
import React, { useEffect, useRef } from 'react';
import {
  FaCheckCircle,
  FaChalkboardTeacher,
  FaUsers,
  FaClock,
  FaRocket,
  FaHandsHelping,
  FaBookOpen,
  FaLaptop,
  FaBuilding,
  FaFutbol,
  FaRegSmile,
  FaArrowRight,
  FaRegCalendarAlt,
  FaAward,
  FaHeart,
  FaEye,
} from 'react-icons/fa';
import './Ecole.css';
import ecoleImage from "../../../assets/images/ecoleImage.jpeg";
import studentsecole from "../../../assets/images/studentsecole.jpeg";
import ecole3 from "../../../assets/images/ecole3.jpeg";
import theathre from "../../../assets/images/theathre.jpeg";
import salleModernes from "../../../assets/images/salleModernes.jpeg";
import terrain from "../../../assets/images/terrain.jpeg";


// Composant utilitaire pour l'animation au scroll
const useScrollReveal = () => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };
  return addRef;
};

// HERO SECTION
const Hero = ({ addRef }) => (
  <section className="hero" ref={addRef}>
    <div className="hero-container">
      <div className="hero-left">
        <h1 className="hero-title">Découvrez <span>ANNAHDA</span></h1>
        <p className="hero-subtitle">Une école dédiée à la réussite et à l’épanouissement de chaque élève</p>
        <p className="hero-description">
          Depuis 25 ans, nous formons des citoyens éclairés, responsables et innovants, dans un environnement bienveillant et exigeant.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Nous découvrir</button>
          <button className="btn-secondary">Inscription</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-image-wrapper">
          <img src={ecoleImage} alt="Élèves heureux" />
          <div className="floating-shape shape-a"></div>
          <div className="floating-shape shape-b"></div>
          <div className="floating-shape shape-c"></div>
        </div>
      </div>
    </div>
  </section>
);

// QUI SOMMES-NOUS ?
const About = ({ addRef }) => (
  <section className="about" ref={addRef}>
    <div className="container">
      <div className="about-grid">
        <div className="about-text">
          <h2>Qui sommes-nous ?</h2>
          <p>
            L’école ANNAHDA est un établissement privé moderne alliant tradition éducative et innovation pédagogique. 
            Nous accompagnons chaque enfant vers l’excellence académique et le développement personnel, dans le respect 
            des valeurs humaines et citoyennes.
          </p>
          <ul className="features-list">
            <li><FaCheckCircle /> Excellence académique</li>
            <li><FaCheckCircle /> Encadrement personnalisé</li>
            <li><FaCheckCircle /> Valeurs humaines</li>
          </ul>
        </div>
        <div className="about-gallery">
          <div className="gallery-item"><img src={studentsecole} alt="Bâtiment" /></div>
          <div className="gallery-item"><img src={ecole3} alt="Salle de classe" /></div>
          <div className="gallery-item"><img src={theathre} alt="Élèves" /></div>
        </div>
      </div>
    </div>
  </section>
);

// NOTRE HISTOIRE (timeline)
const History = ({ addRef }) => {
  const events = [
    { year: 2000, title: "Création", desc: "Ouverture de l'école avec une classe unique." },
    { year: 2010, title: "Développement", desc: "Extension aux cycles primaire et collège." },
    { year: 2018, title: "Modernisation", desc: "Nouveaux laboratoires et salles numériques." },
    { year: 2026, title: "Transformation digitale", desc: "Plateforme éducative et classes connectées." }
  ];
  return (
    <section className="history" ref={addRef}>
      <div className="container">
        <h2>Notre histoire</h2>
        <div className="timeline">
          {events.map((event, idx) => (
            <div className="timeline-card" key={idx}>
              <div className="timeline-icon"><FaRegCalendarAlt /></div>
              <div className="timeline-year">{event.year}</div>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// MISSION / VISION / VALEURS
const MissionVision = ({ addRef }) => (
  <section className="mission-vision" ref={addRef}>
    <div className="container">
      <div className="mv-grid">
        <div className="mv-card">
          <FaRocket className="mv-icon" />
          <h3>Mission</h3>
          <p>Former des élèves compétents, confiants et prêts à relever les défis de demain.</p>
        </div>
        <div className="mv-card">
          <FaEye className="mv-icon" />
          <h3>Vision</h3>
          <p>Devenir une référence éducative moderne au Maroc et en Afrique.</p>
        </div>
        <div className="mv-card">
          <FaHeart className="mv-icon" />
          <h3>Valeurs</h3>
          <p>Respect, discipline, innovation, réussite et bienveillance.</p>
        </div>
      </div>
    </div>
  </section>
);

// ÉQUIPE PÉDAGOGIQUE
const Team = ({ addRef }) => {
  const members = [
    { name: "Ahmed Benali", role: "Directeur", desc: "25 ans d'expérience en gestion éducative.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Salma El Fassi", role: "Responsable pédagogique", desc: "Innovation et suivi des programmes.", img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Karim Idrissi", role: "Enseignant primaire", desc: "Pédagogie active et bienveillance.", img: "https://randomuser.me/api/portraits/men/45.jpg" },
    { name: "Leila Benani", role: "Conseillère éducative", desc: "Accompagnement psychologique et orientation.", img: "https://randomuser.me/api/portraits/women/90.jpg" }
  ];
  return (
    <section className="team" ref={addRef}>
      <div className="container">
        <h2>Une équipe engagée pour vos enfants</h2>
        <div className="team-grid">
          {members.map((m, idx) => (
            <div className="team-card" key={idx}>
              <img src={m.img} alt={m.name} />
              <h3>{m.name}</h3>
              <p className="role">{m.role}</p>
              <p className="desc">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// INFRASTRUCTURES
const Infrastructure = ({ addRef }) => {
  const infra = [
    { icon: <FaBuilding />, title: "Salles modernes", desc: "Classes climatisées, tableaux interactifs.", img:salleModernes },
    { icon: <FaLaptop />, title: "Salle informatique", desc: "30 postes, labs de robotique.", img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { icon: <FaBookOpen />, title: "Bibliothèque", desc: "Plus de 5000 ouvrages, espace calme.", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { icon: <FaFutbol />, title: "Terrain sportif", desc: "Foot, basket, activités périscolaires.", img: terrain }
  ];
  return (
    <section className="infra" ref={addRef}>
      <div className="container">
        <h2>Nos infrastructures</h2>
        <div className="infra-grid">
          {infra.map((item, idx) => (
            <div className="infra-card" key={idx}>
              <div className="infra-img"><img src={item.img} alt={item.title} /></div>
              <div className="infra-content">
                <div className="infra-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// STATISTIQUES
const Stats = ({ addRef }) => {
  const stats = [
    { value: "1200+", label: "Élèves", icon: <FaUsers /> },
    { value: "50+", label: "Enseignants", icon: <FaChalkboardTeacher /> },
    { value: "98%", label: "Réussite", icon: <FaAward /> },
    { value: "25", label: "Années d'expérience", icon: <FaClock /> }
  ];
  return (
    <section className="stats" ref={addRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, idx) => (
            <div className="stat-card" key={idx}>
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-number">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA FINAL
const CTASection = ({ addRef }) => (
  <section className="cta-final" ref={addRef}>
    <div className="cta-container">
      <h2>Rejoignez la famille ANNAHDA</h2>
      <p>Inscrivez votre enfant dès aujourd'hui et offrez-lui un avenir d'excellence.</p>
      <button className="cta-button">S’inscrire maintenant <FaArrowRight /></button>
    </div>
  </section>
);

// PAGE PRINCIPALE
const EcolePage = () => {
  const addRef = useScrollReveal();

  return (
    <main className="ecole-page">
      <Hero addRef={addRef} />
      <About addRef={addRef} />
      <History addRef={addRef} />
      <MissionVision addRef={addRef} />
      <Team addRef={addRef} />
      <Infrastructure addRef={addRef} />
      <Stats addRef={addRef} />
      <CTASection addRef={addRef} />
    </main>
  );
};

export default EcolePage;