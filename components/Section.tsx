interface SectionProps {
  children: React.ReactNode;
  index: number;
}

const Section: React.FC<SectionProps> = ({ children, index }) => {
  const bgColorDarkMode = index % 2 === 0 ? "bg-primary" : "bg-zinc-800";

  return (
    <section
      className={`py-20 max-lg:py-10 max-xl:px-5 ${bgColorDarkMode}`}
      style={{ transition: "background-color 0.5s ease" }}
    >
      <div className="m-auto max-w-screen-xl">{children}</div>
    </section>
  );
};

export default Section;
