import astrologyIcon from "../assets/astrology.svg";
import devIcon from "../assets/devlopment.svg";
import marIcon from "../assets/marketing.svg";
import phyIcon from "../assets/physics.svg";
import { Link } from "react-router-dom";

const Categories = () => {
  const data = [
    {
      id: 1,
      icon: astrologyIcon,
      name: "Astrology",
      course: 11,
    },
    {
      id: 2,
      icon: devIcon,
      name: "Development",
      course: 11,
    },
    {
      id: 3,
      icon: marIcon,
      name: "Marketing",
      course: 11,
    },
    {
      id: 4,
      icon: phyIcon,
      name: "Physics",
      course: 11,
    },
  ];

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="py-8 px-4">
        {/* Header */}
        <div className="flex justify-between py-4">
          <h4 className="m-2 font-bold text-xl sm:text-2xl">Top Categories</h4>
          <p className="text-blue-600 font-semibold cursor-pointer hover:underline">
            <Link to="/course" onClick={handleScroll}>
              See All{" "}
            </Link>
          </p>
        </div>

        {/* Categories Container */}
        <div className="grid gap-6 sm:gap-8 grid-cols-2  md:grid-cols-4 ">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center bg-white text-center rounded-xl  p-6 cursor-pointer"
              style={{ boxShadow: "0px 0px 8px 0px #3B82F61F" }}
            >
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <img src={item.icon} alt={item.name} className="w-12 h-12" />
              </div>
              <h2 className="text-lg font-bold leading-[1.5rem]">
                {item.name}
              </h2>
              <p className="text-sm text-gray-600 leading-[1.5rem]">
                Courses: {item.course}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
