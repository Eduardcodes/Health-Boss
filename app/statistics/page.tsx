import React from 'react';
import Image from 'next/image';
import HeaderPage from '@/lib/components/HeaderPage';
import Button from '@/lib/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { users } from '@/utils/mockData';

const share = (
  <FontAwesomeIcon icon={faShare} size="2xl" style={{ color: '#2de86b' }} />
);

export default function StatisticsPage() {
  const banana = '/Health-Boss/public/bananas.jpg';

  return (
    <div className={'sectionMainPages'}>
      <HeaderPage />
      <h3 className="text-lg mx-6 my-3 ">Hi panda, check and share it!</h3>

      <section
        className={`cardBgPhoto flex flex-col items-center bg-gradient-radial `}
      >
        <p className="bg-mainWhite rounded-full  text-mainBlack text-center font-bold border-3 border-mainGreen">
          25%
        </p>
        <p>2 of 5 complete</p>
      </section>

      <section className="flex justify-between mx-6 my-3 ">
        <Button title={'October'} />
        <button>{share}</button>
      </section>

      <section>
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
      </section>
    </div>
  );
}
