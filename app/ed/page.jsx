import AddUser from './components/AddUser'
import UserList from './components/UserList'
import tokenComp from './components/tokenComp'
import TokenTest from './components/TokenTest'
import Link from 'next/link'

import { useAuthStore } from "@/lib/store";

async function getUser(token) {
  //TODO make it dynamic not only 3002


  // put token in the header
  const res = await fetch("http://localhost:3000/api/users", 
  { method: 'GET', cache: 'no-store', headers: {Authorization: `Bearer ${token}` }
});

if(!res.ok) {
  throw new Error("Failed to fetch data")
}

return res.json();

}


const TestingUserPage = async () => {
  
  const authState =useAuthStore.getState()
  const token = authState.auth
  console.log(token, "token in ed page")
  
  const users = await getUser(token);

  // const tokenFromLocalStorage = localStorage.getItem('auth');
  // console.log(tokenFromLocalStorage)

  return (
    <div className='max-w-4xl mx-auto mt-4'>
      <div className='my-5 flex flex-col gap-4'>
      <h1 className='text-3xl font-bold'>Testing Page</h1>
      <TokenTest />
      <AddUser />
      <Link href= "/" >home</Link>
      </div>
      <UserList users={users} />
    </div>


  )

}

export default TestingUserPage