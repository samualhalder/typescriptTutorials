import { createSlice } from "@reduxjs/toolkit";

export type counterType={
    count:number
}
const initialState:counterType={
   count:0
}

export const countSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        incriment:(state:counterType)=>{
            state.count++;
        },
        decriment:(state:counterType)=>{
            state.count--;
        },
        incrimentByValue:(state,action)=>{
            state.count+=action.payload
        }
    }
})

export const {incriment,decriment,incrimentByValue} =countSlice.actions
export default countSlice.reducer