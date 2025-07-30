
import { Check } from "lucide-react";
import { getApiData } from "../lib/api/getApiData";
import { Section, SectionValue } from "../types/ielts-course-types";




export default async function CourseHighlights () {
    const apidata  = await getApiData();
  const { data }  = apidata;

  const pointerSection = data.sections.find((section: Section) => section.type === "pointers");
  const pointers: SectionValue[] = pointerSection?.values || [];

  return (
    <div className="max-w-2xl sticky lg:relative left-30 top-0  lg:top-[-440px]   px-4 py-6">
  <h2 className="text-xl font-semibold mb-4">{pointerSection.name}</h2>
  <div className="bg-white rounded-xl border p-5 shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
    
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


