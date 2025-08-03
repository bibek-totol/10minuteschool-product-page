'use client';

import { useRouter, useSearchParams } from "next/navigation";


export default function StateValue() {
  

    const router = useRouter();
    const searchParams = useSearchParams();
    const currentLang = searchParams.get("lang") || "bn";
  
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newLang = e.target.value;
      const params = new URLSearchParams(searchParams.toString());
      params.set("lang", newLang);
      router.push(`?${params.toString()}`);
    };

  return (
    <div className="w-full mt-6 mb-4 lg:mb-0">
      <label
        htmlFor="language"
        className="text-black lg:text-white block mb-2 text-sm font-medium"
      >
        🌐 Select Language
      </label>
      <select
        id="language"
        name="language"
        className="text-white block bg-cyan-500 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        value={currentLang}
        onChange={handleChange}
      >
        <option value="bn">বাংলা</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
