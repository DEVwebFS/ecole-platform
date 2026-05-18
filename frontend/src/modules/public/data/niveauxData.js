import {
  matieres,
  matieresPetiteSection,
  matieresMoyenneSection,
  matieresGrandeSection,
  matieresCollege,
  matieresCollege1ere
} from "./matieres";

export const niveauxData = [
  {
    id: "maternelle",
    title: "Maternelle",
    subtitle: "3 – 5 ans",
    description: "Un environnement bienveillant pour les premiers apprentissages des enfants.",
    gradient: "linear-gradient(135deg,#d1fae5 0%,#6ee7b7 50%,#10b981 100%)",
    icon: "ti-building-community",
    color: "#059669",
    colorLight: "#ecfdf5",
    colorMid: "#a7f3d0",
    classes: [
      { name:"Petite section",  programme:"Découverte de l'environnement et développement des compétences de base", groupes:[], matieres:matieresPetiteSection,  gradient:"linear-gradient(135deg,#bbf7d0,#34d399)", icon:"ti-baby-carriage" },
      { name:"Moyenne section", programme:"Apprentissage progressif des lettres, chiffres et langage",              groupes:[], matieres:matieresMoyenneSection, gradient:"linear-gradient(135deg,#a7f3d0,#10b981)", icon:"ti-pencil" },
      { name:"Grande section",  programme:"Préparation à l'entrée en primaire",                                     groupes:[], matieres:matieresGrandeSection,  gradient:"linear-gradient(135deg,#6ee7b7,#059669)", icon:"ti-school" }
    ],
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",

  },
  {
    id: "primaire",
    title: "Primaire",
    subtitle: "6 – 12 ans",
    description: "De la CP à la 6ème, structuré en groupes pour un suivi personnalisé.",
    gradient: "linear-gradient(135deg,#dbeafe 0%,#93c5fd 50%,#3b82f6 100%)",
    icon: "ti-backpack",
    color: "#2563eb",
    colorLight: "#eff6ff",
    colorMid: "#bfdbfe",
    classes: [
      { name:"CP",         programme:"Initiation à la lecture, écriture et calcul",        groupes:["GR1","GR2"],       matieres, gradient:"linear-gradient(135deg,#dbeafe,#93c5fd)", icon:"ti-book" },
      { name:"CE1",        programme:"Renforcement des bases en lecture et mathématiques",  groupes:["GR1","GR2","GR3"], matieres, gradient:"linear-gradient(135deg,#bfdbfe,#60a5fa)", icon:"ti-pencil-plus" },
      { name:"CE2",        programme:"Développement des compétences fondamentales",         groupes:["GR1","GR2","GR3"], matieres, gradient:"linear-gradient(135deg,#93c5fd,#3b82f6)", icon:"ti-notebook" },
      { name:"CM1",        programme:"Approfondissement des notions scolaires",             groupes:["GR1","GR2","GR3"], matieres, gradient:"linear-gradient(135deg,#60a5fa,#2563eb)", icon:"ti-file-text" },
      { name:"CM2",        programme:"Préparation au collège",                              groupes:["GR1","GR2"],       matieres, gradient:"linear-gradient(135deg,#3b82f6,#1d4ed8)", icon:"ti-star" },
      { name:"6ème année", programme:"Transition vers l'enseignement secondaire",           groupes:["GR1","GR2"],       matieres, gradient:"linear-gradient(135deg,#1d4ed8,#1e3a8a)", icon:"ti-award" }
    ],
     image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "college",
    title: "Collège",
    subtitle: "12 – 15 ans",
    description: "Trois années pour préparer sereinement le passage au lycée.",
    gradient: "linear-gradient(135deg,#fef3c7 0%,#fcd34d 50%,#f59e0b 100%)",
    icon: "ti-certificate",
    color: "#d97706",
    colorLight: "#fffbeb",
    colorMid: "#fde68a",
    classes: [
      { name:"1ère année collège", programme:"Introduction aux matières avancées du collège",                   groupes:["GR1","GR2"], matieres:matieresCollege1ere, gradient:"linear-gradient(135deg,#fef3c7,#fcd34d)", icon:"ti-microscope" },
      { name:"2ème année collège", programme:"Approfondissement des disciplines scientifiques et littéraires",  groupes:["GR1"],       matieres:matieresCollege,     gradient:"linear-gradient(135deg,#fde68a,#f59e0b)", icon:"ti-math-function" },
      { name:"3ème année collège", programme:"Préparation aux examens et orientation",                          groupes:["GR1"],       matieres:matieresCollege,     gradient:"linear-gradient(135deg,#fcd34d,#d97706)", icon:"ti-trophy" }
    ],
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
  }
];
