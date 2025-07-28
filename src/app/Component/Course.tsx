
import Image from "next/image";
import { PlayCircle, FileText, BookOpenCheck, VideoOff } from 'lucide-react';
import { getApiData } from "../lib/api/getApiData";

export default async function Course() {
    const apidata = await getApiData();
    console.log(apidata);
    const { data } = apidata;


    const featuresSection = data.sections.find((section:any) => section.type === 'features');
    const features = featuresSection?.values || [];
    console.log(features);

  return (
    <section className="w-full max-w-2xl  px-4 py-10 space-y-10 relative bottom-[700px] left-36">
      
      {/* Instructor Section */}
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

      {/* Course Structure */}
      <div>
        <h2 className="text-xl font-semibold mb-4">{featuresSection.name}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#0f172a] text-white p-12 rounded-2xl">
          {/* Video Lectures */}
          <div className="flex items-start gap-4">
            <PlayCircle className="w-8 h-8 text-green-400 mt-1" />
            <div>
              <h4 className="font-semibold text-md mb-1">৫০+ ভিডিও লেকচার</h4>
              <p className="text-sm text-gray-300 leading-tight">
                IELTS Academic ও General Training এর Overview, Format এবং প্রশ্নের ধরন নিয়ে in-depth আলোচনা
              </p>
            </div>
          </div>

          {/* Lecture Sheets */}
          <div className="flex items-start gap-4">
            <FileText className="w-8 h-8 text-blue-400 mt-1" />
            <div>
              <h4 className="font-semibold text-md mb-1">৩০টি লেকচার শিট</h4>
              <p className="text-sm text-gray-300 leading-tight">
                Reading, Writing, Listening ও Speaking এর প্রতিটি স্কিল উন্নয়নের স্ট্র্যাটেজি এবং 600+ Vocabulary
              </p>
            </div>
          </div>

          {/* Mock Tests */}
          <div className="flex items-start gap-4">
            <BookOpenCheck className="w-8 h-8 text-yellow-400 mt-1" />
            <div>
              <h4 className="font-semibold text-md mb-1">রিডিং এবং লিসনিং মক টেস্ট</h4>
              <p className="text-sm text-gray-300 leading-tight">
                10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই
              </p>
            </div>
          </div>

          {/* Doubt-Solving Class */}
          <div className="flex items-start gap-4">
            <VideoOff className="w-8 h-8 text-red-400 mt-1" />
            <div>
              <h4 className="font-semibold text-md mb-1">ডাউট সলভিং লাইভ ক্লাস</h4>
              <p className="text-sm text-gray-300 leading-tight">
                সাপ্তাহিক Zoom ক্লাসে এক্সপার্ট টিচারের কাছে প্রশ্নের সমাধান এর সুযোগ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Free PDF Section */}
      <div
  className="rounded-2xl p-6 text-white flex flex-col lg:flex-row justify-between items-center gap-6 bg-cover bg-center"
  style={{
    backgroundImage: `url(${data.sections[4].values[0].background.image})`,
  }}
>
  <div className="flex-1">
    <Image
      src={data.sections[4].values[0].top_left_icon_img}
      alt="PDF icon"
      width={200}
      height={200}
    />
    <h3 className="text-lg font-semibold mb-2">IELTS Confirm 7+ Score (Guideline)</h3>
    <p className="text-sm mb-4">
      IELTS ভালো score করার সেরা Strategies জানতে সেরা গাইডলাইন।
    </p>
    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-4 py-2 rounded">
      ফ্রি PDF Download করুন
    </button>
  </div>

  <div className="flex-1 max-w-xs">
    <Image
      src={data.sections[4].values[0].thumbnail}
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
