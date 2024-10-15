import { useEffect, useState } from "react";
import React from 'react'

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let formattedHours = hours % 12 || 12; 
    let ampm = hours >= 12 ? 'PM' : 'AM';
    
    if (minutes < 10) {
      minutes = '0' + minutes; 
    }
    
    return `${formattedHours}:${minutes} ${ampm}`;
  };

  return (
    <div>{formatTime(time)}</div>
  );
}

export default Time