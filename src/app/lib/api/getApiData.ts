export async function getApiData(lang: string = 'bn') {
    const url = `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`;
    const res = await fetch(url);
  
    if (!res.ok) throw new Error('Failed to fetch data');
  
    const data = await res.json();
    return data;
  }
  