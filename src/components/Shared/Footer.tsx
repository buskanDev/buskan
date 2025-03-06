import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full backdrop-blur mt-4 text-white text-center">
      <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 py-6">
        <a href="#" className="text-white">
          <FaGithub size={30} />
        </a>
        <a href="#" className="text-white">
          <FaLinkedin size={30} />
        </a>
        <a href="#" className="text-white">
          <FaInstagram size={30} />
        </a>
      </div>
      <div className="bg-black text-white py-2">
        <p>&copy; 2025 Buskan | all right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
