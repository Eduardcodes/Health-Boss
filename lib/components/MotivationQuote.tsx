'use client';
import React, { useEffect, useState } from 'react';

function MotivationQuote() {
  const [quote, setQuote] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.quotable.io/random?maxLength=30')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex justify-center border-2 border-mainGreen rounded-lg p-2 text-center shadow-md">
      {isLoading ? <p>Loading...</p> : <p>{`"${quote.content}"`}</p>}
    </div>
  );
}

export default MotivationQuote;
