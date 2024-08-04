import {createSlice} from '@reduxjs/toolkit'


const ecomerceSlice = createSlice({
    name:"ecomerce",
    initialState:{
        cartList:[],
        total:0
    },
    reducers:{
        add:(state,action)=>{
          const updatedList = state.cartList.concat(action.payload);
          const  total = state.total + action.payload.price 
          return {...state, cartList:updatedList, total:total}
        },
        remove:(state,action)=>{
            const updatedList = state.cartList.filter((item)=> item.id !== action.payload);
            const removedItem = state.cartList.find((item)=> item.id === action.payload);

            const  total = state.total -(removedItem ? removedItem.price :0)
            return {...state, cartList:updatedList, total:total}
        }
        
    }
})

export const {add,remove} = ecomerceSlice.actions;

export default ecomerceSlice.reducer;