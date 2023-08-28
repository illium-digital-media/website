import Link from "next/link";
import BurgerMenu from "../BurgerMenu";
import NavItem from "./NavItem";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import LogoPlaceholder from "../../assets/logo-placeholder.png";
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
      className={`w-full max-lg:shadow-lg max-lg:fixed z-10 ${navbarVisible ? "fixed shadow-lg bg-primary " : "absolute bg-transparent"}`}
      style={{ transition: "background-color 0.3s ease" }}
    >
      <nav className="flex justify-between m-auto max-w-screen-xl max-xl:px-5">
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
            {navigationItems.map((item, index) => (
              <NavItem
                key={index}
                pageLink={item.pageLink}
                copy={item.title}
                handleClick={() => {}}
              />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
