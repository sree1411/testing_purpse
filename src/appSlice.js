
import{createSlice} from  '@reduxjs/toolkit'


export const appSlice = createSlice({
     name:"ecom",
     initialState:{
        value:0
     },
     reducers:{
        add:(state,action)=>{
           state.value = state.value + 1
        },
        remove:(state,action)=>{
            state.value = state.value - 1
        }
     }
})

export const { add, remove}  = appSlice.actions
export default appSlice.reducer