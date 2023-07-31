import Image from "next/image";
import examplePainting from "../../assets/example-painter.png";
import CheckIcon from "@/components/Icons/Check";

const aboutContent = [
  "Over 5 years of industry experience",
  "Personalized consultations for tailored solutions",
  "Timely project completion and adherence to deadlines  ",
  "Expert advice and creative expertise for stunning results  ",
  "High-quality materials and eco-friendly practices",
];

const AboutUsSection: React.FC = () => {
  return (
    <div className="flex ">
      <div className="max-sm:hidden sm:w-1/2">
        <Image src={examplePainting} width={500} height={500} alt={"Test"} />
      </div>
      <div className="pb-6 sm:w-1/2">
        <h3 className="font-bold text-blue-900 text-1xl">About Us</h3>
        <h4 className="font-bold  text-4xl">
          We Are The Best Painting Service Company
        </h4>
        <p className="py-5">
          Welcome to Brushstrokes - your premier painting and decorating
          partner. With a passion for transforming spaces into works of art, we
          take pride in delivering exceptional results and top-notch customer
          service. As a team of experienced professionals, we are committed to
          making your vision a reality, ensuring every brushstroke leaves a
          lasting impression.
        </p>
        {aboutContent.map((item, index) => (
          <div className="flex align-center pb-2">
            <div className="text-primary pr-2">
              <CheckIcon />
            </div>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsSection;
