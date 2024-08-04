import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove} from "./ecomerceSlice";
import './App.css'

function App() {
  const total = useSelector((state) => state.ecomerce.total);
  const cartList = useSelector((state) => state.ecomerce.cartList);
  const dispatch = useDispatch();

  const items = [
    {
      id: 1,
      name: "Apple",
      price: 10,
    },
    {
      id: 2,
      name: "banana",
      price: 10,
    },
    {
      id: 3,
      name: "mango",
      price: 10,
    },
  ];


  const addToCart =(item)=>{
    dispatch(add(item))
     
  }  

  const removeFromCart =(item)=>{
    dispatch(remove(item))
    alert("hi")
     
  }  




  return (
    <div>
      <h1> single page shopping cart :{total} </h1>
      <h1> available items in the Home page </h1>
       {
        items.map((item,i)=>(
            <li> 
              {item.id} -Name :{item.name} -Price:{item.price}/- 
              <button onClick={()=>addToCart(item)} > Add to cart </button>
            </li>
        ))
       }

    <h1> available items in the cartList </h1>
       {
        cartList.map((item,i)=>(
            <li> 
              {item.id} -Name :{item.name} -Price:{item.price}/- 
              <button onClick={()=>removeFromCart(item.id)} > remove from the cart </button>
            </li>
        ))
       }
    </div>
  );
}

export default App;
