"use client"
import { useEffect, useState } from 'react'
import { client } from '../../../sanity/lib/client'
import Navbar from '@/components/navbar/main-navbar'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import Footer from '@/components/footer/footer'

const Utvikling = () => {
  const [utviklingData, setUtviklingData] = useState(null)

  const builder = imageUrlBuilder(client)

  useEffect(() => {
    client
      .fetch(`*[_type == "utvikling"]`)
      .then((data) => setUtviklingData(data))
      .catch(console.error)
  }, [])

  if (!utviklingData) return <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white/50 mx-auto my-2"></div>

  return (
    <div className='flex bg-dark w-screen flex-col  '>
      <div className="w-screen z-50"> <Navbar/> </div>
  
      <div className='text-gray-50 flex justify-center flex-col mt-24 w-screen text-center px-12'>
        <h1 className='text-4xl text-gray-50'>Utvikling</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>
        {utviklingData.map((item: any, index: number) => (
            <div key={index} className='mt-12 flex justify-center flex-col item-center text-center relative mx-6'>
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-70   "></div>
                
                
                <div className='relative bg-dark rounded-xl flext justify-center items-center h-[28rem] sm:h-[24rem]'>
                    {item.image && (
                    <div className='flex justify-center'>
                        <Image src={builder.image(item.image).url()} alt={item.title} width={128} height={128} className=' object-cover h-[8rem] mt-8' />
                    </div>
                    )}
                    <div className='flext justify-center item-center'>
                        <h2 className='mt-4 text-xl font-bold'>{item.title}</h2>
                        <p className='m-4'>{item.description}</p>
                            <div className='w-full flex justify-center'>
                            <div className='relative group flex justify-center items-center m-8 w-[7.774rem]'>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-70 group-hover:scale-110 transition  duration-200"></div>
                                <div className='relative '>
                                    <button onClick={() => window.location.href=item.lesMerRef} className=' rounded-xl bg-dark px-4 py-2 font-medium  text-gray-100 hover:text-gray-50 hover:scale-110 transition duration-200 ' >Les mer her</button>
                                </div>
                            </div>
                        </div>  
                    </div>

                </div>
                
            </div>
            ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Utvikling