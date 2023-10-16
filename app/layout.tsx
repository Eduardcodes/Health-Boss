import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Health Boss 😎',
  description: 'Be the boss of your health!',
  viewport: 'width=device-width, initial-scale=1',
  appleWebApp: true,
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
    shortcut: ['/apple-touch-icon.pgn'],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //TODO: global loggedIn state storing user data

  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
