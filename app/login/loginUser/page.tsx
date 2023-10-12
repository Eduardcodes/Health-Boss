"use client"

import Image from "next/image";
import Modal from "@/app/ed/components/Modal";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import { User } from "@/lib/types";
import Link  from 'next/link'
import { setJWT } from "@/lib/jwt";


function LoginPage() {

  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [inputs, setInputs] = useState<User>({} as User);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    try {
      event.preventDefault();
      // console.log("INPUTS::", inputs)
      const response = await axios.post('/api/users/login', inputs);
      setJWT(response.data.token)
      setInputs({} as User);
      //TODO give token to user and encrypt the password, set status to global store
      router.push('/');
    } catch (err) {
      console.error("Failed to submit form:: ", err);
    }
  };

    //? any better way to write ts
    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
      const name: string = event.currentTarget.name;
      const value: string = event.currentTarget.value;
      setInputs((prevState) => ({ ...prevState, [name]: value }));
    };

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
          <h1 className="text-center font-semibold">Welcome back</h1>
        </section>
  
        <section className="mx-5">
          <h5>Login to your account</h5>
          <form
            className="flex flex-col items-center w-full"
            onSubmit={handleSubmit}
            >
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
                value={inputs.email || ""}
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
                value={inputs.password || ""}
                onChange={handleChange}
                />
            </div>
  
            <Link href="/">Forgot password</Link>
            <button
              className={`buttonLogin bg-lightGreen text-mainBlack hover:scale-110`}
              type="submit"
              value="Submit"
              >
             Log In
            </button>
          </form>
          <span>Don't have an account? </span><Link href="/login/createUser">Sign up</Link>
        </section>
      </div>
    );

}

export default LoginPage;