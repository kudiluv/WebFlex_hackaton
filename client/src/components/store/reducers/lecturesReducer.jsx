import { createSlice } from "@reduxjs/toolkit";
import { fetchLectures } from "../thunks/lectures";

const initialState = {
    status: "",
    lectures: {
        rows: [],
        pages: 0,
        count: 0,
        lecture: {}
    },
    error: "",
}

export const lecturesSlice = createSlice(
    {
        name: "lectures",
        initialState,
        reducers: {
            setLectures: (state, action) => {
                state.lectures = action.payload;
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchLectures.pending,(state) => {
                state.status = "pending"
            })
            builder.addCase(fetchLectures.fulfilled,(state,action) => {
                state.status = "success";
                state.lectures = action.payload.data;
            })
            builder.addCase(fetchLectures.rejected,(state,action) => {
                state.status = "fail";
                state.error = action.payload;
            })
        }
    }
);

export const actions = lecturesSlice.actions;

export default lecturesSlice.reducer;