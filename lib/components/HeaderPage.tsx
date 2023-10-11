import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

const back = (
  <FontAwesomeIcon
    icon={faAngleDoubleLeft}
    size="2xl"
    style={{ color: '#2de86b' }}
  />
);

function HeaderPage({ title }: { title: React.ReactNode }) {
  return (
    <>
      <section className="h-20 flex justify-between items-center  mx-5 mt-10">
        <div>{back}</div>
        <h4 className="font-bold">{title}</h4>
        <Image
          src="/profile.jpg"
          alt="exercise icon"
          width={50}
          height={50}
          className="item-center text-mainWhite rounded-full border-2 border-mainGreen"
        />
      </section>
    </>
  );
}

export default HeaderPage;
