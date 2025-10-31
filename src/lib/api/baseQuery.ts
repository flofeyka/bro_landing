import {fetchBaseQuery} from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({ baseUrl: import.meta.env.VITE_PUBLIC_API_URL });
