import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
async function page() {
    let url=await fetch('https://jsonserver.reactbd.com/accessories')
    let res=await url.json()
  return (
    <div>
        <Image className='mt-2' src="data:image/jpeg;base64,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" alt='accessories image' width={1400} height={1400} ></Image>

        <div className='text-center text-lg  md:text-2xl lg:text-3xl pt-4 font-medium'>OUR ACCESSORIES</div>
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