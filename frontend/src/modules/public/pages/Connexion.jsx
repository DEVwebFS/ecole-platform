// Connection.jsx

import React, { useState } from "react";
import "../styles/Connection.css";
import {
  FaUserShield,
  FaChalkboardTeacher,
  FaUsers,
  FaUserGraduate,
  FaBookOpen,
  FaSchool,
  FaEnvelope,
  FaLock
} from "react-icons/fa";
  import { useNavigate } from "react-router-dom";


const Connection = () => {
  const [selectedRole, setSelectedRole] = useState("parent");
  const navigate = useNavigate();

  const roles = [
  {
    id: "admin",
    title: "Administrateur",
    desc: "Gestion complète",
    icon: <FaUserShield />,
  },
  {
    id: "formateur",
    title: "Formateur",
    desc: "Classes & tâches",
    icon: <FaChalkboardTeacher />,
  },
  {
    id: "parent",
    title: "Parent",
    desc: "Suivi élève",
    icon: <FaUsers />,
  },
];

  const handleLogin = (e) => {
    e.preventDefault();

    // temporaire front only
    localStorage.setItem("role", selectedRole);

    // plus tard backend + token + redirect
    console.log("Role :", selectedRole);
  };

  return (
    <div className="connection-page">
      {/* LEFT SIDE */}
      <div className="connection-left">
        <div className="overlay"></div>

        <div className="school-brand">
         <div className="book-icon">
  <FaBookOpen />
</div>

          <div>
            <h2>ANNAHDA</h2>
            <p>مؤسسة النهضة</p>
          </div>
        </div>

        <div className="hero-content">
          <h1>
            Plateforme <br /> pédagogique
          </h1>

          <p>
            Une expérience moderne pour suivre la scolarité,
            communiquer et collaborer.
          </p>

          <div className="stats-container">

  <div className="stat-card">
    <FaUserGraduate className="stat-icon" />
    <h2>1200+</h2>
    <span>élèves</span>
  </div>

  <div className="stat-card">
    <FaBookOpen className="stat-icon" />
    <h2>80</h2>
    <span>formateurs</span>
  </div>

  <div className="stat-card">
    <FaSchool className="stat-icon" />
    <h2>3</h2>
    <span>cycles</span>
  </div>

</div>
        </div>

        <div className="copyright">
          © ANNAHDA — Plateforme éducative
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="connection-right">
        <div className="login-card">
          <h1>Connexion</h1>

          <p className="subtitle">
            Accédez à votre espace personnel.
          </p>

          <form onSubmit={handleLogin}>
            {/* ROLE SELECTION */}
            <div className="form-group">
              <label>Choisir un rôle</label>

              <div className="roles-grid">
                {roles.map((role) => (
                  <div
                    key={role.id}
                    className={`role-card ${
                      selectedRole === role.id ? "active-role" : ""
                    }`}
                    onClick={() => setSelectedRole(role.id)}
                  >
                    <span className="role-icon">{role.icon}</span>

                    <h3>{role.title}</h3>

                    <p>{role.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label><FaEnvelope /> Email</label>

              <input
                type="email"
                placeholder="vous@ecole.com"
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="form-group">
              <label>Mot de passe</label>
              <label><FaLock /> Mot de passe</label>
              <input
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Se connecter
            </button>
           <div className="back-btn-wrapper">
  <button
    className="back-btn"
    onClick={() => navigate("/")}
  >
    ← Retour à l'accueil
  </button>
</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connection;