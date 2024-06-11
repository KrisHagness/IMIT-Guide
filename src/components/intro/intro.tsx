import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'



export default function Intro() {
    const controls = useAnimation();
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });
  
    React.useEffect(() => {
      if (inView) {
        controls.start({
          opacity: 1,
          scale: 1,
          transition: {
            type: "tween",
            duration: 0.2,
          },
        });
      }
    }, [controls, inView]);
  
   
  return (
    <section 
      id="intro" >
        <div className="flex flex-col items-center justify-center bg-dark overflow-hidden px-2 sm:px-0">
            <motion.div className='flex text-center flex-col'
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                bounce: 1,
             }}>
            <h1 className="text-4xl font-bold text-gray-50">Velkommen til veiledning for IT</h1>
            <h2 className="text-xl text-gray-50 mt-6 mb-8">
                Her finner du informasjon, tips og veiledning til IT
            </h2>
            </motion.div>
        
            <motion.div className='w-screen flex justify-center '
            id="info" 
            ref={ref}
            initial={{ opacity: 0, scale: 0}}
            animate={controls}>
                <Tabs defaultValue="utvikling" className="w-[320px] sm:w-[400px] m-4 mt-12 justify-center item-center">
                    <div className='relative group'>
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600  rounded-lg blur opacity-70 group-hover:scale-[1.04] transition duration-200 "></div>
                        <TabsList className='relative flex hover:scale-105 transition duration-200'>
                            <TabsTrigger value="utvikling" className=' py-1 w-[100px] sm:w-[126px] text-md hover:text-gray-50 hover:scale-[1.02]'>Utvikling</TabsTrigger>
                            <TabsTrigger value="brukerstøtte" className='py-1 w-[100px] sm:w-[126px] text-md hover:text-gray-50 hover:scale-105 '>Brukerstøtte</TabsTrigger>
                            <TabsTrigger value="drift" className='py-1 w-[100px] sm:w-[126px] text-md hover:text-gray-50 hover:scale-105'>Drift</TabsTrigger>
                        </TabsList>
                    </div>

                    <div className='flex justify-center w-[320px] sm:w-[400px] mt-10'>
                    <TabsContent value="utvikling" >
                        <div className='relative group'>
                        <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-70 '></div>
                            <div className='relative flex justify-center p-2 border-shadow rounded-xl bg-darkb flex-col text-center w-[320px] sm:w-[400px] items-center'>
                                <h3 className='text-xl font-bold mb-4 mt-2'>Utvikling</h3>
                                <p className=' px-2 text-center'>I IT-faget knyttes Utvikling til programmeringspråk og rammeverk som brukes til å lage et produkt. <span></span>
                                I tillegg kan testing, konsepter som smidig utvikling, og samarbeidsverktøy som Trello regnes som en del av utvikling </p>

                                <div className='relative group flex justify-center items-center m-8 w-[7.774rem]'>
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-70   "></div>
                                    <div className='relative '>
                                        <button onClick={() => window.location.href="/utvikling"} className=' rounded-xl border bg-darkb2 px-4 py-2 font-medium hover:bg-dark text-gray-100 hover:text-gray-50  ' >Les mer her</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    
                    <TabsContent value="brukerstøtte" >
                        <div className='relative group'>
                        <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-70 '></div>
                            <div className='relative flex justify-center p-2 border-shadow rounded-xl bg-darkb flex-col text-center w-[320px] sm:w-[400px] items-center'>
                                <h3 className='text-xl font-bold mb-4 mt-2'>Brukerstøtte</h3>
                                <p className=' px-2 text-center'>Brukerstøtte handler om kommunikasjon og veiledning, hvordan man kan veilede, formulere og ta i bruk nyttige verktøy til trygg og sikker utvikling. <span></span>
                                Noen eksempler kan være universiell utforming, smidig utvikling, Readme, og tilpasse produktet til målgruppen. Teknologi i samfunnet er også sentralt i Brukerstøtte faget.</p>

                                <div className='relative group flex justify-center items-center m-8 w-[7.774rem]'>
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-70   "></div>
                                    <div className='relative '>
                                        <button onClick={() => window.location.href="/brukerstotte"} className=' rounded-xl border bg-darkb2 px-4 py-2 font-medium hover:bg-dark  ' >Les mer her</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="drift" >
                        <div className='relative group'>
                        <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-70 '></div>
                            <div className='relative flex justify-center p-2 border-shadow rounded-xl bg-darkb flex-col text-center w-[320px] sm:w-[400px] items-center'>
                                <h3 className='text-xl font-bold mb-4 mt-2'>Drift</h3>
                                <p className=' px-2 text-center'>I drift-faget er nettverk, databaser og sikkerhet sentrale elementer. Det er viktig å ha et trygt produkt med riktig sikkerhet. <span></span>
                                 Databaser og skyløsninger er også viktig i driftstøtte faget.</p>

                                <div className='relative group flex justify-center items-center m-8 w-[7.774rem]'>
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-70   "></div>
                                    <div className='relative '>
                                        <button onClick={() => window.location.href="/drift"} className=' rounded-xl border bg-darkb2 px-4 py-2 font-medium hover:bg-dark  ' >Les mer her</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>


                    </div>
                </Tabs>   
            </motion.div>
            <div className='h-[8rem]'></div>
        </div>

    </section>
  )
}
