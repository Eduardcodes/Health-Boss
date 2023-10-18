'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import { useUserStore } from '@/lib/store/store';
import { useEffect } from 'react';

export default function ComponentForGetUser() {
  const session = useSession();
  const userData = useUserStore((state) => state.data);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const getUserData = async () => {
      if (userData === null && session.data) {
        const res = await fetch('/api/users/getUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: session.data?.user.id }),
        });
        const data = await res.json();
        console.log('DATA IN GETUSEFUCKFUCK', data);
        setUser(data.userData);
      }
    };
    getUserData();
  }, [session, setUser, userData]);

  return <div></div>;
}
