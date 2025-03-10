import { Helmet } from "react-helmet-async";
import ContactComponent from "../components/Contact/ContactComponent";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Contact us for more information." />
      </Helmet>
      <ContactComponent />
    </>
  );
};

export default Contact;
