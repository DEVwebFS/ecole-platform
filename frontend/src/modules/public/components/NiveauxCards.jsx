
import { useState } from "react";
import { niveauxData } from "../data/niveauxData";
import { getMatiereConfig } from "../utils/getMatiereConfig";
import "../styles/niveaux.css";

export default function Niveaux() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <>
      <div className="wrap">

        {/* STEP 1 — Levels */}
        {!selectedLevel && (
          <>
            <div className="page-header">
              <h1 className="page-title">Nos <em>Niveaux</em></h1>
            </div>
            <div className="level-grid">
              {niveauxData.map((lv) => (
                <div
                  key={lv.id}
                  className="level-card anim"
                  onClick={() => { setSelectedLevel(lv); setSelectedClass(null); }}
                  role="button" tabIndex={0}
                  onKeyDown={(e) => e.key==="Enter" && (setSelectedLevel(lv), setSelectedClass(null))}
                >
                  <div className="level-banner" style={{ background: lv.gradient }}>
                    <img src={lv.image} alt={lv.title} className="cardImage" />
                  </div>
                  <div className="level-body">
                    <p className="level-age">{lv.subtitle}</p>
                    <h2 className="level-name">{lv.title}</h2>
                    <p className="level-desc">{lv.description}</p>
                    <button className="level-btn" style={{ background: lv.color }} tabIndex={-1}>
                      Découvrir <i className="ti ti-arrow-right" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* STEP 2 — Classes */}
        {selectedLevel && !selectedClass && (
          <>
            <div className="nav-row">
              <button className="back-btn" onClick={() => setSelectedLevel(null)}>
                <i className="ti ti-arrow-left" aria-hidden="true" /> Retour
              </button>
              <span className="bc-sep">/</span>
              <span className="bc-cur">{selectedLevel.title}</span>
            </div>
            <div className="s-head anim">
              <h2>{selectedLevel.title}</h2>
              <span className="count-pill" style={{ background: selectedLevel.colorMid, color: selectedLevel.color }}>
                {selectedLevel.classes.length} classes
              </span>
            </div>
            <div className="classes-grid">
              {selectedLevel.classes.map((cls, i) => (
                <div
                  key={i}
                  className="class-card anim"
                  onClick={() => setSelectedClass(cls)}
                  role="button" tabIndex={0}
                  onKeyDown={(e) => e.key==="Enter" && setSelectedClass(cls)}
                >
                  <div className="class-banner" style={{ background: cls.gradient }}>
                   <i className={`ti ${cls.icon}`} aria-hidden="true" />
                  </div>
                  <div className="class-body">
                    <p className="class-name">{cls.name}</p>
                    <p className="class-prog">{cls.programme}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* STEP 3 — Detail */}
        {selectedClass && selectedLevel && (
          <>
            <div className="nav-row">
              <button className="back-btn" onClick={() => setSelectedClass(null)}>
                <i className="ti ti-arrow-left" aria-hidden="true" /> Retour
              </button>
              <span className="bc-sep">/</span>
              <button className="bc-link" onClick={() => setSelectedClass(null)}>{selectedLevel.title}</button>
              <span className="bc-sep">/</span>
              <span className="bc-cur">{selectedClass.name}</span>
            </div>

            <div className="detail-header anim">
              <div className="detail-strip" style={{ background: selectedClass.gradient }}>
                <i className={`ti ${selectedClass.icon}`} aria-hidden="true" />
                
              </div>

              
              <div className="detail-info">
                <h2>{selectedClass.name}</h2>
                <p>{selectedClass.programme}</p>
              </div>
            </div>

            {selectedClass.groupes?.length > 0 && (
              <>
                <p className="sub-lbl">Groupes</p>
                <div className="grp-row">
                  {selectedClass.groupes.map((g, i) => (
                    <div key={i} className="grp-chip anim">
                      <span className="grp-dot" style={{ background: selectedLevel.color }} />
                      {g}
                    </div>
                  ))}
                </div>
                <div className="divider" />
              </>
            )}

            <p className="sub-lbl">Matières enseignées</p>
            <div className="mat-grid">
              {selectedClass.matieres.map((mat, i) => {
                const cfg = getMatiereConfig(mat);
                return (
                  <div key={i} className="mat-card anim">
                    <div className="mat-banner" style={{ background: cfg.bg }}>
                      <i className={`ti ${cfg.icon}`} aria-hidden="true" />
                    </div>
                    <p className="mat-label">{mat}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}

      </div>
       
    </>
);
}