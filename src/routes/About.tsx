import { Helmet } from "react-helmet-async";
import AboutComponent from "../components/About/About";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Buskan</title>
        <meta name="description" content="About the company" />
      </Helmet>
      <div className="h-full">
        <AboutComponent />
      </div>
    </>
  );
};

export default About;
