

import { NextRequest, NextResponse } from 'next/server'
import axios from "axios";
// import http from "http"; // Import the Node.js HTTP module
// This function can be marked `async` if using `await` inside

export async function middleware(request) {

  // const axiosInstance = axios.create({
  //   // Specify the HTTP adapter for Node.js
  //   httpAgent: new http.Agent(),
  // });

  try {
    //const response = await axiosInstance.get("/api/users/token");
    // const response = await axios.get("/api/users/token");
    console.log("here")
    const response = await fetch("/api/users/token");
    console.log("hi", response)
  } catch (error) {
    console.log(error)
  }
  
  // const authHeader = request.headers['authorization']
  // console.log(authHeader, "authHeader in middleware")

  //redirect
  return NextResponse.redirect(new URL('/ed', request.url))
  //return NextResponse.rewrite(new URL('/ed', request.url))



}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}



