/* 1- ✅ This file defines a central API layer for your app.
 You do NOT put actual API endpoints here.
 You put shared configuration only.*/

// ----------------------------------------------------------------------------------------------------
/*
2- ✅  createApi comes from RTK Query and it:
Manages API this.state. (loading, error, data)
Handles caching
Handles deduplication
Handles re-fetching
Integrates automatically with Redux
So instead of manually doing:
-useEffect
-useState
-loading / error
-cache logic
RTK Query does all
*/

// ----------------------------------------------------------------------------------------------------
/*
3- ✅  axiosBaseQuery so that:

You can keep using Axios
You can reuse interceptors
You can handle auth tokens centrally
This gives you:
RTK Query power 
Axios flexibility ✅
 */

// ----------------------------------------------------------------------------------------------------
/*
4- ✅ reducerPath: "api"

This is the key in the Redux store where the API state will be stored.
Example:

state.api.queries
state.api.mutations
*/

// ----------------------------------------------------------------------------------------------------
/*
5- ✅ baseQuery

This keeps:

URLs consistent

Environment-based (dev / staging / prod)
*/

// ----------------------------------------------------------------------------------------------------
/*
6- ✅ tagTypes – cache invalidation system

Tags are used for automatic cache refresh.

Example:

Fetch users → tag as "User"

Update a user → invalidate "User"

RTK Query auto-refetches users

Without manual logic.

This is what makes RTK Query enterprise-grade
*/

// ----------------------------------------------------------------------------------------------------
/*
7- ✅ tagTypes – cache invalidation systemtagTypes is a list of labels for the types of cached data in your API slice.

*/

// ----------------------------------------------------------------------------------------------------
/*
8- ✅ endpoints: () => ({}) – why empty?
Because you will inject endpoints per feature later:

baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({...})
  })
})
*/

/**
 * Base API for the application
 */
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  // When you fetch users → RTK Query stores response in cache
  // Cache is associated with tag "User"
  tagTypes: ["User", "Auth"],
  keepUnusedDataFor: 600, // 10 minutes for all queries by default, can be overridden in each query,default 60 seconds
  endpoints: () => ({}),
});
