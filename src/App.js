import React, { useState } from 'react'
import SampleComponent from './SampleComponent'

function App() {

  const [name,setName] = useState("sree")


  return (
    <div>

      <h1> Pure component </h1> 
      <SampleComponent name={name}/>
      <button onClick={()=>setName("sreekanth renati")}  >  change name</button>
      <button onClick={()=>setName("sreekanth")}  >  change name</button>
      

       
    </div>
  )
}

export default App