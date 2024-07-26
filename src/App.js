import React, { useCallback, useState } from 'react'


function App() {

  const [count, setCount] = useState(0);

  const incBtn = useCallback(()=>{
      setCount(prev => prev + 1)
  },[])

  const decBtn = useCallback(()=>{
    setCount(prev => prev >0 ? prev - 1 : prev)
    
},[])

const resetBtn = useCallback(()=>{
  setCount(0)
},[])


  return (
    <div>

      <h1> usecall back example </h1> 
      <p>  {count}</p>
       <button onClick={incBtn} >inc </button>
       <button onClick={decBtn} >dec </button>
       <button onClick={resetBtn} >reset </button>
       
    </div>
  )
}

export default App