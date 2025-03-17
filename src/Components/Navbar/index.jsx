import React, { useState } from 'react';
import { BiSolidSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";

const Navlinks = [
  { id: "1", name: 'HOME', link: '/#home' },
  { id: "4", name: 'ABOUT', link: '/#about' },
  { id: "2", name: 'CARS', link: '/#cars' },
  { id: "5", name: 'BOOKING', link: '/#booking' },
  { id: "3", name: 'LOCATIONS', link: '#locations', dropdown: true },
  
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={`shadow-md ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <h1 className="text-3xl font-semibold font-serif hover:text-primary transition-colors duration-300">
              Car Rental
            </h1>
          </div>

          {/* Navigation Links with Dark Mode Toggle */}
          <div className="hidden md:flex items-center gap-8 font-serif">
            <ul className="flex items-center gap-8">
              {Navlinks.map((link) => (
                <li key={link.id} className="py-4 relative">
                  <a
                    className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium"
                    href={link.link}
                    onClick={link.dropdown ? toggleDropdown : null}>
                    {link.name}
                  </a>

                  {/* Advanced Dropdown for LOCATIONS */}
                  {link.dropdown && dropdownOpen && (
                    <div className={`absolute left-0 w-48 shadow-xl mt-2 rounded-lg transition-all duration-300 ease-in-out 
                      ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
                      <ul>
                        <li className={`px-4 py-2 hover:bg-primary hover:text-white transition-all duration-300 
                          ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-blue-500'}`}>
                          <a href="#Karachi">Karachi</a>
                        </li>
                        <li className={`px-4 py-2 hover:bg-primary hover:text-white transition-all duration-300 
                          ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-blue-500'}`}>
                          <a href="#Islamabad">Islamabad</a>
                        </li>
                        <li className={`px-4 py-2 hover:bg-primary hover:text-white transition-all duration-300 
                          ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-blue-500'}`}>
                          <a href="#Lahore">Lahore</a>
                        </li>
                        <li className={`px-4 py-2 hover:bg-primary hover:text-white transition-all duration-300 
                          ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-blue-500'}`}>
                          <a href="#Abbottabad">Abbottabad</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Dark Mode Toggle */}
            <div className="flex flex-col items-center">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-gray-400 hover:border-primary transition-all"
                aria-label="Toggle Dark Mode">
                {darkMode ? (<BiSolidSun className="text-2xl text-yellow-400" />) : (<FaMoon className="text-2xl text-gray-600" />)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
