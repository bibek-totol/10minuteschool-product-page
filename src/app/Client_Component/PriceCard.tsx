'use client';


import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import {useEffect, useState} from "react"



export default  function PriceCard() {

  const [apidata,setdata]= useState<any>([]);

  useEffect(() => {
    const  getData = async () => {
      try {
        const response = await fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course');
        const json = await response.json();
        console.log('Response JSON:', json);
        setdata(json);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    }
    getData();
  }, []);

  



  return (


    <div>
      
       

       






     
  
    




    <div className=" max-w-[350px]   bg-white shadow-xl  overflow-hidden border border-gray-200 ">
      

    <Carousel>
    

             <div>
                 <img src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737298483.png" />
                 
             </div>
             <div>
                 <img src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png" />
                 
             </div>
             <div>
                 <img src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737298483.png" />
                 
             </div>

             <div>
                 <img src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726736040872.png" />
                 
             </div>

             <div>
                 <img src="https://cdn.10minuteschool.com/images/catalog/media/QBz8FX4GE_w-HD_1718880944063.jpg" />
                 
             </div>

             <div>
                 <img src="https://cdn.10minuteschool.com/images/catalog/media/AvB2ibYd1z4-HD_1707647843136.jpg" />
                 
             </div>
         </Carousel>

      
     

      
      
      <div className="px-6 py-4 mt-10">
        <div className="text-xl font-semibold text-gray-900">
          ৳3850 <span className="line-through text-gray-400 ml-2 text-sm">৳5000</span>
        </div>
        <div className="text-sm text-orange-600 font-medium my-1">1150৳ discount</div>

       
        <button className="w-full mt-3 bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition">
          Buy Course
        </button>
      </div>

      
      <div className="px-6 pb-6">
        <h3 className="text-md text-black font-bold mb-3">This course includes:</h3>
        <ul className="space-y-2 text-sm text-gray-700">

          {
            apidata?.data?.checklist?.map((coursefeature: any) => (
              <li className="flex items-center gap-2">
                <img src={coursefeature.icon} className="w-4 h-4 text-green-600" />
                {coursefeature.text}
              </li>
            ))
          }
          
          
        </ul>
      </div>
      </div>
    </div>
  );
}
