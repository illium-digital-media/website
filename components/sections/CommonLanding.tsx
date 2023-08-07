
const CommonLanding: React.FC<{ heading: string }> = (props) => {
  return (
    <section
      className="bg-cover bg-center  pt-24"
      style={{
        backgroundImage: `url("/common-landing.jpg")`,
      }}
    >
      <div className="flex items-center justify-center h-[350px] max-sm:h-[300px] max-sm:text-center bg-primary opacity-70">
        <div className="max-w-screen-xl m-auto">
          <h3 className="text-white text-shadow-lg z-10 text-5xl font-bold max-sm:text-4xl">
            {props.heading}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default CommonLanding;
