
'use server';

import { getApiData } from "./lib/api/getApiData";



export async function addlanguage(formData: FormData) {
  
  const lang = formData.get('lang') as string;

  const apiData = await getApiData(lang);
  

 

}
