import type { Metadata } from 'next';
import Navbar from '../../lib/components/navbar';
import Head from 'next/head';
import { useUserStore } from '@/lib/store/store';
import { useSession } from 'next-auth/react';
import GETUSERFUCKFFUCKK from './componentForGetUser';

export const metadata: Metadata = {
  title: 'Health Boss 😎',
  description: 'Be the boss of your health!',
};

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //TODO: global loggedIn state storing user data

  return (
    <div>
      <GETUSERFUCKFFUCKK />
      {children}
      <header className="z-10 sticky bottom-0  h-16 bg-mainBlack rounded-t-lg  border-t-2 border-mainGreen ">
        <Navbar />
      </header>
    </div>
  );
}
