"use client"
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default function FaqComponent() {
  return (
    <div className='w-screen h-[30rem] flex flex-col item-center'>

    <div className='flex justify-center items-center flex-col px-28 '>
        <div className=' text-center'>
            <h1 className='text-gray-50 text-2xl font-serif'>F.A.Q | Ofte stilte spørsmål</h1>
        </div>
            <div className='flex relative group  text-gray-50 mt-[4.5rem] text-center  items-center justify-center '>
                    <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-70 '></div>

                <Accordion type="multiple" className='w-[30rem] relative bg-dark rounded-lg px-4 '>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Hva er IMIT guide?</AccordionTrigger>
                        <AccordionContent>
                        IMIT guide er en nettside som tilbyr informasjon, tips og veiledning til IT faget på IT og Medieproduksjon på Elvebakken VGS
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>Hvordan fungerer dashboardet?</AccordionTrigger>
                        <AccordionContent>
                        Dashboardet er kun tilgjengelig for administratorer for øyeblikket. Og brukes for å legge ut informasjon om de ulike fagene.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>Hvorfor mangler det mye informasjon</AccordionTrigger>
                        <AccordionContent>
                        Nettsiden er ikke helt ferdig enda, men det jobbes med å få gjort den ferdig og legge til nye funksjoner og informasjon
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>Hva er Mathais mobbeliste</AccordionTrigger>
                        <AccordionContent>
                        Dette er en liste over de beste ordene for å mobbe IM elever, laget av Mathias
                        </AccordionContent>
                    </AccordionItem>


                </Accordion>
            </div>

    </div>
    
    </div>
  )
}
