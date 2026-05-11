
import CTASection from "../components/CTASection";
import HeroSection from "../components/HeroSection";
import HorairesSection from "../components/HorairesSection";
import ValuesSection from "../components/ValuesSection";
import WhyChooseUs from "../components/WhyChooseUs";


export default function Accueil(){
    return(
        <div>
            <HeroSection/>
            <ValuesSection/>
            <WhyChooseUs/>
            <HorairesSection/>
            <CTASection/>

        </div>
    )
}