import React, { useReducer } from 'react'


const reducer =(state,action)=>{
   switch(action.type){
       case "INCREMENT":
        return {count:state.count + 1}
      case "DECREMENT":
        return {count:state.count - 1}
        default:
          return {state}
   }
}



const initialState = {count:0}


function App() {

 const [state,dispatch] = useReducer(reducer,initialState)


  return (
    <div>

      <h1> user reducer to the application </h1> 

      <p>  count :{state.count} </p>

      <button onClick={()=>dispatch({type:"INCREMENT"})} > INCREMENT </button>

       
    </div>
  )
}

export default App