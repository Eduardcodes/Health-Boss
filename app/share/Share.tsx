import Image from 'next/image';
import React from 'react';

function shareStyle() {
  return (
    <div>
      <view></view>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <Image src="/logo.png" alt="company logo" height={150} width={250} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Checkout my exercises!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default shareStyle;
