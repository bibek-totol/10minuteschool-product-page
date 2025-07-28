import Banner from "./Server_Component/Banner";
import Course from "./Server_Component/Course";
import { CourseDetails } from "./Server_Component/CourseDetails";
import CourseHighlights from "./Server_Component/CourseHighlights";


export default function Home() {
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden  mx-auto">
    <Banner/>
    <Course/>
    <CourseHighlights/>
     <CourseDetails/>
     
    </div>
  );
}
