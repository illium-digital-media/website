import ContactForm from "../ContactForm";
import FadeInText from "../FadeInTypingText";
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll";

const ContactUsSection = () => {
  const { isVisible, sectionRef } = useVisibilityOnScroll();

  return (
    <div className="flex max-sm:block max-w-screen-lg m-auto" ref={sectionRef}>
      <div className={`sm:hidden pb-10 transform ${isVisible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500`}>
        <h3 className={`font-bold text-white text-center pb-8 text-4xl`}>
          <FadeInText text="Connect with Us" />
        </h3>
        <p className="text-gray-300">
          Whether you&apos;re on the cusp of launching a groundbreaking digital project or just pondering the potential of an idea, we&apos;re here to guide and assist. From detailed inquiries to simple questions, every message is important to us. Reach out, and let&apos;s start a conversation that could shape the future of your digital presence. We promise a prompt and thoughtful response.
        </p>
      </div>
      <div className={`sm:pr-20 sm:w-1/2 transform ${isVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500`}>
        <ContactForm />
      </div>
      <div className={`max-sm:hidden sm:w-1/2 transform ${isVisible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500`}>
        <h3 className={`font-bold text-white pb-8 text-4xl`}>
          <FadeInText text="Connect with Us" />
        </h3>
        <p className="text-gray-300">
          Whether you&apos;re on the cusp of launching a groundbreaking digital project or just pondering the potential of an idea, we&apos;re here to guide and assist. From detailed inquiries to simple questions, every message is important to us. Reach out, and let&apos;s start a conversation that could shape the future of your digital presence. We promise a prompt and thoughtful response.
        </p>
      </div>
    </div>
  );
}

export default ContactUsSection;
