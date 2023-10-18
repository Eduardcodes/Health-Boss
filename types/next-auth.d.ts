import NextAuth from 'next-auth';
import { User } from '@/lib/types';

declare module 'next-auth' {
  interface Session {
    user: User
  }
}
