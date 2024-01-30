// App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showTwoPages, setShowTwoPages] = useState(false);

  const handleButtonClick = () => {
    setShowTwoPages(true);
  };

  return (
    <div className="app-container">
      {showTwoPages ? (
        // Display two-page layout
        <>
          <div className="left-section">
            {/* Content for the left section */}
            <h2>Left Section</h2>
            {/* Add your components/content for left section */}
          </div>
          <div className="right-section">
            {/* Content for the right section */}
            <h2>Right Section</h2>
            {/* Add your components/content for right section */}
          </div>
        </>
      ) : (
        // Display single-page layout with a button
        <div className="single-page">
          <h2>Single Page</h2>
          <button onClick={handleButtonClick}>Click to Split</button>
        </div>
      )}
    </div>
  );
};

export default App;
