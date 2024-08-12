
import React, { useState } from 'react';


const datasets = [
  { number: 1, details: 'Details for item 1' },
  { number: 2, details: 'Details for item 2' },
  { number: 3, details: 'Details for item 3' },
  { number: 4, details: 'Details for item 4' },
  { number: 5, details: 'Details for item 5' },
];
function  Cards() {
  // State to track the current index of the dataset being displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler for the "Next" button
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % datasets.length);
  };

  // Handler for the "Previous" button
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + datasets.length) % datasets.length);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Flip Card */}
      <div className="relative w-[300px] h-[300px] perspective-1000 mb-4">
        <div className="relative w-full h-full text-center transition-transform duration-600 transform-style-preserve-3d shadow-lg hover:transform-rotate-y-180">
          <div className="absolute w-full h-full backface-hidden bg-gray-300 text-black flex items-center justify-center">
            {/* Display the current dataset number */}
            <span className="text-2xl">{datasets[currentIndex].number}</span>
          </div>
          <div className="absolute w-full h-full backface-hidden bg-blue-800 text-white transform-rotate-y-180 flex items-center justify-center">
            {/* You can display more details here */}
            <span className="text-lg">{datasets[currentIndex].details}</span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-4">
        <button 
          onClick={handlePrevious} 
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
        >
          Previous
        </button>
        <button 
          onClick={handleNext} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export {Cards};
