import { apiSlice } from "./apiSlice";


export const authorSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createAuthor: builder.mutation({
            query: (data) => ({
                url: '/author/store',
                method: 'POST',
                body: data
            })
        }),
        getAllAuthor: builder.query({
            query: () => ({
                url: '/author/all',
                method: 'GET',
            })
        }),
        updateAuthor: builder.mutation({
            query: (data) => ({
                url: `/author/update/${data.id}`,
                method: 'POST',
                body: data.formData,
            })
        }),
        deleteAuthor: builder.mutation({
            query: (data) => ({
                url: `/author/delete/${data.id}`,
                method: 'POST',
            })
        }),
        
        
    })
})

export const { useCreateAuthorMutation, useGetAllAuthorQuery, useUpdateAuthorMutation , useDeleteAuthorMutation} = authorSlice

