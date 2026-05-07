import React from 'react';
import { Icons } from '../../../assets/icons/Icons';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 5%', borderBottom: '1px solid #eee', backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ backgroundColor: '#1a2b4b', padding: '8px', borderRadius: '10px', display: 'flex' }}>
          <Icons.GraduationCap />
        </div>
        <div>
          <h1 style={{ fontSize: '18px', fontWeight: '800', margin: 0, color: '#1a2b4b' }}>ANNAHDA</h1>
          <span style={{ fontSize: '10px', color: '#64748b' }}>مؤسسة النهضة</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '25px', fontSize: '14px', fontWeight: '500', color: '#64748b' }}>
        <span>Accueil</span><span>L'école</span><span>Niveaux</span>
        <span style={{ backgroundColor: '#f1f5f9', color: '#1a2b4b', padding: '5px 12px', borderRadius: '8px' }}>Inscription</span>
      </div>
      <button style={{ backgroundColor: '#1a2b4b', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '10px', fontWeight: '600', cursor: 'pointer' }}>Connexion</button>
    </nav>
  );
};

export default Navbar;