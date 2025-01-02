import React from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react';
function Header() {
  return (
    <main>
        <nav className='hidden md:block md:w-[770px] lg:w-[1440px] h-[45px] bg-neutral-900 '>
          <div className='flex justify-center '>
          <h1 className='text-white md:text-xs lg:text-lg lg:pt-2 md:pt-4  relative md:right-20 lg:right-40'>ELECTRONIC STORE</h1>
          <div className='flex md:gap-5 lg:gap-10 md:mt-4 lg:mt-2 '>
          <Link href="/"><p className='text-gray-100 md:text-xs lg:text-base hover:text-white hover:underline hover:decoration-white hover:underline-offset-4 '>All products</p></Link>
          <Link href="/Phones"><p className='text-gray-100 md:text-xs lg:text-base hover:text-white hover:underline hover:decoration-white hover:underline-offset-4 '>Phones</p></Link>
          <Link href="/Phonecases"><p className='text-gray-100 md:text-xs lg:text-base hover:text-white hover:underline hover:decoration-white hover:underline-offset-4 '>Phone cases</p></Link>
          <Link href="/Accessories"><p className='text-gray-100 md:text-xs lg:text-base hover:text-white hover:underline hover:decoration-white hover:underline-offset-4 '>Accessories</p></Link>
          <Link href="/Watches"><p className='text-gray-100 md:text-xs lg:text-base hover:text-white hover:underline hover:decoration-white hover:underline-offset-4 '>Watches</p></Link>

         <Link href=""><span className='text-gray-100 relative lg:left-36 md:left-16 md:bottom-1 lg:top-[2px] hover:text-white'><Search/></span></Link> 
         <Link href=""><span className='text-gray-100 relative lg:left-36 md:left-20 md:bottom-1 lg:top-[2px] hover:text-white'><ShoppingBag/></span></Link> 
          </div>
          </div>
        </nav>



        <nav className='md:hidden w-[440px] h-[46px] bg-neutral-900 '>
            <div className='flex justify-between'>
              <h1 className='text-[14px] pt-3 pl-4 text-white'>PHONE STORE</h1>
              <DropdownMenu>
  <DropdownMenuTrigger className='text-gray-100 relative right-8 top-[4px]'><Menu/></DropdownMenuTrigger>
  <DropdownMenuContent className='text-gray-100 bg-neutral-900 hover:text-white hover:underline hover:decoration-white hover:underline-offset-4'>
    <DropdownMenuLabel className='text-gray-100 '>Amazonpro</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <Link href="/" ><DropdownMenuItem> All Products</DropdownMenuItem> </Link> 
    <DropdownMenuItem> <Link href="/Phones" >Phones</Link> </DropdownMenuItem>
    <DropdownMenuItem> <Link href="/Phonecases" >Phone cases</Link> </DropdownMenuItem>
    <DropdownMenuItem> <Link href="/Accessories" >Accessories</Link> </DropdownMenuItem>
    <DropdownMenuItem> <Link href="/Watches" >Watches</Link> </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

            </div>
        </nav>
    </main>
  )
}

export default Header