import React from 'react'
import { UserData} from './UserContext'

const SampleComponent = () => {

    const { toggleTheme, theme} =  UserData()

     const style ={
        backgroundColor :theme === "light" ? "black" :"white",
        minHeight:"50vh"
     }



  return (
      <>
       <div style={style}>
        
        theme :{theme} 
    
       <button  onClick={toggleTheme}  > {theme === "light" ? "white" :"black"}</button>
       </div>
      </>
  )
}

export default SampleComponent