import Image from "next/image";
import { getApiData } from "../lib/api/getApiData";
import { Section, SectionValue } from "../types/ielts-course-types";

type Props = {
  lang: string;
};


export default async function Course( { lang }: Props ) {
  const apidata  = await getApiData(lang);
  const { data }  = apidata;

  const featuresSection = data.sections.find((section: Section) => section.type === "features");
  const features: SectionValue[] = featuresSection?.values || [];


  const group_join_engagement_section = data.sections.find((section: Section) => section.type === "group_join_engagement");
  const group_join_engagement: SectionValue[] = group_join_engagement_section?.values || [];

  console.log(group_join_engagement);

  return (
    <section className="w-full max-w-2xl px-4 py-10 space-y-10 relative bottom-[700px] left-36">
     
      <div>
        <h2 className="text-xl font-semibold mb-3">কোর্স ইন্সট্রাক্টর</h2>
        <div className="bg-white border rounded-xl p-4 flex items-center gap-4">
          <Image
            src={data.sections[2].values[0].image}
            alt="Munzereen Shahid"
            className="w-16 h-16 rounded-full object-cover"
            width={100}
            height={100}
          />
          <div>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#0f172a] text-white p-12 rounded-2xl">
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
