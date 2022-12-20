import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: 1, name: "Aman", email: "aman@mail.com" },
    { id: 2, name: "Ram", email: "ram@mail.com" }

]


export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser:(state,action)=>{
            state.push(action.payload)
        },
        editUser:(state,action)=>{
            state.push(action.payload)

        },
        deleteUser:(state)=>{
            
        }
    }
})

export const { addUser, editUser, deleteUser } = userSlice.actions

export default userSlice.reducer