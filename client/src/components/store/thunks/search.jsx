import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/instance";

export const fetchSearch = createAsyncThunk(
    'student/search',
    async (payload, {rejectWithValue}) => {
        try {
            return await api.get(payload);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);