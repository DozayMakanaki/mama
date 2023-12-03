import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Menu = [
  {
    id: 1,
    name: "Home",
    section: "home",
  },
  {
    id: 2,
    name: "Top Rated",
    section: "services",
  },
  {
    id: 3,
    name: "Male",
    section: "male",
  },
  {
    id: 4,
    name: "Female",
    section: "female",
  },
  {
    id: 5,
    name: "Premium",
    section: "premium",
  },
];

const DropdownLinks = [
  {
    id: 6,
    name: "Trending Products",
    section: "trending",
  },
  {
    id: 7,
    name: "Best Selling",
    section: "selling",
  },
  {
    id: 8,
    name: "Top Rated",
    section: "top-rated",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="#"
              className="text-2xl sm:text-3xl flex gap-1 hover:scale-110"
            >
              <img src={Logo} alt="Logo" className="w-10 p-0 h-2/4" />
              Sommy <span className=" text-orange-600">store</span>
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <button>
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </button>
            </div>

            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-gray-600 drop-shadow-sm cursor-pointer hover:text-orange-600 hover:scale-110" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              {/* Use Link from react-scroll */}
              <Link
                to={data.section}
                smooth={true}
                snap={true}
                duration={500}
                className="inline-block px-4 hover:text-orange-600 duration-200 cursor-pointer"
              >
                {data.name}
              </Link>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center gap-[2px] py-2 hover:text-orange-600"
            >
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    {/* Use Link from react-scroll for dropdown links */}
                    <Link
                      to={data.section}
                      smooth={true}
                      duration={500}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 hover:text-orange-400"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
