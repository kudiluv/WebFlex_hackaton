import { createSlice } from "@reduxjs/toolkit";
import { fetchAuth } from "../thunks/auth";
import TokenService from "../../tokenService/TokenService";

const initialState = {
    token: "",
    status: "",
    data: {
        id: 0,
        email: "",
        name: "",
        role: "",
    },
    error: "",
}

export const authSlice = createSlice(
    {
        name: "auth",
        initialState,
        reducers: {
            setAuth: (state, action) => {
                state.token = action.payload;
                state.data = TokenService.decodeAccessToken(action.payload);
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchAuth.pending,(state) => {
                state.status = "pending"
            })
            builder.addCase(fetchAuth.fulfilled,(state,action) => {
                state.status = "success";
                localStorage.setItem('accessToken', action.payload.accessToken);
                localStorage.setItem('refreshToken', action.payload.refreshToken);
                state.data = TokenService.decodeAccessToken(action.payload.accessToken);
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