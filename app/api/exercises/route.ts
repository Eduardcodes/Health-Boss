import prisma from '@/lib/components/prismadb';
import { NextRequest, NextResponse } from 'next/server';
import { ExerciseSession } from '@/lib/types';

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    console.log('POST BODY', body);
    const { activities, userId, caloriesBurned, time } = body;
    const newSession = await prisma.exerciseSession.create({
      data: {
        activities,
        caloriesBurned,
        time,
        userId,
      },
    });
    console.log('NEW SESSION IN ROUTE', newSession);
    return NextResponse.json({ newSession, status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'GET Error', error }, { status: 500 });
  }
};

export const DELETE = async (request: Request) => {
  try {
    const body = await request.json();
    const { id } = body;
    const deletedItem = await prisma.exerciseSession.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ deletedItem, status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Delete request failed', error },
      { status: 500 }
    );
  }
};
