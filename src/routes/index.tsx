import AppLayout from "@/Layouts/AppLayout";
import AuthLayout from "@/Layouts/AuthLayout";
import {
  About,
  AdminContact,
  ContactUs,
  Home,
  PageNotFound,
  UserContact,
  UserDetails,
  Users,
} from "@/routes/AppRoutesLazyLoading";

import { Login } from "@/routes/AuthRoutesLazyLoading";
import { Suspense } from "react";
import { Route, Routes } from "react-router";

function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div className="loading-container">
          <p>Loading the page content...</p>
        </div>
      }
    >
      <Routes>
        {/*begin:: App routes */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="user/:id" element={<UserDetails />} />
          <Route path="contact" element={<ContactUs />}>
            <Route index path="admin" element={<AdminContact />} />
            <Route path="user" element={<UserContact />} />
          </Route>
        </Route>
        {/*end:: App routes */}

        {/*begin:: Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
        {/*end:: Auth routes */}

        {/* 404 Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
