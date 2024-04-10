
import React from 'react'
import DropdownNavbar from "@/components/navbar/dropdown-navbar-component"
import Link from 'next/link'
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <div className='min-w-screen flex justify-center item-center z-50 dark'>
      <motion.div className="w-[30rem] flex flex-row item-center justify-center text-lg font-medium bg-darkb bg-opacity-80 rounded-xl fixed"
    initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            bounce: 1,
         }}>
          
        <div className='relative group w-[30rem]'>
        <div className='absolute -inset-0.5  bg-gradient-to-r from-blue-600 to-cyan-600  rounded-lg blur opacity-50'></div>

          <div className='relative flex bg-dark bg-opacity-80 rounded-xl text-gray-300 '>
            <div className=' w-screen  flex  flex-row justify-evenly '>
              <div className='flex text-center justify-center items-center w-[112px] hover:bg-darkb2 rounded-lg text-gray-300 hover:text-gray-50'> 
                <Link href="/#Hjem"  >Hjem</Link> 
              </div>

                  <div className="sm:flex hidden text-center justify-center items-center bg-transparent"> <DropdownNavbar/> </div>

              <div className='flex text-center justify-center items-center  w-[112px] hover:bg-darkb2 rounded-lg text-gray-300 hover:text-gray-50'>
              <Link href="/studio"  >Dashboard</Link> 
              </div>
            </div>
          </div>
          
        
        </div>
        
    </motion.div>

    </div>
    
  )
}
