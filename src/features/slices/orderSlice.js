import { createSlice } from "@reduxjs/toolkit";



export const orderSlice = createSlice({
    name: 'counter',
    initialState: {
      value: []
    },
    reducers: {
        setOrder: (state, actions) => {
            if(state.value.length == 0){
                const currentList = [...state.value, actions.payload];
                state.value = currentList;
            }
            else {
                let current = [...state.value];
                let finded = current.find((item) => (item.client == actions.payload.client));
                
                if(finded) {
                    finded.orders = actions.payload.orders;
                    state.value = current;
                }
                else {
                    current.push(actions.payload);
                    state.value = current;
                }
            }
        },
        deleteOrder: (state, actions) => {
            let orderList = [...state.value];
            let  currentList = orderList.filter((item) => (item.client !== actions.payload.id))
            state.value = currentList;
        }
    }
})

export const {setOrder, deleteOrder} = orderSlice.actions;
export default orderSlice.reducer;


            