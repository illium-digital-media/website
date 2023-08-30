import ContactForm from "../ContactForm";
import FadeInText from "../FadeInTypingText";
import useVisibilityOnScroll from "@/hooks/useVisibilityonScroll";

const ContactUsSection = () => {
  const { isVisible: isFormVisible, sectionRef: formRef } = useVisibilityOnScroll();
  const { isVisible: isContentVisible, sectionRef: contentRef } = useVisibilityOnScroll();
  const { isVisible: isTitleVisible, sectionRef: titleContainerRef } = useVisibilityOnScroll();

  return (
    <div className="overflow-x-hidden">
      <div>
        <div className="flex flex-col-reverse sm:flex-row max-w-screen-lg m-auto">
          <div 
            ref={formRef} 
            className={`w-full sm:w-1/2 sm:pr-20 transform ${isFormVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500`}
          >
            <ContactForm />
          </div>
          <div 
            ref={contentRef} 
            className={`w-full sm:w-1/2 pb-10 transform ${isContentVisible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500`}
          >
            <div ref={titleContainerRef} className={`${isTitleVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500`}>
              <h3 className={`font-bold text-white max-sm:text-center pb-8 text-4xl`}>
                <FadeInText text="Connect with Us" />
              </h3>
            </div>
            <p className="text-gray-300">
              Whether you&apos;re on the cusp of launching a groundbreaking digital project or just pondering the potential of an idea, we&apos;re here to guide and assist. From detailed inquiries to simple questions, every message is important to us. Reach out, and let&apos;s start a conversation that could shape the future of your digital presence. We promise a prompt and thoughtful response.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
