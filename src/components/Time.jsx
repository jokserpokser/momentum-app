import { useEffect, useState } from "react";
import React from 'react'

function Time() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        },1000)
    })
  return (
    <div>{time.toLocaleTimeString()}</div>
  )
}

export default Time