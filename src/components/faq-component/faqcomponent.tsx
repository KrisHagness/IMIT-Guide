"use client"
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
import { client } from '../../../sanity/lib/client'
import { useEffect, useState } from 'react'

const FAQ = () => {
    const [FaqData, setFaqData] = useState(null)
  
  
    useEffect(() => {
      client
        .fetch(`*[_type == "faq"]`)
        .then((data) => setFaqData(data))
        .catch(console.error)
    }, [])
  
    if (!FaqData) return <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white/50 mx-auto my-2"></div>

  

    return (
        <div className='w-screen  flex flex-col item-center'>
    
        <div className='flex justify-center items-center flex-col px-28 '>
            <div className=' text-center'>
                <h1 className='text-gray-50 text-2xl font-serif'>F.A.Q | Ofte stilte spørsmål</h1>
            </div>
                <div className='flex relative group  text-gray-50 mt-[4.5rem] text-center  items-center justify-center flex-col'>
                        <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-70 '></div>
                        
                    <Accordion type="multiple" className='w-[22rem] sm:w-[30rem] relative bg-dark rounded-lg px-4 text-start'>
                        {FaqData.map((item: any, index: number) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>{item.title}</AccordionTrigger>
                                <AccordionContent>
                                    <div>{item.content}</div>
                                    {item.link && (
                                        <div className='flex w-full justify-center items-center'> 
                                            <div className="relative mt-8">
                                                    <div className="absolute -inset-0.5  bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-70  "></div>
                                                    <button 
                                                    className="relative bg-dark hover:scale-[1.02] hover:bg-darkb text-gray-50 font-medium py-2 px-10 rounded-lg"
                                                    onClick={() => window.location.href = item.link}>
                                                    Les mer
                                                    </button>
                                                </div>
                                            </div>
  
                                        
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
    
        </div>
        
        </div>
      )
}

export default FAQ;
