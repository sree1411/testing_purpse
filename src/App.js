import React from 'react'
 
import { UserData} from './UserContext';
import './App.css'

function App() {

  const { toggleTheme, theme} =  UserData()

  const style ={
     backgroundColor :theme === "light" ? "black" :"white",
     minHeight:"98vh",
     color:"red"
      
  }
  return (
    <div>

      <h1> UserContext Example </h1> 
      <button  onClick={toggleTheme}  > {theme === "light" ? "white" :"black"}</button>
      <div style={style}>
        
        theme :{theme} 
    
       
       </div>
       
       
    </div>
  )
}

export default App