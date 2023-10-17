'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import HeaderPage from '@/lib/components/HeaderPage';
import Button from '@/lib/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faWhatsapp,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { users } from '@/utils/mockData';
import { useUserStore } from '@/lib/store/store';
import prisma from '@/lib/components/prismadb';
import ModalShare from '@/app/modal/modalShare';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import Link from 'next/link';
import { useEffect } from 'react';
import FavouriteActivitiesList from './favouriteActivities';
import AverageBurnedCalories from './averageBurnedCalories';
import AverageCaloriesConsumed from './averageCaloriesConsumed';
import FavouriteFoods from './favouriteFoods';
import MealsChart from './mealsChart';
import SessionsChart from './sessionsChart';

const share = (
  <FontAwesomeIcon icon={faShare} size="2xl" style={{ color: '#2de86b' }} />
);
const twitter = (
  <FontAwesomeIcon icon={faXTwitter} size="xl" style={{ color: '#2de86b' }} />
);
const facebook = (
  <FontAwesomeIcon icon={faFacebook} size="xl" style={{ color: '#2de86b' }} />
);
const whatsapp = (
  <FontAwesomeIcon icon={faWhatsapp} size="xl" style={{ color: '#2de86b' }} />
);

export default function StatisticsPage() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  // useEffect(()=>{
  //   getUser()
  // }, [])
  // async function getUser() {
  //   const res = await fetch('/api/test')
  //   const data = await res.json()
  //   console.log('USER DATA ', data)
  // }
  // const userData = useUserStore.getState().data

  return (
    <div className={'sectionMainPages'}>
      <HeaderPage title={'Statistic '} />
      <h3 className="text-lg mx-6 my-3 ">Hi panda, check and share it!</h3>

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
        <div className="z-20 flex flex-col items-center  ">
          <div className="bg-mainWhite border-2 border-mainGreen w-20 h-20 rounded-full flex justify-center items-center ">
            {/* TODO: change this for real number from user data */}
            <p className=" text-mainBlack text-center font-bold">25%</p>
          </div>
          <p className="">2 of 5 complete</p>
        </div>
      </section>

      <section className="flex justify-between mx-6 my-3 ">
        <Button title={'October'} />

        {/* <Link href="/share">Share</Link> */}

        <button onClick={handleToggle}>{share}</button>
        <ModalShare open={open}>
          <h3 className="font-bold text-lg text-mainWhite">Share it one:</h3>

          <div className="flex m-2 gap-7 ">
            <TwitterShareButton
              title="Checkout this awesome exercise I did!"
              url="https://health-boss.vercel.app/share"
            >
              {twitter}
            </TwitterShareButton>

            <FacebookShareButton
              quote="Checkout this awesome exercise I did!"
              url="https://health-boss.vercel.app/share"
            >
              {facebook}
            </FacebookShareButton>

            <WhatsappShareButton
              title="Checkout this awesome exercise I did!"
              url="https://health-boss.vercel.app/share"
            >
              {whatsapp}
            </WhatsappShareButton>
          </div>

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
