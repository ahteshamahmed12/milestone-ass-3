import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
async function page() {
  let url=await fetch('https://jsonserver.reactbd.com/phone')
  let res=await url.json()
  return (
    <div>
        <Image className='mt-2' src="data:image/jpeg;base64,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" alt='iphone phone' width={1400} height={1400}></Image>

        <div className='text-center text-lg  md:text-2xl lg:text-3xl pt-4 font-medium'>OUR PHONES </div>
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