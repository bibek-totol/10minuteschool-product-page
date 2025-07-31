"use client";

import {useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Thumbs, Scrollbar, Zoom, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/scrollbar";
import "swiper/css/zoom";

import Image from "next/image";
import  { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getApiData } from "../lib/api/getApiData";
import { Skeletonn } from "./Skeleton";

export default function PriceCard() {
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { isPending, data } = useQuery({
    queryKey: ['apidata'],
    queryFn: async () => getApiData(),
  })

  if (isPending) return <Skeletonn/>

  return (
    
    <div className="w-full md:mx-auto md:mt-12 max-w-[350px] bg-white shadow-xl overflow-hidden border border-gray-200 mx-auto sm:mx-0 relative">
  
<div className="custom-prev absolute top-[14%] lg:top-[14%] left-[3%]  md:left-[3%] lg:left-[2%] z-10  bg-white rounded-full w-[28px]">
  <CircleChevronLeft className="w-7 h-7 sm:w-8 sm:h-8 text-black drop-shadow-md" />
</div>


<div className="custom-next absolute top-[14%] lg:top-[14%] right-[3%]  md:right-[3%] lg:right-[3%] z-10 bg-white rounded-full w-[28px]">
  <CircleChevronRight className="w-7 h-7 sm:w-8 sm:h-8 text-black drop-shadow-md" />
</div>



      <Swiper
  modules={[Pagination, Thumbs, Scrollbar, Zoom, Navigation]}
  slidesPerView={1}
  pagination={{ clickable: true }}
  thumbs={{ swiper: thumbsSwiper }}
  scrollbar={{ draggable: true }}
  navigation= {{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
  zoom={true}
  style={{ width: "100%", height: "320px" }}
>
  {data?.data?.media?.map((item: any, index: number) => {
    if (index === 1) return null; 

    return (
      <SwiperSlide key={index}>
        {item.resource_type === "video" ? (
          <iframe
          className="w-full h-[270px]"
            
            src={`https://www.youtube.com/embed/${item.resource_value}`}
          />
        ) : (
          <Image
          className="w-full h-[220px] "
            width={400}
            height={200}
            src={item.resource_value}
            alt={`media-${index}`}
          />
        )}
      </SwiperSlide>
    );
  })}
  

</Swiper>





        <Swiper
          modules={[Thumbs,Pagination, Scrollbar]}
          onSwiper={(swiper) => setThumbsSwiper(swiper as any)}
          slidesPerView={3.5}
          spaceBetween={10}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          watchSlidesProgress
          style={{ marginTop: "10px", height: "100px" }}
        >
          {data?.data?.media?.map((item: any, index: number) => {
  const imageRegex = /\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i;
  const isImage = imageRegex.test(item.resource_value);
  if (index === 1) return null; 

  return (
    <SwiperSlide key={index}>
      {isImage ? (
        <Image
          width={400}
          height={100}
          src={item.resource_value}
          alt={`media-${index}`}
        />
      ) : (
        <Image
          width={400}
          height={100}
          src={item.thumbnail_url}
          alt={`media-${index}`}
        />
      )}
    </SwiperSlide>
  );
})}

        </Swiper>

        <div className="px-4 py-2 ">
          <div className="text-xl font-semibold text-gray-900">
            ৳3850{" "}
            <span className="line-through text-gray-400 ml-2 text-sm">
              ৳5000
            </span>
          </div>
          <div className="text-sm text-orange-600 font-medium my-1">
            1150৳ discount
          </div>

          <button className="w-full mt-3 bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition">
            Buy Course
          </button>
        </div>

        <div className="px-6 pb-6">
          <h3 className="text-md text-black font-bold mb-3">
            This course includes:
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            { data?.data?.checklist?.map((coursefeature: any, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <img
                  src={coursefeature.icon}
                  className="w-4 h-4 text-green-600"
                />
                {coursefeature.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    
  );
}
