"use client"
// use useState so need to be client component

import Image from 'next/image';
import Modal from '@/app/ed/components/Modal';
import axios from 'axios';
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { User } from '@/lib/types'; 

function CreateAccount({user}: {user:User}) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [inputs, setInputs] = useState<User>({
    id: '',
    userName: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthday: new Date(),
    exerciseHistory: [],
    mealHistory: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  });


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(inputs)
    axios
      .post("api/users/signUp", inputs)
      .then((res) => {
        console.log(res);

        //TODO add back token and set global store later
        //const token = res.data;
       // console.log(token, "token")
       //localStorage.setItem('auth', JSON.stringify(token))
      

      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInputs({   
        id: '',
        userName: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        birthday: new Date(),
        exerciseHistory: [],
        mealHistory: [],
        createdAt: new Date(),
        updatedAt: new Date(),});
        //setModalOpen(false);
        router.refresh();
      });
  };

  //? any better way to write ts 
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const name: string = event.currentTarget.name;
    const value: string = event.currentTarget.value;
    setInputs((prevState) => ({...prevState, [name]: value}))
  }


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
        <form className="flex flex-col items-center w-full" onSubmit={handleSubmit}>
          <div className="w-full">
            <label className="font-semibold text-base" htmlFor="fname">
              First name
            </label>
            <input
              className="inputLogin"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Your first name here"
              value = {inputs.firstName || ""}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label className="font-semibold text-base" htmlFor="lname">
              Last name
            </label>
            <input
              className="inputLogin"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Your last name here"
              value = {inputs.lastName || ""}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label className="font-semibold text-base" htmlFor="email">
              Email
            </label>
            <input
              className="inputLogin"
              type="email"
              id="email"
              name="email"
              placeholder="email@email.com"
              value = {inputs.email || ""}
              onChange={handleChange}

            />
          </div>
          <div className="w-full">
            <label className="font-semibold text-base" htmlFor="password">
              Password
            </label>
            <input
              className="inputLogin"
              type="password"
              id="password"
              name="password"
              placeholder="New password"
              value = {inputs.password || ""}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label className="font-semibold text-base" htmlFor="birthday">
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
