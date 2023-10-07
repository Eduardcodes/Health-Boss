import AddUser from './components/AddUser'

async function getUser() {
  const res = await fetch("http://localhost:3002/api/users", { cache: 'no-store'});

  if(!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json();

}


const TestingUserPage = async () => {

  const posts = await getUser();

  return (
    <div className='max-w-4xl mx-auto mt-4'>
      <div className='my-5 flex flex-col gap-4'>
      <h1 className='text-3xl font-bold'>Testing Page</h1>
      </div>
      <AddUser />
    </div>
  )

}

export default TestingUserPage