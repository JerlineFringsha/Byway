import { useState, useEffect } from "react";
import star from "../assets/star.svg";
import { useNavigate, Link } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  const handleClick = (id) => {
    navigate(`/course/${id}`);
    window.scrollTo(0, 0);
  };

  const seeAll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetch("/data/courses.json")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses data:", error));
  }, []);

  return (
    <>
      <div className="px-4 sm:px-8 py-8">
        <div className="flex justify-between py-4">
          <h4 className="m-2 font-bold text-2xl">Top Courses</h4>
          <p className="text-blue-600 font-semibold cursor-pointer">
            <Link to="/course" onClick={seeAll}>
              See All
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="p-4 border rounded-xl  cursor-pointer"
              onClick={() => handleClick(course.id)}
              style={{boxShadow: "0px 0px 8px 0px #3B82F61F"}}
              
              
            >
              <img
                src={course.image}
                alt={course.title}
                className="object-cover rounded-t h-40 w-full"
              />
              <div className="py-2">
                <h4 className="text-sm font-bold">{course.title}</h4>
                <p className="text-gray-500">{course.subtitle}</p>
                <div className="flex items-center">
                  {[...Array(course.star_ratings)].map((_, i) => (
                    <img key={i} src={star} alt="Star" className="h-4 w-4" />
                  ))}
                  <p className="text-gray-500 ml-1">
                    ({course.star_ratings} Ratings)
                  </p>
                </div>
                <p className="text-gray-500">{course.status}</p>
                <p className="mt-2 font-bold">${course.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
