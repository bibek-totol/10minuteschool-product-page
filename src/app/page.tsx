
import Banner from "./Server_Component/Banner";
import Course from "./Server_Component/Course";
import { CourseDetails } from "./Server_Component/CourseDetails";
import { CourseExclusiveFeature } from "./Server_Component/CourseExclusiveFeature";
import CourseHighlights from "./Server_Component/CourseHighlights";
import { getApiData } from "./lib/api/getApiData";

interface Props {
  searchParams?: {
    lang?: string;
  };
}


export default async function Home({ searchParams }: Props) {

  const lang = searchParams?.lang || "bn";
  const apiData = await getApiData(lang);
  const { data } = apiData;
  

  return (
    <div className="min-h-screen w-full overflow-x-hidden mx-auto">
      
      

      <Banner data={data} />
      <Course data={data}   />
      <CourseHighlights data={data} />
      <CourseDetails data={data} />
      <CourseExclusiveFeature data={data} />
    </div>
  );
}