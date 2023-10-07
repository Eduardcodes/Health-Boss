//url: http://localhost:3000/api/signUp

import prisma from "@/lib/components/prismadb";
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {userName, email} = body;
        
        console.log("hi")
        const newUser = await prisma.user.create({
            data: {
                userName,
                email
            }
        })

        return NextResponse.json(newUser);

    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "POST Error", error}, {status:500})
        
    }
}