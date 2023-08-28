import React, { useState } from "react";

type contentItem = {
    heading?: string;
    paragraph: string;
    bulletPoints?: string[];
}

type ServiceItem = {
    name: string;
    content: contentItem[];
}

const servicesContent: ServiceItem[] = [
    {
        name: 'App Development',
        content: [
            {
                paragraph: "In today's digital landscape, an app has become an indispensable tool for businesses across various industries. Whether you're focused on networking, e-commerce, or any other aspect of your operations, an app offers a multitude of advantages.",
                bulletPoints: [
                    "Direct Connection: An app allows you to establish a direct and personalized connection with your customers, providing them with a convenient platform to interact with your brand anytime, anywhere.",
                    "Enhanced Networking: An app can enhance your networking capabilities by facilitating seamless communication, collaboration, and relationship-building with clients, partners, and stakeholders.",
                    "E-commerce Growth: For businesses engaged in e-commerce, an app empowers you to tap into the growing mobile market, reaching a wider audience and increasing sales potential."
                ]
            },
            {
                heading: "React Native",
                paragraph: "At The Pixel People, we leverage the power of React Native to create robust and versatile mobile applications that cater to both Android and Apple devices. By utilising React Native, we ensure that your app reaches a broader user base, maximising its impact and engagement potential.",
                bulletPoints: [
                    "Single Codebase: Develop a single codebase that can be efficiently deployed across multiple platforms, saving time and resources while maintaining a consistent user experience.",
                    "Efficiency: With its extensive library of pre-built components and modules, we can expedite the development process without compromising on functionality or performance."
                ]
            },
            {
                heading: "Reasons for an App",
                paragraph: "If you're debating whether you need an app, here are some purposes that highlight its significance.",
                bulletPoints: [
                    "Enhanced Customer Engagement: An app can serve as a powerful tool to enhance customer engagement, providing a personalised and convenient platform for users to interact with your brand.",
                    "Seamless Communication: It enables seamless communication, strengthens networking capabilities, and fosters meaningful relationships.",
                    "Access to Mobile Market: An app opens doors to tap into the booming mobile market, expanding your reach and boosting sales potential.",
                    "Brand Presence: It offers the opportunity to showcase your products or services, provide exclusive deals or discounts, and establish a strong brand presence in the digital landscape."
                ]
            }
        ]
    },
    {
        name: 'Website Development',
        content: [
            {
                heading: "Website Development",
                paragraph: "Having a website is of paramount importance in today's digital age. ... staying ahead in the competitive digital landscape."
            },
            {
                heading: "Webflow",
                paragraph: "At The Pixel People, we are proud to utilise Webflow ... and leaves a lasting impression on your visitors."
            },
            {
                heading: "Made in Webflow - One page websites - '1 pagers'",
                paragraph: "At The Pixel People, we specialise in building one-page websites ... achieve your online goals."
            },
            {
                heading: "E-commerce",
                paragraph: "At The Pixel People, we specialise in building powerful ... shopping experience for your customers."
            },
            {
                heading: "Content Management System - 'CMS'",
                paragraph: "Content Management Systems (CMS) are a game-changer for businesses, ... and maximising your online impact."
            },
            {
                heading: "Search Engine Optimisation - 'SEO'",
                paragraph: "To enhance your website's visibility and organic traffic, we offer effective SEO strategies tailored to your business. We're SEO experts and employ the latest techniques to optimise your website's structure, content, and keywords, improving its ranking on search engine result pages and driving qualified leads to your site."
            },
            {
                heading: "Website Analytics and Reporting",
                paragraph: "Gain valuable insights into your website's performance with our analytics and reporting services. We integrate powerful tracking tools that provide comprehensive data on visitor behaviour, conversion rates, and other key metrics. This information helps you make informed decisions and optimise your website for maximum results."
            },
            {
                heading: "Website Maintenance and Support",
                paragraph: "We understand that maintaining and updating a website can be time-consuming. That's why we provide reliable website maintenance and support services. Whether it's regular content updates, security enhancements, or technical assistance, we're here to ensure that your website operates smoothly and efficiently."
            }
        ]
    },
];


const ServicesSectionLong = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <div className="">
            <h4 className="text-center font-bold text-white text-4xl pb-5">
                Our Services
            </h4>
            <div className="sm:flex justify-center pb-6">
                {servicesContent.map((service, index) => (
                    <button
                        key={index}
                        className={`max-sm:w-full max-sm:mb-3 sm:mx-3 px-4 py-2 rounded-lg ${activeTab === index
                            ? "bg-orange-400 text-white"
                            : "bg-tertiary text-gray-300 hover:shadow-cyan-glow"
                            } hover:bg-orange-400 hover:text-white transition-colors duration-200`}
                        onClick={() => setActiveTab(index)}
                    >
                        {service.name}
                    </button>
                ))}
            </div>
            <div className="bg-secondary border border-cyan-400 p-6">
                <div className="pb-6 text-center font-bold text-4xl pb-2 text-white">{servicesContent[activeTab].name}</div>
                {servicesContent[activeTab].content.map((contentItem, contentIndex) => (

                    <div key={contentIndex} className="mb-6">
                        <h5 className="text-white text-2xl mb-4 font-bold">{contentItem.heading}</h5>
                        <p className="text-white mb-4">{contentItem.paragraph}</p>
                        {contentItem.bulletPoints && (
                            <ul className="list-disc pl-5 text-white">
                                {contentItem.bulletPoints.map((point, pointIndex) => (
                                    <li key={pointIndex}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSectionLong;