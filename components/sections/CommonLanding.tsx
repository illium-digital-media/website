
const CommonLanding: React.FC<{ heading: string }> = (props) => {
  return (
    <section className="relative max-sm:px-4 pt-20 flex items-center max-xl:px-5 w-full h-[400px]">

      {/* Background pseudo-element */}
      <div className="absolute top-0 left-0 w-full h-full bg-black z-0"></div>

      {/* Actual background image */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-40" style={{ backgroundImage: `url("/example-1.jpg")` }}></div>

      {/* Wrapper for content to maintain max-width */}
      <div className="max-w-screen-xl m-auto w-full z-10 flex justify-center">
        <h3 className="text-5xl font-bold max-lg:text-4xl text-white">{props.heading}</h3>
      </div>
    </section>
  );
};

export default CommonLanding;
