import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/instance";

export const fetchLectures = createAsyncThunk(
    'teacher/lecturesList',
    async (payload, {rejectWithValue}) => {
        try {
            return await api.get(payload);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchLecture = createAsyncThunk(
    'teacher/lecture',
    async (payload, {rejectWithValue}) => {
        try {
            return await api.get(payload);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);