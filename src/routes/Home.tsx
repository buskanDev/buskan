import { HeroSection } from "../components/Home/HeroSection.tsx";
import { OurApproach } from "../components/Home/OurApproach.tsx";
import { OurClients } from "../components/Home/OurClients.tsx";
import { ContactUs } from "../components/Home/ContactUs.tsx";
import { Helmet } from "react-helmet-async";
export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Buskan | Home</title>
        <meta name="description" content="Our company description goes here." />
      </Helmet>
      <div className="h-full">
        <HeroSection />
        <OurApproach />
        <OurClients />
        <ContactUs />
      </div>
    </>
  );
};
