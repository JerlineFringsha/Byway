import Categories from "../components/Categories";
import Courses from "../components/Courses";
import CourseCount from "../components/CourseCount";
import HeroSection from "../components/HeroSection";
import Instructors from "../components/Instructors";
import Testimony from "../components/Testimony";
import Checkout from "../components/Checkout";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <HeroSection />
        <CourseCount />
        <Categories />
        <Courses />
        <Instructors />
        <Testimony />
        <Checkout />
      </div>
    </>
  );
};

export default Home;
