// WhyChooseUs.jsx
import React from 'react';
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaLaptop,
  FaComments,
  FaRegClock,
  FaStar,
  FaGraduationCap
} from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaChalkboardTeacher />,
      title: 'Enseignants qualifiés',
      desc: 'Équipe pédagogique expérimentée et passionnée.',
    },
    {
      icon: <FaUserGraduate />,
      title: 'Suivi personnalisé',
      desc: 'Accompagnement unique pour chaque élève.',
    },
    {
      icon: <FaLaptop />,
      title: 'Méthodes modernes',
      desc: 'Technologies éducatives et approches innovantes.',
    },
    {
      icon: <FaComments />,
      title: 'Communication parents',
      desc: 'Dialogue régulier et transparent.',
    },
  ];

  return (
    <div className="why-us">
      {/* Éléments décoratifs de fond */}
      <div className="bg-deco deco-clock">
        <FaRegClock />
      </div>
      <div className="bg-deco deco-star">
        <FaStar />
      </div>
      <div className="bg-deco deco-grad">
        <FaGraduationCap />
      </div>

      <div className="section-header">
        <h2>Pourquoi choisir <span>ANNAHDA</span> ?</h2>
        <div className="underline"></div>
        <p className="subtitle">Une école d’excellence au service de la réussite de vos enfants</p>
      </div>

      <div className="reasons-grid">
        {reasons.map((item, idx) => (
          <div className="reason-card" key={idx}>
            <div className="card-glow"></div>
            <div className="reason-icon">{item.icon}</div>
            <div className="reason-content">
              <h3>✔ {item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <div className="clock-hint">
              <FaRegClock /> <span>Accompagnement continu</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;