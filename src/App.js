import React, { useState } from 'react'
import SampleComponent from './SampleComponent'

function App() {

  const [countA, setCountA] = useState(10)
  const [countB, setCountB] = useState(10)



  return (
    <div>

      <h1> usememo to the application </h1> 
      <p>  countA :{countA}</p>
      <p>  countA :{countB}</p>
      <button onClick={()=>{setCountA(countA + 5)}} > incby 5 </button>
      <button onClick={()=>{setCountB(countB + 10)}} > incby 10  </button>
       <SampleComponent  a={countA} b={countB}  />
    </div>
  )
}

export default App