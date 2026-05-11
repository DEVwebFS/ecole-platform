import { FaTimes } from "react-icons/fa";

const ActivityModal = ({ activity, closeModal }) => {
  return (
    <>
    <style>{`
        .modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

@keyframes fadeInModal {
  from { opacity: 0; }
  to { opacity: 1; }
}

.activity-modal {
  background: #FFFBF1;
  max-width: 750px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 40px;
  padding: 1.8rem 2rem 2rem;
  position: relative;
  box-shadow: 0 40px 70px rgba(0, 0, 0, 0.3);
  animation: slideUpModal 0.35s ease;
}

@keyframes slideUpModal {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  background: #2F2FE4;
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 10;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.close-btn:hover {
  background: #E87F24;
  transform: rotate(90deg);
}

.modal-main-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 28px;
  margin-bottom: 1.5rem;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.12);
  border: 3px solid white;
}

.activity-modal h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #2F2FE4;
  margin-bottom: 0.75rem;
  letter-spacing: -0.3px;
}

.modal-desc {
  font-size: 1rem;
  line-height: 1.6;
  color: #2d3e50;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  border-left: 5px solid #E87F24;
  margin-bottom: 1.8rem;
}

.mini-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.8rem;
}

.mini-gallery img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.25s, box-shadow 0.2s;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
}

.mini-gallery img:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 20px rgba(47, 47, 228, 0.2);
}

.benefits {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.benefits div {
  background: #9ED3DC20;
  backdrop-filter: blur(2px);
  border-radius: 50px;
  padding: 0.5rem 1.2rem;
  font-weight: 600;
  color: #2F2FE4;
  font-size: 0.9rem;
  border: 1px solid #9ED3DC;
  transition: all 0.2s;
}

.benefits div:hover {
  background: #2F2FE4;
  color: white;
  border-color: #2F2FE4;
}

.primary-btn {
  background: linear-gradient(105deg, #E87F24, #f0983a);
  border: none;
  padding: 0.85rem 2rem;
  border-radius: 50px;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  display: block;
  width: fit-content;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 8px 18px rgba(232, 127, 36, 0.3);
}

.primary-btn:hover {
  background: #2F2FE4;
  transform: translateY(-3px);
  box-shadow: 0 14px 22px rgba(47, 47, 228, 0.3);
}

/* Responsive */
@media (max-width: 700px) {
  .activity-modal {
    padding: 1.5rem;
  }
  .modal-main-img {
    height: 180px;
  }
  .activity-modal h2 {
    font-size: 1.6rem;
  }
  .mini-gallery {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  .mini-gallery img {
    height: 150px;
  }
  .benefits div {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }
}

@media (max-width: 550px) {
  .activity-card {
    padding: 1.5rem 1rem;
  }
  .activity-icon {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }
  .activity-card h3 {
    font-size: 1.4rem;
  }
  .close-btn {
    width: 32px;
    height: 32px;
    font-size: 1rem;
    top: 0.7rem;
    right: 0.8rem;
  }
}
      `}</style>
    <div className="modal-overlay">
      <div className="activity-modal">

        <button className="close-btn" onClick={closeModal}>
          <FaTimes />
        </button>

        <img src={activity.image} alt="" className="modal-main-img" />

        <h2>{activity.title}</h2>

        <p className="modal-desc">
          Nos activités permettent aux enfants de développer leur
          créativité, leur confiance et leur esprit d’équipe dans un
          environnement sécurisé et stimulant.
        </p>

        <div className="mini-gallery">
          <img src={activity.image} alt="" />
          <img src={activity.image2} alt="" />
          <img src={activity.image3} alt="" />
        </div>

        <div className="benefits">
          <div>✨ Confiance en soi</div>
          <div>🎨 Créativité</div>
          <div>🤝 Travail d’équipe</div>
          <div>📚 Discipline</div>
        </div>

        <button className="primary-btn">
          Voir plus de photos
        </button>
      </div>
    </div>
     </>
  );
};

export default ActivityModal;