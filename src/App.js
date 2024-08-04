import React, { useRef } from 'react'
import ChildComponent from './ChildComponent'


function App() {

 
   const inputRef = useRef(null)


  return (
    <div>

      <h1> Sample to the applications </h1> 
      <ChildComponent ref={inputRef} />
      <button onClick={()=>inputRef.current.focus()} >  focus</button>
       
    </div>
  )
}

export default App