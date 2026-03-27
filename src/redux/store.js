import {configureStore} from '@reduxjs/toolkit'
import darkModeReducer from "../redux/feature/darkMode/darkModeSlice"
import { loadState, saveState } from './utils';

const persistedState = loadState();

export const store = configureStore({
    reducer:{
        darkMode: darkModeReducer
    },
    preloadedState: persistedState
})

store.subscribe(() => {
    saveState({
        darkMode: store.getState().darkMode
    });
});