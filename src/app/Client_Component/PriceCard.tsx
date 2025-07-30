"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Thumbs, Scrollbar, Zoom, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/scrollbar";
import "swiper/css/zoom";

import Image from "next/image";
import  { CircleChevronLeft, CircleChevronRight } from "lucide-react";

export default function PriceCard() {
  const [apidata, setdata] = useState<any>([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course"
        );
        const json = await response.json();
        console.log("Response JSON:", json);
        setdata(json);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    getData();
  }, []);

  return (
    <div className="">
      <div className="w-[350px]  left-1/2   bg-white shadow-xl  overflow-hidden border border-gray-200  ">


      <div className="custom-prev absolute top-30  z-10 transform -translate-y-1/2  bg-opacity-50 text-white p-2  cursor-pointer hover:bg-opacity-80">
      <CircleChevronLeft className="w-10 h-10"  />
  </div>
  <div className="custom-next absolute  top-30 right-[370px] z-10 transform -translate-y-1/2  bg-opacity-50 text-white p-2  cursor-pointer hover:bg-opacity-80">
  <CircleChevronRight className="w-10 h-10" />
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
  {apidata?.data?.media?.map((item: any, index: number) => {
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
          {apidata?.data?.media?.map((item: any, index: number) => {
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
            {apidata?.data?.checklist?.map((coursefeature: any) => (
              <li className="flex items-center gap-2">
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
    </div>
  );
}
