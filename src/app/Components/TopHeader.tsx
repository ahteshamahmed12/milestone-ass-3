import React from 'react'
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
function Topheader() {
  return (
    <main>
      
    <nav className='hidden md:block lg:w-[1440px] lg:h-[56px] md:w-[770px]  md:h-[56px] bg-black hover:bg-neutral-900 
    '>
       <div className='flex justify-center hover:ml-1 '>
            <Link   href="">
            <p className='text-white md:pt-4 md:text-sm md:font-normal'>Buy our new products and for further  detail about our products and company click the button to proceed further</p>   </Link>
            <span className='text-red-600 md:pt-[14px] pl-1 hover:ml-2  '><ArrowRight/></span>
          
        </div>
            
           
        </nav>

        <nav className='md:hidden w-[440px] h-[50px]  bg-black hover:bg-neutral-800'>
            <div className="flex" >
                <Link href="">
                <p className='text-white text-xs text-center leading-relaxed'>Buy our new products and for further  detail about our products and company click the button to proceed further</p>
                </Link>
                <span className='text-red-600 relative right-[79px] top-[19px]'><ArrowRight/></span>
                

                
                
            </div>
        </nav>
    </main>
  )
}

export default Topheader