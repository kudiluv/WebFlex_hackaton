import { createSlice } from "@reduxjs/toolkit";
import { fetchLecture } from "../thunks/lectures";

const initialState = {
    status: "",
    lecture: {
        lecture: {},
        documents:[]
    },
    error: "",
}

export const lectureSlice = createSlice(
    {
        name: "lecture",
        initialState,
        reducers: {
            setLecture: (state, action) => {
                state.lecture = action.payload;
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchLecture.pending,(state) => {
                state.status = "pending"
            })
            builder.addCase(fetchLecture.fulfilled,(state,action) => {
                state.status = "success";
                state.lecture = action.payload.data;
            })
            builder.addCase(fetchLecture.rejected,(state,action) => {
                state.status = "fail";
                state.error = action.payload;
            })
        }
    }
);

export const actions = lectureSlice.actions;

export default lectureSlice.reducer;