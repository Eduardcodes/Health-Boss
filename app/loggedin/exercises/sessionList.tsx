'use client';
import { ExcersizeSession } from '@/lib/types';
import { useEffect } from 'react';
import SessionCard from './sessionCard';
import { useSession } from 'next-auth/react';

export default function SessionList({
  displayedExcersizes,
  setDisplayedExcersizes,
}: {
  displayedExcersizes: ExcersizeSession[];
  setDisplayedExcersizes: React.Dispatch<React.SetStateAction<ExcersizeSession[]>>;
}) {
  const session = useSession();
  useEffect(() => {
    if(session?.data?.user.id !== undefined) getAllExcersizeSessions();
  }, [session?.data?.user.id]);

  async function getAllExcersizeSessions() {
    const res: Response = await fetch(`/api/exercises/${session?.data?.user.id}`);
    const data = await res.json();
    const allExcersizeSession = data.allSession as ExcersizeSession[];
    console.log('ALL SESSIONS LIST', allExcersizeSession);
    if (Array.isArray(allExcersizeSession)) {
      setDisplayedExcersizes(allExcersizeSession);
    } else return null;
  }
  return (
    <div>
      {displayedExcersizes &&
        displayedExcersizes.map((session: ExcersizeSession) => {
          return (
            <SessionCard
              key={session.id}
              excersizeSession={session}
              setDisplayedExcersizes={setDisplayedExcersizes}
            />
          );
        })}
    </div>
  );
}
