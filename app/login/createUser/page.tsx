import Image from 'next/image';

function CreateAccount() {
  return (
    <div
      className={`sectionMainPages  bg-gradient-to-b from-mainGreen to-mainBlack `}
    >
      <section className="mt-5 flex flex-col justify-center items-center ">
        <Image
          src="/logo.png"
          width={256}
          height={183}
          alt="Health Boss Logo"
        />
        <h1 className="text-center font-semibold">Create an account</h1>
      </section>

      <section className="mx-5">
        <form className="flex flex-col items-center w-full">
          <div className="w-full">
            <label className="font-semibold text-base" for="fname">
              First name
            </label>
            <input
              className="inputLogin"
              type="text"
              id="fname"
              name="fname"
              placeholder="Your first name here"
            />
          </div>
          <div className="w-full">
            <label className="font-semibold text-base" for="lname">
              Last name
            </label>
            <input
              className="inputLogin"
              type="text"
              id="lname"
              name="lname"
              placeholder="Your last name here"
            />
          </div>
          <div className="w-full">
            <label className="font-semibold text-base" for="email">
              Email
            </label>
            <input
              className="inputLogin"
              type="email"
              id="email"
              name="email"
              placeholder="email@email.com"
            />
          </div>
          <div className="w-full">
            <label className="font-semibold text-base" for="password">
              Password
            </label>
            <input
              className="inputLogin"
              type="password"
              id="password"
              name="password"
              placeholder="New password"
            />
          </div>
          <div className="w-full">
            <label className="font-semibold text-base" for="birthday">
              Birthday
            </label>
            <input
              className="inputLogin"
              type="date"
              id="birthday"
              name="birthday"
            />
          </div>
          <button
            className={`buttonLogin bg-lightGreen text-mainBlack hover:scale-110`}
            type="submit"
            value="Submit"
          >
            Create account
          </button>
        </form>
      </section>
    </div>
  );
}

export default CreateAccount;
