import { Check } from "lucide-react";
import Image from "next/image";
import { getApiData } from "../lib/api/getApiData";
import { Section, SectionValue } from "../types/ielts-course-types";



export async function CourseExclusiveFeature( ) {
  const apidata = await getApiData(); 
  const { data } = apidata;
  const courseExclusiveSection = data.sections.find(
    (section: Section) => section.type === "feature_explanations"
  );
  const courseExclusive: SectionValue[] = courseExclusiveSection?.values || [];
  return (
    <div className="relative bottom-[610px] left-36">
      <h2 className="text-xl font-semibold text-gray-800">
        {courseExclusiveSection?.name}
      </h2>

      <div className="mt-6 max-w-2xl  p-6 bg-white rounded-xl shadow border space-y-10 ">
        {courseExclusive.map((item, index) => (
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2 space-y-3">
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <ul className="list-none space-y-2">
                {item?.checklist?.map((i, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="text-blue-600 mt-1 w-6 h-6" />
                    <span className="text-gray-700 leading-relaxed">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src={item.file_url || ""}
                alt="Video Lectures"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>
            {index === 0 && (
              <div className="col-span-full flex justify-center mt-4">
                <hr className="w-full h-[2px] bg-gray-300 border-0 rounded-full" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
