import { FaArrowRight } from "react-icons/fa";

const ActivityCard = ({ activity, onClick }) => {
  return (
    <>
    <style>
        {
        `
        .activity-card {
  background: white;
  border-radius: 32px;
  padding: 2rem 1.5rem 1.8rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(46, 47, 228, 0.08);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.activity-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background: linear-gradient(90deg, #2F2FE4, #E87F24);
  z-index: -1;
  transition: height 0.3s ease;
}

.activity-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 40px -12px rgba(47, 47, 228, 0.2);
}

.activity-card:hover::before {
  height: 100%;
  opacity: 0.03;
}

.activity-icon {
  width: 90px;
  height: 90px;
  background: #2F2FE4; /* fallback, mais chaque carte a sa couleur via style inline */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.2rem;
  font-size: 2.8rem;
  color: white;
  box-shadow: 0 12px 20px -8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
}

.activity-card:hover .activity-icon {
  transform: scale(1.05);
}

.activity-card h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.75rem 0 0.5rem;
  color: #1e2a3e;
}

.activity-card p {
  font-size: 0.95rem;
  color: #5a6e7c;
  line-height: 1.5;
  margin-bottom: 1.2rem;
}

.activity-card button {
  background: transparent;
  border: none;
  color: #2F2FE4;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 40px;
  transition: all 0.2s;
  font-weight: 600;
}

.activity-card button svg {
  transition: transform 0.2s;
}

.activity-card:hover button {
  background: #FFFBF1;
  color: #E87F24;
  gap: 0.8rem;
}

.activity-card:hover button svg {
  transform: translateX(4px);
}
        `
        }
    </style>
   
    <div
      className="activity-card"
      onClick={(e) => {
        e.stopPropagation();
        onClick(activity);
      }}
    >
      <div
        className="activity-icon"
        style={{ background: activity.bg }}
      >
        {activity.icon}
      </div>

      <h3>{activity.title}</h3>

      <p>{activity.desc}</p>

      <button>
        <FaArrowRight />
      </button>
    </div>
     </>
  );
};

export default ActivityCard;