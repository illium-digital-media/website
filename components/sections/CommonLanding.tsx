
const CommonLanding: React.FC<{ heading: string }> = (props) => {
  return (
    <section className="bg-secondary pt-24">
      <div className="flex items-center justify-center h-[300px] max-sm:h-[300px] max-sm:text-center">
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
