import prisma from "@/lib/components/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { Meal } from "@/lib/types";

export const GET = async (userId: string) => {
  try {
    const allMeals = await prisma.meal.findMany({
    where: {
      userId: userId,
    },
  })
    return NextResponse.json(allMeals, {status: 200})

  } catch (error) {
    console.log(error)
    return NextResponse.json({message: 'GET Error', error}, {status: 500})
  }
}

export const POST = async (request: Request) => {
  try {
    const body = await request.json()
    const {ingredients, userId} = body
    const newMeal: Meal = await prisma.meal.create({
      data:{
        ingredients,
        userId
      }
    })
    return NextResponse.json(newMeal, {status:200})
  } catch(error) {
    console.log(error)
    return NextResponse.json({message: 'GET Error', error}, {status: 500})
  }
}

export const DELETE = async (request: Request) => {
  try {
    const body = await request.json()
    const {id} = body
    await prisma.meal.delete({
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