import React, { useState,useEffect,useRef } from 'react'

const StateUpdate = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null); // Reference to store the interval ID

  // Function to start the counter
  const startCounter = () => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1); // Use functional update to prevent race conditions
    }, 1000);
  };

  // Function to reset the counter
  const resetCounter = () => {
    clearInterval(intervalRef.current); // Clear the interval
    setCount(0); // Reset the count
  };

  // Effect to start the counter on mount
  useEffect(() => {
    startCounter();

    return () => clearInterval(intervalRef.current); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
        <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Counter: {count}</h1>
      <button
        onClick={startCounter}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        Start
      </button>
      <button
        onClick={resetCounter}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        Reset
      </button>
    </div>

    </div>
  )
}

export default StateUpdate