import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation';
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import SidebarComponent from '@/components/konto/sidebarComponent';
import Navbar from '@/components/navbar/main-navbar';



export default async function Konto() {
  const { isAuthenticated } =
  getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  if (!isLoggedIn) {
    redirect('/api/auth/login');

  }

  return (
    <div className=' bg-dark'>
      <div className='flex-col w-screen h-screen'>
          
        {/* <div className='w-full '><Navbar/></div> */}
          <div className='KontoPage h-full flex'>
            <div className=' hidden lg:flex h-full'><SidebarComponent/></div>

          <div className='Content flex bg-dark w-full'>
            <div className='flex w-full'>
            <h1 className="text-lg font-serif text-gray-50 text-center w-full">Konto</h1>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

