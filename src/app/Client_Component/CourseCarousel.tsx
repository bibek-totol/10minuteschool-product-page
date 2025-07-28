"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CourseCarousel() {
  const tabs = [
    "যেভাবে সাজানো হয়েছে",
    "কোর্সটি করে যা শিখবেন",
    "কোর্স সম্পর্কে বিস্তারিত",
    "কোর্স এক্সক্লুসিভ ফিচার",
    "এই কোর্স"
  ];

  return (
    <div className="relative w-full px-8 py-4 bottom-[700px] left-36">
      <Carousel className="w-full max-w-5xl">
        <CarouselContent className="flex">
          {tabs.map((tab, index) => (
            <CarouselItem
              key={index}
              className="basis-auto shrink-0 px-2 cursor-pointer"
            >
              <div className="text-gray-600 text-base hover:text-green-600 border-b-2 border-transparent hover:border-green-500 pb-2 transition-all duration-200">
                {tab}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
