import React, {useRef, useEffect} from 'react'


function App() {

   const data = useRef()

  const handleSubmit = (e)=>{
       e.preventDefault()
  }

  useEffect(()=>{
    data.current.focus()
  },[])

  return (
    <div>

      <h1> useRef Example</h1> 
      <form onSubmit={handleSubmit}>
         <input type="text" ref={data}  />
         <input type='submit' />
      </form>
       
    </div>
  )
}

export default App