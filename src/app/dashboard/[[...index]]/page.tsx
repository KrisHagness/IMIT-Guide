'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Page() {
  useEffect(() => {
    const { pathname } = window.location;
    if (pathname !== '/studio') {
      window.location.href = '/studio';
    }
  }, [])

  return null
}