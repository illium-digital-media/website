interface SectionProps {
  children: React.ReactNode;
  index: number;
  classes?: string;
  gradient?: boolean;
  totalSections: number;
}

const Section: React.FC<SectionProps> = ({ children, index, classes, gradient = false, totalSections }) => {
  const gradientStyle = gradient ? {
    backgroundImage: 'linear-gradient(to top, transparent 90%, black 100%)'
  } : {};

  return (
    <>
      <section
        className={`py-20 max-lg:py-10 max-xl:px-5 bg-primary ${classes}`}
        style={{ ...gradientStyle, transition: "background-color 0.5s ease" }}
      >
        <div className="m-auto max-w-screen-xl">{children}</div>
      </section>
      <hr className="bg-gradient-to-l from-transparent via-cyan-400 to-transparent h-px border-t-0 border-transparent max-w-screen-lg m-auto" />
    </>
  );
};
export default Section;