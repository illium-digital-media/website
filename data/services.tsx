import { StaticImageData } from "next/image";
import SEO from '../assets/seo.png';

type contentItem = {
    heading?: string;
    paragraph: string;
    bulletPoints?: string[];
}

type ServiceItem = {
    name: string;
    image: StaticImageData,
    content: contentItem[];
}

export const services: ServiceItem[] = [
    {
        name: 'Website Development',
        image: SEO,
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
    {
        name: 'UX/UI Design',
        image: SEO,
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
    {
        name: 'Lifetime Updates',
        image: SEO,
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
    {
        name: 'SEO',
        image: SEO,
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
    {
        name: 'Digital Marketing',
        image: SEO,
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