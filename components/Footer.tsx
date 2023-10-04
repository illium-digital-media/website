import Link from "next/link";
import EmailIcon from "../components/Icons/Email";
import PhoneIcon from "../components/Icons/Phone";
import Image from "next/image";
import Logo from "../assets/full-logo.svg";

const Footer = () => {
  return (
    <footer className={`text-gray-300 bg-primary max-xl:px-4`}>
      <div className="max-w-screen-xl m-auto max-sm:text-center">
        <div className="py-10">
          <div className="sm:flex max-sm:pb-5 sm:flex justify-between">
            <div className="max-sm:pb-10 max-sm:flex max-sm:justify-center">
              <Image
                src={Logo}
                alt="Logo Placeholder"
              />
            </div>
            <div className="sm:flex">
              <div className="max-sm:pb-10 sm:pr-20">
                <div className="text-white font-bold pb-2">Links</div>
                <Link href={'/'}>
                  <span className="block hover:text-cyan-400 duration-200 py-2">Home</span>
                </Link>

                <Link href={'/about'}>
                  <span className="block hover:text-cyan-400 duration-200 py-2">About</span>
                </Link>

                <Link href={'/services'}>
                  <span className="block hover:text-cyan-400 duration-200 py-2">Services</span>
                </Link>

                <Link href={'/contact'}>
                  <span className="block hover:text-cyan-400 duration-200 py-2">Contact</span>
                </Link>

              </div>

              <div className="sm:pb-10">
                <div className="text-white font-bold pb-2">Contact</div>
                <div className="">  {/* This centers the <ul> within its parent */}
                  <ul>
                    <li className="py-2 flex items-center max-sm:justify-center sm:mr-3">
                      <div className="flex">
                        <div className="pr-3 text-orange-600"><PhoneIcon /></div>
                        +44 7415 160 742
                      </div>
                    </li>
                    <li className="py-2 flex items-center max-sm:justify-center sm:mr-3">
                      <div className="flex">
                        <div className="pr-3 text-orange-600"><EmailIcon /></div>
                        illiumdigitalmedia@gmail.com
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
        <hr className="bg-gradient-to-l from-transparent via-cyan-400 to-transparent h-px border-t-0 border-transparent m-auto" />
        <div className="p-2 text-center text-sm">
          &copy; 2023 Illium Digital Media. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
