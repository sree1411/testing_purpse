import React from 'react';
import {UserData} from './UserContext'

const SampleComponent = () => {

  const {theme, toggleTheme  } = UserData();

  const style ={
      backgroundColor:theme ==="light"? "black":"white",
      minHeight:"98vh",
      color:theme ==="light"? "white":"black",
  }

  return (
      <>
       
       <div style={style}>
       <h1>{theme}</h1>
       <button onClick={toggleTheme}> {theme ==="light"? "light":"dark"} </button>
       </div>
      
      
      </>
  )
}

export default SampleComponent