import Link from "next/link";
import EmailIcon from "../components/Icons/Email";
import PhoneIcon from "../components/Icons/Phone";
import Image from "next/image";
import LogoPlaceholder from "../assets/logo-placeholder.png";

const Footer = () => {
  return (
    <footer className={`text-gray-300 bg-primary max-xl:px-4`}>
      <div className="max-w-screen-xl m-auto max-sm:text-center">
        <div className="py-10">
          <div className="sm:flex max-sm:pb-5 sm:flex justify-between">
            <div className="max-sm:pb-10 max-sm:flex max-sm:justify-center">
              <Image
                src={LogoPlaceholder}
                alt="Logo Placeholder"
                className="w-24"
              />
            </div>
            <div className="sm:flex">
              <div className="max-sm:pb-10 sm:pr-20">
                <div className="text-white font-bold pb-4">Links</div>
                <ul>
                  <Link href={'/'}><li className="hover:text-cyan-400 duration-200 pb-2">Home</li></Link>
                  <Link href={'/about'}><li className="hover:text-cyan-400 duration-200 pb-2">About</li></Link>
                  <Link href={'/services'}><li className="hover:text-cyan-400 duration-200 pb-2">Services</li></Link>
                  <Link href={'/contact'}><li className="hover:text-cyan-400 duration-200">Contact</li></Link>
                </ul>
              </div>

              <div className="sm:pb-10">
                <div className="text-white font-bold pb-4">Contact</div>
                <div className="">  {/* This centers the <ul> within its parent */}
                  <ul>
                    <li className="pb-2 flex items-center max-sm:justify-center sm:mr-3">
                      <div className="flex">
                        <div className="pr-3 text-orange-400"><PhoneIcon /></div>
                        +44 123 456 789
                      </div>
                    </li>
                    <li className="flex items-center max-sm:justify-center sm:mr-3">
                      <div className="flex">
                        <div className="pr-3 text-orange-400"><EmailIcon /></div>
                        enquiries@illiumdigitalmedia.com
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
