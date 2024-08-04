import React, { forwardRef, useImperativeHandle, useState } from "react";

const ChildComponent = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
 
   const increment = ()=>setCount(prev=> prev + 1)
   const decrement = ()=>setCount(prev=> prev - 1)

    
  useImperativeHandle(ref, ()=>(
    {increment,
    decrement}
  ))

  return(
       <>
          <h1> {count}</h1>
       </>
  )
});

export default ChildComponent;
