import logo from "../assets/AMR_logo.svg";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className=" py-6 flex justify-between items-center relative">
      <img className="w-14 sm:w-20" src={logo} alt="amr_logo" />
      <ul className="flex gap-10 text-white max-sm:hidden">
        <li>
          <a className="hover:text-gray-600 duration-150" href="#about">About</a>
        </li>
        <li>
          <a className="hover:text-gray-600 duration-150" href="#experience">Experience</a>
        </li>
        <li>
          <a className="hover:text-gray-600 duration-150" href="#project">Projects</a>
        </li>
        <li>
          <a className="hover:text-gray-600 duration-150" href="#contact">Contact Us</a>
        </li>
      </ul>
      <div className="flex sm:hidden">
        <MdMenu
          cursor="pointer"
          size={30}
          color="white"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
      </div>

      {toggleMenu && (
        <div className="absolute sm:hidden top-[90px] left-0 w-full  bg-black bg-opacity-95 shadow-xl shadow-slate-900 rounded-2xl flex flex-col items-left p-10 justify-center z-50">
          <ul className="flex flex-col gap-8 text-white text-lg">
            <li>
              <a
                className="hover:text-gray-600 duration-150"
                href="#about"
                onClick={() => setToggleMenu(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-600 duration-150"
                href="#project"
                onClick={() => setToggleMenu(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-600 duration-150"
                href="#experience"
                onClick={() => setToggleMenu(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-600 duration-150"
                href="#contact"
                onClick={() => setToggleMenu(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
