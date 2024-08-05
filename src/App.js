import  { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'


function App() {

   const [message, setMessage] = useState('')

   const changeMessage = useCallback( (childData)=>{
    setMessage(childData)
   },[])

  return (
    <div>

      <h1> usecallback with parent child communication </h1> 
      <h1>{message}</h1>

      <ChildComponent  changeMessage={changeMessage}   />
      
    </div>
  )
}

export default App