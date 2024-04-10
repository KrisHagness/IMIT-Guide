"use client"
import { useEffect, useState } from 'react'
import { client } from '../../../../sanity/lib/client'
import Navbar from '@/components/navbar/main-navbar'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/footer/footer'



const TailwindPV= () => {
  const [TailwindPVData, setTailwindPVData] = useState(null)

  const builder = imageUrlBuilder(client)


  useEffect(() => {
    client
      .fetch(`*[_type == "utvikling" && title == "TailwindCSS"]`)
      .then((data) => setTailwindPVData(data))
      .catch(console.error)
  }, [])

  if (!TailwindPVData) return <div>Loading...</div>

  return (
    <div className='flex bg-dark w-screen flex-col min-h-screen  '>
      <div className="w-screen z-50"> <Navbar/> </div>
  
      <div className='text-gray-50 flex justify-center flex-col mt-24 w-screen text-center px-12'>
        <h1 className='text-4xl text-gray-50 font-serif'>TailwindCSS</h1>
        <div className='flex justify-center items-center'>
        {TailwindPVData.map((item: any, index: number) => (
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

        <div className='w-full flex justify-center items-center text-center mt-16 px-16 mb-20 flex-col'>
             <h3 className='text-gray-50 text-xl m-4 mb-8'>Eksempler på bruk av tailwind:</h3>
            
            <div className='max-w-[30rem] relative'>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-70   "></div>
                <div className="mockup-browser border border-gray-800 bg-darkb text-gray-400 relative">
                    <div className="mockup-browser-toolbar">
                        <div className="input border border-gray-800">http://localhost:3000</div>
                    </div>
                    <div className="flex justify-center flex-col text-center px-4 py-16 border-t border-gray-800">

                        <div className='text-gray-400 bg-gray-800 rounded-xl p-2 flex-wrap max-w-[24rem] md:max-w-[32rem]'>
                            <h1 className='font-bold text-lg md:text-xl font-serif mb-2'>Hei!</h1>
                            <p className='flex px-4 flex-wrap'>Dette er en demonstrasjon over hvor mye bedre 
                            det er å bruke tailwindCSS enn vanlig CSS i egen fil. </p>
                            <button className='rounded-xl text-gray-300 bg-gray-600 px-4 py-1 my-2 hover:bg-gray-900 
                            hover:text-gray-50 hover:scale-105 transition'>Klikk meg!</button>
                        </div>
                        
                    </div>
                </div>

                

 
                {/* <div className="custom-div">
                    <h1 className="custom-heading">Hei!</h1>
                        <p className="custom-paragraph">Dette er en demonstrasjon over hvor mye bedre det er å 
                        bruke TailwindCSS enn vanlig CSS i egen fil.</p>
                    <button className="custom-button">Klikk meg!</button>
                </div> */}

                
                                
                                
                                
            </div>


            <div className='w-screen flex flex-col my-24'>
                        <div className=' flex justify-center items-center text-center mb-14 flex-col '>
                            <h3 className='text-gray-50 text-2xl mb-4 font-serif'>TailWindCSS:</h3>
                            <div className='relative'>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-900 to-sky-900 rounded-lg blur opacity-60   "></div>
                                <Image src='/tailwindexample3.png' width={600} height={300} alt='TailwindCSS logo' className='rounded-lg relative' />

                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h3 className='text-gray-50 text-2xl mb-4 font-serif'>Standard CSS og HTML:</h3>
                            <div className='relative'>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-900 to-sky-900 rounded-lg blur opacity-60   "></div>
                                <Image src='/html.png' width={600} height={300} alt='TailwindCSS logo' className='rounded-tl-lg rounded-tr-lg relative' />
                                <Image src='/css.png' width={600} height={300} alt='TailwindCSS logo' className='rounded-bl-lg rounded-br-lg  relative' />
                        
                            </div>
                          </div>
                </div>


                <div className='Installere text-gray-50 flex flex-col mb-24 relative max-w-[40rem] '>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-70   "></div>
                
                    <div className='relative bg-dark rounded-xl px-8 py-4'>
                        <h3 className='text-bold text-xl font-serif mb-10'> Hvordan installere TailwindCSS?</h3>
                        <p className=''>For å installere TailwindCSS, kan du følge denne guiden:</p>

                        <h4 className='mt-12 text-lg mb-2 font-semibold'>Nytt NextJS prosjekt:</h4>
                        <p> Hvis du bruker NextJS, er Tailwind et valg når du lager ett nytt prosjekt, som du gjør ved å skrive følgende:</p>
                            <div className='flex justify-center items-center my-6'>
                                <div className="mockup-code w-[20rem]">
                                    <pre data-prefix="$"><code>npx create-next-app@latest </code></pre> 
                                </div>
                            </div>

                            <h4 className='mt-12 text-lg mb-2 font-semibold'>Tidligere prosjekter:</h4>
                            <p> Hvis du alleredet har et prosjekt du vil legge Tailwind til i, kan du ved bruk av rammeverk som NextJS og Svelte, skrive følgende</p>

                                <div className='flex justify-center items-center my-6 text-start'>
                                    <div className="mockup-code w-[26rem] text-start flex flex-col items-start justify-start">
                                        <pre data-prefix="$"><code>npm install -D tailwindcss postcss autoprefixer</code></pre> 
                                        <pre data-prefix="$"><code>npx tailwindcss init -p</code></pre>
                                    </div>
                                </div>
                                <a href='https://tailwindcss.com/'>  Hvis det ikke fungerer med en gang, må du legge til noen linjer i din global.css, les mer på Tailwind sin nettside.</a>
                            

                        



                    </div>
                    
                </div>
                        
                
               

                    {TailwindPVData.map((item: any, index: number) => (
                <div className='flex justify-center items-center text-center flex-col' key={index}>
                    <h3 className='text-gray-50 my-6 text-2xl font-serif'>Har du lyst til å lære mer om TailwindCSS?</h3>
                    <div className='relative group flex text-center items-center justify-center'>
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-70 group-hover:scale-110 transition  duration-200 "></div>
                        <Link href={item.link} className='relative rounded-xl bg-dark px-4 py-2 font-medium text-gray-100 hover:text-gray-50 hover:scale-110 transition duration-200 '>
                            Les mer om Tailwind
                        </Link>
                    </div>
                </div>
                ))}



{/* 
                <div className='mt-48 flex justify-center items-center'>
                    <div className="mockup-phone ">
                        <div className="camera"></div> 
                        <div className="display">
                            <div className="artboard artboard-demo phone-1">Hi.</div>

                            
                        </div>
                    </div>
                </div> */}
                


            <div className=' mt-48 '><Footer/></div>
        </div>
      
    </div>
    
  )
}

export default TailwindPV