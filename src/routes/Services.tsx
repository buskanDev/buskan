import { Helmet } from "react-helmet-async";
import ServicesComponent from "../components/Services/ServicesComponent";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Buskan | Services</title>
        <meta name="description" content="Our services at My Website" />
      </Helmet>
      <ServicesComponent />
    </>
  );
};

export default Services;
