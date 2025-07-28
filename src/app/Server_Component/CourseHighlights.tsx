
import { Check } from "lucide-react";
import { getApiData } from "../lib/api/getApiData";
import { Section, SectionValue } from "../types/ielts-course-types";




export default async function CourseHighlights () {
    const apidata  = await getApiData();
  const { data }  = apidata;

  const pointerSection = data.sections.find((section: Section) => section.type === "pointers");
  const pointers: SectionValue[] = pointerSection?.values || [];

  return (
    <div className="relative bottom-[700px] left-36">
     <h2 className="col-span-full text-xl font-semibold text-gray-800 mb-2">
        {pointerSection.name}
      </h2>
    <div className="bg-white rounded-xl border p-5 shadow-md max-w-2xl  grid md:grid-cols-2 gap-6">
      {pointers.map((pointer, index) => (
        <div key={index} className="flex items-start space-x-2">
          <Check className="text-blue-600 mt-1 w-10 h-10" />
          <p className="text-gray-700 leading-relaxed">{pointer.text}</p>
        </div>
      ))}
    </div>
    </div>
  );
};


