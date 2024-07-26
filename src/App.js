import React, { useEffect, useState } from 'react'
import './App.css'

function App() {


   const [users, setUsers] = useState([])

    const getUsers = async ()=>{
       try{
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        setUsers(data)
      
       }catch(error){
        console.log(error)
       }
    }

 
     useEffect(()=>{
      getUsers();
     },[])


  return (
    <div>

      <h1> Table of information of data </h1>
       <table>
          <thead>
              <tr>
                <th> Index</th>
                <th> Title</th>
                <th> Price</th>
                <th> Description </th>
                <th> Image </th>

              </tr>
          </thead>
          <tbody>
             {users.map((user,i)=>(
                 <tr key={i}>
                   <td>{i+1}</td>
                   <td> {user.title} </td>
                   <td> {user.price} </td>
                   <td> {user.description} </td>
                   <td>
                     <img src={user.image} alt={user.title} />
                   </td>
                 </tr>
             ))}
          </tbody>
       </table>




       
    </div>
  )
}

export default App