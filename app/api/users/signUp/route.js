//url: http://localhost:3000/api/users/signUp
//TODO fixed the objet assign to body, now only username, email and password

import prisma from "@/lib/components/prismadb";
import { NextResponse } from "next/server";

import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken'

const secretKey = process.env.JWT_SECRET;

export const POST = async (request) => {
  console.log("post")
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

    const token = sign({id: newUser.id}, secretKey, { expiresIn: '1h'})
    // const data = NextResponse.json({newUser, token})
    // console.log(data,"data")

    //TODO should not send back password in response, use select

    
    //return NextResponse.json(newUser);
    return NextResponse.json(token);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "POST Error", error }, { status: 500 });
  }
};
