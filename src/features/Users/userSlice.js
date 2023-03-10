import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find(user => user.id === id);
      
      if(existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
      
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find(user => user.id === id);
      
      if(existingUser) {
        return state.filter(user => user.id !== id);
      }
    }
  }
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;