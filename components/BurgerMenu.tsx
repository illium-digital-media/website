import React, { useState, useEffect, useRef } from "react";
import CloseButton from "./CloseButton";
import NavItem from "./Navigation/NavItem";
import BurgerMenuIcon from "./Icons/BurgerMenuIcon";
import { navigationItems } from "@/data/navigationitems";

const BurgerMenu: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.style.overflow = isNavOpen ? "auto" : "hidden";
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsNavOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="flex items-center lg:justify-between p-3 lg:hidden"
      style={{ transition: "background-color 0.3s ease" }}
    >
      <div
        className={`fixed inset-0 bg-black opacity-80 transition-opacity duration-300 z-9 ${isNavOpen ? 'block' : 'hidden'}`}
        onClick={toggleNav}
      ></div>
      <nav>
        <section className="flex lg:hidden">
          <div className="space-y-2 cursor-pointer" onClick={toggleNav}>
            <BurgerMenuIcon />
          </div>

          <div
            ref={menuRef}
            className={`menu-nav z-10 flex flex-col transition-left duration-300 ease-in-out absolute w-2/4 h-screen top-0 -left-3/4 shadow-lg ${isNavOpen ? "left-0" : ""
              } bg-gradient-to-r from-secondary via-tertiary to-secondary`}

          >
            <div className="top-0 p-3">
              <CloseButton handleClose={toggleNav} />
            </div>
            <ul className="flex flex-col min-h-[250px]">
              {navigationItems.map((item, index) => (
                <NavItem
                  key={index}
                  pageLink={item.pageLink}
                  copy={item.title}
                  handleClick={toggleNav}
                />
              ))}
            </ul>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default BurgerMenu;
