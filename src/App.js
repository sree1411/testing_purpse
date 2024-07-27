import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {add, remove} from './appSlice'

function App() {

   const count = useSelector((state)=>state.ecom.value);

    const dispatch = useDispatch()

  return (
    <div>

      <h1> Sample to the applications:{count} </h1> 

       <button onClick={()=>dispatch(add())} >   addd </button>
       <button onClick={()=>dispatch(remove())} >   addd </button>

       
    </div>
  )
}

export default App