import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react';
async function page( props:any ) {
   
    let url=await fetch(`https://jsonserver.reactbd.com/amazonpro/${props.params.Singleproduct}`)
    let responce=await url.json()
    console.log(responce)
   console.log(props)
  return (
    <div className='lg:flex' >
      <div className='relative left-2 md:left-5 lg:left-0' >
        
        <Image className='lg:ml-3 mt-4' src={responce.image} alt="image" width={700} height={700}></Image>
      </div>
      <div className=' lg:mt-10 '>
       <p className='text-4xl text-center pl-7 md:pl-1  font-semibold  text-gray-500'>{responce.title}</p>
       <p className='text-3xl text-center pl-7 md:pl-1 font-semibold pt-3 lg:pt-3'>{responce.brand}</p>
       <p className='text-3xl text-center pl-7 md:pl-1 font-semibold pt-5 lg:pt-3'>${responce.price} <del className='text-red-800 text-2xl animate-pulse'>S{responce.previousPrice}</del></p>
       <p className='text-justify lg:text-justify pl-12 pt-4 px-2 lg:px-12 lg:pt-8 font-light'>{responce.description}</p>
       <div className='flex relative left-40 md:left-80 xl:left-[470px] text-white bg-red-700 hover:bg-red-600 mt-6 border-[2px] border-red-800 w-32 h-9 hover:font-bold hover:text-black'>
       <div className='pt-1 pl-2 ' ><ShoppingCart/> </div><button className='ml-[10px] text-1xl font-semibold'><Link href="">Buy now</Link></button>
       </div>
      </div>
      
        
    </div>
  )
}

export default page