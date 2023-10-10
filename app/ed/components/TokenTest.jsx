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
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        axios.post('/api/users/atoken', config);
        console.log("token send" , config)



      }
    }, [token]);

    return (
        <div>
          <h1>{token ?  'login': 'not login'}</h1>
        </div>
    )
}

export default TokenTest;