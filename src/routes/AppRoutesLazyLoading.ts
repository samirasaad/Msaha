import React from "react";

export const About = React.lazy(() => import("@/features/About"));
export const ContactUs = React.lazy(() => import("@/features/ContactUs"));
export const Home = React.lazy(() => import("@/features/Home"));
export const Users = React.lazy(() => import("@/features/Users/pages/Users"));
export const UserDetails = React.lazy(() => import("@/features/UserDetails"));
export const AdminContact = React.lazy(() => import("@/features/AdminContact"));
export const UserContact = React.lazy(() => import("@/features/UserContact"));
export const PageNotFound = React.lazy(() => import("@/features/PageNotFound"));
