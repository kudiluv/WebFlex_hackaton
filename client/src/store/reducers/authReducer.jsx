import { createSlice } from "@reduxjs/toolkit";
import { fetchAuth } from "../thunks/auth";

const initialState = {
    token: "",
    status: "",
    role: "",
    error: "",
}

export const authSlice = createSlice(
    {
        name: "auth",
        initialState,
        reducers: {
            setAuth: (state, action) => {
                state.token = action.payload;
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchAuth.pending,(state) => {
                state.status = "pending"
            })
            builder.addCase(fetchAuth.fulfilled,(state,action) => {
                state.status = "success";
                localStorage.setItem('accessToken', action.payload.accessToken);
                state.token = action.payload.accessToken;
            })
            builder.addCase(fetchAuth.rejected,(state,action) => {
                state.status = "fail";
                state.error = action.payload;
            })
        }
    }
);

export const actions = authSlice.actions;

export default authSlice.reducer;