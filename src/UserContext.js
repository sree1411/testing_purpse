import {createContext, useState,useContext} from 'react';



const UserContext = createContext()

export const UserProvider =({children})=>{


    const [theme, setTheme] = useState("light");

    
    const toggleTheme =()=>{
        setTheme(theme === "light"?"dark":"light")
    }
    

    return(
         <>
          <UserContext.Provider value={{theme,toggleTheme }} >
             {children}
          </UserContext.Provider>
         </>
    )
}

export const UserData = ()=>useContext(UserContext)