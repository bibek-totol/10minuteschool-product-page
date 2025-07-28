
import Image from "next/image";
import bg from "../../../public/assets/bannerMain.jpeg";
import top from "../../../public/assets/bannertop.jpeg";
import { FaStar } from "react-icons/fa";

import { getApiData } from "../lib/api/getApiData";
import PriceCard from "./PriceCard";


export default async function Banner (){

  const apidata = await getApiData();
  console.log(apidata);
  const { data } = apidata;
  
  

  const stripHtmlTags = (htmlString: string) => {
    return htmlString?.replace(/<[^>]*>/g, '');
  };

  return (
    <div className="w-full h-auto bg-cover bg-center relative z-10">
      
      <Image className="w-full h-[50px] lg:h-[120px]" src={top} alt="Top Banner" />
      <Image className="relative z-10 w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]" src={bg} alt="Main Banner" />

      
      <div className="relative z-20 bottom-[370px] flex flex-col lg:flex-row  justify-center items-center md:items-center gap-6 px-4 sm:px-8 md:px-16 lg:px-20 pt-6 md:pt-0">
        
        
        <div className="mb-[350px] text-white max-w-xl">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3">{data?.title}</h1>

          <div className="mb-3 flex gap-3 items-center flex-wrap">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-base sm:text-lg md:text-xl" />
              ))}
            </div>
            <p className="text-sm sm:text-base md:text-lg">(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</p>
          </div>

          <p className="text-gray-300 text-sm sm:text-base">{data?.description && stripHtmlTags(data?.description)}</p>
        </div>

        
        <div className="">
          <PriceCard/>
        </div>
      </div>
    </div>
  );
};


