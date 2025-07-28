import Banner from "./Component/Banner";
import Course from "./Component/Course";
import CourseHighlights from "./Component/CourseHighlights";


export default function Home() {
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden  mx-auto">
    <Banner/>
    <Course/>
    <CourseHighlights/>
     
     
    </div>
  );
}
