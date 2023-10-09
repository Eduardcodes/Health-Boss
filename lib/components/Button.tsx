import React from 'react';

// interface Content {
//   title: string;
// }

function Button({ title }: { title: React.ReactNode }) {
  return (
    <div>
      <button className="text-mainWhite text-base cursor-pointer border-2 border-mainGreen rounded-lg p-2">
        {title}
      </button>
    </div>
  );
}

export default Button;
