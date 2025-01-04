import React from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react';
function page() {
  return (
    <div className='w-[440px] md:w-[770px] lg:w-[1440px] h-screen flex flex-col'>
        <h1 className='text-center text-sm md:text-lg lg:text-2xl pt-4 font-semibold'>Billing Detail</h1>
        <form action="">
        <label aria-required="true" id='name'  className='pl-4 pt-2' htmlFor="">First Name <span className='text-red-700 text-lg '>*</span></label> <br />
        <input id='name' name='name' required  className='w-[400px] h-[40px] border rounded-sm border-gray-200 bg-gray-200 outline-none ml-4 mt-3' type="text" />
         <br />
        <label aria-required="true" className='pl-4 ' htmlFor="">Street Address <span className='text-red-700 text-lg '>*</span></label> <br />
         <input required className='w-[400px] h-[40px] border rounded-sm border-gray-200 bg-gray-200 outline-none ml-4 mt-3' type="text" />

            <br />

            <label aria-required="true" className='pl-4 ' htmlFor="">Town/City <span className='text-red-700 text-lg '>*</span></label> <br />
         <input required className='w-[400px] h-[40px] border rounded-sm border-gray-200 bg-gray-200 outline-none ml-4 mt-3' type="text" />

<br />

<label aria-required="true" className='pl-4 ' htmlFor="">Phone number <span className='text-red-700 text-lg '>*</span></label> <br />
<input required className='w-[400px] h-[40px] border border-gray-200 bg-gray-200 outline-none ml-4 mt-3' type="text" />

<br />

<label  className='pl-4 ' htmlFor="">Email address <span className='text-red-700 text-lg '>*</span></label> <br />
         <input className='w-[400px] h-[40px] border border-gray-200 bg-gray-200 outline-none ml-4 mt-3' type="text" />

<br />

<input required className=' fill-red-700 text-white ml-4 mt-3' type="checkbox" /> <span className='pl-1 font-normal text-[12px]'>Save this information for faster-checkout next time.</span>

        </form>
        <div className='flex relative left-32 text-white bg-red-700 hover:bg-red-600 mt-6 border-[2px] border-red-800 w-32 h-9 hover:font-bold hover:text-black'>
       <div className='pt-1 pl-2  ' ><ShoppingCart/> </div><button className='ml-[10px] text-1xl font-semibold'><Link href="/Greet">Buy now</Link></button>
       </div>
    </div>
  )
}

export default page