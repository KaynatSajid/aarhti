import {configureStore} from '@reduxjs/toolkit'

// slices
import authSLice from './authSlice/authSlice';
// slices

const store = configureStore({
    reducer: {
        auth: authSLice.reducer
    }
})


export default store;