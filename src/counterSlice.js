

import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
      name:"app",
      initialState:{
         value:0
      },
      reducers:{
        add:(state,action)=>{
             
            state.value = state.value + 1
        },
        remove:()=>{

        }
      }
})

export const {add, remove}  = counterSlice.actions

export default counterSlice.reducer