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
    intro?: string;
    image: StaticImageData,
    content: contentItem[];
}

export const services: ServiceItem[] = [
    {
        name: 'Website Development',
        intro: "In the digital age, your website serves as the primary touchpoint between your business and potential clients. It's not just about having an online presence; it's about making that presence work to convert visitors into loyal customers. We're here to help you achieve that.",
        image: WebDevelopment,
        content: [
            {
                heading: "Harnessing Modern Web Technologies",
                paragraph: "We leverage cutting-edge technologies like React, TypeScript, Next.js, and Tailwind to craft dynamic, single-page applications. These tools, combined with our focus on User Experience (UX) and Mobile Optimization, ensure websites that are visually stunning, responsive, and user-friendly. Your visitors will enjoy a seamless browsing experience, regardless of the device they're using."
            },
            {
                heading: "Customized Solutions for Unique Needs",
                paragraph: "Every business has its unique needs and challenges. We take the time to understand your brand, target audience, and business goals. This deep understanding, coupled with our iterative development process, allows us to create a website that's truly tailored to your needs, ensuring it resonates with your audience and drives conversions."
            },
            {
                heading: "Complete Web Solutions",
                paragraph: "Our services go beyond just website development. We offer domain registration through Google Domains, ensuring your website has a professional and memorable address. With hosting on Netlify, you can be assured of fast load times, optimal performance, and top-notch security. And if you need a business email, we've got you covered, ensuring a cohesive and professional online presence."
            },
            {
                heading: "Integrated Website Analytics",
                paragraph: "Understanding your audience's behavior is crucial. With our Google Analytics integration, you'll gain insights into your website's traffic, user behavior, and conversion metrics, empowering you to make data-driven decisions and refine your strategies."
            },
            {
                heading: "Feedback and Iterations",
                paragraph: "We value collaboration and client feedback. Our development process is iterative, ensuring the final website aligns perfectly with your vision and goals. We're open to revisions and work closely with you to refine and perfect the outcome."
            }
        ]
        
    },
    
    {
        name: 'Ongoing Updates',
        image: LifetimeUpdates,
        intro: "The digital landscape is ever-evolving. What's relevant and functional today might not be so tomorrow. With our ongoing updates service, we ensure that your website remains current, functional, and aligned with your business goals.",
        content: [
            {
                heading: "Keeping Content Fresh",
                paragraph: "Your business doesn't stand still, and neither should your website. Whether you're launching new products, offering seasonal promotions, or sharing company news, we ensure your website's content stays up-to-date and relevant. This not only keeps your audience informed but also aids in SEO, ensuring your site remains visible in search results."
            },
            {
                heading: "Always Available, Always Supportive",
                paragraph: "Technical glitches can happen, but with our 24/7 support, they won't disrupt your business. Whether it's a minor tweak or a major fix, we're always on hand to ensure your website runs smoothly. Plus, if you're looking to add new features or functionalities, we're here to help. While complex additions might come with additional costs, we'll ensure they're integrated seamlessly and effectively."
            },
            {
                heading: "Adapting to the Future",
                paragraph: "The online world is constantly changing, with new design trends, technological advancements, and user behaviors. Our commitment to ongoing updates means your website will always be ahead of the curve, ready to impress and engage your audience in the most effective ways possible."
            }
        ]
    },
    
    
    {
        name: 'SEO',
        image: SEO,
        intro: "In the digital age, visibility is currency. With the majority of consumers turning to search engines to find local businesses, it's imperative for your brand to stand out in search results. Our SEO services are tailored to ensure that when potential customers search for services you offer, your business is their top choice.",
        content: [
            {
                heading: "Mastering Local SEO",
                paragraph: "Local searches are often driven by immediate needs, making them highly valuable. We optimize your business for local search, ensuring you're prominently featured in local directories, maps, and search results. This boosts your visibility, drives organic traffic, and fosters trust within your community."
            },
            {
                heading: "Direct Communication Channels",
                paragraph: "Engaging with potential customers is crucial. Our integration of user-friendly contact forms ensures that visitors can effortlessly reach out for inquiries, feedback, or appointments, enhancing customer relations and potentially increasing sales and bookings."
            },
            {
                heading: "Positioning for Success",
                paragraph: "Visibility is just the starting point. We craft strategies that not only make you discoverable but also position your brand as the industry leader in your locality. Through targeted content and strategic optimizations, we ensure your brand resonates with your local audience."
            },
            {
                heading: "Focused on Returns",
                paragraph: "Our SEO strategies are ROI-driven. We target local audiences actively seeking your services, ensuring that our efforts not only increase visibility but also drive conversions, sales, and business growth."
            },
            {
                heading: "Staying Relevant in Local Markets",
                paragraph: "Local markets evolve, and so do search behaviors. We're always on the pulse of local trends, ensuring your SEO strategy remains aligned and effective, positioning you as the top choice for your community."
            }
        ]
    },
    
    {
        name: 'Branding & Logo Design',
        image: DigitalMarketing,
        intro: "Branding shapes how your audience perceives and connects with your company. It's more than just a visual identity; it's about creating a unique and memorable impression, setting you apart from competitors and fostering customer loyalty. We're here to ensure your brand resonates with your target audience and leaves a lasting impression.",
        content: [
            {
                heading: "Building a Memorable Brand",
                paragraph: "Your brand tells your story. By understanding your business's core values, aspirations, and target audience, we craft a brand identity that's not only unique but also deeply resonant. This ensures that every touchpoint, from your logo to your website design and advertising campaigns, reflects your brand's personality and values."
            },
            {
                heading: "Logo - The Brand's Signature",
                paragraph: "A logo is often the first impression of your brand. We specialize in logo design that communicates your brand story, captures its essence, and remains timeless in design and relevance."
            },
            {
                heading: "Consistent Brand Experience",
                paragraph: "Consistency is key in branding. Whether it's your website, business cards, or social media profiles, we ensure a cohesive brand voice, visuals, and messaging. This consistency builds trust, recognition, and loyalty among your customers."
            },
            {
                heading: "Future-Proof Branding",
                paragraph: "As markets change and businesses evolve, your brand should adapt without losing its core identity. We provide comprehensive brand guidelines, ensuring that whether you're expanding, pivoting, or rebranding, your brand remains impactful and relevant."
            }
        ]
    }
    
    
    
];