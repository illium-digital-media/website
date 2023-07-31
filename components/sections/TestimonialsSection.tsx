import TestimonialsCards from "../TestimonialsCards";

const TestimonialsSection: React.FC = () => {
  return (
    <div className="flex">
      <div className="">
        <div className="col flex center-left">
          <div>
            <div className="text-center pb-6">
              <h3 className="font-bold text-blue-900 text-1xl">Testimonials</h3>
              <h4 className="font-bold  text-4xl pb-2">
                What Clients Say About Us
              </h4>
              <p>
                From enhancing interiors to reviving exteriors, our painting and
                decorating services have left a lasting impression on our
                clients, bringing smiles to their faces and beauty to their
                spaces.
              </p>
            </div>

            <TestimonialsCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
