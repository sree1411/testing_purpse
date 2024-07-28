import React, { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage'

function App() {

  
  const [name, setName] = useLocalStorage('username', '')
  const [id, setId] = useLocalStorage('id', '')
 

  return (
    <div>

      <h1> Sample to the applicationsssssssssss </h1> 
       <h1>{name}</h1>
       <input type='text' value={name} onChange={(e)=>setName(e.target.value)}   />
       <input type='text' value={id} onChange={(e)=>setId(e.target.value)}   />
       
    </div>
  )
}

export default App