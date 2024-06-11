"use client"
import React from 'react'
import Navbar from '@/components/navbar/main-navbar'
import Footer from "@/components/footer/footer";
import FaqComponent from '@/components/faq-component/faqcomponent'
  

export default function FaqPage() {
  return (
    <div className='w-screen min-h-screen flex flex-col item-center'>
    <Navbar/>

    <div className='mt-[8rem] mb-24'><FaqComponent/></div>
    
    <div><Footer/></div>
    </div>
  )
}
