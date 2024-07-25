import React, { useState } from 'react'
import SampleComponent from './SampleComponent';


function App() {

 
const [color, setColor] = useState("green");


const changeColor = (newColor)=>{
  if(newColor.trim()=== ""){
     setColor("green")
  }else{
    setColor(newColor)
  }
  
}


  return (
    <div>

      <h1> Sample to the application </h1> 
      <div style={{backgroundColor:color, width:"100px", height:"100px"}}>

      </div>
       
       <SampleComponent changeColor={changeColor} />


    </div>
  )
}

export default App