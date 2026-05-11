import ActivitiesGrid from "../components/ActivitiesGrid";
import CTASection from "../components/CTASection";
import HeroActivities from "../components/HeroActivities";
import MomentsGallery from "../components/MomentsGallery";
import StatsSection from "../components/StatsSection";


const Activities = () => {
  return (
    <div className="activities-page">
      <HeroActivities />
      <ActivitiesGrid />
      <MomentsGallery />
      <CTASection />
    </div>
  );
};

export default Activities;