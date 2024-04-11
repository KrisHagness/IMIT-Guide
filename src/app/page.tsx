"use client"
import Image from "next/image";
import Navbar from "@/components/navbar/main-navbar"
import Link from 'next/link';
import { motion } from "framer-motion";
import Intro from "@/components/intro/intro";
import React from "react";
import Footer from "@/components/footer/footer";
import Faq from "@/components/faq-component/page";
import Mobbing from "@/components/ImMobbing/page";



export default function Home() {
  const IntroRef = React.useRef(null);
  const HjemRef = React.useRef(null);


  return (
    <main className="flex  flex-col  bg-dark dark text-gray-50 overflow-hidden">
      <div ref={HjemRef} id="Hjem" className="flex h-screen -w-screen flex-col items-center bg-dark dark text-gray-50" >
      <div className="w-screen z-50"> <Navbar/> </div>

      <motion.div className="flex flex-col-reverse mt-28 sm:mt-0 sm:flex-row items-center w-screen h-screen"
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{
                    type: "tween",
                    duration: 0.2,
                }}
                >
        <div className="flex flex-col items-center  w-1/2">
          <h1 className="text-6xl font-bold font-serif">IMIT Guide</h1>
          <h2 className="text-xl mt-4">Informasjon, tips og veiledning til IT faget.</h2>
          <motion.div className="relative mt-8 group  "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
              delay: 0.1,
           }}>
            <div className="absolute -inset-0.5  bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-70 group-hover:opacity-100 group-hover:scale-105  "></div>
            <button 
              className="relative bg-dark hover:scale-105 text-gray-50 font-medium py-2 px-10 rounded-lg"
              onClick={() => IntroRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              Les mer
            </button>
          </motion.div>
          </div>
          

          <div className="flex relative w-1/2 justify-center mb-24 sm:mb-0">
          <Image src="/userGuideNo.png" width={400} height={400} alt="User guide bilde, kilde: Freepik - Vectorjuice" className="flex z-10"/>
          <div className="bg-[#5388bd] absolute -z-9 opacity-50  h-[16.25rem] w-[16.25rem] rounded-full blur-[5rem] sm:w-[25.75rem]"></div>
          </div>
        
      
      </motion.div>
      </div>

      <div ref={IntroRef} className="scroll-mt-32">
        <Intro/>
      </div>

      <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
          delay: 0.1,
       }} className="" id="faq" >

        
          
            <div className=""><Faq/></div>
      
      </motion.div>
      
      <div className="mb-28"><Mobbing/></div>
    <Footer/>
    </main>
  );
}
