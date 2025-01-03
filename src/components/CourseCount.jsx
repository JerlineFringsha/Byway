import axios from "axios";
import { useEffect, useState } from "react";

const CourseCount = () => {
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    axios
      .get("/data/coursecount.json")
      .then((response) => {
        setCounts(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300 bg-gray-50 py-6 md:py-8 lg:py-10 rounded-lg shadow">
        {counts && counts.length > 0 ? (
          counts.map((count, index) => (
            <div
              key={index}
              className="px-4 py-6 md:px-6 lg:px-8 xl:px-10 2xl:px-12 text-center w-full sm:w-1/2 lg:w-1/4"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800">
                {count.course}
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl">
                {count.text}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            No courses available
          </p>
        )}
      </div>
    </>
  );
};

export default CourseCount;
