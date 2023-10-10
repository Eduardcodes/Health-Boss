//url: http://localhost:3000/api/atoken

import { NextResponse } from "next/server"
import axios from "axios";


// export const Get = async () => {
//     try {
//         const token = localStorage.getItem('auth');
//         console.log(token)
        
//         return NextResponse.json(token);
        
//     } catch (error) {
//         console.log(error)
//         return NextResponse.json({message: "GET Error", error}, {status:500})
//     }
// }

// export default async function handler(request) {
//     console.log("token1111")
//     if (request.method === 'POST') {
//       try {
//         const { token } = request.body;
  
//         // You can now use the token in your middleware or perform any other server-side operations.
//         console.log('Received token:', token);
  
//         // Return an appropriate response
//         return NextResponse.json({ message: 'Token received successfully' });
//       } catch (error) {
//         console.error('Error handling token:', error);
//         return NextResponse.json({ message: 'Error handling token' }, { status: 500 });
//       }
//     }
  
//     return NextResponse.error('Invalid method', 405);
//   }

export const POST = async (request) => {
    //console.log(request, "request to the server")
    try {
        //const body = await request.json();
        const { token } = request.headers
        //console.log('Received token:');
        return NextResponse.json({ message: 'Token received successfully', token });
    } catch (error) {
        console.error('Error handling token:', error);
      return NextResponse.json({ message: 'Error handling token' }, { status: 500 });
    }
    // return NextResponse.error('Invalid method', 405);
}

