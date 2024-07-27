import { createContext, useContext, useState } from "react"


const UserContext = createContext()

export const UserProvider = ({children})=>{

    const [count,setCount] = useState(0)  

    const incBtn =()=>{
        setCount(count + 1)
    }

    const [theme, setTheme] = useState("light")

    const toggleTheme = ()=>{
       setTheme(theme === 'light' ? "dark" :"light")
   }


    return(
         <>
           <UserContext.Provider value={{count,incBtn,toggleTheme, theme}} >
                {children}
           </UserContext.Provider>
         </>
    )
}

export const UserData = ()=>useContext(UserContext)