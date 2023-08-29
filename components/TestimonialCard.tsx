import StarRating from "./StarRating";

const TestimonialCard: React.FC<{ comment: string; name: string; company: string; }> = (props) => {
    return (
        <div className={`max-sm:w-80 h-auto mx-3 rounded-lg mb-4 bg-gradient-to-r from-secondary to-cyan-400 p-0.5 `} >
            <div className="h-full bg-gradient-to-r from-secondary via-tertiary to-secondary">
                <div className="p-5">
                    <StarRating rating={4} />
                    <p className="py-3 text-gray-300">&quot;{props.comment}&quot;</p>
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold text-white">{props.name}</p>
                            <p className="text-gray-300">{props.company}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default TestimonialCard;