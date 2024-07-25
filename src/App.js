import React, {useState,useEffect} from 'react';



function App() {


  const [count,setCount] = useState(0);
  
  
  useEffect(()=>{
    //mounting 
    console.log("mounting")
    return ()=>{
      console.log("unmounting")
    }
  },[])
   

  useEffect(()=>{
    //updating
    console.log("updating")
  },[count])


  return (
    <div>

      <h1> Life cycle feature example: </h1> 
      <p> {count }</p>
      <button onClick={()=>setCount(count+1)} > inc </button>
       
    </div>
  )
}

  

function Parent(){

 const [show, setShow] = useState(true)

  return(
    <>
      <button onClick={()=>setShow(!show)} > {show ? "hide" :"un-hide"} </button>
      {
        show  && <App/>
      }
    </>
  )
}
export default Parent;


