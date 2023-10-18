'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import HeaderPage from '@/lib/components/HeaderPage';
import Button from '@/lib/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { useUserStore } from '@/lib/store/store';
import FavouriteActivitiesList from './favouriteActivities';
import AverageBurnedCalories from './averageBurnedCalories';
import AverageCaloriesConsumed from './averageCaloriesConsumed';
import FavouriteFoods from './favouriteFoods';
import MealsChart from './mealsChart';
import SessionsChart from './sessionsChart';
import ModalShare from '@/app/modal/modalShare';
import { useSession } from 'next-auth/react';

const share = (
  <FontAwesomeIcon icon={faShare} size="2xl" style={{ color: '#2de86b' }} />
);

export default function StatisticsPage() {
  const [open, setOpen] = useState(false);
  const [shareableLink, setShareableLink] = useState('');

  // const handleToggle = () => setOpen((prev) => !prev);
  const userData = useUserStore((state) => state.data);

  const handleToggle = () => {
    const userShareLink = `https://health-boss.vercel.app/share/${userData?.id}`;
    // const userShareLink = `http://localhost:3001/share/${userData?.id}`;
    setShareableLink(userShareLink);
    setOpen((prev) => !prev);
  };

  // useEffect(()=>{
  //   getUser()
  // }, [])
  // async function getUser() {
  //   const res = await fetch('/api/test')
  //   const data = await res.json()
  //   console.log('USER DATA ', data)
  // }

  return (
    <div className={'sectionMainPages'}>
      <HeaderPage title={'Statistic '} />
      <h3 className="text-lg mx-6 my-3 ">
        Hi <span className="text-mainGreen">{userData?.firstName}</span>, check
        your activities!
      </h3>

      <section
        className={`cardBgPhoto flex flex-col items-center bg-cover relative`}
      >
        <div>
          <Image
            src="/images/bananas.jpg"
            alt="exercise icon"
            fill={true}
            style={{ objectFit: 'cover' }}
            className="absolute rounded-lg  opacity-50"
            priority={true}
          />
        </div>
        <div className="z-20 flex flex-col items-center  my-6 ">
          {/* TODO: change this for real number from user data */}
          {/* <div className="bg-mainWhite border-2 border-mainGreen w-20 h-20 rounded-full flex justify-center items-center ">
            <p className=" text-mainBlack text-center font-bold">25%</p>
          </div> */}
          <p className="font-bold">My Summary</p>
        </div>
      </section>

      <section className="flex justify-between mx-6 my-3 ">
        <Button title={'October'} />

        {/* <Link href="/share">Share</Link> */}

        <button onClick={handleToggle}>{share}</button>

        <ModalShare open={open} shareableLink={shareableLink}>
          <div className="modal-action  text-mainWhite">
            <button className="buttonConfirm" onClick={handleToggle}>
              Close
            </button>
          </div>
        </ModalShare>
      </section>

      {/* <section>
        {users.map((user) => (
          <div className="flex flex-col gap-2" key={user.id}>
            <h6 className="mx-6 text-lg ">Your activities this month:</h6>
            {user.exerciseHistory.map((exercise, index) => (
              <div className={`cardBackground my-0`} key={index}>
                <p className="font-semibold">{exercise}</p>
              </div>
            ))}
          </div>
        ))}
      </section> */}
      <AverageBurnedCalories></AverageBurnedCalories>
      <AverageCaloriesConsumed></AverageCaloriesConsumed>
      <FavouriteActivitiesList></FavouriteActivitiesList>
      <FavouriteFoods></FavouriteFoods>
      <MealsChart></MealsChart>
      <SessionsChart></SessionsChart>
    </div>
  );
}
