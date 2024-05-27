import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    setCount(prevCount => Math.max(0, prevCount - 1));
  };

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded overflow-hidden">
      <button
        className="w-5 h-10 bg-gray-200 text-gray-700 flex justify-center items-center focus:outline-none"
        onClick={decrement}
      >
        -
      </button>
      <span
        className="w-5 h-10 flex justify-center items-center border-l border-r border-gray-300 bg-white"
      >
        {count}
      </span>
      <button
        className="w-5 h-10 bg-gray-200 text-gray-700 flex justify-center items-center focus:outline-none"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Counter;