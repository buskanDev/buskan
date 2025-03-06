import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="fixed top-0 right-0 h-screen w-screen backdrop-blur-sm z-20 bg-black/20 md:hidden">
      <div className="flex flex-col gap-10 items-start absolute py-20 w-[80%] sm:w-[70%] h-full bg-black/70 p-10">
        <Link to={"/"} className="text-2xl bg-cyan-800/50 rounded hover:bg-cyan-800 px-3 py-1 w-full">
          Home
        </Link>
        <Link to={"/about"} className="text-2xl bg-cyan-800/50 rounded hover:bg-cyan-800 px-3 py-1 w-full">
          About
        </Link>
        <Link to={"/services"} className="text-2xl bg-cyan-800/50 rounded hover:bg-cyan-800 px-3 py-1 w-full">
          Services
        </Link>
        <Link to={"/contact"} className="text-2xl bg-cyan-800/50 rounded hover:bg-cyan-800 px-3 py-1 w-full">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
