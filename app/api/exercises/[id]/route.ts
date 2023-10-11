import prisma from "@/lib/components/prismadb"
import { NextResponse } from "next/server"

export const GET = async (request: Request, {params}:{params:{id:string}}) => {
  try {
    const {id} = params
    const allSession = await prisma.session.findMany({
    where: {
      userId: id,
    },
  })
    return NextResponse.json({allSession, status: 200})

  } catch (error) {
    console.log(error)
    return NextResponse.json({message: 'GET Error', error, status: 500})
  }
}