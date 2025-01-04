import React from 'react'
import Link from 'next/link'
import { Facebook, Youtube } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
function Footer() {
  return (
    <div className='w-[500px] md:w-[770px] lg:w-[1440px] h-[1000px] md:h-[400px] bg-black md:flex mt-44'>

        <div className='pt-28 md:pl-3 pl-40  '>
            <h1 className='text-white text-base md:text-1xl font-normal pb-4'>Recommended</h1>
            <p className='text-gray-400  text-[10px] md:text-[12px]'>iphone 15 plus</p>
            <p className='text-gray-400  text-[10px] md:text-[12px]'>iphone 16 pro</p>
            <p className='text-gray-400  text-[10px] md:text-[12px]'>iphone 14 </p>
            <p className='text-gray-400  text-[10px] md:text-[12px]'>iphone 13 </p>
            <p className='text-gray-400  text-[10px] md:text-[12px]'>iphone 12 </p>
            <p className='text-gray-400  text-[10px] md:text-[12px]'>iphone 11 </p>
        </div>
        <div className='md:pt-28 pt-20 md:pl-12 lg:pl-32 pl-40'  >
        <h1 className='text-white text-base md:text-1xl font-normal pb-4'>Support</h1>
        <p className='text-gray-400 text-[10px] md:text-[12px]'>FAQ</p>
        <p className='text-gray-400 text-[10px] md:text-[12px]'>Troubleshooting</p>
        </div>

        <div className='md:pt-28 pt-20 md:pl-12 lg:pl-32 pl-40'  >
        <h1 className='text-white text-base md:text-1xl font-normal pb-4'>About iphone</h1>
        <p className='text-gray-400 text-[10px] md:text-[12px]'>Our brand</p>
        <p className='text-gray-400 text-[10px] md:text-[12px]'>Newsroom</p>
        </div>

        <div className='md:pt-28 pt-20 md:pl-12 lg:pl-32 pl-40'  >
        <h1 className='text-white text-base md:text-1xl font-normal pb-4'>Contact iphone</h1>
        <p className='text-gray-400 text-[10px] md:text-[12px]'><Link href="/">Whatsapp</Link></p>
        <p className='text-gray-400 text-[10px] md:text-[12px]'><Link href="https://support.apple.com/iphone/repair">https://support.apple.com <span className='hidden lg:hidden'><br /></span>/iphone/repair</Link></p>
        </div>

        <div className='md:pt-28 pt-20 md:pl-12 lg:pl-32 pl-40'  >
        <h1 className='text-white text-base md:text-1xl font-normal pb-4'>03182158057</h1>
        <p className='text-gray-400 text-[10px] md:text-[12px]'>mon - sat 9am to 5 pm</p>
        <div className='flex mt-2 gap-2 '>
            <span className=' border w-8 h-8 pl-[2px] pt-1 border-black rounded-full bg-white'><Link href="https://www.facebook.com/apple/" target='_blank'><Facebook/></Link></span>
            <span className=' border w-8 h-8 pl-[3px] pt-1 border-black rounded-full bg-white'><Link target='_blank' href="https://twitter.com/apple?"><Twitter/></Link></span>
            <span className=' border w-8 h-8 pl-[3px] pt-[3px] border-black rounded-full bg-white'><Link href="https://www.instagram.com/apple/?hl=en" target='_blank'><Instagram/></Link></span>
            <span className=' border w-8 h-8 pl-[3px] pt-[3px] border-black rounded-full bg-white'><Link href="https://www.youtube.com/apple" target='_blank'><Youtube/></Link></span>
       
        </div>
        </div>

    </div>
  )
}

export default Footer