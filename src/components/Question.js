import React, { useEffect, useState } from 'react';

const Question = ({ onAnswered }) => {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeRemaining]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10); 
      onAnswered(false); 
    }
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <p>{timeRemaining > 0 ? `${timeRemaining} seconds remaining` : 'Time expired'}</p>
      
    </div>
  );
};

export default Question;
