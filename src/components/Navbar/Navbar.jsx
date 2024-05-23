import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { Link } from "react-scroll";
import { ProductsData } from "../TopProducts/TopProducts"; // Check the import path

const Menu = [
  {
    id: 1,
    name: "Home",
    section: "home",
  },
  {
    id: 2,
    name: "Top Rated",
    section: "top-rated",
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
  const [searchInput, setSearchInput] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchActive, setSearchActive] = useState(false);

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    setSearchActive(inputValue.trim() !== "");
    if (inputValue.trim() !== "") {
      // Filter suggestions based on input value
      const filteredSuggestions = ProductsData.filter((product) =>
        product.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearchSuggestions(filteredSuggestions);
    } else {
      setSearchSuggestions([]);
    }
  };

  const handleSearchSubmit = () => {
    if (searchInput.trim() !== "") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const foundProduct = ProductsData.find(
      (product) => product.title.toLowerCase() === searchInput.toLowerCase()
    );

    if (foundProduct) {
      const element = document.getElementById("top-rated");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      alert("Product not available");
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion.title);
    setSearchActive(false);
    setSearchSuggestions([]);
    handleSearch();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="#"
              className="text-2xl sm:text-3xl flex gap-1 hover:scale-110"
            >
              <img src={Logo} alt="Logo" className="w-10 p-0 h-2/4" />
              Sommy <span className=" text-orange-400">store</span>
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={handleSearchInputChange}
                onKeyPress={handleKeyPress}
                className="w-[150px] sm:w-[200px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 pl-8 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              {!searchInput && (
                <IoMdSearch className="absolute left-3 text-gray-500 text-xl" />
              )}
              {searchActive && (
                <ul className="absolute left-0 right-0 mt-2 w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                  {searchSuggestions.map((suggestion) => (
                    <li
                      key={suggestion.id}
                      className="cursor-pointer hover:bg-primary/20 p-1 rounded"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.section}
                smooth={true}
                duration={500}
                className="inline-block px-4 hover:text-orange-600 duration-200 cursor-pointer"
              >
                {data.name}
              </Link>
            </li>
          ))}
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
