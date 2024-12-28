import achive from "../../assets/achive.svg";
import cap from "../../assets/cap.svg";
import play from "../../assets/play.svg";
import instructor from "../../assets/span-8.svg";

const Instructor = () => {
  return (
    <>
      <div className="py-4 border-b w-full lg:w-3/4  ">
        <h1 className="font-bold text-lg">Instructor</h1>
        <h2 className="text-xl font-bold text-blue-600">Ronald Richards</h2>
        <p className="text-gray-500 mb-2">UI/UX Designer</p>

        <div className="flex  leading-5 text-right space-x-4">
          <div className="w-[15%] ">
            <img src={instructor} alt="instructor" className="rounded-full" />
          </div>
          <div className="flex flex-col justify-center leading-7  ">
            <div className="flex  space-x-1 text-gray-600">
              <img className="" src={achive} alt="icon" />
              <span className="">40,445 Reviews</span>
            </div>
            <div className="flex space-x-1 text-gray-600">
              <img className="" src={cap} />
              <span className="">500 Students</span>
            </div>
            <div className="flex space-x-1 text-gray-600">
              <img className="" src={play} />
              <span className="">15 Courses</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed py-2">
          With over a decade of industry experience, Ronald brings a wealth of
          practical knowledge to the classroom. He has played a pivotal role in
          designing user-centric interfaces for renowned tech companies,
          ensuring seamless and engaging user experiences.
        </p>
      </div>
    </>
  );
};

export default Instructor;
