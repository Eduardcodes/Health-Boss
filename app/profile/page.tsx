import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '@/lib/components/Button';

// TODO: need to change this for real data from DB!!
import { users } from '@/utils/mockData';

const back = <FontAwesomeIcon icon={faAngleDoubleLeft} size="2xl" />;

export default function ProfilePage() {
  return (
    <div className={`sectionMainPages `}>
      <section className="flex-col h-60 flex justify-between items-center bg-mainGreen rounded-b-full shadow-md">
        <div className="flex h-16 justify-between items-center w-full font-bold ">
          <div className="text-mainBlack">{back}</div>
          <h4 className="text-mainBlack">Profile</h4>
          <div>😎</div>
        </div>
        <div>
          <Image
            src="/profile.jpg"
            alt="exercise icon"
            width={170}
            height={170}
            className="item-center rounded-full border-4 border-mainGreen shadow-md "
          />
        </div>
      </section>

      <section className="flex mt-5 gap-2 justify-center font-bold">
        <h1 className="">{users[0].fistName}</h1>
        <h1> {users[0].lastName}</h1>
      </section>

      <div className="flex flex-col justify-around">
        <div>
          <section className={'cardProfile'}>
            <div className="flex justify-between">
              <h4 className={'titleCards'}>Info</h4>
              <Button title={'Edit Profile'} />
            </div>
            {users.map((user) => (
              <div className="mt-4" key={user.id}>
                <p>
                  Name: <span>{user.fistName}</span>
                </p>
                <p>
                  Surname: <span>{user.lastName}</span>
                </p>
                <p>
                  Birthday: <span>{user.birthday}</span>
                </p>
                <p>
                  Email: <span>{user.email}</span>
                </p>
                <p typeof="password">
                  Password: <span>{user.password}</span>
                </p>
              </div>
            ))}
          </section>

          <section className={'cardProfile'}>
            <div className="flex justify-between">
              <h4 className={'titleCards'}>My Goals</h4>
              <Button title={'Edit Goals'} />
            </div>
            {users.map((user) => (
              <div className="mt-4" key={user.id}>
                <div className="flex justify-between">
                  <p>Walk diary:</p>
                  <div className="flex gap-2">
                    <p>{user.goals.walk}</p>
                    <p>steeps</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <p>Sleep diary:</p>
                  <div className="flex gap-2">
                    <p>{user.goals.sleep}</p>
                    <p>hours</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <p>Calories diary:</p>
                  <div className="flex gap-2">
                    <p>{user.goals.calories}</p>
                    <p>cal</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>

        <div className="flex justify-center">
          <Link href="/statistics">
            <p className="text-mainGreen font-bold cursor-pointer hover:border-2 rounded-lg p-2">
              {/* //TODO: After MVP do we need to have another page for this ?? */}
              Check history
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
