import React from 'react'
import {UserProvider} from './UserContext'
import SampleComponent from './SampleComponent'

function App() {
  return (
    <div>
      <UserProvider>

      <h1> Sample to the application </h1> 
        <SampleComponent/>
      </UserProvider>
        
     
       
    </div>
  )
}

export default App