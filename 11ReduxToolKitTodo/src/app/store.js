import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})

//The Redux store is the central place where all application state is managed in a Redux-based application. It holds the state tree (a single source of truth) and provides methods for accessing, updating, and subscribing to changes in the state.

//Single Source of Truth(ek hi store honi chiye) => The store contains the entire application state as a single JavaScript object. This makes it easier to manage and debug the application's state.

//store k ander ek configureStore chiye jisse apka store configure hojata hai. aur iske ander ek object rahega.

//chnages should be made through pure functions, jisko hum reducers hi bolte hai