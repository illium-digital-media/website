import Link from "next/link";
import BurgerMenu from "../BurgerMenu";
import NavItem from "./NavItem";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../assets/full-logo.svg";
import { navigationItems } from "@/data/navigationitems";

const MainNavigation: React.FC = () => {
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
      className={`w-full shadow-lg fixed z-10 ${navbarVisible ? "fixed shadow-lg bg-gradient-to-r from-primary via-secondary to-primary" : "absolute bg-transparent"}`}
      style={{ transition: "background-color 0.3s ease" }}
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
                handleClick={() => {}}
              />
            ))}
          </div>
        </div>
        <BurgerMenu />

      </nav>
    </header>
  );
};

export default MainNavigation;
