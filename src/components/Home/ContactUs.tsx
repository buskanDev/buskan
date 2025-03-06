import { FaAddressCard } from "react-icons/fa";
import { ContactUsForm } from "./ContactUsForm.tsx";

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
            <strong>Address:</strong>
            123, Lorem Ipsum Dolor Sit Amet, 12345
            <br />
            <strong>Email:</strong>
            <a
              href="mailto:
            contact@example.com"
              className="text-cyan-500 hover:text-cyan-600 duration-150 mx-1"
            >
              Mail Support
            </a>
            <br />
            <strong>Phone:</strong>
            <a
              href="tel:
            +1234567890"
              className="text-cyan-500 hover:text-cyan-600 duration-150 mx-1"
            >
              Call Us
            </a>
            <br />
            <strong>Hours:</strong> Mon-Fri: 9:00 AM - 5:00 PM, Sat: 9:00 AM -
            6:00 PM, Sun: Closed
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};
