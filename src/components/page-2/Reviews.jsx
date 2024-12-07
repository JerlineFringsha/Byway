import { useEffect, useState } from "react";
import star from "../../assets/star.svg";
import span6 from "../../assets/span-6.svg";

const RatingBreakdown = ({ ratings }) => {
  return (
    <div className="flex flex-col gap-2">
      {ratings.map((rating, index) => (
        <div key={index} className="flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-lg ${
                  i < rating.stars ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="ml-4 w-10 text-gray-600">{rating.percentage}%</span>
        </div>
      ))}
    </div>
  );
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [ratingsData, setRatingsData] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(1); 


  useEffect(() => {
    fetch("/data/reviews.json")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.reviews);
        setRatingsData(data.ratingsData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="pb-8">
      <h2 className="text-xl font-semibold mt-6 mb-4">Learner Reviews</h2>

      <div className="flex flex-wrap md:flex-nowrap justify-between gap-8">
        {/* Rating Breakdown */}
        <div className="flex flex-col w-full md:w-1/4">
          <div className="flex items-center space-x-2 mb-4">
            <img src={star} alt="star" />
            <span className="font-semibold text-lg">4.6</span>
            <p className="text-gray-500 text-sm">146,951 reviews</p>
          </div>
          {<RatingBreakdown ratings={ratingsData} />}
        </div>

        {/* Reviews Section */}
        <div className="flex flex-col gap-4 w-full md:w-3/4">
          {reviews.length > 0 ? (
            reviews.slice(0, visibleReviews).map((review, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-300 rounded-lg"
              >
                {/* Profile Section */}
                <div className="flex items-center sm:flex-shrink-0 sm:w-1/5">
                  <img
                    src={span6}
                    alt="Profile Picture"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="mt-2 sm:mt-0 sm:ml-2 font-bold text-center sm:text-left">
                    Mark Doe
                  </div>
                </div>

                {/* Review Content */}
                <div className="flex-grow">
                  <div className="flex space-x-1 items-center mb-2">
                    {[...Array(review.star)].map((_, i) => (
                      <img key={i} src={star} alt="star" />
                    ))}
                    <span className="font-bold">{review.star}</span>
                    <p className="text-sm text-gray-500">
                      Reviewed on {review.date}
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {review.feedback}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading reviews...</p>
          )}

          {/* View More Button */}
          {visibleReviews < reviews.length && (
          <div className="mx-auto">
            <button className="border border-black px-4 py-2 text-black rounded-md"
                  onClick={() => setVisibleReviews(reviews.length)}
            >
              View more Reviews
            </button>
          </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Reviews;
