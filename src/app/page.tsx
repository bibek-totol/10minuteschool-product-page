import Banner from "./Component/Banner";
import Course from "./Component/Course";


export default function Home() {
  
  return (
    <div className="min-h-screen max-w-full mx-auto md:max-w-screen lg:max-w-[1550px] border-2 border-black">
    <Banner/>
    <Course/>
     
     
    </div>
  );
}
