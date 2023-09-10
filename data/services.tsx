import { StaticImageData } from "next/image";
import SEO from '../assets/seo.png';
import WebDevelopment from '../assets/webdevelopment.png';
import DigitalMarketing from '../assets/digitalmarketing.png';
import LifetimeUpdates from '../assets/lifetimeupdates.png';

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
        image: WebDevelopment,
        content: [
            {
                heading: "Crafting Digital Experiences",
                paragraph: "In today's digital age, a well-crafted website is more than just a URL – it's a powerful tool that can shape perceptions, inspire action, and drive growth. At Illium Digital Media, we specialize in turning your web aspirations into reality. Our web development services encompass not only the technical aspects but also the art of creating a captivating digital experience."
            },
            {
                heading: "A Dynamic Platform for Connection",
                paragraph: "We believe that a website is more than a digital placeholder; it's a dynamic platform where brands and audiences connect. Our team of skilled developers works diligently to ensure that every aspect of your website functions flawlessly. From seamless navigation to responsive design, we meticulously plan and execute each step to provide a user-friendly and visually appealing experience."
            },
            {
                heading: "Built on a Solid and Flexible Foundation",
                paragraph: "With every line of code carefully written, we build a foundation that's both solid and flexible. This approach allows your digital presence to evolve alongside your business goals, whether you're expanding product offerings, implementing new features, or adapting to changing industry trends. We understand that your website is a reflection of your brand, and we're dedicated to ensuring it makes a lasting impression."
            },

        ]
    },
    {
        name: 'Lifetime Updates',
        image: LifetimeUpdates,
        content: [
            {
                heading: "Adapting to the Dynamic Landscape",
                paragraph: "The digital landscape is in a perpetual state of evolution, and your online presence should reflect that. Our commitment to providing lifetime updates means that your website won't become outdated or stagnant."
            },
            {
                heading: "Staying Modern and Functional",
                paragraph: "As design trends shift and technological advancements emerge, we ensure that your website remains modern, functional, and aligned with the latest standards. Our team of developers is dedicated to implementing updates that enhance user experience, improve functionality, and maintain the highest levels of security."
            },
            {
                heading: "Staying Ahead of the Curve",
                paragraph: "Whether it's adopting the latest design elements, integrating new features, or optimizing for emerging devices, our goal is to keep your website at the forefront of innovation. This dedication to continuous improvement guarantees that your brand's online home is always ready to impress and engage."
            },
            {
                heading: "Your Partner in Evolution",
                paragraph: "With Illium Digital Media, you can trust that your website will evolve alongside your business, providing an exceptional experience to your audience. We're committed to ensuring that your online presence remains relevant and impactful in an ever-changing digital world."
            },
        ]
    },
    {
        name: 'SEO',
        image: SEO,
        content: [
            {
                heading: "Elevating Your Online Visibility",
                paragraph: "In the vast expanse of the internet, being seen is the first step to being chosen. Our SEO services are designed to elevate your online visibility and make sure your brand is front and center when potential customers search for relevant keywords."
            },
            {
                heading: "Strategically Positioning Your Brand",
                paragraph: "We understand that a high search engine ranking can be a game-changer, and we're here to help you achieve it. Through meticulous optimization, strategic content creation, and technical enhancements, we position your website to rank higher on search engine results."
            },
            {
                heading: "Tailored Strategies for Success",
                paragraph: "Our team of experts dives deep into keyword research, competitor analysis, and industry trends to develop an effective SEO strategy tailored to your business. The result? More organic traffic, increased credibility, and a higher likelihood of turning visitors into loyal customers."
            },
            {
                heading: "Adapting to the Changing Landscape",
                paragraph: "The digital landscape is always evolving, and staying on top requires a comprehensive SEO approach. Our dedication to continuous improvement means that we're always refining our strategies to keep up with the latest algorithms and best practices. Let us be your partner in driving targeted traffic to your website and achieving online success."
            },
        ]
    },
    {
        name: 'Digital Marketing',
        image: DigitalMarketing,
        content: [
            {
                heading: "Crafting a Strategic Presence",
                paragraph: "In the digital realm, standing out requires strategy, creativity, and a deep understanding of your target audience. Our digital marketing services encompass a wide range of strategies tailored to your specific goals."
            },
            {
                heading: "Engaging with Precision",
                paragraph: "From crafting compelling social media campaigns that resonate with your audience to implementing data-driven advertising strategies that maximize ROI, we guide your brand through the dynamic digital landscape."
            },
            {
                heading: "The Art of Data and Creativity",
                paragraph: "Our team of digital marketing experts combines creativity and data-driven insights to create campaigns that capture attention, drive engagement, and generate results. We understand that effective digital marketing isn't just about reaching a wide audience – it's about reaching the right audience at the right time with the right message."
            },
            {
                heading: "Achieving Tangible Outcomes",
                paragraph: "Whether you're looking to increase brand awareness, drive website traffic, or boost conversions, our digital marketing strategies are designed to deliver tangible outcomes. Let us be your partner in navigating the ever-changing digital landscape and helping you achieve your business objectives. With Illium Digital Media, your brand's digital presence will be strategically crafted to make a lasting impact."
            },
        ]
    },
];