import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "./baseQuery";

export interface LoginRequest {
    login: string;
    password: string;
}

export interface LoginResponse {
    token: string;
}

export interface VerifyRequest {
    token: string;
}

export interface VerifyResponse {
    valid: boolean;
}

export const authApi = createApi({
    reducerPath: "auth",
    baseQuery,
    endpoints: (build) => ({
        login: build.mutation<LoginResponse, LoginRequest>({
            query: ({ login, password }) => ({
                url: "/auth/login",
                method: "POST",
                body: { login, password },
            }),
        }),
        verify: build.mutation<VerifyResponse, VerifyRequest>({
            query: ({ token }) => ({
                url: "/auth/verify",
                method: "POST",
                body: { token },
            }),
        }),
    }),
});

export const { useLoginMutation, useVerifyMutation } = authApi;
