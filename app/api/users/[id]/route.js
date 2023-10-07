//url: http://localhost:3000/api/users/id

import prisma from "@/lib/components/prismadb";
import { NextResponse } from "next/server"

export const GET = async (request) => {
    try {

        const { id } = params;
       
        const users = await prisma.user.findMany()

        return NextResponse.json(users);

    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "GET Error", error}, {status:500})
    }
}
