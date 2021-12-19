import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: false
}

export const menuSlice = createSlice(
    {
        name: "menu",
        initialState,
        reducers: {
            setActive: (state, action) => {
                state.active = action.payload;
                console.log(action.payload)
            },
        },
    }
);

export const actionsMenu = menuSlice.actions;

export default menuSlice.reducer;