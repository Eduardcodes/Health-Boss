import Link from "next/link"
import { useState } from "react"

export default function Navbar() {

const [page, setPage] = useState({
  exercises: '',
  meals: '',
  home: 'highlighted',
  statistics: '',
  profile: ''
})
function handlePageChange(nextPage :string){
  const newState = {
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
    <Link onClick={()=> handlePageChange('exercises')} href='/exercises'></Link>
    <Link onClick={()=> handlePageChange('meals')} href='/meals'></Link>
    <Link onClick={()=> handlePageChange('home')} href='/'></Link>
    <Link onClick={()=> handlePageChange('statistics')} href='/statistics'></Link>
    <Link onClick={()=> handlePageChange('profile')} href='/profile'></Link>
  </>
  )
}
