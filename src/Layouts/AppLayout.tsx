import Footer from "@/Layouts/components/Footer";
import Nav from "@/Layouts/components/Nav";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
