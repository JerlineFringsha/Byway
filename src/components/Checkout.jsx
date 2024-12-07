import learner from "../assets/model-6.jpg";
import instructor from "../assets/model-4.jpg";
import rightarr from "../assets/arrow-right.svg";
import {Link} from "react-router-dom";

const Checkout = () => {

  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="p-8  ">
        {/* Become an Instructor Section */}
        <div className="flex flex-col md:flex-row items-center md:space-x-28">
          <img
            src={instructor}
            alt="instructor"
            className="w-full md:w-1/2 lg:w-2/5 object-cover"
          />
          <div className="leading-7 md:w-1/2 lg:w-3/5">
            <h4 className="font-bold text-2xl my-2">Become an Instructor</h4>
            <p className="text-md my-2">
              Instructors from around the world teach millions of students on
              Byway.
              <br />
              We provide the tools and skills to teach what you love.
            </p>
            <Link to="/course" onClick={handleClick}>
              <div className="flex space-x-2 w-fit my-2 bg-black p-4 rounded-xl text-white">
                <p>Start Your Instructor Journey</p>
                <img src={rightarr} alt="arrow" />
              </div>
            </Link>
          </div>
        </div>

        {/* Transform Your Life Section */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 my-8">
          <div className="md:w-1/2 lg:w-3/5">
            <h4 className="font-bold text-2xl my-2">
              Transform your life through education
            </h4>
            <p className="text-md my-2">
              Learners around the world are launching new careers, advancing in
              <br />
              their fields, and enriching their lives.
            </p>
            <Link to="/course" onClick={handleClick}>
              <div className="flex space-x-2 w-fit my-2 bg-black p-4 rounded-xl text-white">
                <p>Checkout Courses</p>
                <img src={rightarr} alt="arrow" />
              </div>
            </Link>
          </div>
          <img
            src={learner}
            alt="learner"
            className="w-full md:w-1/2 lg:w-2/5 object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Checkout;
