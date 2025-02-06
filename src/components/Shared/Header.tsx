import {NavLink} from "react-router-dom";
import LogoMain from "../../assets/Logo/LogoMain2.png"

export const Header = () => {
    return (
        <div className="w-full fixed top-0 z-10 py-2 px-4 sm:px-8 md:px-12 lg:px-20 bg-black text-white flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <img src={LogoMain} alt="logo" className="w-[60px]"/>
                <h1 className="text-2xl">Buskan</h1>
            </div>
            <nav className="md:flex items-center gap-10 text-xl hidden">
                <NavLink to={"/"}
                         className={(active) => !active ? " text-white" : "text-cyan-700 font-semibold"}>Home</NavLink>
                <NavLink to={"/about"}
                         className={(active) => !active ? " text-white" : "text-cyan-700 font-semibold"}>About</NavLink>
                <NavLink to={"/services"}
                         className={(active) => !active ? " text-white" : "text-cyan-700 font-semibold"}>Services</NavLink>
                <NavLink to={"/contact"}
                         className={(active) => !active ? " text-white" : "text-cyan-700 font-semibold"}>Contact
                    Us</NavLink>
            </nav>
        </div>
    );
};
