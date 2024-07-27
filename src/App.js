import React, { useState,useRef } from 'react'


function App() {

  const [count, setCount] = useState(0);
  const [isrunning, setIsRunning] = useState(false);
  const intervalRef = useRef()

  const startBtn =()=>{
     if(!isrunning){
       setIsRunning(true);
       intervalRef.current = setInterval(()=>{
         setCount((prev)=> prev + 1)
       },1000)
     }
  }

  const stopBtn =()=>{
    setIsRunning(false);
    clearInterval(intervalRef.current )
  }

  const resetBtn =()=>{
    setIsRunning(false);
    clearInterval(intervalRef.current )
    setCount(0)
  }


  return (
    <div>

      <h1> Timer Example :{count}</h1> 
       
      <button onClick={startBtn} > start </button>
      <button onClick={stopBtn}> stop</button>
      <button onClick={resetBtn}> reset </button>

       
    </div>
  )
}

export default App