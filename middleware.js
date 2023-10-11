//front end milddle

import { NextRequest, NextResponse } from 'next/server'
import axios from "axios";
//import route from "/app/api/users/atoken/route.js";


// import http from "http"; // Import the Node.js HTTP module
// This function can be marked `async` if using `await` inside

export async function middleware(request) {

  console.log(request)


  
  // // const axiosInstance = axios.create({
  //   //   // Specify the HTTP adapter for Node.js
  //   //   httpAgent: new http.Agent(),
  //   // });
    
  //   try {

  //   //const res = await import("/app/api/users/atoken/route.js");
  //   //const response = await axiosInstance.get("/api/users/token");
  //   // const response = await axios.get("/api/users/token");
  //   console.log("here")
   
  //   //const response = await fetch("/api/users/token");
  //   //const response = await (await res.handler()).json()
  //   // const response = await fetch("/api/users/atoken", { cache: 'no-store'});
  //   if(!res.ok) {
  //     throw new Error("Failed to fetch data")
  //   }
  //   console.log("hi", response.json())
  // } catch (error) {
  //   console.log(error)
  // }
  
  // // const authHeader = request.headers['authorization']
  // // console.log(authHeader, "authHeader in middleware")

  // //redirect
  // return NextResponse.redirect(new URL('/ed', request.url))
  // //return NextResponse.rewrite(new URL('/ed', request.url))



}
 
// See "Matching Paths" below to learn more
export const config = {
  //matcher: '/api/:users*', 
  matcher: '/api/users', 
}



