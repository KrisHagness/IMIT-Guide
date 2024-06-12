import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation';
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import SidebarComponent from '@/components/konto/sidebarComponent';
import Navbar from '@/components/navbar/main-navbar';
import KontoInnhold from '@/components/konto/kontoInnhold';




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
            {/* <div className='flex w-full'>
            <h1 className="text-xl font-serif text-gray-50 text-center w-full mt-10">IMIT Konto</h1>
            <h2 className='text-gray-50'>Velkommen til din IMIT konto, her kan du spørre om hjelp og få svar på spørsmålene dine.</h2>
            <h3 className=''>Hvis du er administrator, vil du ha tilgang til dashboardet, hvor du kan legge til diverse informasjon.</h3>


            </div> */}
            <KontoInnhold/>
            
          </div>
        </div>
      </div>
    </div>
  )
}

