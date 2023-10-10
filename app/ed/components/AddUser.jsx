"use client";

import { useState } from "react";
import axios from "axios";
import Modal from "./Modal"
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/lib/store";

const AddUser = () => {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [inputs, setInputs] = useState({});

  const setAuth = useAuthStore((state) => state.setAuth)

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("api/users/signup", inputs)
      .then((res) => {
        //console.log(res);
        const token = res.data;
        console.log(token, "token")
       // localStorage.setItem('auth', JSON.stringify(token))
        setAuth(token);
      const authState =useAuthStore.getState()
        console.log(authState, "setAutha")

      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInputs({});
        setModalOpen(false);
        router.refresh();
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevState) => ({...prevState, [name]: value}))
  }

  return (
    <div>
      <button
         onClick = {() => setModalOpen(true)}
         className="bg-blue-700 text-white p-3 cursor-pointer"
      >
     Add New User {setAuth}
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form className="w-full" onSubmit={handleSubmit}>
        <h1 className="text-2xl pb-3">Add New User</h1>

        <input 
            type="text"
            placeholder="Username"
            name="userName"
            className="w-full p-2"
            value = {inputs.userName || ""}
            onChange={handleChange}
        />

        <input 
            type="text"
            placeholder="Email"
            name="email"
            className="w-full p-2"
            value = {inputs.email || ""}
            onChange={handleChange}
        />

        <input 
            type="text"
            placeholder="Password"
            name="password"
            className="w-full p-2"
            value = {inputs.password || ""}
            onChange={handleChange}
        />
        
        <button type="submit" className="bg-blue-700 text-white px-5 py-2">
            Submit
        </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddUser;
