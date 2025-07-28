import LanguageSelector from "./Client_Component/LanguageSelector";
import Banner from "./Server_Component/Banner";
import Course from "./Server_Component/Course";
import { CourseDetails } from "./Server_Component/CourseDetails";
import { CourseExclusiveFeature } from "./Server_Component/CourseExclusiveFeature";
import CourseHighlights from "./Server_Component/CourseHighlights";


export default function Home({ searchParams }: { searchParams: { lang?: string } }) {
  const lang = searchParams.lang || 'en';

  return (
    <div className="min-h-screen w-full overflow-x-hidden mx-auto">
      {/* Make it visible somewhere in the page */}
      <div className="fixed top-5 right-5 z-50">
        <LanguageSelector />
      </div>

      <Banner lang={lang} />
      <Course lang={lang} />
      <CourseHighlights lang={lang} />
      <CourseDetails lang={lang} />
      <CourseExclusiveFeature lang={lang} />
    </div>
  );
}
