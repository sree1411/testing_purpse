import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {add, remove} from './counterSlice'

function App() {


  const count = useSelector((state)=>state.app.value)
  const dispatch  = useDispatch()

  return (
    <div>

      <h1> redux basic application:{count} </h1> 
      <button onClick={()=>dispatch(add())} >   inc </button>
       
    </div>
  )
}

export default App