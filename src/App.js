import React, { useState } from 'react'
import {marks} from './marks'

function App() {
  const [allquestions, setAllQuestions] = useState([...marks]);

    function calPerc(question){
     return Object.values(question["marks_obtained"]).reduce((a,b)=>a+b, 0)/5
    }


    function getClassName(question){
      var p = calPerc(question);
      if(p>=80){
        return "table-warning"
      }
      if(p>=70&& p<=79){
        return "table-info"
      }
    }
  
   

  return (
    <div>

      <h1> Sample to the applications </h1> 
        <table className='table border-2'>
           <thead>
             <tr>
               <th>  student Name </th>
               <th>  Maths </th>

               <th>  English </th>
               <th>  Science </th>
               <th>  Geography </th>
               <th>  History </th>
               <th>  percentage </th>


             </tr>
           </thead>
          <tbody>
            {
              allquestions.map((question)=>(
                    <tr className={getClassName(question)}>
                      <td> {question.name} </td>
                      <td> {question["marks_obtained"].Math} </td>
                      <td> {question["marks_obtained"].English} </td>
                      <td> {question["marks_obtained"].Science} </td>
                      <td> {question["marks_obtained"].Geography} </td>
                      <td> {question["marks_obtained"].History} </td>
                      <td>
                          {calPerc(question)}
                      </td>
 
                    </tr>
              ))
            }
          </tbody>
        </table>
       
    </div>
  )
}

export default App