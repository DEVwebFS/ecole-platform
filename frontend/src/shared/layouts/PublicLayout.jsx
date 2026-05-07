import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../../modules/public/components/Navbar';
import Footer from '../../../modules/public/components/Footer';

const PublicLayout = () => {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main>
        <Outlet /> {/* Hna fin ghadi t-afficher l-page Inscription */}
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;