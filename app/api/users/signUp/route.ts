//url: http://localhost:3000/api/signUp
//TODO fixed the objet assign to body, now only username, email and password

import prisma from "@/lib/components/prismadb";
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {userName, email, password} = body;

        console.log('USERNAME', userName)
    
        const newUser = await prisma.user.create({
            data: {
                userName,
                email, 
                password
            }
        })

        return NextResponse.json(newUser);

    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "POST Error", error}, {status:500})
    }
}