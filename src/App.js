import React from 'react'
import {UserProvider} from './UserContext'
import SampleComponent from './SampleComponent'

function App() {
  return (
    <div>

      <h1> UserContext Example </h1> 
      <UserProvider>
         <SampleComponent/>
      </UserProvider>
       
    </div>
  )
}

export default App