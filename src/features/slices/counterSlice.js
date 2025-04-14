import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      count: 0
    },
    reducers: {
      increment: (state, actions) => {
        state.count += 1
        console.log(state.count);
        console.log(actions.payload);
      },
      // decrement: (state, actions) => {
      //   if(state.count > 0){
      //     state.count -= actions.payload
      //   }
      // },
    }
})

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;