

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getApiData } from "../lib/api/getApiData";
import { Section, SectionValue } from "../types/ielts-course-types";


  

export async function CourseDetails() {
  const apidata = await getApiData();
  const { data } = apidata;
  const courseDetailsSection = data.sections.find(
    (section: Section) => section.type === "about"
  );
  const courseDetails: SectionValue[] = courseDetailsSection?.values || [];

  return (
    <div className="relative bottom-[650px] left-36">
      <h2 className="text-xl font-semibold mb-3">
        {courseDetailsSection?.name}
      </h2>

      <Accordion
        type="single"
        collapsible
        className="max-w-2xl w-full shadow-xl rounded-md border border-gray-300 p-6"
        defaultValue="item-1"
      >
        {courseDetails.map((courseDetail, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index} className="mb-4">
            <AccordionTrigger className="font-semibold text-lg text-gray-800">
              <div
                dangerouslySetInnerHTML={{ __html: courseDetail.title }}
              />
            </AccordionTrigger>
            <AccordionContent className="text-gray-800">
              <ul
                className="list-disc pl-6 space-y-2"
                dangerouslySetInnerHTML={{ __html: courseDetail.description }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
