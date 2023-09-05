import Link from "next/link";
import BurgerMenu from "../BurgerMenu";
import NavItem from "./NavItem";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../assets/full-logo.svg";
import { navigationItems } from "@/data/navigationitems";

const TransparentNavbar: React.FC = () => {
  return (
    <header className={`w-full shadow-lg z-10 absolute bg-transparent`} >
      <nav className="flex justify-between m-auto max-w-screen-xl px-5">
        <div className="py-2 text-white">
          <Link href="/">
            <Image src={Logo} alt="Logo Placeholder" />
          </Link>
        </div>

        <div className="flex items-center">
          <div className="max-sm:hidden menu flex items-center h-full">
            {navigationItems.map((item, index) => (
              <NavItem
                key={index}
                pageLink={item.pageLink}
                copy={item.title}
                handleClick={() => { }}
              />
            ))}
          </div>
        </div>

        <BurgerMenu />
      </nav>
    </header>
  );
};

const BlueNavbar: React.FC = () => {
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

  const opacity = navbarVisible ? 1 : 0; 

  return (
    <header
      className="w-full shadow-lg fixed z-10 shadow-lg bg-gradient-to-r from-primary via-secondary to-primary"
      style={{
        opacity, 
        transition: "opacity 0.5s ease-in-out", 
      }}
    >
      <nav className="flex justify-between m-auto max-w-screen-xl px-5">
        <div className="py-2 text-white">
          <Link href="/">
            <Image src={Logo} alt="Logo Placeholder" />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="max-sm:hidden menu flex items-center h-full">
            {navigationItems.map((item, index) => (
              <NavItem
                key={index}
                pageLink={item.pageLink}
                copy={item.title}
                handleClick={() => { }}
              />
            ))}
          </div>
        </div>
        <BurgerMenu />
      </nav>
    </header>
  );
};


const MainNavigation: React.FC = () => {
  return (
    <>
      <BlueNavbar />
      <TransparentNavbar />
    </>

  );
};

export default MainNavigation;
