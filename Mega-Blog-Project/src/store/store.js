import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
    }
});

export default store;

//a store is a central object that holds the entire state of the application. It is responsible for managing the state and providing access to the current state. The store allows you to dispatch actions to modify the state and subscribe to changes to the state.
//configureStore: This is a helper function from Redux Toolkit to create the store.
//reducer: This is where you define how the state changes. In this example, the authReducer (which comes from your authSlice) is registered under the key auth. This means that the slice of state associated with auth will be managed by the authReducer.