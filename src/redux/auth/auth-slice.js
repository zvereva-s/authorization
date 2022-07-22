import { createSlice } from "@reduxjs/toolkit";
import { signup } from "./auth-operations";
import * as utils from '../../shared/services/utils';

const initialState = {
    user: {},
    token: '',
    isLogin: false, 

    loading: false,
    error: null,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signup.pending]: utils.pending,
        [signup.rejected]: utils.rejected,
        [signup.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.error = null;
            store.token = payload.token;
            store.user = payload.user;
            store.isLogin = true;

        }
    }
})
export default authSlice.reducer;