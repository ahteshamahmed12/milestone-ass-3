import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Youtube } from 'lucide-react';
async function page() {
    let url=await fetch('https://jsonserver.reactbd.com/Watch')
    let res=await url.json()
  return (
    <div>
        <Image className='mt-2' src="data:image/jpeg;base64,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" alt='watches' width={1400} height={1400}></Image>

         
        <div className='text-center text-lg  md:text-2xl lg:text-3xl pt-4 font-medium'>OUR WATCHES</div>
     <div className='max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 py-10 ml-20 md:ml-6 md:mr-4 lg:mr-0 lg:ml-44  '>
      {
        res.map((item:any)=>(
          <Link href={`${item._id}`} key={item._id}>
          <div className='border-[1px] border-gray-400 rounded-md overflow-hidden hover:border-gray-700 hover:shadow-2xl hover:shadow-gray-500 hover:scale-105 hover:font-bold ' >
          
          <Image src={item.image} alt='images' width={500} height={500} className='w-full h-80 object-cover'></Image>
         <div className=' pb-3 flex flex-col gap-1'>
          <p className='font-normal text-center '>{item.title}</p>
          <p className='font-semibold text-center'> ${item.price} <del className='text-red-800'>${item.previousPrice}</del> </p>
          <p className='font-semibold text-center'> {item.brand}</p>
          <p className='font-semibold text-center'> Quantity {item.quantity}</p>
          <p className='font-semibold text-center'> {item.isNew}</p>
         </div>
         <div className='flex gap-2 ml-14 lg:ml-1'>
          <button className='border w-28 h-8 bg-blue-700 text-white font-normal hover:font-semibold border-blue-700 rounded-full ml-1 mb-2'>Learn more</button>
          <button className='border w-24 h-8 hover:bg-blue-700 hover:text-white font-normal hover:font-semibold border-blue-700 rounded-full mb-2 mr-1  text-blue-700 '>Buy </button>
          
         </div>
      
         </div>
         </Link>
        ))
      }
     </div>
    </div>
  )
}

export default page