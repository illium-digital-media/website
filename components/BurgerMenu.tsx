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
    document.body.style.overflow = isNavOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto"; // Make sure to reset overflow when component unmounts
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


// import React, { useState, useEffect, useRef } from "react";
// import CloseButton from "./CloseButton";
// import NavItem from "./Navigation/NavItem";
// import BurgerMenuIcon from "./Icons/BurgerMenuIcon";
// import { navigationItems } from "@/data/navigationitems";

// const BurgerMenu: React.FC = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//     document.body.style.overflow = isNavOpen ? "auto" : "hidden";
//   };

//   const handleClickOutside = (event: MouseEvent) => {
//     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//       setIsNavOpen(false);
//       document.body.style.overflow = "auto";
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div
//       className="overflow-x-auto flex items-center lg:justify-between p-3 lg:hidden"
//       style={{ transition: "background-color 0.3s ease" }}
//     >
//       <div
//         className={`fixed inset-0 bg-black opacity-80 transition-opacity duration-300 z-9 ${isNavOpen ? 'block' : 'hidden'}`}
//         onClick={toggleNav}
//       />
//       <nav>
//         <section className="flex lg:hidden">
//           <div className="space-y-2 cursor-pointer" onClick={toggleNav}>
//             <BurgerMenuIcon />
//           </div>

//           <div
//             ref={menuRef}
//             className={`z-10 flex flex-col transition-left duration-300 ease-in-out absolute w-2/4 h-screen top-0 shadow-lg ${isNavOpen ? "right-0" : "-right-3/4"
//               } bg-gradient-to-r from-secondary via-tertiary to-secondary`}

//           >
//             <CloseButton handleClose={toggleNav} />
//             <div className="flex flex-col">
//               {navigationItems.map((item, index) => (
//                 <NavItem
//                   key={index}
//                   pageLink={item.pageLink}
//                   copy={item.title}
//                   handleClick={toggleNav}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//       </nav>
//     </div>
//   );
// };

// export default BurgerMenu;
