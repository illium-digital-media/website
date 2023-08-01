import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";
import { useRouter } from "next/router";
import Example1 from "/assets/example-1.png";
import Example2 from "/assets/example-2.png";
import Example3 from "/assets/example-3.png";
import { StaticImageData } from "next/image";
import Section from "@/components/Section";
import PhotoGallery from "./PhotoGallery";
import Link from "next/link";
import FacebookIcon from "@/components/Icons/Facebook";
import InstagramIcon from "@/components/Icons/Instagram";
import TwitterIcon from "@/components/Icons/Twitter";
import YouTubeIcon from "@/components/Icons/YouTube";
import React, { useContext } from "react";
import { DarkModeContext } from "../components/DarkModeContext";

interface ServiceData {
  title: string;
  paragraph: string[];
  images: string[] | StaticImageData[];
}

interface ServicesData {
  [id: string]: ServiceData;
}

const servicesData: ServicesData = {
  commercial: {
    title: "Commercial Painting",
    paragraph: [
      "No commercial job is too big or too small! We offer professional commercial painting services to enhance the appearance and protection of your business property.",
      "Our experienced team of commercial painters is skilled in handling various commercial projects, from office buildings to retail spaces and more.",
      "We use high-quality paints and advanced techniques to deliver exceptional results that meet the specific needs of your commercial property.",
      "With our commercial painting services, you can create a positive and lasting impression on your customers and clients.",
      "We work with businesses across different industries, and we are committed to delivering top-notch painting solutions that exceed your expectations.",
    ],
    images: [Example1, Example2, Example3],
  },
  epoxy: {
    title: "Epoxy Coating",
    paragraph: [
      "Epoxy and polyurethane are great for protecting your floor against stains, damage, chemicals, oils, and wear.",
      "We provide high-quality epoxy coating services for both residential and commercial properties.",
      "Our epoxy coatings are durable, long-lasting, and available in a wide range of colors and finishes.",
      "Whether you want to protect your garage floor, industrial space, or retail area, our epoxy coatings will enhance the durability and aesthetics of the surface.",
      "Our team of professionals will prepare the surface properly and apply the epoxy coating with precision to ensure a seamless and attractive finish.",
    ],
    images: [Example1, Example2, Example3],
  },
  interior: {
    title: "Interior Painting",
    paragraph: [
      "Transform your living spaces into elegant and inviting sanctuaries with our exceptional interior painting services. At [Company Name], we take immense pride in our meticulous attention to detail and passion for delivering unparalleled results. Our team of skilled painters is dedicated to enhancing the beauty and ambiance of your home, providing you with a stunning space that reflects your unique style and personality.",
      "Whether you're looking to revamp a single room or give your entire home a fresh new look, we've got you covered. Our interior painting experts possess a wealth of experience and knowledge, ensuring that every stroke of the brush is executed with precision and finesse. From classic to contemporary, our talented team can bring any design vision to life, creating a space that feels warm, inviting, and effortlessly chic.",
      "We understand that your home is your sanctuary, and that's why we go the extra mile to treat it with the utmost care and respect. Before commencing any painting project, our professional team will take the time to meticulously prepare your walls and surfaces to ensure a flawless and long-lasting finish. We use only the highest quality paints and materials, so you can rest assured that your investment will stand the test of time.",
      "What truly sets our interior painting services apart is our commitment to customer satisfaction. We believe in clear communication and collaborative design, working closely with you to understand your preferences and tailor our services to meet your specific needs. Our goal is to exceed your expectations and provide you with an interior that leaves a lasting impression on both you and your guests.",
      "Let us bring your dream interior to life! Whether you're looking to create a cozy bedroom, a stylish living room, or a vibrant kitchen, our interior painting services will elevate your space to new heights. Experience the transformative power of color and design with [Company Name], your trusted partner in painting and decorating. Get in touch with us today to schedule a consultation and take the first step towards a beautiful, inspiring home.",
    ],

    images: [Example1, Example2, Example3],
  },
  exterior: {
    title: "Exterior Painting",
    paragraph: [
      "It is very important to regularly maintain the exterior of your property by properly prepping and repainting around every 5-7 years.",
      "Our exterior painting services will protect and beautify your property, increasing its curb appeal and value.",
      "We use weather-resistant paints that can withstand harsh outdoor conditions, ensuring that your property looks fresh and vibrant for years to come.",
      "Our experienced team of painters will carefully inspect the exterior of your property and address any surface issues before starting the painting process.",
      "We take pride in delivering exceptional exterior painting results that enhance the overall aesthetics of your home or business.",
      "Whether you need to repaint the entire exterior or focus on specific areas, we are here to provide reliable and efficient painting solutions.",
    ],
    images: [Example1, Example2, Example3],
  },
};

const socialMediaLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/",
    icon: <FacebookIcon />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/",
    icon: <InstagramIcon />,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/",
    icon: <TwitterIcon />,
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/",
    icon: <YouTubeIcon />,
  },
];

const ServicePage: React.FC = () => {
  const router = useRouter();
  const serviceId = router.query.service;
  const serviceData = servicesData[serviceId as keyof ServicesData];
  const { darkMode, setDarkMode } = useContext(DarkModeContext);


  return (
    <>
      <Head>
        <title>Services</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      {serviceData && (
        <>
          <CommonLanding heading={serviceData.title ?? "Services"} />
          <Section index={0}>
            <div className="sm:flex">
              <div className="pb-6 sm:w-3/4 pr-5">
                <h3 className="font-bold text-primary text-2xl max-sm:text-xl">
                  Service Detail
                </h3>
                <h4 className="font-bold text-5xl max-sm:text-3xl pb-2">{serviceData.title}</h4>
                <div className="pb-5">
                  {serviceData.paragraph.map((item, index) => (
                    <p className="pb-4" key={index}>
                      {item}
                    </p>
                  ))}
                </div>
                <PhotoGallery images={serviceData.images} />
              </div>
   
              <div className="sm:w-1/4">
                <div className={`p-5 shadow-lg rounded-lg mb-10 ${darkMode ? "bg-zinc-700" : "bg-white"}`} style={{ transition: "background-color 0.3s ease" }} >
                  <p className="pb-5 font-bold text-primary text-3xl">
                    Service List
                  </p>
                  <ul>
                    {Object.keys(servicesData).map((serviceKey) => (
                      <li className="hover:text-primary">
                        <Link href={serviceKey}>
                          {servicesData[serviceKey].title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`p-5 shadow-lg rounded-lg ${darkMode ? "bg-zinc-700" : "bg-white"}`} style={{ transition: "background-color 0.3s ease" }}>
                  <p className="pb-5 font-bold text-primary text-3xl">
                    Social Media
                  </p>
                  <ul>
                    {socialMediaLinks.map((item, index) => (
                      <li className="flex items-center" key={index}>
                        <div className="pr-3 h-8 w-8 flex items-center ">
                          {item.icon}
                        </div>
                        <a href={item.href} target="_blank" className="hover:text-primary">
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </>
      )}
    </>
  );
};

export default ServicePage;
