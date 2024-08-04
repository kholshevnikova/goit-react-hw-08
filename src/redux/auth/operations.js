import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global/';
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`  
}

export const register = createAsyncThunk('auth/register', async (newUser, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', newUser);
        // axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        setAuthHeader(response.data.token);
        return response.data;
 
    } catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
})

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', user);
        // axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
        setAuthHeader(response.data.token)
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        // axios.defaults.headers.common.Authorization = '';
        setAuthHeader('')
    } catch (error) {
       thunkAPI.rejectWithValue(error.message) 
    }
})

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    const token = reduxState.auth.token;
    setAuthHeader(token);

    const response = await axios.get('/users/current');
    return response.data;
}, {
    condition: (_, thunkAPI) => {
        const reduxState = thunkAPI.getState();
        return reduxState.auth.token !== null;
    }
})