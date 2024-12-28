import { Link, Element } from "react-scroll";
import { useState } from "react";

import Description from "./Description";
import Instructor from "./Instructor";
import Syllabus from "./Syllabus";
import Reviews from "./Reviews";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <>
      {/* Tab Navigation */}
      <div className="grid grid-cols-4 xs:grid-cols-2 ss:grid-cols-4 gap-4 p-4 md:px-8  lg:absolute lg:top-[80%] lg:z-10">
        <Link
          to="Description"
          smooth={true}
          duration={500}
          className={`cursor-pointer px-4 py-2 rounded-md border text-center ${
            activeTab === "Description"
              ? "bg-blue-100 border-blue-500"
              : "border-gray-300"
          }`}
          onClick={() => setActiveTab("Description")}
        >
          Description
        </Link>
        <Link
          to="Instructor"
          smooth={true}
          duration={500}
          className={`cursor-pointer px-4 py-2 rounded-md border text-center ${
            activeTab === "Instructor"
              ? "bg-blue-100 border-blue-500"
              : "border-gray-300"
          }`}
          onClick={() => setActiveTab("Instructor")}
        >
          Instructor
        </Link>
        <Link
          to="Syllabus"
          smooth={true}
          duration={500}
          className={`cursor-pointer px-4 py-2 rounded-md border text-center ${
            activeTab === "Syllabus"
              ? "bg-blue-100 border-blue-500"
              : "border-gray-300"
          }`}
          onClick={() => setActiveTab("Syllabus")}
        >
          Syllabus
        </Link>
        <Link
          to="Reviews"
          smooth={true}
          duration={500}
          className={`cursor-pointer px-4 py-2 rounded-md border text-center ${
            activeTab === "Reviews"
              ? "bg-blue-100 border-blue-500"
              : "border-gray-300"
          }`}
          onClick={() => setActiveTab("Reviews")}
        >
          Reviews
        </Link>
      </div>

      {/* Sections */}
      <div className="px-4 md:px-8 py-4">
        <Element
          name="Description"
          className="mt-4 w-full md:w-[75%] lg:w-[60%] "
        >
          <Description />
        </Element>

        <Element name="Instructor" className="mt-4 w-full ">
          <Instructor />
        </Element>

        <Element name="Syllabus" className="mt-4 w-full  ">
          <Syllabus />
        </Element>

        <Element name="Reviews" className="mt-4 w-full ">
          <Reviews />
        </Element>
      </div>
    </>
  );
};

export default Tab;
