import { useState } from "react";


function useCounter( initialValue = 0){
  let [count, setCount] = useState(initialValue)
  const inc = ()=>setCount((prev) => prev + 1);
  const dec = ()=>setCount((prev) => prev >0 ? prev - 1 : prev);
  return {count, inc, dec}
}
export default useCounter