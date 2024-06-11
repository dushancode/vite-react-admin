import { apiSlice } from "./apiSlice";


export const categorySlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        categoryAllGet: builder.query({
            query: () => ({
                url: '/categories/main/all',
                method: 'GET',
            })
        }),
        subCategoryAllGet: builder.query({
            query: () => ({
                url: '/categories/sub/all',
                method: 'GET',
            })
        }),
        categoryCreate: builder.mutation({
            query: (data) => ({
                url: '/categories/main/store',
                method: 'POST',
                body: data
            })
        }),
       
        subCategoryCreate: builder.mutation({
            query: (data) => ({
                url: '/categories/sub/store',
                method: 'POST',
                body: data      
            })
        })
    })
})

export const { useCategoryAllGetQuery, useCategoryCreateMutation, useSubCategoryCreateMutation, useSubCategoryAllGetQuery } = categorySlice

