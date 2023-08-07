import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";
import { useRouter } from "next/router";
import Section from "@/components/Section";
import PhotoGallery from "./PhotoGallery";
import Link from "next/link";
import React, { useContext } from "react";
import { DarkModeContext } from "../components/DarkModeContext";
import { socialMediaLinks } from "@/components/data/socialmedialinks";
import {
  servicesData,
  ServicesDataInterface,
} from "@/components/data/services";

const ServicePage: React.FC = () => {
  const router = useRouter();
  const serviceId = router.query.service;
  const serviceData = servicesData[serviceId as keyof ServicesDataInterface];
  const { darkMode } = useContext(DarkModeContext);

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
                <h3
                  className={`font-bold ${
                    darkMode ? "text-white" : "text-primary"
                  } text-2xl max-sm:text-xl`}
                >
                  Service Detail
                </h3>
                <h4 className="font-bold text-5xl max-sm:text-3xl pb-2">
                  {serviceData.title}
                </h4>
                <div className="pb-5">
                  {serviceData.paragraphs.map((item, index) => (
                    <p className="pb-4" key={index}>
                      {item}
                    </p>
                  ))}
                </div>
                <PhotoGallery images={serviceData.images} />
              </div>

              <div className="sm:w-1/4">
                <div
                  className={`p-5 shadow-lg rounded-lg mb-10 ${
                    darkMode ? "bg-zinc-700" : "bg-white"
                  }`}
                  style={{ transition: "background-color 0.3s ease" }}
                >
                  <p
                    className={`pb-5 font-bold ${
                      darkMode ? "text-white" : "text-primary"
                    } text-3xl`}
                  >
                    Service List
                  </p>
                  <ul>
                    {Object.keys(servicesData).map((serviceKey) => (
                      <li className="hover:text-primary" key={serviceKey}>
                        <Link href={serviceKey}>
                          {servicesData[serviceKey].title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`p-5 shadow-lg rounded-lg ${
                    darkMode ? "bg-zinc-700" : "bg-white"
                  }`}
                  style={{ transition: "background-color 0.3s ease" }}
                >
                  <p
                    className={`pb-5 font-bold ${
                      darkMode ? "text-white" : "text-primary"
                    } text-3xl`}
                  >
                    Social Media
                  </p>
                  <ul>
                    {socialMediaLinks.map((item, index) => (
                      <li className="flex items-center" key={index}>
                        <div
                          className={`pr-3 h-8 w-8 flex items-center ${
                            darkMode ? "text-white" : "text-primary"
                          }`}
                        >
                          {item.icon}
                        </div>
                        <a
                          href={item.href}
                          target="_blank"
                          className="hover:text-primary"
                        >
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
