import type { User } from "@/features/Users/types/user.types";
import { baseApi } from "@/services/api/baseApi";

/*
- Why tagTypes exists
RTK Query needs a central list of all possible tags to validate cache
Without declaring tagTypes, you cannot use providesTags or invalidatesTags
Helps with type safety and auto-completion
-  Mental model
tagTypes = “what kinds of data do I have?”
providesTags = “this query gives me this kind of data”
invalidatesTags = “this mutation changes this kind of data, mark it stale”
💡 RTK Query automatically refetches stale queries
 */
export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      // When you fetch users → RTK Query stores response in cache
      // Cache is associated with tag "User"
      providesTags: ["User"], // tag this cache as "User"
      // Cache timeout (keepUnusedDataFor)
      // Default: 60 seconds
      // If no component is using the query for that long, RTK Query removes it from the store.
      // here if we need to increse it only for this query.
      keepUnusedDataFor: 300, // 5 minutes
    }),

    getUserById: builder.query<User, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),

    updateUser: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PUT",
        data: user,
      }),
      // When you update a user → RTK Query automatically refetches any query that provides "User"
      // You don’t need manual refetching or state updates
      // So, it will refetch getUsers query automatically as it has   providesTags: ["User"],
      invalidatesTags: ["User"], // tag tells RTK Query: this cache is stale
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useUpdateUserMutation } =
  usersApi;
