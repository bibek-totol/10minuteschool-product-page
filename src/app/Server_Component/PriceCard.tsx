'use client';

import { CheckCircle, Clock, BookOpen, Video, FileText, Users } from 'lucide-react';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function PriceCard() {
  return (
    <div className=" max-w-[350px]   bg-white shadow-xl  overflow-hidden border border-gray-200 ">
      {/* Thumbnail */}
      <div className="relative h-56 w-full">
        <Image
          src="/ielts-banner.jpg" // Replace with your image path
          alt="IELTS Course"
          fill
          className="object-cover"
        />
        {/* Overlay elements */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white p-2 rounded-full shadow-lg">
            <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 4l10 6-10 6V4z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Gallery Preview */}
      <div className="flex justify-center items-center gap-2 px-4 py-2 overflow-x-auto">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i} className="w-16 h-10 bg-gray-100 rounded-md"></div>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="px-6 py-4">
        <div className="text-xl font-semibold text-gray-900">
          ৳3850 <span className="line-through text-gray-400 ml-2 text-sm">৳5000</span>
        </div>
        <div className="text-sm text-orange-600 font-medium my-1">1150 ৳ discount</div>

        {/* Button */}
        <button className="w-full mt-3 bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition">
          Buy Course
        </button>
      </div>

      {/* Features List */}
      <div className="px-6 pb-6">
        <h3 className="text-md text-black font-bold mb-3">This course includes:</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-center gap-2">
            <Users className="w-4 h-4 text-green-600" /> 30,018 students enrolled
          </li>
          <li className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-green-600" /> 50 hours total
          </li>
          <li className="flex items-center gap-2">
            <Video className="w-4 h-4 text-green-600" /> 450+ videos
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" /> 10 quizzes + 10 mock tests
          </li>
          <li className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-green-600" /> 30 lecture PDFs
          </li>
          <li className="flex items-center gap-2">
            <Video className="w-4 h-4 text-green-600" /> 25 video lectures
          </li>
          <li className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-green-600" /> 1 free hardcopy book
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" /> Facebook support group
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" /> Lifetime course access
          </li>
        </ul>
      </div>
    </div>
  );
}
