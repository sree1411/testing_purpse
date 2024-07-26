import { createContext, useContext, useState } from "react"


const UserContext = createContext()

export const UserProvider = ({children})=>{

    const [count,setCount] = useState(0)  

    const incBtn =()=>{
        setCount(count + 1)
    }

    return(
         <>
           <UserContext.Provider value={{count,incBtn}} >
                {children}
           </UserContext.Provider>
         </>
    )
}

export const UserData = ()=>useContext(UserContext)