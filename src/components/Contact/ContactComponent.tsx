import { FaPhone } from "react-icons/fa";

const ContactComponent = () => {
  return (
    <div className="px-4 pt-10 min-h-screen sm:px-6 md:px-12 lg:px-24 backdrop-blur text-white">
      <h1 className="text-3xl md:text-4xl lg:text-5xl">Contact Us</h1>
      <div className="mt-4 text-lg md:text-xl lg:text-2xl">
        <span className="mt-4">
            Your presence has been a blessing to us.
            We're always here solve your problems.
        </span>
        <p className="mt-4">
          Feel free to reach out to us for more information.
        </p>
        <form className="flex flex-col items-start gap-3 flex-wrap w-full mt-4 m-auto">
          <div className="flex gap-2 flex-wrap w-full">
            <input
              type="text"
              placeholder="Your Name"
              className=" mt-4 p-2 rounded-md outline-none text-cyan-900 focus:ring-2 focus:ring-cyan-700 flex-1"
            />
            <input
              type="email"
              placeholder="Your Email"
              className=" mt-4 p-2 rounded-md outline-none text-cyan-900 focus:ring-2 focus:ring-cyan-700 flex-1"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className=" mt-4 p-2 rounded-md outline-none text-cyan-900 focus:ring-2 focus:ring-cyan-700 flex-1"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className=" mt-4 p-2 rounded-md outline-none text-cyan-900 focus:ring-2 focus:ring-cyan-700 resize-none h-[200px] w-full"
          ></textarea>
          <button className="bg-cyan-700 text-white py-2 px-4 rounded-md mt-4 self-start hover:bg-cyan-800 duration-100">
            Submit
          </button>
          <p className="text-center mt-4">
            We will send you a confirmation email once we have received your
            request.
          </p>
        </form>
        <div className="flex items-center justify-center mt-4 text-lg md:text-xl lg:text-2xl">
          <button className="bg-cyan-700 text-white py-2 px-4 rounded-md">
            Contact Us
          </button>
          <a href="#" className="text-cyan-300 ml-4">
            Learn More
          </a>
          <div className="flex gap-2 ml-4">
            <FaPhone size={20} />
            <p className="text-cyan-300"> +1-123-456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
