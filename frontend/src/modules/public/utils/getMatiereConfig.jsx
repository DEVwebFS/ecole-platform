export const getMatiereConfig = (m) => {
  const l = m.toLowerCase();
  if (l.includes("math")||l.includes("calcul")||l.includes("chiffre"))
    return { icon:"ti-calculator",        bg:"linear-gradient(135deg,#ede9fe,#c4b5fd)", color:"#7c3aed" };
  if (l.includes("phys")||l.includes("chim"))
    return { icon:"ti-atom",              bg:"linear-gradient(135deg,#fce7f3,#f9a8d4)", color:"#db2777" };
  if (l.includes("svt"))
    return { icon:"ti-dna",               bg:"linear-gradient(135deg,#dcfce7,#86efac)", color:"#16a34a" };
  if (l.includes("français")||l.includes("lecture")||l.includes("écriture")||l.includes("prélect")||l.includes("préécrit"))
    return { icon:"ti-writing",           bg:"linear-gradient(135deg,#fef9c3,#fde047)", color:"#ca8a04" };
  if (l.includes("histoire")||l.includes("géo"))
    return { icon:"ti-map-2",             bg:"linear-gradient(135deg,#dbeafe,#93c5fd)", color:"#2563eb" };
  if (l.includes("islamique")||l.includes("islam"))
    return { icon:"ti-moon-stars",        bg:"linear-gradient(135deg,#f0fdf4,#86efac)", color:"#15803d" };
  if (l.includes("arabe")||l.includes("lettre"))
    return { icon:"ti-text-direction-rtl",bg:"linear-gradient(135deg,#fff7ed,#fdba74)", color:"#ea580c" };
  if (l.includes("anglais"))
    return { icon:"ti-world-www",         bg:"linear-gradient(135deg,#eff6ff,#bfdbfe)", color:"#1d4ed8" };
  if (l.includes("info"))
    return { icon:"ti-terminal-2",        bg:"linear-gradient(135deg,#f1f5f9,#94a3b8)", color:"#475569" };
  if (l.includes("techno"))
    return { icon:"ti-cpu",               bg:"linear-gradient(135deg,#f8fafc,#cbd5e1)", color:"#334155" };
  if (l.includes("sport")||l.includes("psycho"))
    return { icon:"ti-ball-football",     bg:"linear-gradient(135deg,#fff1f2,#fda4af)", color:"#e11d48" };
  if (l.includes("music")||l.includes("chant"))
    return { icon:"ti-music-note",        bg:"linear-gradient(135deg,#fdf4ff,#e879f9)", color:"#a21caf" };
  if (l.includes("art")||l.includes("dessin")||l.includes("colori"))
    return { icon:"ti-brush",             bg:"linear-gradient(135deg,#fef3c7,#fb923c)", color:"#c2410c" };
  if (l.includes("langage")||l.includes("expression")||l.includes("communication"))
    return { icon:"ti-speakerphone",      bg:"linear-gradient(135deg,#ecfdf5,#6ee7b7)", color:"#059669" };
  if (l.includes("jeux"))
    return { icon:"ti-building-castle",   bg:"linear-gradient(135deg,#fdf4ff,#c084fc)", color:"#9333ea" };
  if (l.includes("couleur"))
    return { icon:"ti-droplet-half-2",    bg:"linear-gradient(135deg,#fce7f3,#f9a8d4)", color:"#db2777" };
  if (l.includes("vie en groupe"))
    return { icon:"ti-users-group",       bg:"linear-gradient(135deg,#eff6ff,#60a5fa)", color:"#2563eb" };
  if (l.includes("découverte"))
    return { icon:"ti-binoculars",        bg:"linear-gradient(135deg,#f0f9ff,#7dd3fc)", color:"#0284c7" };
  return   { icon:"ti-book-open",         bg:"linear-gradient(135deg,#f8fafc,#e2e8f0)", color:"#64748b" };
}