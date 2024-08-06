import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = "http://localhost:5454/";

const baseQuery = fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const jobListingsApi = createApi({
    reducerPath: 'jobListingApi',
    baseQuery,
    endpoints: (builder) => ({
        createJobListing: builder.mutation({
            query: (formData) => ({
                url: '/jobListings/create',
                method: 'POST',
                body: formData,
            }),
        }),
        getJobListingById: builder.query({
            query: (id) => `/job-listings/${id}`,
        }),
        getJobListings: builder.query({
            query: () => '/job-listings',
        }),
        searchJobListings: builder.query({
            query: (keyword) => `/job-listings/search?keyword=${keyword}`,
        }),
    }),
});

export const {
    useCreateJobListingMutation,
    useGetJobListingByIdQuery,
    useGetJobListingsQuery,
    useSearchJobListingsQuery,
} = jobListingsApi;
