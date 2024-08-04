import {configureStore} from '@reduxjs/toolkit'
import ecomerceReducer from './ecomerceSlice'

export const store = configureStore({
   reducer:{
    ecomerce:ecomerceReducer
   }
})