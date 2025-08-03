import Image from "next/image";
import bg from "../../../public/assets/bannerMain.jpeg";
import top from "../../../public/assets/bannertop.jpeg";
import { FaStar } from "react-icons/fa";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import StateValue from "../Client_Component/statevalue";


const PriceCard = dynamic(() => import("../Client_Component/PriceCard"));

export default async function Banner({data}:{data:any}) {
  
  

  const stripHtmlTags = (htmlString: string) => {
    return htmlString?.replace(/<[^>]*>/g, "");
  };

  return (
    <div className="w-full  h-auto bg-cover bg-center relative z-10">
      <Image
        className="w-full h-[50px] lg:h-[120px]"
        src={top}
        alt="Top Banner"
      />
      <Image
        className="relative z-10 w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
        src={bg}
        alt="Main Banner"
      />




      <div className="relative z-20 -mt-[200px] sm:-mt-[250px] md:-mt-[300px] lg:-mt-[340px] flex flex-col lg:flex-row justify-center  gap-10 lg:gap-60 px-4 sm:px-8 md:px-16 lg:px-20 pt-6 md:pt-0">
        <div className="text-white max-w-xl mb-6 lg:mb-0 lg:mr-10 ">
          <h1 className="text-[15px] md:text-4xl font-bold mb-3">
            {data?.title}
          </h1>
          <div className="mb-3 flex gap-3 items-center flex-wrap">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className="text-yellow-500 text-base sm:text-[12px] md:text-xl"
                />
              ))}
            </div>
            <p className="text-[11px] md:text-lg">
              (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
            </p>
          </div>

          <p className="text-gray-300 text-[11px] md:text-sm">
            {data?.description && stripHtmlTags(data?.description)}
          </p>
        </div>



        


        <div className="w-full sm:w-auto ">

        <StateValue />
          <Suspense
            fallback={<div className="">Loading price card...</div>}
          >
            <PriceCard data={data} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
