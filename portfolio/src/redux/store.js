import {configureStore} from `@reduxjs/toolkit`
import darkModeReducer from "../redux/feature/darkMode/darkModeSlice"

export const store = configureStore({
    darkModeReducer: darkModeReducer
})