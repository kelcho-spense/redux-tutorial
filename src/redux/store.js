import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";

// eslint-disable-next-line 

export default configureStore({
    reducer: {
        user: userReducer,
    },
    // reducer: {
    //   user: userReducer,
    //   post: postReducer,
    // },
}); // Export the store