import React from 'react';
import { Icons } from '../../../assets/icons/Icons';
import { contactData } from '../data/contact';
import '../styles/public.css';

const Inscription = () => {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(90deg, #0d1b33 0%, #3a6091 100%)', color: 'white', padding: '60px 8%' }}>
        <p style={{ fontSize: '12px', letterSpacing: '2px', opacity: 0.8, fontWeight: '600' }}>REJOIGNEZ-NOUS</p>
        <h2 style={{ fontSize: '56px', margin: '10px 0', fontWeight: '700' }}>Inscription</h2>
        <p style={{ opacity: 0.9, fontSize: '18px' }}>Remplissez le formulaire ci-dessous.</p>
      </div>

      <div className="main-grid"> {/* class f public.css */}
        {/* Formulaire Card */}
        <div className="card">
          <h3 style={{ marginBottom: '30px' }}>Formulaire d'inscription</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
               <input className="custom-input" placeholder="Prénom" />
               <input className="custom-input" placeholder="Nom" />
            </div>
            <input className="custom-input" placeholder="Email" />
            <button className="btn-submit" type="button">Envoyer la demande</button>
          </form>
        </div>

        {/* Sidebar Contact */}
        <div className="card">
          <h4>Contact rapide</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', border: '1px solid #f1f5f9', borderRadius: '12px', marginBottom: '10px' }}>
            <div style={{ color: '#1a2b4b' }}><Icons.WhatsApp /></div>
            <div>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>WhatsApp</p>
              <p style={{ fontSize: '14px', fontWeight: '600', margin: 0 }}>{contactData.whatsapp}</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', border: '1px solid #f1f5f9', borderRadius: '12px' }}>
            <div style={{ color: '#1a2b4b' }}><Icons.Mail /></div>
            <div>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Email</p>
              <p style={{ fontSize: '14px', fontWeight: '600', margin: 0 }}>{contactData.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscription;