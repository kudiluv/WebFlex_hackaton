import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: false
}

export const menuSlice = createSlice(
    {
        name: "auth",
        initialState,
        reducers: {
            setActive: (state, action) => {
                state.active = action.payload;
                console.log(action.payload)
            },
        },
    }
);

export const actions = menuSlice.actions;

export default menuSlice.reducer;