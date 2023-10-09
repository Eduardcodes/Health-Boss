"use client";

import { useEffect, useState } from 'react';

 const tokenComp = () => {

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
    }
  }, [token]);

  return (
    <div>
        <h1>tokenComp</h1>
    </div>
    
  );
}

export default tokenComp;

