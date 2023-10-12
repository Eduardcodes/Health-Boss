
import { z } from 'zod';

export const SignupSchema = z.object({
  userName: z.string().min(3).max(30),
  password: z.string().min(8).max(30),
  email: z.string().email(),
  name: z.string().min(3).max(50),
  lastname: z.string().min(3).max(50),
});

export const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});