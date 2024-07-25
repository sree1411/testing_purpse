import React, { useState } from 'react'

const SampleComponent = ({changeColor}) => {

  const [newColor, setNewColor] = useState('')

  const handleChange =(e)=>{
     let inputValue = e.target.value;
     setNewColor(inputValue)
     changeColor(inputValue)
  }

  return (
      <>
      
        <input type="text" value={newColor} onChange={handleChange} placeholder='enter the color name' />
      
      </>
  )
}

export default SampleComponent