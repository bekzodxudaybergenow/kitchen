import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'users',
    initialState: {
        userList: []
    },
    reducers: {
        addUser: (state, actions) => {
            state.userList.push(actions.payload);
        }
    }
})

export const {addUser} = userSlice.actions
export default userSlice.reducer