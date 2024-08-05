import React from "react";

const ChildComponent = ({changeMessage}) => {

 const handleChange = (e)=>{
    changeMessage(e.target.value)
 }


  return (
    <>
      <div>
           <h1> child componente </h1>
        <input type="text"  onChange={handleChange} />  
      </div>
    </>
  );
};

export default ChildComponent;
