import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftarr from "../assets/short-arrow-left.svg";
import rightarr from "../assets/short-arrow-right.svg";

const Testimony = () => {
  const [testimonies, setTestimonies] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch("/data/testimony.json")
      .then((res) => res.json())
      .then((data) => setTestimonies(data))
      .catch((error) =>
        console.error("Error fetching testimonies data:", error)
      );
  }, []);

  // React Slick settings
  const settings = {
    infinite: true, // Infinite scroll
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of visible slides
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 1024, // For screens below 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // For screens below 640px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="py-8 bg-gray-50 ">
      <div className="flex justify-between py-4 mb-6 px-4">
        <h2 className="text-2xl font-bold  ">
          What Our Customers <br/>Say About Us
        </h2>
        <div className="relative flex space-x-2">
          <div
            onClick={handlePrev}
            className=" bg-gray-600 h-fit px-4 py-2 rounded-md shadow-md"
          >
            <img src={leftarr} alt="navigation" />
          </div>

          <div
            onClick={handleNext}
            className=" bg-gray-600 h-fit px-4 py-2 rounded-md shadow-md"
          >
            <img src={rightarr} alt="navigation" />
          </div>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {testimonies.map((testimony) => (
          <div key={testimony.id} className="p-2">
            <div className="border rounded-xl p-4 "
            style={{boxShadow: "0px 0px 8px 0px #3B82F61F"}}>
              <img src={testimony.image} alt="quotes" />
              <p className="text-md text-gray-700 my-6">
                {testimony.text}
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimony.profile}
                  alt={testimony.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-gray-800">
                    {testimony.name}
                  </h5>
                  <p className="text-sm text-gray-500">{testimony.job}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimony;
