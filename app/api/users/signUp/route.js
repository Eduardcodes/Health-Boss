//url: http://localhost:3000/api/signUp
//TODO fixed the objet assign to body, now only username, email and password

import prisma from "@/lib/components/prismadb";
import { NextResponse } from "next/server";

import { hash } from 'bcrypt';

export const POST = async (request) => {
  try {
    //TODO change to ts  const hashedPassword:string
    
    const body = await request.json();
    const { userName, email, password } = body;
    
    const hashedPassword = await hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        userName,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "POST Error", error }, { status: 500 });
  }
};
