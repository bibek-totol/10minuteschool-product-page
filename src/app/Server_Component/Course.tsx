import Image from "next/image";
import { Section, SectionValue} from "../types/ielts-course-types";



export default async function Course({data}:{data:any}) {
  

  const featuresSection = data.sections.find((section: Section) => section.type === "features");
  const features: SectionValue[] = featuresSection?.values || [];


  const group_join_engagement_section = data.sections.find((section: Section) => section.type === "group_join_engagement");
  const group_join_engagement: SectionValue[] = group_join_engagement_section?.values || [];

  return (
<section className="max-w-2xl sticky lg:relative left-30 top-0 lg:top-[-630px] px-4 py-4 space-y-10">
  <div className="space-y-6">
    <h2 className="text-xl font-semibold">Instructor</h2>
    <div className="bg-white border shadow-xl rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4">
      
          <Image
            src={data.sections[2].values[0].image}
            alt="Munzereen Shahid"
            className="w-20 h-20 rounded-full object-cover"
            width={100}
            height={100}
          />
         <div className="text-center sm:text-left">
            <h3 className="text-md font-semibold">Munzereen Shahid</h3>
            <p className="text-sm text-gray-700 leading-5">
              MSc (English), University of Oxford (UK);<br />
              BA, MA (English), University of Dhaka;<br />
              IELTS: 8.5
            </p>
          </div>
        </div>
      </div>

      
      <div>
      <h2 className="text-xl font-semibold mb-4">{featuresSection.name}</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-[#0f172a] text-white p-6 sm:p-12 rounded-2xl">
          {features.map((item: any, index: number) => (
            <div key={index} className="flex items-start gap-4">
              <img src={item.icon} alt={item.title} className="w-8 h-8 mt-1" />
              <div>
                <h4 className="font-semibold text-md mb-1">{item.title}</h4>
                <p className="text-sm text-gray-300 leading-tight">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>




    
      <div
        className="rounded-2xl p-6 text-white flex flex-col lg:flex-row justify-between items-center gap-6 bg-cover bg-center"
        style={{
          backgroundImage: `url(${group_join_engagement[0].background?.image})`,
        }}
      >
        <div className="flex-1">
        <Image
         src={group_join_engagement[0].top_left_icon_img || '/default-icon.png'}
         alt="PDF icon"
        width={200}
         height={200}

         />
          <h3 className="text-lg font-semibold mb-2"> {group_join_engagement[0].title}</h3>
          <p className="text-sm mb-4">
           {group_join_engagement[0].description}
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-4 py-2 rounded">
           {group_join_engagement[0].cta?.text}
          </button>
        </div>

        <div className="flex-1 max-w-xs">
          <Image
            src={group_join_engagement[0].thumbnail || '/default-icon.png'}
            alt="PDF thumbnail"
            className="rounded-lg object-contain w-full"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
