import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

const back = <FontAwesomeIcon icon={faAngleDoubleLeft} size="2xl" />;
const chart = <FontAwesomeIcon icon={faChartPie} size="2xl" />;

export default function HomePage() {
  // TODO: check if user is logged in already, if not redirect to /login

  return (
    <div className={`sectionMainPages p5`}>
      <section className="h-20 flex justify-between items-center">
        <div>{back}</div>
        <h4>Home</h4>
        <Image
          src="/profile.svg"
          alt="exercise icon"
          width={50}
          height={50}
          className="item-center"
        />
      </section>

      <section className="flex flex-col ">
        <div className="flex justify-between ">
          <h5>Hi Panda</h5>
          <p>+1</p>
        </div>

        <p className="">Motivation here</p>
      </section>

      <section className="flex flex-col">
        <h4>Your activities</h4>
        <div className="flex justify-between">
          <p>Walking</p>
          <p>9857</p>
          <p>Steps</p>
        </div>
      </section>

      <section>
        <h4>How close to your goal(Monthly)</h4>
        <div className="flex justify-around">
          <div>
            <span>{chart}</span>
          </div>
          <div>
            <h6>Walk</h6>
            <p> 9857/280.00</p>

            <h6>Sleep</h6>
            <p> 9857/196 hours</p>

            <h6>Calories</h6>
            <p> 9857/70.000 cal</p>
          </div>
        </div>
      </section>
    </div>
  );
}
