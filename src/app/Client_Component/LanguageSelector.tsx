'use client';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LanguageSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentLang = searchParams.get('lang') || 'en';

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', selectedLang);
    router.replace(`/?${params.toString()}`);
  };

  return (
    <div>
      <select
        name="lang"
        value={currentLang}
        onChange={handleChange}
        className="border-4 border-cyan-400 p-2 rounded text-cyan-400 bg-white mt-20"
      >
        <option value="en">English</option>
        <option value="bn">Bangla</option>
      </select>
    </div>
  );
}
