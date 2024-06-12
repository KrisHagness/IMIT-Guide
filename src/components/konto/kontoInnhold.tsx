"use client"
import React from 'react'
import { motion } from 'framer-motion'
import  {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";

export default function KontoInnhold() {
    const { user, isLoading, getPermissions } =
    useKindeBrowserClient();
  const { permissions } = getPermissions();

  if (isLoading) return <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white/50 mx-auto my-2 mt-4"></div>
  return (
    <motion.div className='Content flex bg-dark w-full'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}>
        <div className='Tekst flex w-full flex-col mx-4 text-center'>
            <h1 className="text-3xl font-serif text-gray-50 text-center w-full mt-10">IMIT Konto</h1>
            <h2 className='text-lg text-gray-50 mt-4 mb-1'>Velkommen til din IMIT konto, her kan du spørre om hjelp og få svar på spørsmålene dine.</h2>
            {permissions?.includes("admin:perms") && (
                <h3 className='text-gray-100 italic text-sm'>Som administrator, vil du ha tilgang til dashboardet, her kan du kan legge til eller endre på diverse informasjon.</h3>
            )}
        </div>
    </motion.div>
  )
}
