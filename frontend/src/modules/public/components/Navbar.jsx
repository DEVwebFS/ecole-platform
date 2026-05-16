import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assets/icons/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <img src={logo} alt="" />
          <h1>ANNAHDA</h1>
          <span>École Privée</span>
        </div>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>

          <Link to="/" className="nav-link">Accueil</Link>
<Link to="/ecole" className="nav-link">L'école</Link>
<Link to="/niveaux" className="nav-link">Niveaux</Link>
<Link to="/activities" className="nav-link">Activities</Link>
<Link to="/inscription" className="nav-link">inscription</Link>

<Link to="/connexion" className="btn-connexion">Connexion</Link>

        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </nav>
  );
};

export default Navbar; 