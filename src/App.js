import React, { useState } from 'react';
import './App.css'


function App() {

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('')
  const [editIndex, setEditIndex] = useState(null)


  const handleChange =(e)=>{
     setNewUser(e.target.value)
  }

  const addDetails = ()=>{
 
    if(editIndex === null){
      setUsers([...users, {name:newUser, status:false}]);
    }else{
        const updatedUsers = users.map((user,index)=>
          index === editIndex ? {...user, name:newUser} :user
        )
        setUsers(updatedUsers);
        setEditIndex(null)

    }

    
    setNewUser('')
  }

  const changStatus =(i)=>{
       var temp= [...users]
       temp[i].status = !temp[i].status;
       setUsers(temp)
  }

  const editBtn =(i)=>{
  
    setNewUser(users[i].name);
    setEditIndex(i)
}

  return (
    <div>

      <h1> Sample to the application </h1> 

       <input type='text' value={newUser} onChange={handleChange}  />
       <button onClick={addDetails} > {editIndex === null ? "add": "update"} </button>

      {
        users.map((user,i)=>(
            <p className={user.status ? "mark":"unmark"} > 
              {user.name}
              <button onClick={()=>changStatus(i)} > {user.status ? "Undone":"Done"} </button>
              <button onClick={()=>editBtn(i)} > Edit </button>
            </p>
        ))
      }
       
    </div>
  )
}

export default App