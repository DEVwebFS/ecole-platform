const images = [
  {
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    title: "Spectacle",
  },
  {
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    title: "English Week",
  },
  {
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
    title: "Atelier",
  },
  {
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    title: "Sortie scolaire",
  },
  {
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
    title: "Théâtre",
  },
  {
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
    title: "Prix",
  },
];

const MomentsGallery = () => {
    
  return (
    <>
    <style>
        {
            `
            /* ========== MOMENTS GALLERY SECTION ========== */
.moments-section {
  padding: 5rem 2rem;
  background: linear-gradient(145deg, #FFFBF1 0%, #fff9ef 100%);
  position: relative;
  overflow: hidden;
}

/* Décoration d'arrière-plan */
.moments-section::before {
  content: "✨";
  font-size: 220px;
  position: absolute;
  bottom: -80px;
  right: -60px;
  opacity: 0.08;
  pointer-events: none;
  font-weight: bold;
  font-family: monospace;
}

.moments-section::after {
  content: "";
  position: absolute;
  top: -20%;
  left: -10%;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, #9ED3DC 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0.25;
  z-index: 0;
  pointer-events: none;
}

/* Titre de section */
.moments-section .section-title {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
}

.moments-section .section-title h2 {
  font-size: 2.6rem;
  font-weight: 800;
  color: #2F2FE4;
  margin-bottom: 0.5rem;
  display: inline-block;
  background: linear-gradient(135deg, #2F2FE4, #E87F24);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.moments-section .section-title p {
  font-size: 1.1rem;
  color: #4a5b6e;
  max-width: 550px;
  margin: 0 auto;
}

/* Masonry grid avec colonnes CSS (effet masonry automatique) */
.masonry-grid {
  column-count: 3;
  column-gap: 1.5rem;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* Chaque item se comporte comme un élément qui ne se brise pas entre colonnes */
.masonry-item {
  break-inside: avoid;
  margin-bottom: 1.5rem;
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.12);
  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  cursor: pointer;
  background: white;
}

.masonry-item img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s ease;
  object-fit: cover;
}

/* Overlay au survol */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(47, 47, 228, 0.85), rgba(232, 127, 36, 0.85));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(3px);
}

.overlay h3 {
  color: white;
  font-size: 1.6rem;
  font-weight: 800;
  text-align: center;
  transform: translateY(20px);
  transition: transform 0.3s ease;
  padding: 0 1rem;
  letter-spacing: -0.3px;
}

.masonry-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 40px -12px rgba(47, 47, 228, 0.3);
}

.masonry-item:hover .overlay {
  opacity: 1;
}

.masonry-item:hover .overlay h3 {
  transform: translateY(0);
}

.masonry-item:hover img {
  transform: scale(1.05);
}

/* Animation d'entrée progressive (optionnelle) */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.masonry-item {
  animation: fadeUp 0.5s ease backwards;
}

/* Délais pour effet cascade (basé sur l'index, mais géré par nth-child si besoin) */
/* Pour plus de naturel, on peut ajouter un délai progressif, mais le rendu est déjà fluide */

/* Responsive */
@media (max-width: 1024px) {
  .masonry-grid {
    column-count: 2;
    column-gap: 1.2rem;
  }
  .moments-section .section-title h2 {
    font-size: 2.2rem;
  }
}

@media (max-width: 640px) {
  .moments-section {
    padding: 3rem 1rem;
  }
  .masonry-grid {
    column-count: 1;
    column-gap: 0;
  }
  .masonry-item {
    margin-bottom: 1.2rem;
  }
  .overlay h3 {
    font-size: 1.3rem;
  }
  .moments-section .section-title h2 {
    font-size: 1.8rem;
  }
  .moments-section .section-title p {
    font-size: 0.95rem;
  }
}

/* Option : si on veut ajouter une certaine hauteur variable pour les images, 
   le contenu définit la hauteur automatiquement. On peut aussi forcer un ratio 
   mais le masonry s'en sort très bien. */

/* Petite touche : bordure interne subtile au survol */
.masonry-item {
  border: 1px solid rgba(255, 255, 255, 0.3);
}
            `
        }
    </style>
    <div className="moments-section">

      <div className="section-title">
        <h2>✨ Moments inoubliables</h2>
        <p>
          Découvrez quelques moments forts de la vie de nos élèves.
        </p>
      </div>

      <div className="masonry-grid">
        {images.map((item, index) => (
          <div className="masonry-item" key={index}>
            <img src={item.img} alt="" />

            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default MomentsGallery;