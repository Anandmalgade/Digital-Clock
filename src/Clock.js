import React, { useState } from 'react'
import "./index.css"
export default function Clock() {
  const curr=new Date().toLocaleTimeString();
  const [time,setTime]=useState(curr);
 const update=()=>
  {
    const curr=new Date().toLocaleTimeString();
    setTime(curr)
  }
  setInterval(() => {
          update()
  }, 1000);
  return (
    <div className='container'>
      <h1 className='text'>Digital Clock</h1>
       <h1 className='para'>{time}</h1>
    </div>
  )
}
