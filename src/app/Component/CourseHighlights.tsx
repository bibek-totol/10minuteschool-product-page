
import { CheckCircle2 } from "lucide-react";

const points = [
  "IELTS পরীক্ষার প্রস্তুত সেকশনের প্রশ্ন ও উত্তরের ধরন, টাইম ম্যানেজমেন্ট সম্পর্কের্ণ গুরুত্বপূর্ণ টিপস, ট্রিকস ও স্ট্রেটেজি",
  "IELTS Speaking test-এ Advanced/Power Words ব্যবহার করে কোনো ট্রিকে নিংদুষ্টভাবে কথা বলার প্রবৃতি",
  "IELTS পরীক্ষা চালাকাল নির্ধারিত সময়ের সঠিক ব্যবহারের মাধ্যমে ভালো স্কোর অর্জননের কৌশল",
  "IELTS Writing Task 1 ও IELTS Writing Task 2 এর ক্ষেত্র ভালো স্কোর পেতে সহায়ক Structure ও Essay type",
  "সেরা IELTS প্রস্তুতি নিতে প্ৰতিটি মুডিউল-নির্দেশ-কলপাতে সৃক্তিগ বিষয়াবী নিয়ে বিস্তারিত ধারণা",
  "IELTS Reading এবং IELTS Listening Mock Test এর মাধ্যমে IELTS পরীক্ষা বিষয়ে এক্সপার্ট গাইড ও Band Score সম্পর্কে পোর্ণ্ণ ধারণা"
];

const CourseHighlights = () => {
  return (
    <div className="relative bottom-[700px] left-36">
     <h2 className="col-span-full text-xl font-semibold text-gray-800 mb-2">
        কোর্সটি করে যা শিখবেন
      </h2>
    <div className="bg-white rounded-xl border p-6 shadow-md max-w-2xl  grid md:grid-cols-2 gap-6">
      {points.map((point, index) => (
        <div key={index} className="flex items-start space-x-2">
          <CheckCircle2 className="text-blue-600 mt-1 w-5 h-5" />
          <p className="text-gray-700 leading-relaxed">{point}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CourseHighlights;
