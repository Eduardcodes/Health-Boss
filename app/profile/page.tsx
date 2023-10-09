import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

const back = <FontAwesomeIcon icon={faAngleDoubleLeft} size="2xl" />;

type User = {
  id: number;
  userName: string;
  email: string;
  fistName: string;
  lastName: string;
  birthday: string;
};

const users: User[] = [
  {
    id: 1,
    userName: 'pandaBear',
    email: 'panda@gmail.com',
    fistName: 'Panda',
    lastName: 'Bear',
    birthday: '20/12/00',
  },
];

export default function ProfilePage() {
  return (
    <div className={`sectionMainPages `}>
      <section className="flex-col h-60 flex justify-between items-center bg-mainGreen rounded-b-full shadow-md">
        <div className="flex h-16 justify-between items-center w-full font-bold ">
          <div className="text-mainBlack">{back}</div>
          <h4 className="text-mainBlack">Profile</h4>
          <div></div>
        </div>
        <div>
          <Image
            src="/profile.jpg"
            alt="exercise icon"
            width={170}
            height={170}
            className="item-center rounded-full border-4 border-mainGreen shadow-md"
          />
        </div>
      </section>

      <section className="flex gap-2 justify-center font-bold">
        <h1 className="">{users[0].fistName}</h1>
        <h1> {users[0].lastName}</h1>
      </section>

      <section className={'cardProfile'}>
        <h4 className={'titleCards'}>Info</h4>
        {users.map((user) => (
          <div key={user.id}>
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
          </div>
        ))}
      </section>

      <section className={'cardProfile'}>
        <h4 className={'titleCards'}>My Goals</h4>
      </section>
    </div>
  );
}
