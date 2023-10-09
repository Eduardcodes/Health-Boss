import prisma from "@/lib/components/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { Exercise } from "@/lib/types";


export const GET = async (userId: string) => {
  try {
    const allExercises = await prisma.exercise.findMany({
    where: {
      userId: userId,
    },
  })
    return NextResponse.json(allExercises, {status: 200})

  } catch (error) {
    console.log(error)
    return NextResponse.json({message: 'GET Erro', error}, {status: 500})
  }
}

export const POST = async (request: Request) => {
  try {
    const body = await request.json()
    const {activity, duration, caloriesBurned} = body
    const newExercise: Exercise = await prisma.exercise.create({
      data:{
        activity,
        duration,
        caloriesBurned
      }
    })
    return NextResponse.json(newExercise, {status:200})
  } catch(error) {
    console.log(error)
    return NextResponse.json({message: 'GET Error', error}, {status: 500})
  }
}

export const DELETE = async (request: Request) => {
  try {
    const body = await request.json()
    const {id} = body
    await prisma.exercise.delete({
      where: {
        id: id
      }
    })
    return NextResponse.json({status:200})
  } catch(error) {
    console.log(error)
    return NextResponse.json({message: 'Delete request failed',error},{status:500})
  }
}