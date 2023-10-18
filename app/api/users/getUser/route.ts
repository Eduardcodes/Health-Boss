import prisma from '@/lib/components/prismadb';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const body = await request.json();
  const { id } = body;
  try {
    const userData = await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        mealHistory: true,
        exerciseHistory: true,
      },
    });
    console.log('USER DATA GET USER ROUTE', userData);
    return NextResponse.json({ userData, error: 'No errors' });
  } catch (err) {
    return NextResponse.json({ userData: null, error: err });
  }
};
