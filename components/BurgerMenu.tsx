import React, { useState, useEffect, useRef } from "react";
import CloseButton from "./CloseButton";
import NavItem from "./Navigation/NavItem";
import BurgerMenuIcon from "./Icons/BurgerMenuIcon";
import { navigationItems } from "@/data/navigationitems";
import Link from "next/link";
import Image from "next/image";
import Logo from '../assets/full-logo.svg'

const BurgerMenu: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleNav = () => {
    setIsNavOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) { // Adjust the breakpoint as needed
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isNavOpen]);

  return (
    <div className="flex items-center sm:justify-between sm:hidden">
      <nav>
        <section className="flex">
          <div onClick={toggleNav}>
            <BurgerMenuIcon />
          </div>

          <div
            ref={menuRef}
            className={`z-10 flex flex-col transition-opacity duration-500 ease-in-out fixed w-full h-screen top-0 right-0 bg-gradient-to-r from-secondary via-tertiary to-secondary ${isNavOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          >
            <div className="flex px-5 py-2 justify-between">
              <Link href="/">
                <Image src={Logo} alt="Logo Placeholder" />
              </Link>
              <CloseButton handleClose={toggleNav} />
            </div>

            <div className="flex flex-col pt-10">
              {navigationItems.map((item, index) => (
                <NavItem
                  key={index}
                  pageLink={item.pageLink}
                  copy={item.title}
                  handleClick={toggleNav}
                />
              ))}
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default BurgerMenu;
