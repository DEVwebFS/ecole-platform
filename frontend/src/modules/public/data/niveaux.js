// data/niveaux.js
export const niveauxData = [
  {
    id: "maternelle",
    title: "Maternelle",
    color: "#9ED3DC",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
    description: "Un environnement joyeux pour les premiers apprentissages.",
    horaireGeneral: "8h00 - 15h00",
    salles: ["Salle de jeux", "Salle d'éveil", "Salle multimédia", "Espace motricité"],
    enseignants: "Éducateurs spécialisés en petite enfance & assistants pédagogiques",
    methode: "Apprentissage par le jeu, activités sensorielles et projets créatifs.",
    classes: [
      { name: "Petite Section", age: "3 - 4 ans", horaire: "8h00 - 15h00", matieres: ["Arabe", "Français", "Anglais", "Éducation Islamique", "Jeux éducatifs", "Activités créatives"] },
      { name: "Moyenne Section", age: "4 - 5 ans", horaire: "8h00 - 15h00", matieres: ["Arabe", "Français", "Anglais", "Éducation Islamique", "Pré-écriture", "Découverte du monde"] },
      { name: "Grande Section", age: "5 - 6 ans", horaire: "8h00 - 15h00", matieres: ["Arabe", "Français", "Anglais", "Éducation Islamique", "Pré-lecture", "Initiation aux chiffres"] }
    ]
  },
  {
    id: "primaire",
    title: "Primaire",
    color: "#FFA95A",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
    description: "Des bases solides pour réussir l’avenir.",
    horaireGeneral: "8h00 - 16h00",
    salles: ["Salles intelligentes", "Bibliothèque", "Laboratoire informatique", "Terrain sportif"],
    enseignants: "Professeurs des écoles expérimentés, spécialistes par discipline",
    methode: "Pédagogie active, projets interdisciplinaires et suivi personnalisé.",
    classes: [
      { name: "CP", horaire: "8h00 - 16h00", matieres: ["Mathématiques", "Français", "Arabe", "Anglais", "Sport", "Éducation Islamique"] },
      { name: "CE1", horaire: "8h00 - 16h00", matieres: ["Mathématiques", "Français", "Arabe", "Anglais", "SVT", "Sport"] },
      { name: "CE2", horaire: "8h00 - 16h00", matieres: ["Mathématiques", "Français", "Arabe", "Anglais", "SVT", "Histoire-Géographie"] },
      { name: "CM1", horaire: "8h00 - 16h00", matieres: ["Mathématiques", "Français", "Arabe", "Anglais", "SVT", "Histoire-Géographie"] },
      { name: "CM2", horaire: "8h00 - 16h00", matieres: ["Mathématiques", "Français", "Arabe", "Anglais", "SVT", "Sport"] },
      { name: "6ème année", horaire: "8h00 - 16h00", matieres: ["Mathématiques", "Français", "Arabe", "Anglais", "SVT", "Histoire-Géographie", "Informatique"] }
    ]
  },
  {
    id: "college",
    title: "Collège",
    color: "#E87F24",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
    description: "Préparation sérieuse vers l’excellence académique.",
    horaireGeneral: "8h00 - 17h00",
    salles: ["Laboratoires sciences", "Salles multimédia", "CDI", "Salles de technologie"],
    enseignants: "Professeurs agrégés et certifiés, spécialistes haute qualification",
    methode: "Pédagogie par compétences, projets collaboratifs, préparation au brevet",
    classes: [
      { name: "1ère Année Collège", horaire: "8h00 - 17h00", matieres: ["Mathématiques", "Physique-Chimie", "SVT", "Français", "Arabe", "Anglais", "Informatique", "Sport"] },
      { name: "2ème Année Collège", horaire: "8h00 - 17h00", matieres: ["Mathématiques", "Physique-Chimie", "SVT", "Français", "Arabe", "Anglais", "Histoire-Géographie", "Technologie"] },
      { name: "3ème Année Collège", horaire: "8h00 - 17h00", matieres: ["Mathématiques", "Physique-Chimie", "SVT", "Français", "Arabe", "Anglais", "Instruction Islamique", "Sport"] }
    ]
  }
];