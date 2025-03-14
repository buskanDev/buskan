import { FaAddressCard } from "react-icons/fa";
import { ContactUsForm } from "./ContactUsForm.tsx";
import { MAIL_ID, PHONE_NO } from "../../utils/constants/contact.ts";

export const ContactUs = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 w-full backdrop-blur mt-4 md:mt-12 text-white py-4">
      <h1 className="text-3xl md:text-4xl lg:text-7xl text-center">
        Contact Us
      </h1>
      <div className="flex flex-1 flex-col-reverse md:flex-row justify-center gap-4 md:gap-8 mt-4 md:mt-8">
        <ContactUsForm />
        <div className="flex-1 flex p-3 flex-col gap-3">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            <FaAddressCard />
            Reach Us ...
          </h1>
          <div className="text-lg md:text-xl lg:text-2xl">
            <strong>Address:</strong> 108,Uttar jitpur, Ravindra pally, Alipuduar
            , Alipurduar, West Bengal, India - 726123
            <br />
            <strong>Email:</strong>
            <a
              href={`mailto:${MAIL_ID}`}
              className="text-cyan-500 hover:text-cyan-600 duration-150 mx-1"
            >
              Mail Support
            </a>
            <br />
            <strong>Phone:</strong>
            <a
              href={`tel:${PHONE_NO}`}
              className="text-cyan-500 hover:text-cyan-600 duration-150 mx-1"
            >
              Call Us
            </a>
            <br />
            <strong>Contact Hours:</strong> Mon-Fri: 9:00 AM - 5:00 PM, Sat: 9:00 AM -
            6:00 PM, Sun: Closed
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};
