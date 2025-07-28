export async function getApiData() {
   
      const res = await fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course');
      const data = await res.json();
      return data;
    
  }
  