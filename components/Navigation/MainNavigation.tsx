import Link from "next/link";
import BurgerMenu from "../BurgerMenu";
import NavItem from "./NavItem";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import DarkModeToggle from "./DarkModeToggle";
import { DarkModeContext } from "../DarkModeContext";
import LogoPlaceholder from "../../assets/logo-placeholder.png";


const navItems = [
  { pageLink: "/", title: "Home" },
  { pageLink: "/about", title: "About" },
  { pageLink: "/residential", title: "Residential" },
  { pageLink: "/commercial", title: "Commercial" },
  { pageLink: "/exterior", title: "Exterior" },
  { pageLink: "/contact", title: "Contact" },
];

const MainNavigation: React.FC = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setModalOpen(false);
  };

  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full max-lg:shadow-lg max-lg:fixed z-10 ${
        navbarVisible ? "fixed shadow-lg " : "absolute "
      }  ${darkMode ? "bg-zinc-800" : "bg-white"}`}
      style={{ transition: "background-color 0.3s ease" }}
    >
      <nav className="flex justify-between m-auto max-w-screen-xl max-xl:px-5  max-lg:bg-white">
        <BurgerMenu />
        <div className="py-2">
          <Link href="/">
          <Image
              src={LogoPlaceholder}
              alt="Logo Placeholder"
              className="w-24"
            />
          </Link>
        </div>

        <div className="flex">
          <ul className="menu-list max-lg:hidden menu flex pr-5">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                pageLink={item.pageLink}
                copy={item.title}
                handleClick={() => {}}
              />
            ))}
          </ul>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
