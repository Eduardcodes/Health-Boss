//url: http://localhost:3000/api/users/signUp
//TODO fixed the objet assign to body, now only username, email and password

import prisma from "@/lib/components/prismadb";
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {userName, email, password, firstName, lastName } = body;
    
        const newUser = await prisma.user.create({
            data: {
                userName,
                email, 
                password,
                firstName,
                lastName
            }
        })

        return NextResponse.json(newUser);

    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "POST Error", error}, {status:500})
    }
}