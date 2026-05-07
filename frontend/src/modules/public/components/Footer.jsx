import React from 'react';
import { Icons } from '../../../assets/icons/Icons';
import { contactData } from '../data/contact';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0d1b33', color: '#fff', padding: '60px 5% 30px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ backgroundColor: '#1a2b4b', padding: '8px', borderRadius: '10px' }}><Icons.GraduationCap /></div>
            <h2 style={{ fontSize: '20px', margin: 0 }}>ANNAHDA</h2>
          </div>
          <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' }}>École privée d'excellence. Une pédagogie moderne ancrée dans nos valeurs.</p>
        </div>
        <div>
          <h4 style={{ marginBottom: '20px' }}>Contact</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8', marginBottom: '10px' }}>
            <Icons.Phone /> {contactData.phone}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8', marginBottom: '10px' }}>
            <Icons.Mail /> {contactData.email}
          </div>
          <div style={{ display: 'flex', gap: '15px', marginTop: '15px', color: '#94a3b8' }}>
            <Icons.WhatsApp /> <Icons.Instagram />
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '50px', paddingTop: '20px', textAlign: 'center', fontSize: '13px', color: '#64748b' }}>
        © 2026 ANNAHDA. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;