import { Link } from "react-router-dom";

const ServicesComponent = () => {
  return (
    <div className="px-4 pt-10 sm:px-6 md:px-12 lg:px-24 text-white">
      <div className="backdrop-filter w-full backdrop-blur bg-opacity-30 bg-gray-800 p-4 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-3">Services</h1>
        <div className="mt-4 text-lg md:text-xl lg:text-2xl">
          <span className="mt-4">We work on the following services:</span>
          <ul className="list-disc ml-8 mt-4">
            <li>Static Website</li>
            <li>Dynamic Website</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Quality Assurance</li>
            <li>Project Management</li>
          </ul>
          <p className="mt-4">
            We are always looking for talented individuals to join our team!
            Feel free to reach out to us for more information.
          </p>
        </div>
        <form className="flex flex-col mt-4 m-auto max-w-[600px]">
          <h1 className="text-center">Book an appointment</h1>
          <input
            type="email"
            placeholder="Your Email"
            className=" mt-4 p-2 rounded-md outline-none text-cyan-900 focus:ring-2 focus:ring-cyan-700"
          />
          <button className="bg-cyan-700 text-white py-2 px-4 rounded-md mt-4 self-start hover:bg-cyan-800 duration-100"> 
            Submit
          </button>
          <p className="text-center mt-4">
            We will send you a confirmation email once we have received your request.
          </p>
        </form>
        <div className="flex items-center justify-center mt-4 text-lg md:text-xl lg:text-2xl">
          <Link to={"/contact"} className="bg-cyan-700 text-white py-2 px-4 rounded-md">
            Contact Us
          </Link>
          <Link to={'/about'} className="text-cyan-300 ml-4">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
