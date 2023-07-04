import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",   // Name of the slice
    initialState: { // Initial state
        name: "kevin",
        email: "kevin@email.com",
    },
    reducers: { // Reducers - actions that change the state
        update: (state, action) => {    // state is the current state  and action is the payload    
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        remove: (state) => {
            state = null;
        },
        addHelloToName: (state, action) => {
            state.name = "Hello " + action.payload.name
        }
    },
});

export const { update, remove } = userSlice.actions;// Export the actions to be used in the components

export default userSlice.reducer; // Export the reducer to be used in the store