import React from 'react'
import { useState, useEffect } from 'react';
import './Greetings.css'





export const Greetings = () => {
    let currTime = new Date().toLocaleTimeString();
    const showTime = new Date().toLocaleTimeString();
    const currentTime = new Date().getHours();
    const [Greet, SetGreetings] = useState();
    const [cTime, SetTime] = useState(currTime);
    const updateTime = ()=>{
        currTime = new Date().toLocaleTimeString();
        SetTime(currTime);
    }
    setInterval(updateTime, 1000)


    const getGreeting = () => {


if(currentTime < 12){
    SetGreetings("Good Morning!")
}
else if(currentTime < 6){
    SetGreetings("Good Afternoon!")
}
else {
    SetGreetings("Good Evening!")
}
    }
    useEffect(() => {
        getGreeting();
      }, [currentTime]);

  return (
    <div>
        <h1 className="">{showTime}</h1>
        <h2 className="greettext"><span>{Greet}</span></h2>
    </div>
  )
}
