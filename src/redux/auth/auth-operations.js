import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/API/auth';

export const signup = createAsyncThunk(
    'auth/signup',
    async (data, { rejectWithValue })=> {
        try {
            const response = await api.signup(data);
            console.log('response', response)
            return response;
         }
        catch (error) {
            return rejectWithValue(error)
        }
    }
)