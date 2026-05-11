// ValuesPhilosophy.jsx
import React from 'react';
import {
  FaBookOpen,
  FaHandsHelping,
  FaLightbulb,
  FaRegClock,
  FaSmile,
  FaChalkboardTeacher,
  FaComments,
  FaLanguage,
  FaFutbol,
  FaGlobe
} from 'react-icons/fa';
import './ValuesSection.css';
import students from '../../../assets/images/students.jpeg'

const ValuesSection = () => {
  const valuesList = [
    { icon: <FaBookOpen />, title: 'Excellence académique' },
    { icon: <FaHandsHelping />, title: 'Respect et tolérance' },
    { icon: <FaLightbulb />, title: 'Innovation pédagogique' },
    { icon: <FaRegClock />, title: 'Discipline et engagement' },
    { icon: <FaSmile />, title: 'Bienveillance et inclusion' }
  ];

  const philosophyList = [
    { icon: <FaChalkboardTeacher />, title: 'Pédagogies actives et innovantes' },
    { icon: <FaComments />, title: 'Développement des soft skills' },
    { icon: <FaLanguage />, title: 'Multilinguisme' },
    { icon: <FaFutbol />, title: 'Activités parascolaires' },
    { icon: <FaGlobe />, title: 'Ouverture sur le monde' }
  ];

  return (
    <div className="values-philosophy">
      {/* Decorative school-themed background elements */}
      <div className="bg-decoration bg-book">📚</div>
      <div className="bg-decoration bg-pencil">✏️</div>
      <div className="bg-decoration bg-grad">🎓</div>
      <div className="bg-decoration bg-atom">⚛️</div>
      <div className="bg-decoration bg-ruler">📐</div>

      <div className="vp-container">
        {/* LEFT COLUMN: Values & Philosophy Cards */}
        <div className="vp-left">
          {/* Values Card */}
          <div className="glass-card">
            <h2 className="card-title">Nos Valeurs</h2>
            <ul className="values-list">
              {valuesList.map((item, idx) => (
                <li key={idx} className="list-item">
                  <span className="item-icon">{item.icon}</span>
                  <span className="item-text">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Philosophy Card */}
          <div className="glass-card">
            <h2 className="card-title">Notre Philosophie</h2>
            <ul className="philosophy-list">
              {philosophyList.map((item, idx) => (
                <li key={idx} className="list-item">
                  <span className="item-icon">{item.icon}</span>
                  <span className="item-text">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN: Single Student Image with artistic presentation */}
        <div className="vp-right">
          <div className="image-wrapper">
            {/* Floating abstract shapes behind the image */}
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
            <div className="floating-shape shape-4"></div>
            <div className="floating-shape shape-5"></div>

            {/* Main image container with glass border effect */}
            <div className="student-image-container">
              <img
                src={students}
                alt="Élève inspiré - École privée"
                className="student-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;