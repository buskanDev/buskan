import {HeroSection} from "../components/Home/HeroSection.tsx";
import {OurApproach} from "../components/Home/OurApproach.tsx";
import {OurClients} from "../components/Home/OurClients.tsx";
import {ContactUs} from "../components/Home/ContactUs.tsx";

export const Home = () => {
    return <div className="h-full">
        <HeroSection/>
        <OurApproach/>
        <OurClients/>
        <ContactUs/>
    </div>
}
