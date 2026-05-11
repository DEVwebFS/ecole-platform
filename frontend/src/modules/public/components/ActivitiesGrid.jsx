import { useState } from "react";

import {
  FaBookOpen,
  FaPalette,
  FaFutbol,
  FaMosque,
  FaUtensils,
  FaFlask,
} from "react-icons/fa";

import ActivityModal from "./ActivityModal";
import ActivityCard from "./ActivityCard";

const activities = [
  {
    title: "Éducatives",
    icon: <FaBookOpen />,
    desc: "Apprentissages et clubs éducatifs.",
    bg: "#2F2FE4",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
    image2:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    image3:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Artistiques",
    icon: <FaPalette />,
    desc: "Théâtre, dessin et expression.",
    bg: "#E87F24",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
    image2:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    image3:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Sportives",
    icon: <FaFutbol />,
    desc: "Football, basket et activités physiques.",
    bg: "#34C759",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
    image2:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
    image3:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Religieuses",
    icon: <FaMosque />,
    desc: "Valeurs islamiques et Coran.",
    bg: "#9C4DFF",
    image:
      "https://images.unsplash.com/photo-1519817914152-22f90e3b3c0b?q=80&w=1200&auto=format&fit=crop",
    image2:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
    image3:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Culinaires",
    icon: <FaUtensils />,
    desc: "Ateliers cuisine créatifs.",
    bg: "#FF6B9D",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    image2:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
    image3:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Scientifiques",
    icon: <FaFlask />,
    desc: "Expériences et découvertes.",
    bg: "#00C2FF",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    image2:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop",
    image3:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1200&auto=format&fit=crop",
  },
];

const ActivitiesGrid = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <>
    <style>{`
        /* styles pour la section ActivitésGrid */
.activities-grid-section {
  padding: 5rem 2rem;
  background: linear-gradient(145deg, #FFFBF1 0%, #fef7e8 100%);
  position: relative;
  overflow: hidden;
}

/* Décorations d'arrière-plan */
.activities-grid-section::before {
  content: "";
  position: absolute;
  top: -20%;
  left: -10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #9ED3DC 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;
}

.activities-grid-section::after {
  content: "";
  position: absolute;
  bottom: -10%;
  right: -5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #FFA95A 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0.25;
  z-index: 0;
  pointer-events: none;
}

/* Titre de section */
.section-title {
  text-align: center;
  margin-bottom: 3.5rem;
  position: relative;
  z-index: 2;
}

.section-title span {
  display: inline-block;
  background: #2F2FE4;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 50px;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  box-shadow: 0 8px 14px rgba(47, 47, 228, 0.2);
}

.section-title h2 {
  font-size: 2.6rem;
  font-weight: 800;
  color: #1e2a3e;
  margin: 0.5rem 0;
  position: relative;
  display: inline-block;
}

.section-title h2::after {
  content: "";
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 4px;
  background: #E87F24;
  border-radius: 4px;
}

/* Grille responsive */
.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* Carte d'activité (ActivityCard) */
.activity-card {
  background: white;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 18px 30px -12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  cursor: pointer;
  position: relative;
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.activity-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 40px -12px rgba(47, 47, 228, 0.25);
}

.card-image {
  height: 180px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.activity-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 1.5rem;
  text-align: center;
}

.card-icon {
  font-size: 2.5rem;
  background: #FFFBF1;
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  border-radius: 50%;
  margin: -50px auto 1rem auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid white;
}

.card-content h3 {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.5rem 0;
  color: #2F2FE4;
}

.card-content p {
  color: #4a5b6e;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

/* Bouton ou indicateur */
.card-overlay {
  background: rgba(47, 47, 228, 0.08);
  border-radius: 40px;
  padding: 0.4rem 1rem;
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  color: #2F2FE4;
  transition: 0.2s;
}

.activity-card:hover .card-overlay {
  background: #2F2FE4;
  color: white;
}

/* MODAL (ActivityModal) */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  animation: fadeIn 0.2s forwards;
}

.modal-container {
  background: #FFFBF1;
  max-width: 900px;
  width: 90%;
  border-radius: 36px;
  overflow-y: auto;
  max-height: 85vh;
  box-shadow: 0 40px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
  position: relative;
}

.modal-header {
  background: linear-gradient(135deg, #2F2FE4, #1E1EA8);
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.modal-header h3 {
  font-size: 1.8rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.close-modal {
  background: rgba(255,255,255,0.2);
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
}

.close-modal:hover {
  background: #E87F24;
  transform: rotate(90deg);
}

.modal-body {
  padding: 2rem;
}

.modal-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.modal-gallery img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.2s;
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}

.modal-gallery img:hover {
  transform: scale(1.02);
}

.modal-desc {
  color: #2d3e50;
  line-height: 1.6;
  font-size: 1rem;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 28px;
  border-left: 5px solid #E87F24;
}

.modal-footer {
  padding: 1rem 2rem 2rem;
  text-align: right;
}

.btn-modal {
  background: #E87F24;
  color: white;
  border: none;
  padding: 0.7rem 1.8rem;
  border-radius: 40px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.btn-modal:hover {
  background: #2F2FE4;
  transform: translateY(-2px);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .activities-grid-section {
    padding: 3rem 1.5rem;
  }
  .section-title h2 {
    font-size: 2rem;
  }
  .activities-grid {
    gap: 1.5rem;
  }
  .modal-gallery {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  .modal-gallery img {
    height: 140px;
  }
  .modal-header h3 {
    font-size: 1.4rem;
  }
}

@media (max-width: 480px) {
  .card-content h3 {
    font-size: 1.3rem;
  }
  .modal-container {
    width: 95%;
  }
}
      `}</style>
    <div className="activities-grid-section">

      <div className="section-title">
        <span>Tout pour leur épanouissement</span>
        <h2>Nos Activités</h2>
      </div>

      <div className="activities-grid">
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            activity={activity}
            onClick={() => setSelectedActivity(activity)}
          />
        ))}
      </div>

      {selectedActivity && (
        <ActivityModal
          activity={selectedActivity}
          closeModal={() => setSelectedActivity(null)}
        />
      )}
    </div>
    </>
  );
};

export default ActivitiesGrid;