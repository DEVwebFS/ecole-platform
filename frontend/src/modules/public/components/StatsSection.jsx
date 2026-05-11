import {
  FaUsers,
  FaSchool,
  FaSmile,
  FaAward,
} from "react-icons/fa";

const StatsSection = () => {
  return (
    <div className="stats-section">

      <div className="stat-card">
        <FaSchool />
        <h2>+50</h2>
        <p>Activités / an</p>
      </div>

      <div className="stat-card">
        <FaUsers />
        <h2>+1200</h2>
        <p>Élèves participants</p>
      </div>

      <div className="stat-card">
        <FaSmile />
        <h2>98%</h2>
        <p>Satisfaction parents</p>
      </div>

      <div className="stat-card">
        <FaAward />
        <h2>25</h2>
        <p>Ans d’expérience</p>
      </div>
    </div>
  );
};

export default StatsSection;