import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"
import { fetchCount } from "./authAPI"

export interface CounterSliceState {
  value: number
  status: "idle" | "loading" | "failed"
}

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const counterSlice = createAppSlice({
  name: "counter",
 
  initialState,
 
  reducers: create => ({
    increment: create.reducer(state => {
     
      state.value += 1
    })
// }),
// extraReducers:(builder)=>{
//   builder.addCase(incrementAsync.pending,(state)=>{
//     state.status='loading'
//   }).addCase(incrementAsync.fulfilled,(state,action)=>{
//     state.status='idle';
//     state.value+=action.payload;
//   })
// }

})})
    // The function below is called a thunk and allows us to perform async logic. It
    // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
    // will call the thunk with the `dispatch` function as the first argument. Async
    // code can then be executed and other actions can be dispatched. Thunks are
    // typically used to make async requests.
    
// Action creators are generated for each case reducer function.
export const { increment} =
  counterSlice.actions

export const selectCount = (state)=>state.counter.value;

