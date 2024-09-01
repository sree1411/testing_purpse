import React, { useState } from 'react'


function App() {
 

  const [users, setUser] = useState([]);
  const [newuser, setNewUser]= useState('');
  const [show, setShow] = useState(false);
  const [updateOne, setUpdateOne] = useState('')
  const [editIndex, setEditIndex]= useState(null)


  const handleChange = (e)=>{
     setNewUser(e.target.value)
  }
 
  const addUser = ()=>{
    setUser([...users, {name:newuser, status:false}]);
    setNewUser('')
  }


  const deleteBtn = (i)=>{
    var temp = [...users]
    temp.splice(i,1);
    setUser(temp)
  }


const editBtn =(user,i)=>{
   setShow(true);
   setUpdateOne(user);
   setEditIndex(i)
}


const updateUser = ()=>{
    var temp = [...users];
    temp[editIndex]= updateOne;
    setUser(temp)
    setShow(false);
    setEditIndex(null)
}

const doneBtn = (i)=>{
   var temp = [...users]
   temp[i].status = !temp[i].status;
   setUser(temp)
}

  return (
    <div>
 
       <h1> Form register</h1>

       {
        !show  && (<>      <input type='text' value={newuser} onChange={handleChange}  />
       <button onClick={addUser} >  Add User </button> </>)
       }
    
     {
        show && (<> <input type='text' value={updateOne.name} onChange={(e)=>setUpdateOne({...updateOne, name:e.target.value})}  />
       <button onClick={updateUser} >  Update User </button> </>)
     }
 


      {
        users.map((user,i)=>(
             <li>
                {user.name}
                <button onClick={()=>doneBtn(i)}> {user.status ? "done":"undo"} </button>
                <button onClick={()=>deleteBtn(i)}> delete </button>
                <button onClick={()=>editBtn(user,i)}> edit btn</button>
             </li>
        ))
      }




    </div>
  )
}

export default App