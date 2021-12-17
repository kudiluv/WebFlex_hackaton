import { createAsyncThunk } from "@reduxjs/toolkit";
import { userApi } from "../../api/user.api";

export const fetchAuth = createAsyncThunk(
    'auth/login',
    async (payload, {rejectWithValue}) => {
        try {
            return await userApi.authentication(payload);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchRegister = createAsyncThunk(
    'auth/register',
    async (payload, {rejectWithValue}) => {
        try {
            return await userApi.registration(payload);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);