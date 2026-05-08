import React, { useEffect, useState } from "react";
import { Icons } from "./assets/icons/Icons";

export default function App() {

    const [niveaux, setNiveaux] = useState([]);
    const [classes, setClasses] = useState([]);

    const [selectedNiveau, setSelectedNiveau] = useState("");
    const [selectedClasse, setSelectedClasse] = useState("");
    useEffect(() => {
  fetch("http://127.0.0.1:8000/api/niveaux")
    .then(res => res.json())
    .then(data => {
      setNiveaux(data);
        loadClasses(firstId);
      if (data.length > 0) {
        const firstId = data[0].id;

        setSelectedNiveau(firstId);

        loadClasses(firstId);
      }
    });
}, []);

    const loadClasses = (niveauId) => {
  fetch(`http://127.0.0.1:8000/api/classes?niveau_id=${niveauId}`)
    .then(res => res.json())
    .then(data => {
      setClasses(data);
    });
};
const handleNiveauChange = (e) => {
  const id = e.target.value;
  setSelectedNiveau(id);
  loadClasses(id);
};
const handleSubmit = () => {
  fetch("http://127.0.0.1:8000/api/inscriptions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nom_eleve: nomEleve,
      prenom_eleve: prenomEleve,
      email: email,
      classe_id: selectedClasse,
      niveau_id: selectedNiveau
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log("Inscription saved:", data);
    alert("Inscription réussie ✅");
  });
};
   

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#fcfcfc", color: "#1a2b4b" }}>
      
      {/* NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 5%", backgroundColor: "#fff", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ backgroundColor: "#1a2b4b", padding: "8px", borderRadius: "10px", display: "flex" }}>
            <Icons.GraduationCap />
          </div>
          <div>
            <h1 style={{ fontSize: "18px", fontWeight: "800", margin: 0, letterSpacing: "-0.5px" }}>ANNAHDA</h1>
            <p style={{ fontSize: "10px", color: "#64748b", margin: 0, fontWeight: "500" }}>مؤسسة النهضة</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "25px", fontSize: "14px", fontWeight: "500", color: "#64748b" }}>
          <span>Accueil</span><span>L'école</span><span>Niveaux</span><span>Matières</span><span>Activités</span>
          <span style={{ backgroundColor: "#f1f5f9", color: "#1a2b4b", padding: "5px 12px", borderRadius: "8px", fontWeight: "600" }}>Inscription</span>
        </div>
        <button style={{ backgroundColor: "#1a2b4b", color: "white", border: "none", padding: "10px 24px", borderRadius: "10px", fontWeight: "600", cursor: "pointer" }}>Connexion</button>
      </nav>

      {/* HERO SECTION */}
      <div style={{ background: "linear-gradient(90deg, #0d1b33 0%, #3a6091 100%)", color: "white", padding: "65px 8%" }}>
        <p style={{ fontSize: "12px", letterSpacing: "2px", opacity: 0.8, fontWeight: "600", marginBottom: "10px" }}>REJOIGNEZ-NOUS</p>
        <h2 style={{ fontSize: "52px", margin: "0 0 15px 0", fontWeight: "700" }}>Inscription</h2>
        <p style={{ opacity: 0.9, fontSize: "17px", maxWidth: "600px" }}>Remplissez le formulaire ci-dessous, notre équipe vous recontactera sous 48h.</p>
      </div>

      {/* MAIN CONTENT GRID */}
      <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr", gap: "35px", padding: "40px 8%", maxWidth: "1400px", margin: "0 auto" }}>
        
    <div style={{ 
  backgroundColor: "#fff", 
  padding: "40px", 
  borderRadius: "20px", 
  border: "1px solid #f1f5f9", 
  boxShadow: "0 4px 20px rgba(0,0,0,0.02)" 
}}>
  <h3 style={{ fontSize: "22px", marginBottom: "35px", fontWeight: "700", color: "#1a2b4b" }}>
    Formulaire d'inscription
  </h3>
  
  <form style={{ display: "flex", flexDirection: "column", gap: "25px" }}> {/* Gap kbir mabin s-stora */}
    
    {/* ROW 1: Niveau & Classe */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}> {/* Gap horizontal mabin l-inputs */}
      <div>
  <label style={labelStyle}>Niveau *</label>
  <select
    style={inputStyle}
    value={selectedNiveau}
    onChange={handleNiveauChange}
  >
    <option value="">Sélectionner niveau</option>

    {niveaux.map((n) => (
      <option key={n.id} value={n.id}>
        {n.nom}
      </option>
    ))}
  </select>
</div>

<div>
  <label style={labelStyle}>Classe *</label>
  <select
    style={inputStyle}
    value={selectedClasse}
    onChange={(e) => setSelectedClasse(e.target.value)}
  >
    <option value="">Sélectionner classe</option>

    {classes.map((c) => (
      <option key={c.id} value={c.id}>
        {c.nom}
      </option>
    ))}
  </select>
</div>
    </div>

    {/* ROW 2: Éléve */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
      <div>
        <label style={labelStyle}>Prénom de l'élève *</label>
        <input style={inputStyle} placeholder="Prénom" />
      </div>
      <div>
        <label style={labelStyle}>Nom de l'élève *</label>
        <input style={inputStyle} placeholder="Nom" />
      </div>
    </div>

    {/* ROW 3: Parent */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
      <div>
        <label style={labelStyle}>Prénom du parent *</label>
        <input style={inputStyle} placeholder="Prénom" />
      </div>
      <div>
        <label style={labelStyle}>Nom du parent *</label>
        <input style={inputStyle} placeholder="Nom" />
      </div>
    </div>

    {/* ROW 4: Contact */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
      <div>
        <label style={labelStyle}>Téléphone *</label>
        <input style={inputStyle} placeholder="+212 6 ..." />
      </div>
      <div>
        <label style={labelStyle}>Email *</label>
        <input style={inputStyle} placeholder="votre@email.com" />
      </div>
    </div>

    <button onClick={handleSubmit}
    style={{ 
      backgroundColor: "#0d1b33", 
      color: "white", 
      padding: "16px", 
      border: "none", 
      borderRadius: "12px", 
      fontSize: "16px", 
      fontWeight: "600", 
      marginTop: "10px", 
      cursor: "pointer" 
    }}>
      Envoyer la demande
    </button>
    
    <p style={{ textAlign: "center", fontSize: "12px", color: "#94a3b8" }}>
      Mode démonstration — les données sont stockées localement.
    </p>
  </form>
</div>

        {/* SIDEBAR CONTACT */}
        <div style={{ backgroundColor: "#fff", padding: "30px", borderRadius: "20px", border: "1px solid #f1f5f9", height: "fit-content" }}>
          <h4 style={{ margin: "0 0 5px 0", fontSize: "18px" }}>Contact rapide</h4>
          <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "25px" }}>Une question ? Contactez-nous directement.</p>
          
          <div style={contactCardStyle}>
            <Icons.WhatsApp />
            <div>
              <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>WhatsApp</p>
              <p style={{ fontSize: "15px", fontWeight: "600", margin: 0 }}>+212 6 00 00 00 00</p>
            </div>
          </div>

          <div style={contactCardStyle}>
            <Icons.Instagram />
            <div>
              <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>Instagram</p>
              <p style={{ fontSize: "15px", fontWeight: "600", margin: 0 }}>@annahda.school</p>
            </div>
          </div>

          <div style={contactCardStyle}>
            <Icons.Mail />
            <div>
              <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>Email</p>
              <p style={{ fontSize: "15px", fontWeight: "600", margin: 0 }}>contact@annahda.ma</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#0d1b33", color: "white", padding: "60px 8% 30px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: "50px", marginBottom: "50px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <Icons.GraduationCap /><h2 style={{ fontSize: "20px", margin: 0 }}>ANNAHDA</h2>
            </div>
            <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.6" }}>École privée d'excellence : Maternelle, Primaire et Collège. Une pédagogie moderne ancrée dans nos valeurs.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: "20px" }}>Navigation</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", color: "#b2b8c0" }}>
              <span>L'école</span><span>Niveaux</span><span>Matières</span><span>Inscription</span>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: "20px" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px", fontSize: "14px", color: "#b2bbc8" }}>
              <div style={{ display: "flex", gap: "10px" }}><Icons.Phone /> +212 5 22 00 00 00</div>
              <div style={{ display: "flex", gap: "10px" }}><Icons.Mail /> contact@annahda.ma</div>
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center", fontSize: "13px", color: "#c8ced6", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "25px" }}>© 2026 ANNAHDA. Tous droits réservés.</p>
      </footer>
    </div>
    
  );
  
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px", // Kbert l-padding chwiya bach i-ji l-input m-farkes
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  backgroundColor: "#f8fafc",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box", // Darori bach l-input may-khroj-sh mn l-itâr dyalu
  transition: "border-color 0.2s"
};

const labelStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#1a2b4b",
  marginBottom: "8px", // Zedt l-mousafa taht l-label nichan
  display: "block"
};

const contactCardStyle = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  padding: "18px",
  border: "1px solid #f1f5f9",
  borderRadius: "16px",
  marginBottom: "12px"
};