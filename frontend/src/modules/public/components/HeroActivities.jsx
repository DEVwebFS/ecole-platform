import React from "react";
import { FaStar, FaArrowRight, FaMusic, FaPencilAlt } from "react-icons/fa";
import "./HeroActivities.css";
import girls from "../../../assets/images/girls.jpeg"
import quran from "../../../assets/images/quran.jpeg"
import terrain from "../../../assets/images/terrain.jpeg"
import cuisine from "../../../assets/images/cuisine.jpeg"

const HeroActivities = () => {
  return (
    <div className="hero-activities">

      <div className="activities-left">

        <div className="activities-badge">
          <FaStar />
          <span>Nos Activités</span>
        </div>

        <h1>
          Apprendre, <br />
          <span>Découvrir,</span> <br />
          S'épanouir !
        </h1>

        <p>
          À ANNAHDA, chaque enfant développe ses talents grâce à des
          activités variées, éducatives et amusantes.
        </p>

        {/* FIXED HERE (was activities-title → WRONG) */}
        <div className="activities-buttons">

          <button className="primary-btn">
            Découvrir nos activités <FaArrowRight />
          </button>

          <button className="secondary-btn">
            Rejoindre l'aventure
          </button>

        </div>

      </div>

      <div className="activities-right">

        <div className="shape shape-blue"></div>
        <div className="shape shape-orange"></div>

        <FaMusic className="doodle doodle1" />
        <FaPencilAlt className="doodle doodle2" />

        <img
          src={girls}
          className="hero-img-activities img1"
          alt="activité éducative"
        />

        <img
          src={quran}
          className="hero-img-activities img2"
          alt="activité artistique"
        />

        <img
          src={terrain}
          className="hero-img-activities img3"
          alt="sport fun"
        />

        <img
          src={cuisine}
          className="hero-img-activities img4"
          alt="atelier culinaire"
        />

      </div>

    </div>
  );
};

export default HeroActivities;