import React, { useRef } from 'react'
import ChildComponent from './ChildComponent';


function App() {

    const inputRef = useRef();

     const incrementBtn = ()=>{
         inputRef.current.increment()
     }

  return (
    <div>

      <h1> Sample to the applications </h1> 
      <ChildComponent  ref={inputRef}  />
      <button onClick={incrementBtn} >  increment </button>
       
    </div>
  )
}

export default App