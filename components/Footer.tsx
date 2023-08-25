import Link from "next/link";
import EmailIcon from "../components/Icons/Email";
import PhoneIcon from "../components/Icons/Phone";
import ContactItem from "./ContactItem";
import Image from "next/image";
import LogoPlaceholder from "../assets/logo-placeholder.png";

const Footer = () => {
  return (
    <footer className={`text-gray-300 bg-black max-xl:px-4`}>
      <div className="max-w-screen-xl m-auto">
        <div className="py-10">
          <div className="sm:flex max-sm:pb-5 flex justify-between">
            <div>
              <Image
                src={LogoPlaceholder}
                alt="Logo Placeholder"
                className="w-24"
              />
            </div>

            <div className="flex">
              <div className="pr-20">
                <div className="text-white font-bold pb-4">Links</div>
                <ul>
                  <Link href={'/'}><li className="hover:text-cyan-400 duration-200 pb-2">Home</li></Link>
                  <Link href={'/about'}><li className="hover:text-cyan-400 duration-200 pb-2">About</li></Link>
                  <Link href={'/services'}><li className="hover:text-cyan-400 duration-200 pb-2">Services</li></Link>
                  <Link href={'/contact'}><li className="hover:text-cyan-400 duration-200">Contact</li></Link>
                </ul>
              </div>

              <div className="">
                <div className="text-white font-bold pb-4">Contact</div>
                <ul>

                  <li className="pb-2">
                    <div className="flex overflow-hidden mr-3">
                      <div className="pr-3 text-cyan-400"><PhoneIcon /></div>
                      +44 123 456 789
                    </div>
                  </li>
                  <li className="">
                    <div className="flex overflow-hidden mr-3">
                      <div className="pr-3 text-cyan-400"><EmailIcon /></div>
                      example@gmail.com
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <hr />
        <div className="">
          <div className="p-2 flex justify-between text-sm">
            <div>
              <p className="">
                &copy; 2023 Your Website. All Rights Reserved.
              </p>
            </div>
            <div className="flex">
              <Link href={'/'}><p className="pr-8 hover:text-cyan-400 duration-200">Terms of Use</p></Link>
              <Link href={'/'}><p className="hover:text-cyan-400 duration-200">Privacy Policy</p></Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
