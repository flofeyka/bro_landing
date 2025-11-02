import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

interface SendRequest {}
interface SendResponse {
  fullName: string;
  email: string;
  message: string;
  communicationWay: "WHATSAPP" | "TELEGRAM";
  communicationValue: string;
}

export const appApi = createApi({
  reducerPath: "AppApi",
  baseQuery,
  endpoints: (build) => ({
    sendRequest: build.mutation<SendResponse, SendRequest>({
      query: (body) => ({
        url: "/request",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSendRequestMutation } = appApi;
