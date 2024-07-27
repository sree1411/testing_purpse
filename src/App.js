import React from 'react'
import useCounter from './useCounter'

function App() {

 const {count, inc, dec} = useCounter()


  return (
    <div>

      <h1> customer hook example</h1> 
      <h1> {count}</h1>
       <button onClick={inc} > increment </button>
       <button onClick={dec} > decrement </button>

       
    </div>
  )
}

export default App