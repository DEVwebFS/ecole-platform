import React, { useState } from 'react';
import '../styles/inscription.css';

import { LuGraduationCap } from "react-icons/lu";
import { FiGlobe, FiPhone, FiMail, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Inscription = () => {
 
  const [lang, setLang] = useState('FR');

  
  const translations = {
    FR: {
      nav: ["Accueil", "L'école", "Niveaux", "Matières", "Activités", "Inscription"],
      connexion: "Connexion",
      heroTitle: "Inscription",
      heroSub: "Remplissez le formulaire ci-dessous, notre équipe vous recontactera sous 48h.",
      formTitle: "Formulaire d’inscription",
      labels: ["Niveau *", "Classe *", "Prénom de l'élève *", "Nom de l'élève *", "Prénom du parent *", "Nom du parent *", "Téléphone *", "Email *"],
      btnSend: "Envoyer la demande",
      footerDesc: "École privée d'excellence : Maternelle, Primaire et Collège. Une pédagogie moderne ancrée dans nos valeurs.",
      code: "ع" 
    },
    AR: {
      nav: ["الرئيسية", "المدرسة", "المستويات", "المواد", "الأنشطة", "التسجيل"],
      connexion: "تسجيل الدخول",
      heroTitle: "التسجيل",
      heroSub: "يرجى ملء الاستمارة أدناه، وسيتصل بكم فريقنا في غضون 48 ساعة.",
      formTitle: "استمارة التسجيل",
      labels: ["المستوى *", "القسم *", "الاسم الشخصي للتلميذ *", "الاسم العائلي للتلميذ *", "الاسم الشخصي لولي الأمر *", "الاسم العائلي لولي الأمر *", "الهاتف *", "البريد الإلكتروني *"],
      btnSend: "إرسال الطلب",
      footerDesc: "مدرسة خاصة متميزة: أولي، ابتدائي وإعدادي. بيداغوجيا حديثة متجذرة في قيمنا.",
      code: "EN"
    },
    EN: {
      nav: ["Home", "School", "Levels", "Subjects", "Activities", "Registration"],
      connexion: "Login",
      heroTitle: "Registration",
      heroSub: "Fill out the form below, our team will contact you within 48 hours.",
      formTitle: "Registration Form",
      labels: ["Level *", "Class *", "Student First Name *", "Student Last Name *", "Parent First Name *", "Parent Last Name *", "Phone *", "Email *"],
      btnSend: "Submit Request",
      footerDesc: "Private school of excellence: Nursery, Primary and Middle school. Modern pedagogy rooted in our values.",
      code: "FR"
    }
  };

  const toggleLanguage = () => {
    if (lang === 'FR') setLang('AR');
    else if (lang === 'AR') setLang('EN');
    else setLang('FR');
  };

  const t = translations[lang];

  return (
    <div className={`inscription-page ${lang === 'AR' ? 'rtl-content' : ''}`}>
     
      

      
      <header className="hero-header">
        <div className="container">
          <p className="top-title">{lang === 'AR' ? 'انضم إلينا' : lang === 'EN' ? 'JOIN US' : 'REJOIGNEZ-NOUS'}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-subtitle">{t.heroSub}</p>
        </div>
      </header>

      
      <main className="container main-layout">
        <div className="grid-wrapper">
          <div className="form-container">
            <h2>{t.formTitle}</h2>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>{t.labels[0]}</label>
                  <select><option>{lang === 'AR' ? 'اختر' : 'Sélectionner'}</option></select>
                </div>
                <div className="form-group">
                  <label>{t.labels[1]}</label>
                  <select><option>...</option></select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{t.labels[2]}</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>{t.labels[3]}</label>
                  <input type="text" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{t.labels[4]}</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>{t.labels[5]}</label>
                  <input type="text" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{t.labels[6]}</label>
                  <input type="tele" placeholder="+212 6..." />
                </div>
                <div className="form-group">
                  <label>{t.labels[7]}</label>
                  <input type="email" />
                </div>
              </div>

              <button type="submit" className="btn-send">{t.btnSend}</button>
            </form>
          </div>

          <aside className="sidebar-contact">
            <div className="sidebar-card">
              <h3>{lang === 'AR' ? 'اتصال سريع' : 'Contact rapide'}</h3>
              <p>{lang === 'AR' ? 'لديك سؤال؟ اتصل بنا مباشرة.' : 'Une question ? Contactez-nous directement.'}</p>
              
              <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="contact-info-row">
                  <div className="icon-wrapper wa-bg"><FaWhatsapp /></div>
                  <div>
                    <strong>WhatsApp</strong>
                    <span>+212 6 00 00 00 00</span>
                  </div>
                </div>
              </a>

              <a href="https://www.instagram.com/jil.annahda.school" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="contact-info-row">
                  <div className="icon-wrapper ig-bg"><FiInstagram /></div>
                  <div>
                    <strong>Instagram</strong>
                    <span>@annahda.school</span>
                  </div>
                </div>
              </a>

              
              <a href="mailto:contact@annahda.ma" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="contact-info-row">
                  <div className="icon-wrapper mail-bg">
                    <FiMail />
                  </div>
                  <div>
                    <strong>Email</strong>
                    <span>contact@annahda.ma</span>
                  </div>
                </div>
              </a>

            </div>
          </aside>
        </div>
      </main>

      
      
    </div>
  );
};

export default Inscription;