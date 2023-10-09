import AddUser from './components/AddUser'
import UserList from './components/UserList'

async function getUser() {
  //TODO make it dynamic not only 3002
  const res = await fetch("http://localhost:3000/api/users", { cache: 'no-store'});

  if(!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json();

}


const TestingUserPage = async () => {

  const users = await getUser();

  return (
    <div className='max-w-4xl mx-auto mt-4'>
      <div className='my-5 flex flex-col gap-4'>
      <h1 className='text-3xl font-bold'>Testing Page</h1>
      <AddUser />
      </div>
      <UserList users={users} />
    </div>


  )

}

export default TestingUserPage