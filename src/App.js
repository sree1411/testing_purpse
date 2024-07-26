import React, { useState } from 'react';
import './App.css'


function App() {

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('')


  const handleChange =(e)=>{
     setNewUser(e.target.value)
  }

  const addDetails = ()=>{
    setUsers([...users, {name:newUser, status:false}]);
    setNewUser('')
  }

  const changStatus =(i)=>{
       var temp= [...users]
       temp[i].status = !temp[i].status;
       setUsers(temp)
  }

  const deletBtn =(i)=>{
    var temp= [...users]
    temp.splice(i,1);
    setUsers(temp)
}

  return (
    <div>

      <h1> Sample to the application </h1> 

       <input type='text' value={newUser} onChange={handleChange}  />
       <button onClick={addDetails} > Add details </button>

      {
        users.map((user,i)=>(
            <p className={user.status ? "mark":"unmark"} > 
              {user.name}
              <button onClick={()=>changStatus(i)} > {user.status ? "Undone":"Done"} </button>
              <button onClick={()=>deletBtn(i)} > delete </button>
            </p>
        ))
      }
       
    </div>
  )
}

export default App