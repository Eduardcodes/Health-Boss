'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

type NavbarTracker = {
  exercises: string;
  meals: string;
  home: string;
  statistics: string;
  profile: string;
};

const user = <FontAwesomeIcon icon={faUser} size="2xl" />;
const statistic = <FontAwesomeIcon icon={faChartSimple} size="2xl" />;
const home = <FontAwesomeIcon icon={faHouse} size="2xl" />;
const meal = <FontAwesomeIcon icon={faUtensils} size="2xl" />;
const exercise = <FontAwesomeIcon icon={faDumbbell} size="2xl" bounce />;

export default function Navbar() {
  const [page, setPage] = useState({
    exercises: '',
    meals: '',
    home: 'highlighted',
    statistics: '',
    profile: '',
  });

  function handlePageChange(nextPage: string) {
    const newState: NavbarTracker = {
      exercises: '',
      meals: '',
      home: '',
      statistics: '',
      profile: '',
    };
    newState[nextPage] = 'highlighted';

    setPage(newState);
  }
  return (
    <div className="flex justify-around items-center h-full ">
      <Link
        className={`${page.profile}`}
        onClick={() => handlePageChange('profile')}
        href="/profile"
      >
        <span className="">{user}</span>
      </Link>

      <Link
        className={page.statistics}
        onClick={() => handlePageChange('statistics')}
        href="/statistics"
      >
        <span>{statistic}</span>
      </Link>
      <Link
        className={page.home}
        onClick={() => handlePageChange('home')}
        href="/"
      >
        <span>{home}</span>
      </Link>
      <Link
        className={page.exercises}
        onClick={() => handlePageChange('exercises')}
        href="/exercises"
      >
        <span>{exercise}</span>
      </Link>

      <Link
        className={page.meals}
        onClick={() => handlePageChange('meals')}
        href="/meals"
      >
        <span>{meal}</span>
      </Link>
    </div>
  );
}
