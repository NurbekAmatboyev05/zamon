import React, { useState } from "react";
import { FaInstagram, FaTelegramPlane, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/zamon.svg";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const scrollLinks = [
    { to: "home", label: t("Home") },
    { to: "about", label: t("About") },
    { to: "tours", label: t("Tours") },
    { to: "contacts", label: t("Contacts") },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="bg-[#1db5ba] shadow-md p-4 fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center relative">
        <div className="z-10">
          <img src={logo} alt="logo" className="w-[140px]" />
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 font-medium text-white">
          {scrollLinks.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={700}
                offset={-70}
                className="cursor-pointer hover:text-gray-200 transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Lang & social */}
        <div className="hidden md:flex items-center space-x-4 text-white text-sm z-10">
          <button onClick={() => changeLanguage('uz')} className="hover:text-gray-900 transition">UZ</button>
          <button onClick={() => changeLanguage('en')} className="hover:text-gray-900 transition">ENG</button>
          <button onClick={() => changeLanguage('ru')} className="hover:text-gray-900 transition">RU</button>
          <a className="hover:text-gray-200" href="https://www.instagram.com/accounts/login/?next=%2Fzamontour%2F&source=omni_redirect" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={18} />
          </a>
          <a className="hover:text-gray-200" href="https://t.me/zamonbiznestour" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane size={18} />
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-[#179aa0] rounded-lg p-4 space-y-4 text-white text-center">
          <ul className="space-y-2 text-center font-medium">
            {scrollLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={700}
                  offset={-70}
                  className="cursor-pointer hover:text-gray-200 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center space-x-4 pt-2">
            <button onClick={() => changeLanguage('uz')} className="hover:text-gray-200">UZ</button>
            <button onClick={() => changeLanguage('en')} className="hover:text-gray-200">ENG</button>
            <button onClick={() => changeLanguage('ru')} className="hover:text-gray-200">RU</button>
            <a className="hover:text-gray-200" href="https://www.instagram.com/accounts/login/?next=%2Fzamontour%2F&source=omni_redirect" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
            <a className="hover:text-gray-200" href="https://t.me/zamonbiznestour" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
