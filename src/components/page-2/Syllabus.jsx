import { useState, useEffect } from "react";
import down from "../../assets/arrow-down.svg";
import axios from "axios";

const Syllabus = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/data/syllabus.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching syllabus data:", error);
      });
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className=" py-8 rounded-md ">
        <h2 className="text-2xl font-bold mb-4">Syllabus</h2>

        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              className="border-2 rounded "
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center justify-between p-4 bg-white hover:bg-gray-100">
                <div className="flex items-center">
                  <img
                    src={down}
                    alt="dropdown"
                    className={`transform ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }  mr-3 transition-transform`}
                  />
                  <span className="font-medium">{item.title}</span>
                </div>
                <span className="text-gray-600">
                  {item.lessons} Lessons {item.duration} 
                </span>
              </div>
              {openIndex === index && (
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-600">Lesson details go here...</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
    </>
  );
};

export default Syllabus;
