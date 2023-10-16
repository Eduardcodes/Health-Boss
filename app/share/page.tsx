'use client';
import { useUserStore } from '@/lib/store/store';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Share() {
  const userData = useUserStore((state) => state.data);

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md ">
            <h1 className="mb-5 text-4xl font-bold">
              Check out what <span>{userData?.firstName}</span> did!
            </h1>
            <p className="mb-5 text-3xl ">Exercise here!</p>

            <button className="buttonConfirm mb-5">
              {' '}
              <Link href={'https://health-boss.vercel.app/'}>
                Visit Health Boss{' '}
              </Link>
            </button>

            <p>
              Proto by Chander |{' '}
              <Link
                className="text-mainGreen font-bold"
                href={'https://unsplash.com/photos/z4WH11FMfIQ'}
              >
                Unsplash
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Share;
