import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "./baseQuery";

export enum Language {
    RU = 'RU', EN = 'EN',
}

export interface ResetTextRequest {
    language: Language;
    code: string;
}

export interface SuccessResponse {
    success: boolean;
}

export interface GetTextsRequest {
    search: string;
    page: number;
    limit: number;
}

interface UpdateTextRequest {
    code: string;
    value: string;
    language: Language;
}
interface GetTextsResponse {
    total: number;
    texts: Text[];
}


export interface Text {
    id: string;
    code: string;
    language: Language;
    value: string;
    source: 'original' | 'database';
}

export const textApi = createApi({
    reducerPath: "Text", baseQuery, endpoints: (build) => ({
        getTexts: build.query<GetTextsResponse, GetTextsRequest>({
            query: ({search, page = 1, limit = 10}: GetTextsRequest) => ({
                url: "/text", params: {
                    search, page, limit,
                }, method: "GET",
            }),
        }), updateText: build.mutation<Text, UpdateTextRequest>({
            query: ({code, value, language}: UpdateTextRequest) => ({
                url: '/text', body: {code, value, language}, method: 'POST'
            })
        }),
        resetText: build.mutation<SuccessResponse, ResetTextRequest>({
            query: ({language, code}: ResetTextRequest) => ({
                url: `/text/${language}/${code}`,
                method: 'DELETE'
            })
        }),
        getObjectText: build.query<any, undefined>({
            query: () => ({
                url: '/text/RU',
                method: 'GET'
            })
        })
    }),
});

export const {useGetTextsQuery, useUpdateTextMutation, useResetTextMutation} = textApi;
