import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Health Boss 😎',
  description: 'Be the boss of your health!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //TODO: global loggedIn state storing user data

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
