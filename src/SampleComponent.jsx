
import React, { useMemo} from 'react'

function SampleComponent({a,b}){

  const memorized = useMemo(()=>{
      return a*b
  },[a,b])


    return(
        <>
          
           <p> memorized value = {memorized}</p>
        
        </>
    )
}
export default SampleComponent