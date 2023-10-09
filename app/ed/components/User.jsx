"use client";

import React, { useState } from "react";

import Modal from "./Modal";
import axios from "axios";
import { useRouter } from "next/navigation";

const User = ({ user }) => {
  const router = useRouter();

  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [userToEdit, setUserToEdit] = useState(user);

  const [openModalDelete, setOpenModalDelete] = useState(false);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/users/${user.id}`, userToEdit)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setOpenModalEdit(false);
        router.refresh();
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserToEdit((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDeletePost = (id) => {
    axios
      .delete(`/api/users/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setOpenModalDelete(false);
        router.refresh();
      });
  };

  return (
    <li className="p-3 my-5 bg-slate-200" key={user.id}>
      <h1>id: {user.id}</h1>
      <h1>User Name: {user.userName}</h1>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>

      <div className="pt-5">
        <button
          className="text-blue-700 mr-3"
          onClick={() => setOpenModalEdit(true)}
        >
          Edit
        </button>

        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form className="w-full" onSubmit={handleEditSubmit}>
            <h1 className="text-2xl" pb-3>
              Edit User
            </h1>

            <input
              type="text"
              placeholder="Username"
              name="userName"
              className="w-full p-2"
              value={userToEdit.userName || ""}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Email"
              name="email"
              className="w-full p-2"
              value={userToEdit.email || ""}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Password"
              name="password"
              className="w-full p-2"
              value={userToEdit.password || ""}
              onChange={handleChange}
            />

            <button type="submit" className="bg-blue-700 text-white px-5 py-2">
              Submit
            </button>
          </form>
        </Modal>

        <button
          onClick={() => setOpenModalDelete(true)}
          className="text-red-700 mr-3"
        >
          Delete
        </button>
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h1 className="text-2xl pb-3">Please confirm delete this user.</h1>

          <div>
            <button
              onClick={() => handleDeletePost(user.id)}
              className="text-blue-700 font-bold mr-5"
            >
              Yes
            </button>
            <button
              onClick={() => setOpenModalDelete(false)}
              className="text-blue-700 font-bold mr-5"
            >
              No
            </button>
          </div>
        </Modal>
      </div>
    </li>
  );
};

export default User;
