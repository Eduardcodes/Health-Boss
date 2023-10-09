"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

const TokenTest = () => {

    const [token, setToken] = useState('');

    useEffect(() => {
      const tokenFromLocalStorage = localStorage.getItem('auth');
      console.log(tokenFromLocalStorage)
      setToken(tokenFromLocalStorage);
    }, []);
  
    useEffect(() => {
      // Call your API function with the retrieved token here, once it's available
      if (token) {
        // Example: Call your Get function here with the token
        // Get(token);
        axios.post('/api/users/atoken', { token });
        console.log("token send")



      }
    }, [token]);

    return (
        <div>

            <h1>2</h1>
        </div>
    )
}

export default TokenTest;