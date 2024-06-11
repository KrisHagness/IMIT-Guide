"use client"
import { useEffect, useState } from 'react'
import { client } from '../../../../sanity/lib/client'
import Navbar from '@/components/navbar/main-navbar'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/footer/footer'



const AzurePV= () => {
  const [AzurePVData, setAzurePVData] = useState(null)

  const builder = imageUrlBuilder(client)


  useEffect(() => {
    client
      .fetch(`*[_type == "drift" && title == "Azure"]`)
      .then((data) => setAzurePVData(data))
      .catch(console.error)
  }, [])

  if (!AzurePVData) return <div>Loading...</div>

  return (
    <div className='flex bg-dark w-screen flex-col min-h-screen  '>
      <div className="w-screen z-50"> <Navbar/> </div>
  
      <div className='text-gray-50 flex justify-center flex-col mt-24 w-screen text-center px-12'>
        <h1 className='text-4xl text-gray-50 font-serif'>Azure</h1>
        <div className='flex justify-center items-center'>
        {AzurePVData.map((item: any, index: number) => (
            <div key={index} className='mt-12 flex justify-center flex-col item-center text-center relative mx-6'>
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-70   "></div>
                
                
                <div className='relative bg-dark rounded-xl flext justify-center items-center h-[30rem]'>
                    {item.image && (
                    <div className='flex justify-center'>
                        <Image src={builder.image(item.image).url()} alt={item.title} width={128} height={128} className=' object-cover h-[8rem] mt-8' />
                    </div>
                    )}
                    <div className='flext justify-center item-center max-w-[60rem]'>
                        <h2 className='mt-4 text-xl font-bold'>{item.title}</h2>
                        <p className='m-4'>{item.description}</p>
                        <p className='mx-12 p-2 text-wrap '>{item.content}</p>


                        

                            
                    </div>

                </div>
                
            </div>
            ))}
        </div>
      </div>
            <div className=' mt-48 '><Footer/></div>
        </div>
  )
}

export default AzurePV