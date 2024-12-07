// import { useParams } from "react-router-dom";
import Introduction from "../components/page-2/Introduction";
import Testimony from "../components/Testimony";
import Course from "../components/Courses";
import Tab from "../components/page-2/Tab";
import Breadcrumbs from "../components/page-2/Breadcrumbs";

const CoursePage = () => {
  // const { id } = useParams();

  return (
    <>
      <div className="overflow-hidden">
        <Breadcrumbs />
        <Introduction />
        <Tab />
        <Testimony />
        <Course />
      </div>
    </>
  );
};

export default CoursePage;
