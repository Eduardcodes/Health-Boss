"use client"
import React from 'react'
import { useAuthStore } from "@/lib/store";
import Link from 'next/link';

export default function HomePage() {
  
  // TODO: check if user is logged in already, if not redirect to /login
  const authState =useAuthStore.getState()
  console.log(authState)
  return (
    <div>
      home 
      <Link href= "/ed" >ed</Link>
    </div>
  )
}
