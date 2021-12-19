import { createSlice } from "@reduxjs/toolkit";
import { fetchSearch } from "../thunks/search";

const initialState = {
    status: "",
    searchResults: {
        rows: [],
        pages: 0,
        count: 0
    },
    error: "",
}

export const searchSlice = createSlice(
    {
        name: "search",
        initialState,
        reducers: {
            setLectures: (state, action) => {
                state.searchResults = action.payload;
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchSearch.pending,(state) => {
                state.status = "pending"
            })
            builder.addCase(fetchSearch.fulfilled,(state,action) => {
                state.status = "success";
                state.searchResults = action.payload;
            })
            builder.addCase(fetchSearch.rejected,(state,action) => {
                state.status = "fail";
                state.error = action.payload;
            })
        }
    }
);

export const actions = searchSlice.actions;

export default searchSlice.reducer;