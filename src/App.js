import React, { useCallback, useState } from 'react'

function CounterComponent({onClick,label}){
    console.log(`${label}`)
   return <button onClick={onClick} > {label}  </button>
}


const MemorizedComponent = React.memo(CounterComponent)

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
       <MemorizedComponent onClick={incBtn} label="increment"   /> 
       <MemorizedComponent onClick={decBtn} label="decrement"   /> 
       <MemorizedComponent onClick={resetBtn} label="reset"   /> 
       
    </div>
  )
}

export default App