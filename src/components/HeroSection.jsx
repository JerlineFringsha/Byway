import modelImage1 from "../assets/Group 8.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row ml-5 items-center p-8">
      <div className="w-full max-w-lg mb-8 md:mb-4 lg:mb-0 xl:mb-0 2xl:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold mb-4">
          Unlock Your Potential with Byway
        </h1>
        <p className="mb-4 text-gray-400 text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
          Welcome to Byway, where learning knows no bounds. We believe that
          education is the key to personal and professional growth, and we are
          here to guide you on your journey to success.
        </p>
        <Link to="/course">
          <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
            Start your instructor journey
          </button>
        </Link>
      </div>
      <div className="flex justify-center">
        <img
          src={modelImage1}
          alt="Model 1"
          className="w-[60%]  transition duration-300"
        />
      </div>
    </div>
  );
};
export default HeroSection;
