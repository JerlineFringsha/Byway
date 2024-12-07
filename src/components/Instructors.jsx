import { useState, useEffect, useRef } from "react";
import star from "../assets/star.svg";
import { Link } from "react-router-dom";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const linkRef = useRef(null);

  useEffect(() => {
    fetch("/data/instructor.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((error) =>
        console.error("Error fetching instructors data:", error)
      );
  }, []);

  const seeAll = () => {
    window.scrollTo(0, 0);
  };

  const handleClick = () => {
    linkRef.current.click();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="py-8 px-4">
        <div className="flex justify-between py-4">
          <h4 className="m-2 font-bold text-2xl">Top Instructors</h4>
          <p className="text-blue-600 font-semibold cursor-pointer">
            <Link to="/course" onClick={seeAll}>
              See All
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="flex flex-col"
              onClick={handleClick}
            >
              <div className="border rounded-lg shadow-lg overflow-hidden ">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold">{instructor.name}</h3>
                  <p className="text-gray-500 pb-2">{instructor.work}</p>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center">
                      <img src={star} alt="stars" className="mr-1" />
                      <span>{instructor.star_ratings}</span>
                    </div>
                    <p className="text-black-600 font-bold">
                      {instructor.students} students
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Link
            ref={linkRef}
            to="/course"
          />
        </div>
      </div>
    </>
  );
};

export default Instructors;
