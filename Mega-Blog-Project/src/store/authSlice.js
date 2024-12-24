import { createSlice } from "@reduxjs/toolkit";

//This defines the default state before any actions are dispatched.
const initialState = {
    status: false,
    userData: null
}


const authSlice = createSlice({
    name: 'auth',
    initialState,//Sets up the default state.
    reducers: {//Contains functions (login and logout) to modify the state.

        login: (state, action) => {//An object representing the event that triggered the reducer.
            state.status = true //Sets the user as logged in.
            state.userData = action.payload.userData  //Updates the user data.
        
        },
        logout: (state) => {//Here, the state argument holds the auth slice's current state
            state.status = false
            state.userData = null
        }
    }
});

export const {login, logout} = authSlice.actions
export default authSlice.reducer