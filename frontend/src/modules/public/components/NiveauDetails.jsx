// components/NiveauDetails.jsx
import React, { useEffect, useRef } from 'react';
import {
  FaTimes,
  FaClock,
  FaChalkboardTeacher,
  FaBook,
  FaRobot,
  FaSchool,
  FaGraduationCap,
} from 'react-icons/fa';
import { GiClassicalKnowledge } from 'react-icons/gi';

const NiveauDetails = ({ niveau, onClose }) => {
  const modalRef = useRef(null);
  const allMatieres = [...new Set(niveau.classes.flatMap(c => c.matieres))].sort();

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev || '';
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Allow scroll inside modal, block outside
  const handleOverlayWheel = (e) => {
    if (modalRef.current && modalRef.current.contains(e.target)) return;
    e.preventDefault();
  };

  useEffect(() => {
    document.addEventListener('wheel', handleOverlayWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleOverlayWheel);
  }, []);

  return (
    <>
      <style>{`
        .nd__overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(6px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: nd__fadeIn 0.2s ease;
          overflow: hidden;
        }

        .nd__modal {
          position: relative;
          background: #fff;
          max-width: 1100px;
          width: 100%;
          max-height: 88vh;
          overflow-y: auto;
          overflow-x: hidden;
          border-radius: 28px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.35);
          animation: nd__scaleIn 0.3s cubic-bezier(0.2,0.9,0.4,1.1);
          scrollbar-width: thin;
          scrollbar-color: #c1c1c1 #f1f1f1;
        }

        .nd__modal::-webkit-scrollbar { width: 6px; }
        .nd__modal::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .nd__modal::-webkit-scrollbar-thumb { background: #c1c1c1; border-radius: 10px; }

        .nd__closeBtn {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 38px;
          height: 38px;
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          color: #334155;
          transition: all 0.2s ease;
          z-index: 100;
          flex-shrink: 0;
        }

        .nd__closeBtn:hover {
          background: #fee2e2;
          border-color: #fca5a5;
          color: #dc2626;
          transform: scale(1.08);
        }

        .nd__header {
          text-align: center;
          padding: 3rem 1.5rem 1.5rem;
        }

        .nd__imageWrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          max-width: 520px;
          margin: 0 auto;
        }

        .nd__detailImage {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 20px;
          display: block;
        }

        .nd__levelBadge {
          position: absolute;
          bottom: 12px;
          right: 12px;
          padding: 0.3rem 1rem;
          border-radius: 40px;
          color: #fff;
          font-weight: 700;
          font-size: 0.85rem;
        }

        .nd__detailTitle {
          font-size: 2.2rem;
          font-weight: 800;
          margin-top: 1rem;
          background: linear-gradient(135deg, var(--nd-accent), #2F2FE4);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .nd__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.2rem;
          padding: 0 1.5rem 1.5rem;
        }

        .nd__card {
          background: #f8fafc;
          border-radius: 20px;
          padding: 1.4rem;
          border: 1px solid #e2e8f0;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .nd__card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.07);
        }

        .nd__card h3 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-left: 3px solid var(--nd-accent);
          padding-left: 10px;
        }

        .nd__cardIcon { color: var(--nd-accent); font-size: 1rem; }
        .nd__secondaryTitle { margin-top: 1.2rem !important; }

        .nd__classesList { display: flex; flex-direction: column; gap: 0.6rem; }

        .nd__classItem {
          background: #fff;
          padding: 0.6rem 1rem;
          border-radius: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.4rem;
          border: 1px solid #e2e8f0;
        }

        .nd__className { font-size: 0.9rem; }

        .nd__horaireBadge {
          background: #e2e8f0;
          padding: 0.2rem 0.8rem;
          border-radius: 40px;
          font-size: 0.72rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: #1e293b;
        }

        .nd__smallIcon { font-size: 0.65rem; }
        .nd__matieresGrid { display: flex; flex-wrap: wrap; gap: 0.5rem; }

        .nd__matiereTag {
          background: #eef2ff;
          padding: 0.35rem 0.9rem;
          border-radius: 40px;
          font-size: 0.82rem;
          font-weight: 500;
          color: #3730a3;
          transition: all 0.2s;
          cursor: default;
        }

        .nd__matiereTag:hover {
          background: var(--nd-accent);
          color: #fff;
        }

        .nd__horaireText {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--nd-accent);
          background: #fff;
          display: inline-block;
          padding: 0.4rem 1.1rem;
          border-radius: 40px;
          border: 2px solid var(--nd-accent);
        }

        .nd__list { list-style: none; padding: 0; margin: 0.5rem 0 0; }

        .nd__list li {
          margin-bottom: 0.5rem;
          padding-left: 1.4rem;
          position: relative;
          font-size: 0.92rem;
          color: #334155;
        }

        .nd__list li::before { content: "✨"; position: absolute; left: 0; }

        .nd__footer {
          text-align: center;
          padding: 1rem 1.5rem 1.5rem;
          border-top: 1px solid #f1f5f9;
          font-size: 0.85rem;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        @keyframes nd__fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes nd__scaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 768px) {
          .nd__modal { max-height: 92vh; border-radius: 20px; }
          .nd__detailTitle { font-size: 1.6rem; }
          .nd__grid { padding: 0 1rem 1rem; gap: 0.8rem; }
          .nd__card { padding: 1rem; }
          .nd__detailImage { height: 200px; }
          .nd__classItem { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div
        className="nd__overlay"
        onClick={onClose}
      >
        <div
          ref={modalRef}
          className="nd__modal"
          onClick={(e) => e.stopPropagation()}
          style={{ '--nd-accent': niveau.color }}
        >
          <button
            className="nd__closeBtn"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            aria-label="Fermer"
          >
            <FaTimes />
          </button>

          <div className="nd__header">
            <div className="nd__imageWrapper">
              <img src={niveau.image} alt={niveau.title} className="nd__detailImage" />
              <div className="nd__levelBadge" style={{ backgroundColor: niveau.color }}>
                {niveau.title}
              </div>
            </div>
            <h2 className="nd__detailTitle">{niveau.title}</h2>
          </div>

          <div className="nd__grid">
            <div className="nd__card">
              <h3><GiClassicalKnowledge className="nd__cardIcon" /> Classes disponibles</h3>
              <div className="nd__classesList">
                {niveau.classes.map((cls, idx) => (
                  <div key={idx} className="nd__classItem">
                    <span className="nd__className">
                      <strong>{cls.name}</strong>{cls.age && <span> ({cls.age})</span>}
                    </span>
                    <span className="nd__horaireBadge">
                      <FaClock className="nd__smallIcon" /> {cls.horaire || niveau.horaireGeneral}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="nd__card">
              <h3><FaBook className="nd__cardIcon" /> Matières enseignées</h3>
              <div className="nd__matieresGrid">
                {allMatieres.map((mat, idx) => (
                  <span key={idx} className="nd__matiereTag">{mat}</span>
                ))}
              </div>
            </div>

            <div className="nd__card">
              <h3><FaClock className="nd__cardIcon" /> Horaires</h3>
              <p className="nd__horaireText">{niveau.horaireGeneral}</p>
              <h3 className="nd__secondaryTitle"><FaSchool className="nd__cardIcon" /> Salles équipées</h3>
              <ul className="nd__list">
                {niveau.salles.map((salle, i) => (
                  <li key={i}>{salle}</li>
                ))}
              </ul>
            </div>

            <div className="nd__card">
              <h3><FaChalkboardTeacher className="nd__cardIcon" /> Enseignants spécialisés</h3>
              <p style={{ fontSize: '0.92rem', color: '#334155' }}>{niveau.enseignants}</p>
              <h3 className="nd__secondaryTitle"><FaRobot className="nd__cardIcon" /> Méthode pédagogique</h3>
              <p style={{ fontSize: '0.92rem', color: '#334155' }}>{niveau.methode}</p>
            </div>
          </div>

          <div className="nd__footer">
            <FaGraduationCap /> Une éducation d'excellence pour chaque niveau
          </div>
        </div>
      </div>
    </>
  );
};

export default NiveauDetails;