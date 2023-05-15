import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    first_name:'',
    last_name:'',
    email: '',
    password: '',
    role: '',
    _id: '',
}

const authSLice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        // user login
        builder.addCase(userLogin.pending, (state) => {

        })
        builder.addCase(userLogin.fulfilled, (state, action) => {
            console.log(action.payload.data);
            state.email = action.payload.data.email;
            state.password = action.payload.data.password;
            state.role = action.payload.data.role;
            state._id = action.payload.data._id;
            state.first_name= action.payload.data.first_name;
            state.last_name=action.payload.data.last_name;
            console.log(state);
            console.log({...state})
        })
        builder.addCase(userLogin.rejected, (state, action) => {
            console.log(action.payload);
        })

        // user signup
        builder.addCase(userSignup.pending, (state) => {

        })
        builder.addCase(userSignup.fulfilled, (state, action) => {
            state.email = action.payload.data.email;
            state.password = action.payload.data.password;
            state.role = action.payload.data.role;
            state._id = action.payload.data._id;
        })
        builder.addCase(userSignup.rejected, (state, action) => {
            console.log(action.payload);
        })

        builder.addCase(userChangeRole.pending, (state) => {

        })
        builder.addCase(userChangeRole.fulfilled, (state, action) => {
            console.log(action)
            state.role = action.payload.data.role;
        })
        builder.addCase(userChangeRole.rejected, (state, action) => {
            console.log(action.payload);
        })
    }
})

const userLogin = createAsyncThunk('auth/userLogin', async (userData, {rejectWithValue}) => {
    try {
        const response = await axios.post('http://localhost:8500/api/v1/aarhti/users/login', userData);

        return response.data;
    }
    catch(error) {
        return rejectWithValue(error.response.data)
    }
})

const userSignup = createAsyncThunk('auth/userSignup', async (userData, {rejectWithValue}) => {
    try {
        const response = await axios.post('http://localhost:8500/api/v1/aarhti/users/signup', userData);

        return response.data;
    }
    catch(error) {
        return rejectWithValue(error.response.data)
    }
})

const userChangeRole = createAsyncThunk('auth/userChangeRole', async (user_data, {rejectWithValue}) => {
    try {
        if (user_data.role=='Buyer'){
            const response = await axios.patch(`http://localhost:8500/api/v1/aarhti/users/${user_data.user_id}`,{'role':'Buyer'});
            return response.data;
        }
        else{
            const response = await axios.patch(`http://localhost:8500/api/v1/aarhti/users/${user_data.user_id}`,{'role':'Buyer'});
            return response.data;
        }
        
    }
    catch(error) {
        return rejectWithValue(error.response.data)
    }
})

export {
    userLogin,
    userSignup,
    userChangeRole  
}

export default authSLice;