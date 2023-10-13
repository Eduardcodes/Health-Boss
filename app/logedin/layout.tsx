// import './../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../../lib/components/navbar';

const inter = Inter({ subsets: ['latin'] });

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
      {children}
      <header className="z-10 sticky bottom-0  h-16 bg-mainBlack rounded-t-lg  border-t-2 border-mainGreen ">
        <Navbar />
      </header>
    </div>
  );

  // return (
  //   <html lang="en">
  //     <body className={`${inter.className}`}>
  //       <div>{children}</div>
  //       <header className="z-10 sticky bottom-0  h-16 bg-mainBlack rounded-t-lg  border-t-2 border-mainGreen ">
  //         <Navbar />
  //       </header>
  //     </body>
  //   </html>
  // );
}
