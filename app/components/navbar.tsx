'use client'
import Link from "next/link"
import { useState } from "react"

type NavbarTracker = {
  exercises: string
  meals: string
  home: string
  statistics: string
  profile: string
}

export default function Navbar() {

const [page, setPage] = useState({
  exercises: '',
  meals: '',
  home: 'highlighted',
  statistics: '',
  profile: ''
})

function handlePageChange(nextPage :string){
  const newState: NavbarTracker = {
    exercises: '',
    meals: '',
    home: '',
    statistics: '',
    profile: ''
  }
  newState[nextPage] = 'highlighted' 

  setPage(newState)
}
  return (
  <>
    <Link className={page.exercises} onClick={()=> handlePageChange('exercises')} href='/exercises'></Link>
    <Link className={page.meals} onClick={()=> handlePageChange('meals')} href='/meals'></Link>
    <Link className={page.home} onClick={()=> handlePageChange('home')} href='/'></Link>
    <Link className={page.statistics} onClick={()=> handlePageChange('statistics')} href='/statistics'></Link>
    <Link className={page.profile} onClick={()=> handlePageChange('profile')} href='/profile'></Link>
  </>
  )
}
